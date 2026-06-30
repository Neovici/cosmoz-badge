# FE-694: Migrate Repositories from semantic-release to changesets

**Linear Issue:** <https://linear.app/neovici/issue/FE-694>

## Remaining Repositories

- [ ] cosmoz-badge
- [ ] cosmoz-button
- [ ] cosmoz-drawer-layout
- [ ] cosmoz-dropdown
- [ ] cosmoz-filter-bar
- [ ] cosmoz-form
- [ ] cosmoz-image-viewer
- [ ] cosmoz-rating
- [ ] cosmoz-tooltip
- [ ] cosmoz-tree
- [ ] cosmoz-utils

## Completed Repositories (Reference)

- [x] cosmoz-bottom-bar (PR #398)
- [x] cosmoz-autocomplete (PR #257)
- [x] cosmoz-charts (PR #265)
- [x] cosmoz-component (PR #54)
- [x] cosmoz-datetime-input (PR #152)
- [x] cosmoz-dialog (PR #12)
- [x] cosmoz-icons (PR #77)
- [x] cosmoz-input (PR #307)
- [x] cosmoz-omnitable (PR #1030)
- [x] cosmoz-omnitable-treenode-column (PR #293)
- [x] cosmoz-queue (PR #44)
- [x] cosmoz-router (PR #275)
- [x] cosmoz-tabs (PR #277)
- [x] cosmoz-treenode-navigator (PR #223)

## Migration Steps

### 1. Clone and Prepare

```bash
cd /home/vasy/Projects/neovici
gh repo clone Neovici/<repo-name>
cd <repo-name>
```

### 2. Check for Playwright Dependency

If the repo uses `@playwright/test` AND `@vitest/browser-playwright`, add an npm override to pin playwright versions:

```bash
# Check if both are present
grep -E '"@playwright/test"|"@vitest/browser-playwright"' package.json
```

If both exist, add override to `package.json`:

```json
"overrides": {
 "conventional-changelog-conventionalcommits": ">= 8.0.0",
 "playwright": "1.60.0"
}
```

**Important:** Use exact version `1.60.0` (no caret ^) - this matches `@playwright/test` version.

### 3. Remove semantic-release Dependencies

From `package.json` devDependencies, remove:

- `semantic-release`
- `@semantic-release/changelog`
- `@semantic-release/git`
- Any other `@semantic-release/*` packages

### 4. Add changesets Dependencies

In `package.json` devDependencies, add:

```json
"@changesets/cli": "^2.27.0"
```

### 5. Add changeset Script

In `package.json` scripts, add:

```json
"changeset": "changeset"
```

### 6. Remove release Configuration

From `package.json`, remove the entire `release` configuration block (if present).

### 7. Create .changeset/config.json

```json
{
	"$schema": "https://unpkg.com/@changesets/config@3.0.0/schema.json",
	"access": "public",
	"baseBranch": "master"
}
```

**Important:** `baseBranch` must be `"master"` (not `"main"`) for Neovici repos.

### 8. Create Initial Changeset

Create `.changeset/migrate-to-changesets.md`:

```markdown
---
'@(scope/package-name)': patch
---

Migrate from semantic-release to changesets
```

Replace `@(scope/package-name)` with the actual package name from package.json.

### 9. Update CI Workflow

Replace `.github/workflows/ci.yml` (or equivalent) with:

```yaml
jobs:
  ci:
    uses: Neovici/cfg/.github/workflows/foundry.yml@master
```

Remove any existing `release` job if present.

### 10. Add .envrc (if not present)

```bash
use nix
```

### 11. Install and Verify

```bash
npm install
npm run lint
npm run build
npm test
```

### 12. Create Branch and PR

**Important:** Do NOT create multiple branches for fixes. Force push is disabled, so amend commits to the same branch.

```bash
git checkout -b feature/fe-694-migrate-to-changesets
git add -A
git commit -m "chore: migrate from semantic-release to changesets"
git push -u origin feature/fe-694-migrate-to-changesets
```

Create PR:

```bash
gh pr create --title "chore: migrate from semantic-release to changesets" --body "Migrate this repository from semantic-release to changesets as part of FE-694.

Changes:
- Remove semantic-release dependencies
- Add @changesets/cli
- Configure changesets with public access and master as baseBranch
- Update CI workflow to use Neovici/cfg/.github/workflows/foundry.yml@master
- Add initial changeset

This enables publishing with branch protection on master.

Relates to FE-694" --base master
```

### 13. Monitor CI

Wait for CI to pass. If there are failures:

1. **Playwright browser mismatch:** Add npm override for playwright (see step 2)
2. **Other failures:** Fix on the same branch, amend commit, push

### 14. After Merge

1. Update FE-694 checklist to mark the repo complete
2. Changesets will automatically create a "Version Packages" PR or publish to npm

## Key Constraints

1. **No force push** - Neovici repos have force push disabled. Fix issues on the same branch.
2. **baseBranch is master** - Not `main`. This is critical for changesets to work.
3. **Playwright version** - Use exact version `1.60.0`, not `^1.60.0` (caret causes version drift).
4. **Foundry workflow** - Use `Neovici/cfg/.github/workflows/foundry.yml@master` for CI.

## Troubleshooting

### Playwright Browser Version Mismatch

Error: `chromium_headless_shell-1228` not found but `chromium_headless_shell-1223` installed.

**Cause:** `@vitest/browser-playwright` has `playwright` as peer dependency, which resolves to a different version than `@playwright/test`.

**Fix:** Add npm override:

```json
"overrides": {
 "playwright": "1.60.0"
}
```

### CI Fails on "Create Release Pull Request or Publish"

This step only runs on `push` events (merge to master), not on PRs. The step showing as successful but not creating a release on a PR is expected behavior.

### Package Already at Latest Version

If `@changesets/cli` is already at the latest version, npm may show "up to date". Verify it's in devDependencies.

## Reference Files

See completed migrations for examples:

- <https://github.com/Neovici/cosmoz-dialog/pull/12/files>
- <https://github.com/Neovici/cosmoz-autocomplete/pull/257/files>
- <https://github.com/Neovici/cosmoz-input/pull/307/files>
