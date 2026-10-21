import{b as r}from"./iframe-yClQ41RU.js";import"./cosmoz-badge-CipmQa2t.js";import"./preload-helper-PPVm8Dsz.js";const{expect:e,waitFor:g}=__STORYBOOK_MODULE_TEST__,h={title:"Tests/Compact badge"},o={render:()=>r`
        <div style="--cz-text-2xs: .6875rem; --cz-text-2xs-line-height: 1.5">
            ${["pill","color","modern"].map(t=>r`
                    <cosmoz-badge size="xs" type=${t}>1 409 166</cosmoz-badge>
                    <cosmoz-badge size="xs" type=${t} dot>1 409 166</cosmoz-badge>
                `)}
            <cosmoz-badge size="sm">1 409 166</cosmoz-badge>
        </div>
    `,play:async({canvasElement:t})=>{await g(()=>{const s=t.querySelectorAll('cosmoz-badge[size="xs"]');e(s.length).toBe(6);for(const a of s){const n=a.shadowRoot.querySelector(".badge"),d=a.shadowRoot.querySelector(".content"),l=getComputedStyle(n);e(n.getBoundingClientRect().height).toBe(20),e(l.fontSize).toBe("11px"),e(l.fontWeight).toBe("400"),e(d.scrollWidth).toBeLessThanOrEqual(d.clientWidth)}const c=t.querySelector('cosmoz-badge[size="sm"]').shadowRoot.querySelector(".badge");e(getComputedStyle(c).fontSize).toBe("12px"),e(c.getBoundingClientRect().height).toBe(24)})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => html\`
        <div style="--cz-text-2xs: .6875rem; --cz-text-2xs-line-height: 1.5">
            \${['pill', 'color', 'modern'].map(type => html\`
                    <cosmoz-badge size="xs" type=\${type}>1 409 166</cosmoz-badge>
                    <cosmoz-badge size="xs" type=\${type} dot>1 409 166</cosmoz-badge>
                \`)}
            <cosmoz-badge size="sm">1 409 166</cosmoz-badge>
        </div>
    \`,
  play: async ({
    canvasElement
  }) => {
    await waitFor(() => {
      const badges = canvasElement.querySelectorAll('cosmoz-badge[size="xs"]');
      expect(badges.length).toBe(6);
      for (const host of badges) {
        const badge = host.shadowRoot!.querySelector<HTMLElement>('.badge')!;
        const content = host.shadowRoot!.querySelector<HTMLElement>('.content')!;
        const style = getComputedStyle(badge);
        expect(badge.getBoundingClientRect().height).toBe(20);
        expect(style.fontSize).toBe('11px');
        expect(style.fontWeight).toBe('400');
        expect(content.scrollWidth).toBeLessThanOrEqual(content.clientWidth);
      }
      const small = canvasElement.querySelector('cosmoz-badge[size="sm"]')!;
      const badge = small.shadowRoot!.querySelector<HTMLElement>('.badge')!;
      expect(getComputedStyle(badge).fontSize).toBe('12px');
      expect(badge.getBoundingClientRect().height).toBe(24);
    });
  }
}`,...o.parameters?.docs?.source}}};const z=["Counters"];export{o as Counters,z as __namedExportsOrder,h as default};
