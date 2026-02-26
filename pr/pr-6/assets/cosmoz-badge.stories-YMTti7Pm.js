import{A as L,b as i,w as G,D as eo}from"./iframe-DczPF-i1.js";import"./preload-helper-PPVm8Dsz.js";const B=o=>o??L;function P(o,e,s){return o?e(o):s?.(o)}const so=({slot:o,title:e,className:s,width:r="24",height:t="24",styles:l}={})=>i`
  <svg
    slot=${B(o)}
    class=${`alert-triangle-icon ${s??""}`}
    viewBox="0 0 24 24"
    preserveAspectRatio="xMidYMid meet"
    focusable="false"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    width=${r}
    height=${t}
    style=${B(l)}
  >
    ${P(e,()=>G`<title>${e}</title>`)}
    <path
      d="M12 9v4m0 4h.01M10.615 3.892 2.39 18.098c-.456.788-.684 1.182-.65 1.506a1 1 0 0 0 .406.705c.263.191.718.191 1.629.191h16.45c.91 0 1.365 0 1.628-.191a1 1 0 0 0 .407-.705c.034-.324-.195-.718-.65-1.506L13.383 3.892c-.454-.785-.681-1.178-.978-1.31a1 1 0 0 0-.813 0c-.296.132-.523.525-.978 1.31Z"
    />
  </svg>
`,ro=({slot:o,title:e,className:s,width:r="24",height:t="24",styles:l}={})=>i`
  <svg
    slot=${B(o)}
    class=${`arrow-up-icon ${s??""}`}
    viewBox="0 0 24 24"
    preserveAspectRatio="xMidYMid meet"
    focusable="false"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    width=${r}
    height=${t}
    style=${B(l)}
  >
    ${P(e,()=>G`<title>${e}</title>`)}
    <path d="M12 19V5m0 0-7 7m7-7 7 7" />
  </svg>
`;let I,N=0;function M(o){I=o}function R(){I=null,N=0}function to(){return N++}const A=Symbol("haunted.phase"),C=Symbol("haunted.hook"),U=Symbol("haunted.update"),O=Symbol("haunted.commit"),h=Symbol("haunted.effects"),f=Symbol("haunted.layoutEffects"),T="haunted.context";class co{update;host;virtual;[C];[h];[f];constructor(e,s){this.update=e,this.host=s,this[C]=new Map,this[h]=[],this[f]=[]}run(e){M(this);let s=e();return R(),s}_runEffects(e){let s=this[e];M(this);for(let r of s)r.call(this);R()}runEffects(){this._runEffects(h)}runLayoutEffects(){this._runEffects(f)}teardown(){this[C].forEach(s=>{typeof s.teardown=="function"&&s.teardown(!0)})}}const ao=Promise.resolve().then.bind(Promise.resolve());function V(){let o=[],e;function s(){e=null;let r=o;o=[];for(var t=0,l=r.length;t<l;t++)r[t]()}return function(r){o.push(r),e==null&&(e=ao(s))}}const no=V(),j=V();class io{renderer;host;state;[A];_updateQueued;_active;constructor(e,s){this.renderer=e,this.host=s,this.state=new co(this.update.bind(this),s),this[A]=null,this._updateQueued=!1,this._active=!0}update(){this._active&&(this._updateQueued||(no(()=>{let e=this.handlePhase(U);j(()=>{this.handlePhase(O,e),j(()=>{this.handlePhase(h)})}),this._updateQueued=!1}),this._updateQueued=!0))}handlePhase(e,s){switch(this[A]=e,e){case O:this.commit(s),this.runEffects(f);return;case U:return this.render();case h:return this.runEffects(h)}}render(){return this.state.run(()=>this.renderer.call(this.host,this.host))}runEffects(e){this.state._runEffects(e)}teardown(){this.state.teardown()}pause(){this._active=!1}resume(){this._active=!0}}const F=(...o)=>{const e=new CSSStyleSheet;return e.replaceSync(o.join("")),e},lo=o=>o?.map(e=>typeof e=="string"?F(e):e),go=(o,...e)=>o.flatMap((s,r)=>[s,e[r]||""]).join(""),q=go,mo=(o="")=>o.replace(/-+([a-z])?/g,(e,s)=>s?s.toUpperCase():"");function uo(o){class e extends io{frag;renderResult;constructor(t,l,y){super(t,y||l),this.frag=l}commit(t){this.renderResult=o(t,this.frag)}}function s(r,t,l){const y=(l||t||{}).baseElement||HTMLElement,{observedAttributes:Y=[],useShadowDOM:Z=!0,shadowRootInit:J={},styleSheets:K}=l||t||{},D=lo(r.styleSheets||K);class W extends y{_scheduler;static get observedAttributes(){return r.observedAttributes||Y||[]}constructor(){if(super(),Z===!1)this._scheduler=new e(r,this);else{const a=this.attachShadow({mode:"open",...J});D&&(a.adoptedStyleSheets=D),this._scheduler=new e(r,a,this)}}connectedCallback(){this._scheduler.resume(),this._scheduler.update(),this._scheduler.renderResult?.setConnected(!0)}disconnectedCallback(){this._scheduler.pause(),this._scheduler.teardown(),this._scheduler.renderResult?.setConnected(!1)}attributeChangedCallback(a,u,g){if(u===g)return;let m=g===""?!0:g;Reflect.set(this,mo(a),m)}}function X(b){let a=b,u=!1;return Object.freeze({enumerable:!0,configurable:!0,get(){return a},set(g){u&&a===g||(u=!0,a=g,this._scheduler&&this._scheduler.update())}})}const oo=new Proxy(y.prototype,{getPrototypeOf(b){return b},set(b,a,u,g){let m;return a in b?(m=Object.getOwnPropertyDescriptor(b,a),m&&m.set?(m.set.call(g,u),!0):(Reflect.set(b,a,u,g),!0)):(typeof a=="symbol"||a[0]==="_"?m={enumerable:!0,configurable:!0,writable:!0,value:u}:m=X(u),Object.defineProperty(g,a,m),m.set&&m.set.call(g,u),!0)}});return Object.setPrototypeOf(W.prototype,oo),W}return s}class p{id;state;constructor(e,s){this.id=e,this.state=s}}function bo(o,...e){let s=to(),r=I[C],t=r.get(s);return t||(t=new o(s,I,...e),r.set(s,t)),t.update(...e)}function z(o){return bo.bind(null,o)}function Q(o){return z(class extends p{callback;lastValues;values;_teardown;constructor(e,s,r,t){super(e,s),o(s,this)}update(e,s){this.callback=e,this.values=s}call(){const e=!this.values||this.hasChanged();this.lastValues=this.values,e&&this.run()}run(){this.teardown(),this._teardown=this.callback.call(this.state)}teardown(e){typeof this._teardown=="function"&&(this._teardown(),this._teardown=void 0),e&&(this.lastValues=this.values=void 0)}hasChanged(){return!this.lastValues||this.values.some((e,s)=>this.lastValues[s]!==e)}})}function H(o,e){o[h].push(e)}Q(H);const ho=o=>o instanceof Element?o:o.startNode||o.endNode||o.parentNode,po=z(class extends p{Context;value;_ranEffect;_unsubscribe;constructor(o,e,s){super(o,e),this._updater=this._updater.bind(this),this._ranEffect=!1,this._unsubscribe=null,H(e,this)}update(o){return this.Context!==o&&(this._subscribe(o),this.Context=o),this.value}call(){this._ranEffect||(this._ranEffect=!0,this._unsubscribe&&this._unsubscribe(),this._subscribe(this.Context),this.state.update())}_updater(o){this.value=o,this.state.update()}_subscribe(o){const e={Context:o,callback:this._updater};ho(this.state.host).dispatchEvent(new CustomEvent(T,{detail:e,bubbles:!0,cancelable:!0,composed:!0}));const{unsubscribe:r=null,value:t}=e;this.value=r?t:o.defaultValue,this._unsubscribe=r}teardown(){this._unsubscribe&&this._unsubscribe()}});function zo(o){return e=>{const s={Provider:class extends HTMLElement{listeners;_value;constructor(){super(),this.style.display="contents",this.listeners=new Set,this.addEventListener(T,this)}disconnectedCallback(){this.removeEventListener(T,this)}handleEvent(r){const{detail:t}=r;t.Context===s&&(t.value=this.value,t.unsubscribe=this.unsubscribe.bind(this,t.callback),this.listeners.add(t.callback),r.stopPropagation())}unsubscribe(r){this.listeners.delete(r)}set value(r){this._value=r;for(let t of this.listeners)t(r)}get value(){return this._value}},Consumer:o(function({render:r}){const t=po(s);return r(t)},{useShadowDOM:!1}),defaultValue:e};return s}}z(class extends p{value;values;constructor(o,e,s,r){super(o,e),this.value=s(),this.values=r}update(o,e){return this.hasChanged(e)&&(this.values=e,this.value=o()),this.value}hasChanged(o=[]){return o.some((e,s)=>this.values[s]!==e)}});function fo(o,e){o[f].push(e)}Q(fo);z(class extends p{args;constructor(o,e,s){super(o,e),this.updater=this.updater.bind(this),typeof s=="function"&&(s=s()),this.makeArgs(s)}update(){return this.args}updater(o){const[e]=this.args;typeof o=="function"&&(o=o(e)),!Object.is(e,o)&&(this.makeArgs(o),this.state.update())}makeArgs(o){this.args=Object.freeze([o,this.updater])}});z(class extends p{reducer;currentState;constructor(o,e,s,r,t){super(o,e),this.dispatch=this.dispatch.bind(this),this.currentState=t!==void 0?t(r):r}update(o){return this.reducer=o,[this.currentState,this.dispatch]}dispatch(o){this.currentState=this.reducer(this.currentState,o),this.state.update()}});const yo=/([A-Z])/gu;z(class extends p{property;eventName;constructor(o,e,s,r){if(super(o,e),this.state.virtual)throw new Error("Can't be used with virtual components.");this.updater=this.updater.bind(this),this.property=s,this.eventName=s.replace(yo,"-$1").toLowerCase()+"-changed",this.state.host[this.property]==null&&(typeof r=="function"&&(r=r()),r!=null&&this.updateProp(r))}update(o,e){return[this.state.host[this.property],this.updater]}updater(o){const e=this.state.host[this.property];typeof o=="function"&&(o=o(e)),!Object.is(e,o)&&this.updateProp(o)}updateProp(o){this.notify(o).defaultPrevented||(this.state.host[this.property]=o)}notify(o){const e=new CustomEvent(this.eventName,{detail:{value:o,path:this.property},cancelable:!0});return this.state.host.dispatchEvent(e),e}});function vo({render:o}){const e=uo(o),s=zo(e);return{component:e,createContext:s}}const{component:wo}=vo({render:eo}),xo=F(q`
	/*
	 * Use border-box sizing for all elements.
	 * This is safe and doesn't conflict with child component styles.
	 */
	*,
	::before,
	::after,
	::backdrop,
	::file-selector-button {
		box-sizing: border-box;
	}

	/*
	 * Reset margins and padding on elements that typically have browser defaults.
	 * This is more targeted than using * to avoid affecting custom elements.
	 */
	h1,
	h2,
	h3,
	h4,
	h5,
	h6,
	p,
	blockquote,
	pre,
	ul,
	ol,
	li,
	dl,
	dt,
	dd,
	figure,
	figcaption,
	fieldset,
	legend,
	form,
	hr,
	table,
	th,
	td {
		margin: 0;
		padding: 0;
	}

	/*
	 * Reset borders on elements that typically have them.
	 */
	fieldset,
	hr,
	iframe {
		border: 0 solid;
	}

	/*
	 * 1. Use a consistent sensible line-height in all browsers.
	 * 2. Prevent adjustments of font size after orientation changes in iOS.
	 * 3. Use a more readable tab size.
	 * 4. Use the configured font-family.
	 * 5. Disable tap highlights on iOS.
	 */
	:host {
		line-height: 1.5;
		-webkit-text-size-adjust: 100%;
		tab-size: 4;
		font-family: var(--cz-font-body);
		-webkit-tap-highlight-color: transparent;
	}

	/*
	 * Reset links to optimize for opt-in styling.
	 */
	a {
		color: inherit;
		text-decoration: inherit;
	}

	/*
	 * Add the correct font weight in Edge and Safari.
	 */
	b,
	strong {
		font-weight: bolder;
	}

	/*
	 * 1. Use the configured mono font-family.
	 * 2. Correct the odd em font sizing in all browsers.
	 */
	code,
	kbd,
	samp,
	pre {
		font-family: var(--cz-font-mono);
		font-size: 1em;
	}

	/*
	 * Add the correct font size in all browsers.
	 */
	small {
		font-size: 80%;
	}

	/*
	 * Prevent sub and sup from affecting line height.
	 */
	sub,
	sup {
		font-size: 75%;
		line-height: 0;
		position: relative;
		vertical-align: baseline;
	}

	sub {
		bottom: -0.25em;
	}

	sup {
		top: -0.5em;
	}

	/*
	 * 1. Make replaced elements display: block by default.
	 * 2. Add vertical-align: middle for better alignment.
	 */
	img,
	svg,
	video,
	canvas,
	audio,
	iframe,
	embed,
	object {
		display: block;
		vertical-align: middle;
	}

	/*
	 * Constrain images and videos to parent width.
	 */
	img,
	video {
		max-width: 100%;
		height: auto;
	}

	/*
	 * Reset form controls:
	 * 1. Inherit font styles in all browsers.
	 * 2. Remove default margins, padding, and borders.
	 * 3. Remove border radius.
	 * 4. Remove background color.
	 */
	button,
	input,
	select,
	optgroup,
	textarea,
	::file-selector-button {
		margin: 0;
		padding: 0;
		border: 0 solid;
		font: inherit;
		font-feature-settings: inherit;
		font-variation-settings: inherit;
		letter-spacing: inherit;
		color: inherit;
		border-radius: 0;
		background-color: transparent;
	}

	/*
	 * Reset placeholder opacity in Firefox.
	 */
	::placeholder {
		opacity: 1;
		color: var(--cz-color-text-placeholder, currentcolor);
	}

	/*
	 * Prevent horizontal textarea resize.
	 */
	textarea {
		resize: vertical;
	}

	/*
	 * Remove the inner padding in Chrome and Safari on macOS.
	 */
	::-webkit-search-decoration {
		-webkit-appearance: none;
	}

	/*
	 * Correct the inability to style the border radius in iOS Safari.
	 */
	button,
	input:where([type='button'], [type='reset'], [type='submit']),
	::file-selector-button {
		appearance: button;
	}

	/*
	 * Make elements with hidden attribute stay hidden.
	 */
	[hidden]:where(:not([hidden='until-found'])) {
		display: none !important;
	}
`),c=o=>`calc(var(--cz-spacing) * ${o})`,$o=q`
	/* =========================================
	 * HOST
	 * ========================================= */
	:host {
		display: inline-flex;
	}

	/* =========================================
	 * BADGE BASE (default: pill, md)
	 * ========================================= */
	.badge {
		display: inline-flex;
		align-items: center;
		gap: ${c(1.5)};
		width: max-content;
		height: max-content;
		white-space: nowrap;
		font-family: var(--cz-font-body);
		font-weight: var(--cz-font-weight-medium);
		border: 1px solid var(--cz-color-border-secondary);
		background-color: var(--cz-color-bg-secondary);
		color: var(--cz-color-text-secondary);
		border-radius: var(--cz-radius-full);
		padding: ${c(.5)} ${c(2)};
		font-size: var(--cz-text-sm);
		line-height: var(--cz-text-sm-line-height);
	}

	/* =========================================
	 * COLOR VARIANTS
	 * ========================================= */

	:host([color='brand']) .badge {
		background-color: var(--cz-color-bg-brand);
		color: var(--cz-color-text-brand);
		border-color: var(--cz-color-brand-200);
	}

	:host([color='error']) .badge {
		background-color: var(--cz-color-bg-error);
		color: var(--cz-color-text-error);
		border-color: var(--cz-color-error-200);
	}

	:host([color='warning']) .badge {
		background-color: var(--cz-color-bg-warning);
		color: var(--cz-color-text-warning);
		border-color: var(--cz-color-warning-200);
	}

	:host([color='success']) .badge {
		background-color: var(--cz-color-bg-success);
		color: var(--cz-color-text-success);
		border-color: var(--cz-color-success-200);
	}

	/* Modern type: neutral bg/text/border regardless of color */
	:host([type='modern']) .badge {
		background-color: var(--cz-color-bg-primary);
		color: var(--cz-color-text-secondary);
		border-color: var(--cz-color-border-primary);
	}

	/* =========================================
	 * TYPE VARIANTS (shape)
	 * ========================================= */
	:host([type='color']) .badge,
	:host([type='modern']) .badge {
		border-radius: var(--cz-radius-sm);
		padding: ${c(.5)} ${c(2)};
	}

	:host([type='modern']) .badge {
		box-shadow: var(--cz-shadow-xs);
	}

	/* =========================================
	 * SIZE VARIANTS
	 * ========================================= */

	/* --- Pill sizes --- */
	:host([size='sm']) .badge {
		padding: ${c(.5)} ${c(2)};
		font-size: var(--cz-text-xs);
		line-height: var(--cz-text-xs-line-height);
		gap: ${c(1)};
	}

	:host([size='lg']) .badge {
		padding: ${c(1)} ${c(3)};
	}

	/* --- Badge sizes --- */
	:host([type='color'][size='sm']) .badge,
	:host([type='modern'][size='sm']) .badge {
		padding: ${c(.5)} ${c(1.5)};
		font-size: var(--cz-text-xs);
		line-height: var(--cz-text-xs-line-height);
		gap: ${c(1)};
	}

	:host([type='color'][size='lg']) .badge,
	:host([type='modern'][size='lg']) .badge {
		padding: ${c(1)} ${c(2.5)};
		border-radius: var(--cz-radius-md);
	}

	/* =========================================
	 * DOT INDICATOR
	 * ========================================= */
	.dot {
		width: ${c(2)};
		height: ${c(2)};
		border-radius: var(--cz-radius-full);
		background-color: var(--cz-color-fg-quaternary);
		flex-shrink: 0;
	}
	:host([color='brand']) .dot {
		background-color: var(--cz-color-fg-brand-secondary);
	}
	:host([color='error']) .dot {
		background-color: var(--cz-color-fg-error-secondary);
	}
	:host([color='warning']) .dot {
		background-color: var(--cz-color-fg-warning-secondary);
	}
	:host([color='success']) .dot {
		background-color: var(--cz-color-fg-success-secondary);
	}

	/* Pill + dot: asymmetric padding (tighter left) */
	:host([dot]) .badge {
		padding: ${c(.5)} ${c(2.5)} ${c(.5)} ${c(2)};
	}

	:host([dot][size='sm']) .badge {
		padding: ${c(.5)} ${c(2)} ${c(.5)} ${c(1.5)};
	}

	:host([dot][size='lg']) .badge {
		padding: ${c(1)} ${c(3)} ${c(1)} ${c(2.5)};
	}

	/* Badge + dot: symmetric padding (same as base badge) */
	:host([dot][type='color']) .badge,
	:host([dot][type='modern']) .badge {
		padding: ${c(.5)} ${c(2)};
	}

	:host([dot][type='color'][size='sm']) .badge,
	:host([dot][type='modern'][size='sm']) .badge {
		padding: ${c(.5)} ${c(1.5)};
	}

	:host([dot][type='color'][size='lg']) .badge,
	:host([dot][type='modern'][size='lg']) .badge {
		padding: ${c(1)} ${c(2.5)};
	}

	/* =========================================
	 * SLOTTED CONTENT (icons, images, flags)
	 * ========================================= */
	::slotted(svg) {
		color: var(--cz-color-fg-quaternary);
	}

	:host([color='brand']) ::slotted(svg) {
		color: var(--cz-color-fg-brand-secondary);
	}
	:host([color='error']) ::slotted(svg) {
		color: var(--cz-color-fg-error-secondary);
	}
	:host([color='warning']) ::slotted(svg) {
		color: var(--cz-color-fg-warning-secondary);
	}
	:host([color='success']) ::slotted(svg) {
		color: var(--cz-color-fg-success-secondary);
	}
`,So=["type","color","size","dot"],Eo=o=>{const e=o.hasAttribute("dot");return i`<span class="badge" part="badge" role="status">
		${P(e,()=>i`<span class="dot" part="dot"></span>`,()=>L)}
		<slot name="prefix"></slot>
		<slot></slot>
		<slot name="suffix"></slot>
	</span>`};customElements.define("cosmoz-badge",wo(Eo,{observedAttributes:So,styleSheets:[xo,$o]}));const Bo={title:"Cosmoz Badge",component:"cosmoz-badge",tags:["autodocs"],argTypes:{type:{control:"select",options:["pill","color","modern"],description:"Badge type variant",table:{defaultValue:{summary:"pill"}}},color:{control:"select",options:["gray","brand","error","warning","success"],description:"Badge color scheme",table:{defaultValue:{summary:"gray"}}},size:{control:"select",options:["sm","md","lg"],description:"Badge size",table:{defaultValue:{summary:"md"}}},dot:{control:"boolean",description:"Show dot indicator",table:{defaultValue:{summary:"false"}}},label:{control:"text",description:"Badge label text"}}},n=o=>so({...o,width:o.width||"12",height:o.height||"12"}),d=o=>ro({...o,width:o.width||"12",height:o.height||"12"}),ko=o=>i`
    <cosmoz-badge
        type=${o.type||"pill"}
        color=${o.color||"gray"}
        size=${o.size||"md"}
        ?dot=${o.dot}
    >
        ${o.label||"Badge"}
    </cosmoz-badge>
`,v={args:{type:"pill",color:"gray",size:"md",label:"Label",dot:!1},render:ko},w={render:()=>i`
        <div class="story-row">
            <cosmoz-badge>Default</cosmoz-badge>
            <cosmoz-badge color="brand">Brand</cosmoz-badge>
            <cosmoz-badge color="error">Error</cosmoz-badge>
            <cosmoz-badge color="warning">Warning</cosmoz-badge>
            <cosmoz-badge color="success">Success</cosmoz-badge>
        </div>
    `,parameters:{docs:{description:{story:"All available color variants for the badge."}}}},x={render:()=>i`
        <div class="story-row">
            <cosmoz-badge>Gray</cosmoz-badge>
            <cosmoz-badge type="color" color="brand">Color</cosmoz-badge>
            <cosmoz-badge type="modern">Modern</cosmoz-badge>
        </div>
    `,parameters:{docs:{description:{story:"The three badge types: pill (rounded), badge (square corners), and modern (shadow + neutral colors)."}}}},$={render:()=>i`
        <div class="story-row">
            <cosmoz-badge size="sm" color="brand">Small</cosmoz-badge>
            <cosmoz-badge size="md" color="brand">Medium</cosmoz-badge>
            <cosmoz-badge size="lg" color="brand">Large</cosmoz-badge>
        </div>
    `,parameters:{docs:{description:{story:"Badge sizes: sm, md, and lg."}}}},S={render:()=>i`
        <div class="story-stack">
            <div>
                <h1 class="story-section-title">Pill</h1>
                <div class="story-row">
                    <cosmoz-badge dot>Gray</cosmoz-badge>
                    <cosmoz-badge dot color="brand">Brand</cosmoz-badge>
                    <cosmoz-badge dot color="error">Error</cosmoz-badge>
                    <cosmoz-badge dot color="warning">Warning</cosmoz-badge>
                    <cosmoz-badge dot color="success">Success</cosmoz-badge>
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
                </div>
            </div>
        </div>
    `,parameters:{docs:{description:{story:"Badge with a colored dot indicator. The dot color follows the badge color scheme."}}}},E={render:()=>i`
        <div class="story-stack">
            <div>
                <h1 class="story-section-title">Pill</h1>
                <div class="story-row">
                    <cosmoz-badge>
                        ${n({slot:"prefix"})} Default
                    </cosmoz-badge>
                    <cosmoz-badge color="brand">
                        ${n({slot:"prefix"})} Brand
                    </cosmoz-badge>
                    <cosmoz-badge color="error">
                        ${n({slot:"prefix"})} Error
                    </cosmoz-badge>
                    <cosmoz-badge color="warning">
                        ${n({slot:"prefix"})} Warning
                    </cosmoz-badge>
                    <cosmoz-badge color="success">
                        ${n({slot:"prefix"})} Success
                    </cosmoz-badge>
                </div>
            </div>
            <div>
                <h1 class="story-section-title">Color</h1>
                <div class="story-row">
                    <cosmoz-badge type="color">
                        ${n({slot:"prefix"})} Default
                    </cosmoz-badge>
                    <cosmoz-badge type="color" color="brand">
                        ${n({slot:"prefix"})} Brand
                    </cosmoz-badge>
                    <cosmoz-badge type="color" color="error">
                        ${n({slot:"prefix"})} Error
                    </cosmoz-badge>
                    <cosmoz-badge type="color" color="warning">
                        ${n({slot:"prefix"})} Warning
                    </cosmoz-badge>
                    <cosmoz-badge type="color" color="success">
                        ${n({slot:"prefix"})} Success
                    </cosmoz-badge>
                </div>
            </div>
            <div>
                <h1 class="story-section-title">Modern</h1>
                <div class="story-row">
                    <cosmoz-badge type="modern">
                        ${n({slot:"prefix"})} Default
                    </cosmoz-badge>
                    <cosmoz-badge type="modern" color="brand">
                        ${n({slot:"prefix"})} Brand
                    </cosmoz-badge>
                    <cosmoz-badge type="modern" color="error">
                        ${n({slot:"prefix"})} Error
                    </cosmoz-badge>
                    <cosmoz-badge type="modern" color="warning">
                        ${n({slot:"prefix"})} Warning
                    </cosmoz-badge>
                    <cosmoz-badge type="modern" color="success">
                        ${n({slot:"prefix"})} Success
                    </cosmoz-badge>
                </div>
            </div>
        </div>
    `,parameters:{docs:{description:{story:'Badge with a leading (prefix) icon. Place an SVG with slot="prefix".'}}}},k={render:()=>i`
        <div class="story-stack">
            <div>
                <h1 class="story-section-title">Pill</h1>
                <div class="story-row">
                    <cosmoz-badge>
                        Default ${d({slot:"suffix"})}
                    </cosmoz-badge>
                    <cosmoz-badge color="brand">
                        Brand ${d({slot:"suffix"})}
                    </cosmoz-badge>
                    <cosmoz-badge color="error">
                        Error ${d({slot:"suffix"})}
                    </cosmoz-badge>
                    <cosmoz-badge color="warning">
                        Warning ${d({slot:"suffix"})}
                    </cosmoz-badge>
                    <cosmoz-badge color="success">
                        Success ${d({slot:"suffix"})}
                    </cosmoz-badge>
                </div>
            </div>
            <div>
                <h1 class="story-section-title">Color</h1>
                <div class="story-row">
                    <cosmoz-badge type="color">
                        Default ${d({slot:"suffix"})}
                    </cosmoz-badge>
                    <cosmoz-badge type="color" color="brand">
                        Brand ${d({slot:"suffix"})}
                    </cosmoz-badge>
                    <cosmoz-badge type="color" color="error">
                        Error ${d({slot:"suffix"})}
                    </cosmoz-badge>
                    <cosmoz-badge type="color" color="warning">
                        Warning ${d({slot:"suffix"})}
                    </cosmoz-badge>
                    <cosmoz-badge type="color" color="success">
                        Success ${d({slot:"suffix"})}
                    </cosmoz-badge>
                </div>
            </div>
            <div>
                <h1 class="story-section-title">Modern</h1>
                <div class="story-row">
                    <cosmoz-badge type="modern">
                        Default ${d({slot:"suffix"})}
                    </cosmoz-badge>
                    <cosmoz-badge type="modern" color="brand">
                        Brand ${d({slot:"suffix"})}
                    </cosmoz-badge>
                    <cosmoz-badge type="modern" color="error">
                        Error ${d({slot:"suffix"})}
                    </cosmoz-badge>
                    <cosmoz-badge type="modern" color="warning">
                        Warning ${d({slot:"suffix"})}
                    </cosmoz-badge>
                    <cosmoz-badge type="modern" color="success">
                        Success ${d({slot:"suffix"})}
                    </cosmoz-badge>
                </div>
            </div>
        </div>
    `,parameters:{docs:{description:{story:'Badge with a trailing (suffix) icon. Place an SVG with slot="suffix".'}}}},_={render:()=>i`
        <div class="story-stack">
            <div>
                <h1 class="story-section-title">Pill</h1>
                <div class="story-row">
                    <cosmoz-badge>Default</cosmoz-badge>
                    <cosmoz-badge color="brand">Brand</cosmoz-badge>
                    <cosmoz-badge color="error">Error</cosmoz-badge>
                    <cosmoz-badge color="warning">Warning</cosmoz-badge>
                    <cosmoz-badge color="success">Success</cosmoz-badge>
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
                </div>
            </div>
        </div>
    `,parameters:{docs:{description:{story:"Complete matrix of all colors across all badge types."}}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    type: 'pill',
    color: 'gray',
    size: 'md',
    label: 'Label',
    dot: false
  },
  render: renderBadge
}`,...v.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  render: () => html\`
        <div class="story-row">
            <cosmoz-badge>Default</cosmoz-badge>
            <cosmoz-badge color="brand">Brand</cosmoz-badge>
            <cosmoz-badge color="error">Error</cosmoz-badge>
            <cosmoz-badge color="warning">Warning</cosmoz-badge>
            <cosmoz-badge color="success">Success</cosmoz-badge>
        </div>
    \`,
  parameters: {
    docs: {
      description: {
        story: 'All available color variants for the badge.'
      }
    }
  }
}`,...w.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
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
}`,...x.parameters?.docs?.source}}};$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`{
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
}`,...$.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
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
}`,...S.parameters?.docs?.source}}};E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  render: () => html\`
        <div class="story-stack">
            <div>
                <h1 class="story-section-title">Pill</h1>
                <div class="story-row">
                    <cosmoz-badge>
                        \${customTriangleIcon({
    slot: 'prefix'
  })} Default
                    </cosmoz-badge>
                    <cosmoz-badge color="brand">
                        \${customTriangleIcon({
    slot: 'prefix'
  })} Brand
                    </cosmoz-badge>
                    <cosmoz-badge color="error">
                        \${customTriangleIcon({
    slot: 'prefix'
  })} Error
                    </cosmoz-badge>
                    <cosmoz-badge color="warning">
                        \${customTriangleIcon({
    slot: 'prefix'
  })} Warning
                    </cosmoz-badge>
                    <cosmoz-badge color="success">
                        \${customTriangleIcon({
    slot: 'prefix'
  })} Success
                    </cosmoz-badge>
                </div>
            </div>
            <div>
                <h1 class="story-section-title">Color</h1>
                <div class="story-row">
                    <cosmoz-badge type="color">
                        \${customTriangleIcon({
    slot: 'prefix'
  })} Default
                    </cosmoz-badge>
                    <cosmoz-badge type="color" color="brand">
                        \${customTriangleIcon({
    slot: 'prefix'
  })} Brand
                    </cosmoz-badge>
                    <cosmoz-badge type="color" color="error">
                        \${customTriangleIcon({
    slot: 'prefix'
  })} Error
                    </cosmoz-badge>
                    <cosmoz-badge type="color" color="warning">
                        \${customTriangleIcon({
    slot: 'prefix'
  })} Warning
                    </cosmoz-badge>
                    <cosmoz-badge type="color" color="success">
                        \${customTriangleIcon({
    slot: 'prefix'
  })} Success
                    </cosmoz-badge>
                </div>
            </div>
            <div>
                <h1 class="story-section-title">Modern</h1>
                <div class="story-row">
                    <cosmoz-badge type="modern">
                        \${customTriangleIcon({
    slot: 'prefix'
  })} Default
                    </cosmoz-badge>
                    <cosmoz-badge type="modern" color="brand">
                        \${customTriangleIcon({
    slot: 'prefix'
  })} Brand
                    </cosmoz-badge>
                    <cosmoz-badge type="modern" color="error">
                        \${customTriangleIcon({
    slot: 'prefix'
  })} Error
                    </cosmoz-badge>
                    <cosmoz-badge type="modern" color="warning">
                        \${customTriangleIcon({
    slot: 'prefix'
  })} Warning
                    </cosmoz-badge>
                    <cosmoz-badge type="modern" color="success">
                        \${customTriangleIcon({
    slot: 'prefix'
  })} Success
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
}`,...E.parameters?.docs?.source}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  render: () => html\`
        <div class="story-stack">
            <div>
                <h1 class="story-section-title">Pill</h1>
                <div class="story-row">
                    <cosmoz-badge>
                        Default \${customArrowUpIcon({
    slot: 'suffix'
  })}
                    </cosmoz-badge>
                    <cosmoz-badge color="brand">
                        Brand \${customArrowUpIcon({
    slot: 'suffix'
  })}
                    </cosmoz-badge>
                    <cosmoz-badge color="error">
                        Error \${customArrowUpIcon({
    slot: 'suffix'
  })}
                    </cosmoz-badge>
                    <cosmoz-badge color="warning">
                        Warning \${customArrowUpIcon({
    slot: 'suffix'
  })}
                    </cosmoz-badge>
                    <cosmoz-badge color="success">
                        Success \${customArrowUpIcon({
    slot: 'suffix'
  })}
                    </cosmoz-badge>
                </div>
            </div>
            <div>
                <h1 class="story-section-title">Color</h1>
                <div class="story-row">
                    <cosmoz-badge type="color">
                        Default \${customArrowUpIcon({
    slot: 'suffix'
  })}
                    </cosmoz-badge>
                    <cosmoz-badge type="color" color="brand">
                        Brand \${customArrowUpIcon({
    slot: 'suffix'
  })}
                    </cosmoz-badge>
                    <cosmoz-badge type="color" color="error">
                        Error \${customArrowUpIcon({
    slot: 'suffix'
  })}
                    </cosmoz-badge>
                    <cosmoz-badge type="color" color="warning">
                        Warning \${customArrowUpIcon({
    slot: 'suffix'
  })}
                    </cosmoz-badge>
                    <cosmoz-badge type="color" color="success">
                        Success \${customArrowUpIcon({
    slot: 'suffix'
  })}
                    </cosmoz-badge>
                </div>
            </div>
            <div>
                <h1 class="story-section-title">Modern</h1>
                <div class="story-row">
                    <cosmoz-badge type="modern">
                        Default \${customArrowUpIcon({
    slot: 'suffix'
  })}
                    </cosmoz-badge>
                    <cosmoz-badge type="modern" color="brand">
                        Brand \${customArrowUpIcon({
    slot: 'suffix'
  })}
                    </cosmoz-badge>
                    <cosmoz-badge type="modern" color="error">
                        Error \${customArrowUpIcon({
    slot: 'suffix'
  })}
                    </cosmoz-badge>
                    <cosmoz-badge type="modern" color="warning">
                        Warning \${customArrowUpIcon({
    slot: 'suffix'
  })}
                    </cosmoz-badge>
                    <cosmoz-badge type="modern" color="success">
                        Success \${customArrowUpIcon({
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
}`,...k.parameters?.docs?.source}}};_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
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
}`,..._.parameters?.docs?.source}}};const Io=["Default","Colors","Types","Sizes","WithDot","WithPrefixIcon","WithSuffixIcon","AllColorsByType"];export{_ as AllColorsByType,w as Colors,v as Default,$ as Sizes,x as Types,S as WithDot,E as WithPrefixIcon,k as WithSuffixIcon,Io as __namedExportsOrder,Bo as default};
