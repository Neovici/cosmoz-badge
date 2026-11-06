import{b as g}from"./iframe-lup-5wst.js";import"./cosmoz-badge-Bk8X_uKe.js";import"./preload-helper-PPVm8Dsz.js";const{expect:e,waitFor:c}=__STORYBOOK_MODULE_TEST__,z={title:"Tests/Custom color badge"},a=r=>r.shadowRoot.querySelector(".badge"),s={render:()=>g`
        <cosmoz-badge id="named" color="brand">Brand</cosmoz-badge>
        <cosmoz-badge id="plain">Plain</cosmoz-badge>
        <cosmoz-badge id="red" color="#ff0000" dot>Red</cosmoz-badge>
        <cosmoz-badge id="blue" color="rgb(0, 0, 255)">Blue</cosmoz-badge>
    `,play:async({canvasElement:r})=>{const o=t=>r.querySelector(`#${t}`);await c(()=>{const t=getComputedStyle(a(o("red"))),b=getComputedStyle(a(o("blue"))),m=getComputedStyle(a(o("plain")));e(t.backgroundColor).not.toBe(m.backgroundColor),e(t.backgroundColor).not.toBe(b.backgroundColor),e(t.color).not.toBe(m.color);const u=o("red").shadowRoot.querySelector(".dot");e(getComputedStyle(u).backgroundColor).toBe("rgb(255, 0, 0)"),e(a(o("named")).classList.contains("custom")).toBe(!1)})}},n={render:()=>g`<cosmoz-badge color="#ff0000">Badge</cosmoz-badge>`,play:async({canvasElement:r})=>{const o=r.querySelector("cosmoz-badge");await c(()=>e(a(o).style.getPropertyValue("--color")).toBe("#ff0000")),o.setAttribute("color","brand"),await c(()=>{e(a(o).classList.contains("custom")).toBe(!1),e(a(o).style.getPropertyValue("--color")).toBe("")})}},d={render:()=>g`
        <cosmoz-badge id="plain">Plain</cosmoz-badge>
        <cosmoz-badge id="unknown" color="primary">Unknown</cosmoz-badge>
    `,play:async({canvasElement:r})=>{const o=t=>r.querySelector(`#${t}`);await c(()=>{const t=a(o("unknown"));e(t.classList.contains("custom")).toBe(!1),e(getComputedStyle(t).backgroundColor).toBe(getComputedStyle(a(o("plain"))).backgroundColor)})}},l={render:()=>g`<cosmoz-badge
            color="#ff0000"
            style="--cosmoz-badge-bg-color: rgb(0, 128, 0)"
            >Badge</cosmoz-badge
        >`,play:async({canvasElement:r})=>{const o=r.querySelector("cosmoz-badge");await c(()=>e(getComputedStyle(a(o)).backgroundColor).toBe("rgb(0, 128, 0)"))}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => html\`
        <cosmoz-badge id="named" color="brand">Brand</cosmoz-badge>
        <cosmoz-badge id="plain">Plain</cosmoz-badge>
        <cosmoz-badge id="red" color="#ff0000" dot>Red</cosmoz-badge>
        <cosmoz-badge id="blue" color="rgb(0, 0, 255)">Blue</cosmoz-badge>
    \`,
  play: async ({
    canvasElement
  }) => {
    const $ = (id: string) => canvasElement.querySelector(\`#\${id}\`)!;
    await waitFor(() => {
      const red = getComputedStyle(badgeOf($('red')));
      const blue = getComputedStyle(badgeOf($('blue')));
      const plain = getComputedStyle(badgeOf($('plain')));
      expect(red.backgroundColor).not.toBe(plain.backgroundColor);
      expect(red.backgroundColor).not.toBe(blue.backgroundColor);
      expect(red.color).not.toBe(plain.color);
      const dot = $('red').shadowRoot!.querySelector<HTMLElement>('.dot')!;
      expect(getComputedStyle(dot).backgroundColor).toBe('rgb(255, 0, 0)');
      expect(badgeOf($('named')).classList.contains('custom')).toBe(false);
    });
  }
}`,...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: () => html\`<cosmoz-badge color="#ff0000">Badge</cosmoz-badge>\`,
  play: async ({
    canvasElement
  }) => {
    const host = canvasElement.querySelector('cosmoz-badge')!;
    await waitFor(() => expect(badgeOf(host).style.getPropertyValue('--color')).toBe('#ff0000'));
    host.setAttribute('color', 'brand');
    await waitFor(() => {
      expect(badgeOf(host).classList.contains('custom')).toBe(false);
      expect(badgeOf(host).style.getPropertyValue('--color')).toBe('');
    });
  }
}`,...n.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => html\`
        <cosmoz-badge id="plain">Plain</cosmoz-badge>
        <cosmoz-badge id="unknown" color="primary">Unknown</cosmoz-badge>
    \`,
  play: async ({
    canvasElement
  }) => {
    const $ = (id: string) => canvasElement.querySelector(\`#\${id}\`)!;
    await waitFor(() => {
      const unknown = badgeOf($('unknown'));
      expect(unknown.classList.contains('custom')).toBe(false);
      expect(getComputedStyle(unknown).backgroundColor).toBe(getComputedStyle(badgeOf($('plain'))).backgroundColor);
    });
  }
}`,...d.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => html\`<cosmoz-badge
            color="#ff0000"
            style="--cosmoz-badge-bg-color: rgb(0, 128, 0)"
            >Badge</cosmoz-badge
        >\`,
  play: async ({
    canvasElement
  }) => {
    const host = canvasElement.querySelector('cosmoz-badge')!;
    await waitFor(() => expect(getComputedStyle(badgeOf(host)).backgroundColor).toBe('rgb(0, 128, 0)'));
  }
}`,...l.parameters?.docs?.source}}};const C=["CustomColor","SwitchToNamed","UnknownColorFallsBack","OverridesWin"];export{s as CustomColor,l as OverridesWin,n as SwitchToNamed,d as UnknownColorFallsBack,C as __namedExportsOrder,z as default};
