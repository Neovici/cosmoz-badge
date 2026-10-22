---
'@neovici/cosmoz-badge': patch
---

Badges are display elements: the `role="status"` live region on the badge root is removed. Announcements that relied on it should wrap the badge in a status region of their own (e.g. counters).
