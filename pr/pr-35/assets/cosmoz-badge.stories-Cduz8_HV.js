import{A as $,b as r,w as h}from"./iframe-hH1j4ClE.js";import"./cosmoz-badge-Df2ZUkW5.js";import"./preload-helper-PPVm8Dsz.js";const n=e=>e??$;function w(e,c,d){return e?c(e):d?.(e)}const o=({slot:e,title:c,className:d,width:t="24",height:i="24",styles:l}={})=>r`
  <svg
    slot=${n(e)}
    class=${`arrow-right-icon ${d??""}`}
    viewBox="0 0 24 24"
    preserveAspectRatio="xMidYMid meet"
    focusable="false"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    width=${t}
    height=${i}
    style=${n(l)}
  >
    ${w(c,()=>h`<title>${c}</title>`)}
    <path d="M5 12h14m0 0-7-7m7 7-7 7" />
  </svg>
`,s=({slot:e,title:c,className:d,width:t="24",height:i="24",styles:l}={})=>r`
  <svg
    slot=${n(e)}
    class=${`arrow-up-icon ${d??""}`}
    viewBox="0 0 24 24"
    preserveAspectRatio="xMidYMid meet"
    focusable="false"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    width=${t}
    height=${i}
    style=${n(l)}
  >
    ${w(c,()=>h`<title>${c}</title>`)}
    <path d="M12 19V5m0 0-7 7m7-7 7 7" />
  </svg>
`,a=({slot:e,title:c,className:d,width:t="24",height:i="24",styles:l}={})=>r`
  <svg
    slot=${n(e)}
    class=${`plus-icon ${d??""}`}
    viewBox="0 0 24 24"
    preserveAspectRatio="xMidYMid meet"
    focusable="false"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    width=${t}
    height=${i}
    style=${n(l)}
  >
    ${w(c,()=>h`<title>${c}</title>`)}
    <path d="M12 5v14m-7-7h14" />
  </svg>
`,P={title:"Cosmoz Badge",component:"cosmoz-badge",tags:["autodocs"],argTypes:{type:{control:"select",options:["pill","color","modern","icon"],description:"Badge type variant",table:{defaultValue:{summary:"pill"}}},color:{control:"select",options:["gray","brand","error","warning","success"],description:"Badge color scheme",table:{defaultValue:{summary:"gray"}}},size:{control:"select",options:["sm","md","lg"],description:"Badge size",table:{defaultValue:{summary:"md"}}},dot:{control:"boolean",description:"Show dot indicator",table:{defaultValue:{summary:"false"}}},label:{control:"text",description:"Badge label text"}}},x=e=>r`
    <cosmoz-badge
        type=${e.type||"pill"}
        color=${e.color||"gray"}
        size=${e.size||"md"}
        ?dot=${e.dot}
    >
        ${e.label||"Badge"}
    </cosmoz-badge>
`,g={args:{type:"pill",color:"gray",size:"md",label:"Label",dot:!1},render:x},m={render:()=>r`
        <div class="story-row">
            <cosmoz-badge>Default</cosmoz-badge>
            <cosmoz-badge color="brand">Brand</cosmoz-badge>
            <cosmoz-badge color="error">Error</cosmoz-badge>
            <cosmoz-badge color="warning">Warning</cosmoz-badge>
            <cosmoz-badge color="success">Success</cosmoz-badge>
            <cosmoz-badge color="processing">Processing</cosmoz-badge>
        </div>
    `,parameters:{docs:{description:{story:"All available color variants for the badge."}}}},b={render:()=>r`
        <div class="story-row">
            <cosmoz-badge>Gray</cosmoz-badge>
            <cosmoz-badge type="color" color="brand">Color</cosmoz-badge>
            <cosmoz-badge type="modern">Modern</cosmoz-badge>
        </div>
    `,parameters:{docs:{description:{story:"The three badge types: pill (rounded), badge (square corners), and modern (shadow + neutral colors)."}}}},z={render:()=>r`
        <div class="story-row">
            <cosmoz-badge size="sm" color="brand">Small</cosmoz-badge>
            <cosmoz-badge size="md" color="brand">Medium</cosmoz-badge>
            <cosmoz-badge size="lg" color="brand">Large</cosmoz-badge>
        </div>
    `,parameters:{docs:{description:{story:"Badge sizes: sm, md, and lg."}}}},p={render:()=>r`
        <div class="story-stack">
            <div>
                <h1 class="story-section-title">Pill</h1>
                <div class="story-row">
                    <cosmoz-badge dot>Gray</cosmoz-badge>
                    <cosmoz-badge dot color="brand">Brand</cosmoz-badge>
                    <cosmoz-badge dot color="error">Error</cosmoz-badge>
                    <cosmoz-badge dot color="warning">Warning</cosmoz-badge>
                    <cosmoz-badge dot color="success">Success</cosmoz-badge>
                    <cosmoz-badge dot color="processing">Processing</cosmoz-badge>
                </div>
            </div>
            <div>
                <h1 class="story-section-title">Color</h1>
                <div class="story-row">
                    <cosmoz-badge dot type="color">Gray</cosmoz-badge>
                    <cosmoz-badge dot type="color" color="brand">Brand</cosmoz-badge>
                    <cosmoz-badge dot type="color" color="error">Error</cosmoz-badge>
                    <cosmoz-badge dot type="color" color="warning">Warning</cosmoz-badge>
                    <cosmoz-badge dot type="color" color="success">Success</cosmoz-badge>
                    <cosmoz-badge dot type="color" color="processing"
                        >Processing</cosmoz-badge
                    >
                </div>
            </div>
            <div>
                <h1 class="story-section-title">Modern</h1>
                <div class="story-row">
                    <cosmoz-badge dot type="modern">Gray</cosmoz-badge>
                    <cosmoz-badge dot type="modern" color="brand">Brand</cosmoz-badge>
                    <cosmoz-badge dot type="modern" color="error">Error</cosmoz-badge>
                    <cosmoz-badge dot type="modern" color="warning">Warning</cosmoz-badge>
                    <cosmoz-badge dot type="modern" color="success">Success</cosmoz-badge>
                    <cosmoz-badge dot type="modern" color="processing"
                        >Processing</cosmoz-badge
                    >
                </div>
            </div>
        </div>
    `,parameters:{docs:{description:{story:"Badge with a colored dot indicator. The dot color follows the badge color scheme."}}}},y={render:()=>r`
        <div class="story-stack">
            <div>
                <h1 class="story-section-title">Pill</h1>
                <div class="story-row">
                    <cosmoz-badge>
                        ${s({slot:"prefix"})} Default
                    </cosmoz-badge>
                    <cosmoz-badge color="brand">
                        ${s({slot:"prefix"})} Brand
                    </cosmoz-badge>
                    <cosmoz-badge color="error">
                        ${s({slot:"prefix"})} Error
                    </cosmoz-badge>
                    <cosmoz-badge color="warning">
                        ${s({slot:"prefix"})} Warning
                    </cosmoz-badge>
                    <cosmoz-badge color="success">
                        ${s({slot:"prefix"})} Success
                    </cosmoz-badge>
                    <cosmoz-badge color="processing">
                        ${s({slot:"prefix"})} Processing
                    </cosmoz-badge>
                </div>
            </div>
            <div>
                <h1 class="story-section-title">Color</h1>
                <div class="story-row">
                    <cosmoz-badge type="color">
                        ${s({slot:"prefix"})} Default
                    </cosmoz-badge>
                    <cosmoz-badge type="color" color="brand">
                        ${s({slot:"prefix"})} Brand
                    </cosmoz-badge>
                    <cosmoz-badge type="color" color="error">
                        ${s({slot:"prefix"})} Error
                    </cosmoz-badge>
                    <cosmoz-badge type="color" color="warning">
                        ${s({slot:"prefix"})} Warning
                    </cosmoz-badge>
                    <cosmoz-badge type="color" color="success">
                        ${s({slot:"prefix"})} Success
                    </cosmoz-badge>
                    <cosmoz-badge type="color" color="processing">
                        ${s({slot:"prefix"})} Processing
                    </cosmoz-badge>
                </div>
            </div>
            <div>
                <h1 class="story-section-title">Modern</h1>
                <div class="story-row">
                    <cosmoz-badge type="modern">
                        ${s({slot:"prefix"})} Default
                    </cosmoz-badge>
                    <cosmoz-badge type="modern" color="brand">
                        ${s({slot:"prefix"})} Brand
                    </cosmoz-badge>
                    <cosmoz-badge type="modern" color="error">
                        ${s({slot:"prefix"})} Error
                    </cosmoz-badge>
                    <cosmoz-badge type="modern" color="warning">
                        ${s({slot:"prefix"})} Warning
                    </cosmoz-badge>
                    <cosmoz-badge type="modern" color="success">
                        ${s({slot:"prefix"})} Success
                    </cosmoz-badge>
                    <cosmoz-badge type="modern" color="processing">
                        ${s({slot:"prefix"})} Processing
                    </cosmoz-badge>
                </div>
            </div>
        </div>
    `,parameters:{docs:{description:{story:'Badge with a leading (prefix) icon. Place an SVG with slot="prefix".'}}}},u={render:()=>r`
        <div class="story-stack">
            <div>
                <h1 class="story-section-title">Pill</h1>
                <div class="story-row">
                    <cosmoz-badge>
                        Default ${o({slot:"suffix"})}
                    </cosmoz-badge>
                    <cosmoz-badge color="brand">
                        Brand ${o({slot:"suffix"})}
                    </cosmoz-badge>
                    <cosmoz-badge color="error">
                        Error ${o({slot:"suffix"})}
                    </cosmoz-badge>
                    <cosmoz-badge color="warning">
                        Warning ${o({slot:"suffix"})}
                    </cosmoz-badge>
                    <cosmoz-badge color="success">
                        Success ${o({slot:"suffix"})}
                    </cosmoz-badge>
                    <cosmoz-badge color="processing">
                        Processing ${o({slot:"suffix"})}
                    </cosmoz-badge>
                </div>
            </div>
            <div>
                <h1 class="story-section-title">Color</h1>
                <div class="story-row">
                    <cosmoz-badge type="color">
                        Default ${o({slot:"suffix"})}
                    </cosmoz-badge>
                    <cosmoz-badge type="color" color="brand">
                        Brand ${o({slot:"suffix"})}
                    </cosmoz-badge>
                    <cosmoz-badge type="color" color="error">
                        Error ${o({slot:"suffix"})}
                    </cosmoz-badge>
                    <cosmoz-badge type="color" color="warning">
                        Warning ${o({slot:"suffix"})}
                    </cosmoz-badge>
                    <cosmoz-badge type="color" color="success">
                        Success ${o({slot:"suffix"})}
                    </cosmoz-badge>
                    <cosmoz-badge type="color" color="processing">
                        Processing ${o({slot:"suffix"})}
                    </cosmoz-badge>
                </div>
            </div>
            <div>
                <h1 class="story-section-title">Modern</h1>
                <div class="story-row">
                    <cosmoz-badge type="modern">
                        Default ${o({slot:"suffix"})}
                    </cosmoz-badge>
                    <cosmoz-badge type="modern" color="brand">
                        Brand ${o({slot:"suffix"})}
                    </cosmoz-badge>
                    <cosmoz-badge type="modern" color="error">
                        Error ${o({slot:"suffix"})}
                    </cosmoz-badge>
                    <cosmoz-badge type="modern" color="warning">
                        Warning ${o({slot:"suffix"})}
                    </cosmoz-badge>
                    <cosmoz-badge type="modern" color="success">
                        Success ${o({slot:"suffix"})}
                    </cosmoz-badge>
                    <cosmoz-badge type="modern" color="processing">
                        Processing ${o({slot:"suffix"})}
                    </cosmoz-badge>
                </div>
            </div>
        </div>
    `,parameters:{docs:{description:{story:'Badge with a trailing (suffix) icon. Place an SVG with slot="suffix".'}}}},f={render:()=>r`
        <div class="story-stack">
            <div>
                <h1 class="story-section-title">Sizes</h1>
                <div class="story-row">
                    <cosmoz-badge type="icon" size="sm"> ${a()} </cosmoz-badge>
                    <cosmoz-badge type="icon"> ${a()} </cosmoz-badge>
                    <cosmoz-badge type="icon" size="lg"> ${a()} </cosmoz-badge>
                </div>
            </div>
            <div>
                <h1 class="story-section-title">Colors</h1>
                <div class="story-row">
                    <cosmoz-badge type="icon"> ${a()} </cosmoz-badge>
                    <cosmoz-badge type="icon" color="brand"> ${a()} </cosmoz-badge>
                    <cosmoz-badge type="icon" color="error"> ${a()} </cosmoz-badge>
                    <cosmoz-badge type="icon" color="warning">
                        ${a()}
                    </cosmoz-badge>
                    <cosmoz-badge type="icon" color="success">
                        ${a()}
                    </cosmoz-badge>
                    <cosmoz-badge type="icon" color="processing">
                        ${a()}
                    </cosmoz-badge>
                </div>
            </div>
        </div>
    `,parameters:{docs:{description:{story:"Icon-only badge with no text. Circular shape with equal padding. Pass an icon in the default slot."}}}},v={render:()=>r`
        <div class="story-stack">
            <div>
                <h1 class="story-section-title">Pill</h1>
                <div class="story-row">
                    <cosmoz-badge>Default</cosmoz-badge>
                    <cosmoz-badge color="brand">Brand</cosmoz-badge>
                    <cosmoz-badge color="error">Error</cosmoz-badge>
                    <cosmoz-badge color="warning">Warning</cosmoz-badge>
                    <cosmoz-badge color="success">Success</cosmoz-badge>
                    <cosmoz-badge color="processing">Processing</cosmoz-badge>
                </div>
            </div>
            <div>
                <h1 class="story-section-title">Color</h1>
                <div class="story-row">
                    <cosmoz-badge type="color">Default</cosmoz-badge>
                    <cosmoz-badge type="color" color="brand">Brand</cosmoz-badge>
                    <cosmoz-badge type="color" color="error">Error</cosmoz-badge>
                    <cosmoz-badge type="color" color="warning">Warning</cosmoz-badge>
                    <cosmoz-badge type="color" color="success">Success</cosmoz-badge>
                    <cosmoz-badge type="color" color="processing"
                        >Processing</cosmoz-badge
                    >
                </div>
            </div>
            <div>
                <h1 class="story-section-title">Modern</h1>
                <div class="story-row">
                    <cosmoz-badge type="modern">Default</cosmoz-badge>
                    <cosmoz-badge type="modern" color="brand">Brand</cosmoz-badge>
                    <cosmoz-badge type="modern" color="error">Error</cosmoz-badge>
                    <cosmoz-badge type="modern" color="warning">Warning</cosmoz-badge>
                    <cosmoz-badge type="modern" color="success">Success</cosmoz-badge>
                    <cosmoz-badge type="modern" color="processing"
                        >Processing</cosmoz-badge
                    >
                </div>
            </div>
        </div>
    `,parameters:{docs:{description:{story:"Complete matrix of all colors across all badge types."}}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    type: 'pill',
    color: 'gray',
    size: 'md',
    label: 'Label',
    dot: false
  },
  render: renderBadge
}`,...g.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => html\`
        <div class="story-row">
            <cosmoz-badge>Default</cosmoz-badge>
            <cosmoz-badge color="brand">Brand</cosmoz-badge>
            <cosmoz-badge color="error">Error</cosmoz-badge>
            <cosmoz-badge color="warning">Warning</cosmoz-badge>
            <cosmoz-badge color="success">Success</cosmoz-badge>
            <cosmoz-badge color="processing">Processing</cosmoz-badge>
        </div>
    \`,
  parameters: {
    docs: {
      description: {
        story: 'All available color variants for the badge.'
      }
    }
  }
}`,...m.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: () => html\`
        <div class="story-row">
            <cosmoz-badge>Gray</cosmoz-badge>
            <cosmoz-badge type="color" color="brand">Color</cosmoz-badge>
            <cosmoz-badge type="modern">Modern</cosmoz-badge>
        </div>
    \`,
  parameters: {
    docs: {
      description: {
        story: 'The three badge types: pill (rounded), badge (square corners), and modern (shadow + neutral colors).'
      }
    }
  }
}`,...b.parameters?.docs?.source}}};z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  render: () => html\`
        <div class="story-row">
            <cosmoz-badge size="sm" color="brand">Small</cosmoz-badge>
            <cosmoz-badge size="md" color="brand">Medium</cosmoz-badge>
            <cosmoz-badge size="lg" color="brand">Large</cosmoz-badge>
        </div>
    \`,
  parameters: {
    docs: {
      description: {
        story: 'Badge sizes: sm, md, and lg.'
      }
    }
  }
}`,...z.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => html\`
        <div class="story-stack">
            <div>
                <h1 class="story-section-title">Pill</h1>
                <div class="story-row">
                    <cosmoz-badge dot>Gray</cosmoz-badge>
                    <cosmoz-badge dot color="brand">Brand</cosmoz-badge>
                    <cosmoz-badge dot color="error">Error</cosmoz-badge>
                    <cosmoz-badge dot color="warning">Warning</cosmoz-badge>
                    <cosmoz-badge dot color="success">Success</cosmoz-badge>
                    <cosmoz-badge dot color="processing">Processing</cosmoz-badge>
                </div>
            </div>
            <div>
                <h1 class="story-section-title">Color</h1>
                <div class="story-row">
                    <cosmoz-badge dot type="color">Gray</cosmoz-badge>
                    <cosmoz-badge dot type="color" color="brand">Brand</cosmoz-badge>
                    <cosmoz-badge dot type="color" color="error">Error</cosmoz-badge>
                    <cosmoz-badge dot type="color" color="warning">Warning</cosmoz-badge>
                    <cosmoz-badge dot type="color" color="success">Success</cosmoz-badge>
                    <cosmoz-badge dot type="color" color="processing"
                        >Processing</cosmoz-badge
                    >
                </div>
            </div>
            <div>
                <h1 class="story-section-title">Modern</h1>
                <div class="story-row">
                    <cosmoz-badge dot type="modern">Gray</cosmoz-badge>
                    <cosmoz-badge dot type="modern" color="brand">Brand</cosmoz-badge>
                    <cosmoz-badge dot type="modern" color="error">Error</cosmoz-badge>
                    <cosmoz-badge dot type="modern" color="warning">Warning</cosmoz-badge>
                    <cosmoz-badge dot type="modern" color="success">Success</cosmoz-badge>
                    <cosmoz-badge dot type="modern" color="processing"
                        >Processing</cosmoz-badge
                    >
                </div>
            </div>
        </div>
    \`,
  parameters: {
    docs: {
      description: {
        story: 'Badge with a colored dot indicator. The dot color follows the badge color scheme.'
      }
    }
  }
}`,...p.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: () => html\`
        <div class="story-stack">
            <div>
                <h1 class="story-section-title">Pill</h1>
                <div class="story-row">
                    <cosmoz-badge>
                        \${arrowUpIcon({
    slot: 'prefix'
  })} Default
                    </cosmoz-badge>
                    <cosmoz-badge color="brand">
                        \${arrowUpIcon({
    slot: 'prefix'
  })} Brand
                    </cosmoz-badge>
                    <cosmoz-badge color="error">
                        \${arrowUpIcon({
    slot: 'prefix'
  })} Error
                    </cosmoz-badge>
                    <cosmoz-badge color="warning">
                        \${arrowUpIcon({
    slot: 'prefix'
  })} Warning
                    </cosmoz-badge>
                    <cosmoz-badge color="success">
                        \${arrowUpIcon({
    slot: 'prefix'
  })} Success
                    </cosmoz-badge>
                    <cosmoz-badge color="processing">
                        \${arrowUpIcon({
    slot: 'prefix'
  })} Processing
                    </cosmoz-badge>
                </div>
            </div>
            <div>
                <h1 class="story-section-title">Color</h1>
                <div class="story-row">
                    <cosmoz-badge type="color">
                        \${arrowUpIcon({
    slot: 'prefix'
  })} Default
                    </cosmoz-badge>
                    <cosmoz-badge type="color" color="brand">
                        \${arrowUpIcon({
    slot: 'prefix'
  })} Brand
                    </cosmoz-badge>
                    <cosmoz-badge type="color" color="error">
                        \${arrowUpIcon({
    slot: 'prefix'
  })} Error
                    </cosmoz-badge>
                    <cosmoz-badge type="color" color="warning">
                        \${arrowUpIcon({
    slot: 'prefix'
  })} Warning
                    </cosmoz-badge>
                    <cosmoz-badge type="color" color="success">
                        \${arrowUpIcon({
    slot: 'prefix'
  })} Success
                    </cosmoz-badge>
                    <cosmoz-badge type="color" color="processing">
                        \${arrowUpIcon({
    slot: 'prefix'
  })} Processing
                    </cosmoz-badge>
                </div>
            </div>
            <div>
                <h1 class="story-section-title">Modern</h1>
                <div class="story-row">
                    <cosmoz-badge type="modern">
                        \${arrowUpIcon({
    slot: 'prefix'
  })} Default
                    </cosmoz-badge>
                    <cosmoz-badge type="modern" color="brand">
                        \${arrowUpIcon({
    slot: 'prefix'
  })} Brand
                    </cosmoz-badge>
                    <cosmoz-badge type="modern" color="error">
                        \${arrowUpIcon({
    slot: 'prefix'
  })} Error
                    </cosmoz-badge>
                    <cosmoz-badge type="modern" color="warning">
                        \${arrowUpIcon({
    slot: 'prefix'
  })} Warning
                    </cosmoz-badge>
                    <cosmoz-badge type="modern" color="success">
                        \${arrowUpIcon({
    slot: 'prefix'
  })} Success
                    </cosmoz-badge>
                    <cosmoz-badge type="modern" color="processing">
                        \${arrowUpIcon({
    slot: 'prefix'
  })} Processing
                    </cosmoz-badge>
                </div>
            </div>
        </div>
    \`,
  parameters: {
    docs: {
      description: {
        story: 'Badge with a leading (prefix) icon. Place an SVG with slot="prefix".'
      }
    }
  }
}`,...y.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => html\`
        <div class="story-stack">
            <div>
                <h1 class="story-section-title">Pill</h1>
                <div class="story-row">
                    <cosmoz-badge>
                        Default \${arrowRightIcon({
    slot: 'suffix'
  })}
                    </cosmoz-badge>
                    <cosmoz-badge color="brand">
                        Brand \${arrowRightIcon({
    slot: 'suffix'
  })}
                    </cosmoz-badge>
                    <cosmoz-badge color="error">
                        Error \${arrowRightIcon({
    slot: 'suffix'
  })}
                    </cosmoz-badge>
                    <cosmoz-badge color="warning">
                        Warning \${arrowRightIcon({
    slot: 'suffix'
  })}
                    </cosmoz-badge>
                    <cosmoz-badge color="success">
                        Success \${arrowRightIcon({
    slot: 'suffix'
  })}
                    </cosmoz-badge>
                    <cosmoz-badge color="processing">
                        Processing \${arrowRightIcon({
    slot: 'suffix'
  })}
                    </cosmoz-badge>
                </div>
            </div>
            <div>
                <h1 class="story-section-title">Color</h1>
                <div class="story-row">
                    <cosmoz-badge type="color">
                        Default \${arrowRightIcon({
    slot: 'suffix'
  })}
                    </cosmoz-badge>
                    <cosmoz-badge type="color" color="brand">
                        Brand \${arrowRightIcon({
    slot: 'suffix'
  })}
                    </cosmoz-badge>
                    <cosmoz-badge type="color" color="error">
                        Error \${arrowRightIcon({
    slot: 'suffix'
  })}
                    </cosmoz-badge>
                    <cosmoz-badge type="color" color="warning">
                        Warning \${arrowRightIcon({
    slot: 'suffix'
  })}
                    </cosmoz-badge>
                    <cosmoz-badge type="color" color="success">
                        Success \${arrowRightIcon({
    slot: 'suffix'
  })}
                    </cosmoz-badge>
                    <cosmoz-badge type="color" color="processing">
                        Processing \${arrowRightIcon({
    slot: 'suffix'
  })}
                    </cosmoz-badge>
                </div>
            </div>
            <div>
                <h1 class="story-section-title">Modern</h1>
                <div class="story-row">
                    <cosmoz-badge type="modern">
                        Default \${arrowRightIcon({
    slot: 'suffix'
  })}
                    </cosmoz-badge>
                    <cosmoz-badge type="modern" color="brand">
                        Brand \${arrowRightIcon({
    slot: 'suffix'
  })}
                    </cosmoz-badge>
                    <cosmoz-badge type="modern" color="error">
                        Error \${arrowRightIcon({
    slot: 'suffix'
  })}
                    </cosmoz-badge>
                    <cosmoz-badge type="modern" color="warning">
                        Warning \${arrowRightIcon({
    slot: 'suffix'
  })}
                    </cosmoz-badge>
                    <cosmoz-badge type="modern" color="success">
                        Success \${arrowRightIcon({
    slot: 'suffix'
  })}
                    </cosmoz-badge>
                    <cosmoz-badge type="modern" color="processing">
                        Processing \${arrowRightIcon({
    slot: 'suffix'
  })}
                    </cosmoz-badge>
                </div>
            </div>
        </div>
    \`,
  parameters: {
    docs: {
      description: {
        story: 'Badge with a trailing (suffix) icon. Place an SVG with slot="suffix".'
      }
    }
  }
}`,...u.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: () => html\`
        <div class="story-stack">
            <div>
                <h1 class="story-section-title">Sizes</h1>
                <div class="story-row">
                    <cosmoz-badge type="icon" size="sm"> \${plusIcon()} </cosmoz-badge>
                    <cosmoz-badge type="icon"> \${plusIcon()} </cosmoz-badge>
                    <cosmoz-badge type="icon" size="lg"> \${plusIcon()} </cosmoz-badge>
                </div>
            </div>
            <div>
                <h1 class="story-section-title">Colors</h1>
                <div class="story-row">
                    <cosmoz-badge type="icon"> \${plusIcon()} </cosmoz-badge>
                    <cosmoz-badge type="icon" color="brand"> \${plusIcon()} </cosmoz-badge>
                    <cosmoz-badge type="icon" color="error"> \${plusIcon()} </cosmoz-badge>
                    <cosmoz-badge type="icon" color="warning">
                        \${plusIcon()}
                    </cosmoz-badge>
                    <cosmoz-badge type="icon" color="success">
                        \${plusIcon()}
                    </cosmoz-badge>
                    <cosmoz-badge type="icon" color="processing">
                        \${plusIcon()}
                    </cosmoz-badge>
                </div>
            </div>
        </div>
    \`,
  parameters: {
    docs: {
      description: {
        story: 'Icon-only badge with no text. Circular shape with equal padding. Pass an icon in the default slot.'
      }
    }
  }
}`,...f.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: () => html\`
        <div class="story-stack">
            <div>
                <h1 class="story-section-title">Pill</h1>
                <div class="story-row">
                    <cosmoz-badge>Default</cosmoz-badge>
                    <cosmoz-badge color="brand">Brand</cosmoz-badge>
                    <cosmoz-badge color="error">Error</cosmoz-badge>
                    <cosmoz-badge color="warning">Warning</cosmoz-badge>
                    <cosmoz-badge color="success">Success</cosmoz-badge>
                    <cosmoz-badge color="processing">Processing</cosmoz-badge>
                </div>
            </div>
            <div>
                <h1 class="story-section-title">Color</h1>
                <div class="story-row">
                    <cosmoz-badge type="color">Default</cosmoz-badge>
                    <cosmoz-badge type="color" color="brand">Brand</cosmoz-badge>
                    <cosmoz-badge type="color" color="error">Error</cosmoz-badge>
                    <cosmoz-badge type="color" color="warning">Warning</cosmoz-badge>
                    <cosmoz-badge type="color" color="success">Success</cosmoz-badge>
                    <cosmoz-badge type="color" color="processing"
                        >Processing</cosmoz-badge
                    >
                </div>
            </div>
            <div>
                <h1 class="story-section-title">Modern</h1>
                <div class="story-row">
                    <cosmoz-badge type="modern">Default</cosmoz-badge>
                    <cosmoz-badge type="modern" color="brand">Brand</cosmoz-badge>
                    <cosmoz-badge type="modern" color="error">Error</cosmoz-badge>
                    <cosmoz-badge type="modern" color="warning">Warning</cosmoz-badge>
                    <cosmoz-badge type="modern" color="success">Success</cosmoz-badge>
                    <cosmoz-badge type="modern" color="processing"
                        >Processing</cosmoz-badge
                    >
                </div>
            </div>
        </div>
    \`,
  parameters: {
    docs: {
      description: {
        story: 'Complete matrix of all colors across all badge types.'
      }
    }
  }
}`,...v.parameters?.docs?.source}}};const W=["Default","Colors","Types","Sizes","WithDot","WithPrefixIcon","WithSuffixIcon","IconOnly","AllColorsByType"];export{v as AllColorsByType,m as Colors,g as Default,f as IconOnly,z as Sizes,b as Types,p as WithDot,y as WithPrefixIcon,u as WithSuffixIcon,W as __namedExportsOrder,P as default};
