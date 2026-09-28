import{b as g}from"./iframe-hH1j4ClE.js";import"./cosmoz-badge-Df2ZUkW5.js";import"./preload-helper-PPVm8Dsz.js";const{expect:e,waitFor:c}=__STORYBOOK_MODULE_TEST__,m={title:"Tests/Badge materials"},d={render:()=>g`<cosmoz-badge type="color" color="warning"
            >Needs approval</cosmoz-badge
        >`,play:async({canvasElement:r})=>{const o=r.querySelector("cosmoz-badge");await c(()=>e(o.shadowRoot?.querySelector(".badge")).toBeTruthy());const t=o.shadowRoot.querySelector(".badge"),a=o.shadowRoot.querySelector(".dot"),s=getComputedStyle(t).backgroundColor,l=getComputedStyle(t).color,n=getComputedStyle(t).borderRadius;e(getComputedStyle(a).display).toBe("none"),e(getComputedStyle(t).backgroundImage).toBe("none"),o.style.cssText="--cz-badge-sheen: linear-gradient(white, transparent); --cz-badge-radius: 999px; --cz-badge-dot-display: block; --cz-status-dot-sheen: radial-gradient(white, transparent);",e(getComputedStyle(t).backgroundImage).toContain("linear-gradient"),e(getComputedStyle(t).backgroundColor).toBe(s),e(getComputedStyle(t).color).toBe(l),e(getComputedStyle(t).borderRadius).toBe("999px"),e(getComputedStyle(a).display).toBe("block"),e(getComputedStyle(a).backgroundImage).toContain("radial-gradient"),o.removeAttribute("style"),e(getComputedStyle(t).backgroundImage).toBe("none"),e(getComputedStyle(t).borderRadius).toBe(n),e(getComputedStyle(a).display).toBe("none")}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => html\`<cosmoz-badge type="color" color="warning"
            >Needs approval</cosmoz-badge
        >\`,
  play: async ({
    canvasElement
  }) => {
    const host = canvasElement.querySelector<HTMLElement>('cosmoz-badge')!;
    await waitFor(() => expect(host.shadowRoot?.querySelector('.badge')).toBeTruthy());
    const badge = host.shadowRoot!.querySelector('.badge')!;
    const dot = host.shadowRoot!.querySelector('.dot')!;
    const fill = getComputedStyle(badge).backgroundColor;
    const text = getComputedStyle(badge).color;
    const radius = getComputedStyle(badge).borderRadius;
    expect(getComputedStyle(dot).display).toBe('none');
    expect(getComputedStyle(badge).backgroundImage).toBe('none');
    host.style.cssText = '--cz-badge-sheen: linear-gradient(white, transparent); --cz-badge-radius: 999px; --cz-badge-dot-display: block; --cz-status-dot-sheen: radial-gradient(white, transparent);';
    expect(getComputedStyle(badge).backgroundImage).toContain('linear-gradient');
    expect(getComputedStyle(badge).backgroundColor).toBe(fill);
    expect(getComputedStyle(badge).color).toBe(text);
    expect(getComputedStyle(badge).borderRadius).toBe('999px');
    expect(getComputedStyle(dot).display).toBe('block');
    expect(getComputedStyle(dot).backgroundImage).toContain('radial-gradient');
    host.removeAttribute('style');
    expect(getComputedStyle(badge).backgroundImage).toBe('none');
    expect(getComputedStyle(badge).borderRadius).toBe(radius);
    expect(getComputedStyle(dot).display).toBe('none');
  }
}`,...d.parameters?.docs?.source}}};const y=["OptionalMaterial"];export{d as OptionalMaterial,y as __namedExportsOrder,m as default};
