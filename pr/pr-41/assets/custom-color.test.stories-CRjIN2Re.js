import{b as n}from"./iframe-Cwj_Xr1N.js";import"./cosmoz-badge-Bbz2oMaz.js";import"./preload-helper-PPVm8Dsz.js";const{expect:e,waitFor:d}=__STORYBOOK_MODULE_TEST__,p={title:"Tests/Custom color badge"},t=a=>a.shadowRoot.querySelector(".badge"),c={render:()=>n`
        <cosmoz-badge id="named" color="brand">Brand</cosmoz-badge>
        <cosmoz-badge id="plain">Plain</cosmoz-badge>
        <cosmoz-badge id="red" color="#ff0000" dot>Red</cosmoz-badge>
        <cosmoz-badge id="blue" color="rgb(0, 0, 255)">Blue</cosmoz-badge>
    `,play:async({canvasElement:a})=>{const o=r=>a.querySelector(`#${r}`);await d(()=>{const r=getComputedStyle(t(o("red"))),m=getComputedStyle(t(o("blue"))),l=getComputedStyle(t(o("plain")));e(r.backgroundColor).not.toBe(l.backgroundColor),e(r.backgroundColor).not.toBe(m.backgroundColor),e(r.color).not.toBe(l.color);const g=o("red").shadowRoot.querySelector(".dot");e(getComputedStyle(g).backgroundColor).toBe("rgb(255, 0, 0)"),e(t(o("named")).classList.contains("custom")).toBe(!1)})}},s={render:()=>n`<cosmoz-badge color="#ff0000">Badge</cosmoz-badge>`,play:async({canvasElement:a})=>{const o=a.querySelector("cosmoz-badge");await d(()=>e(t(o).style.getPropertyValue("--color")).toBe("#ff0000")),o.setAttribute("color","brand"),await d(()=>{e(t(o).classList.contains("custom")).toBe(!1),e(t(o).style.getPropertyValue("--color")).toBe("")})}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
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
}`,...c.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};const y=["CustomColor","SwitchToNamed"];export{c as CustomColor,s as SwitchToNamed,y as __namedExportsOrder,p as default};
