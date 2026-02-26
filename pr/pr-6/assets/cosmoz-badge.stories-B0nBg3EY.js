import{A as L,b as i,w as N,D as eo}from"./iframe-Db7hVdZy.js";import"./preload-helper-PPVm8Dsz.js";const P=o=>o??L;function W(o,e,s){return o?e(o):s?.(o)}const so=({slot:o,title:e,className:s,width:t="24",height:r="24",styles:l}={})=>i`
  <svg
    slot=${P(o)}
    class=${`arrow-right-icon ${s??""}`}
    viewBox="0 0 24 24"
    preserveAspectRatio="xMidYMid meet"
    focusable="false"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    width=${t}
    height=${r}
    style=${P(l)}
  >
    ${W(e,()=>N`<title>${e}</title>`)}
    <path d="M5 12h14m0 0-7-7m7 7-7 7" />
  </svg>
`,to=({slot:o,title:e,className:s,width:t="24",height:r="24",styles:l}={})=>i`
  <svg
    slot=${P(o)}
    class=${`arrow-up-icon ${s??""}`}
    viewBox="0 0 24 24"
    preserveAspectRatio="xMidYMid meet"
    focusable="false"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    width=${t}
    height=${r}
    style=${P(l)}
  >
    ${W(e,()=>N`<title>${e}</title>`)}
    <path d="M12 19V5m0 0-7 7m7-7 7 7" />
  </svg>
`;let B,V=0;function R(o){B=o}function T(){B=null,V=0}function ro(){return V++}const I=Symbol("haunted.phase"),C=Symbol("haunted.hook"),O=Symbol("haunted.update"),j=Symbol("haunted.commit"),h=Symbol("haunted.effects"),z=Symbol("haunted.layoutEffects"),D="haunted.context";class co{update;host;virtual;[C];[h];[z];constructor(e,s){this.update=e,this.host=s,this[C]=new Map,this[h]=[],this[z]=[]}run(e){R(this);let s=e();return T(),s}_runEffects(e){let s=this[e];R(this);for(let t of s)t.call(this);T()}runEffects(){this._runEffects(h)}runLayoutEffects(){this._runEffects(z)}teardown(){this[C].forEach(s=>{typeof s.teardown=="function"&&s.teardown(!0)})}}const ao=Promise.resolve().then.bind(Promise.resolve());function F(){let o=[],e;function s(){e=null;let t=o;o=[];for(var r=0,l=t.length;r<l;r++)t[r]()}return function(t){o.push(t),e==null&&(e=ao(s))}}const no=F(),G=F();class io{renderer;host;state;[I];_updateQueued;_active;constructor(e,s){this.renderer=e,this.host=s,this.state=new co(this.update.bind(this),s),this[I]=null,this._updateQueued=!1,this._active=!0}update(){this._active&&(this._updateQueued||(no(()=>{let e=this.handlePhase(O);G(()=>{this.handlePhase(j,e),G(()=>{this.handlePhase(h)})}),this._updateQueued=!1}),this._updateQueued=!0))}handlePhase(e,s){switch(this[I]=e,e){case j:this.commit(s),this.runEffects(z);return;case O:return this.render();case h:return this.runEffects(h)}}render(){return this.state.run(()=>this.renderer.call(this.host,this.host))}runEffects(e){this.state._runEffects(e)}teardown(){this.state.teardown()}pause(){this._active=!1}resume(){this._active=!0}}const U=(...o)=>{const e=new CSSStyleSheet;return e.replaceSync(o.join("")),e},lo=o=>o?.map(e=>typeof e=="string"?U(e):e),mo=(o,...e)=>o.flatMap((s,t)=>[s,e[t]||""]).join(""),q=mo,uo=(o="")=>o.replace(/-+([a-z])?/g,(e,s)=>s?s.toUpperCase():"");function go(o){class e extends io{frag;renderResult;constructor(r,l,y){super(r,y||l),this.frag=l}commit(r){this.renderResult=o(r,this.frag)}}function s(t,r,l){const y=(l||r||{}).baseElement||HTMLElement,{observedAttributes:Y=[],useShadowDOM:Z=!0,shadowRootInit:J={},styleSheets:K}=l||r||{},A=lo(t.styleSheets||K);class M extends y{_scheduler;static get observedAttributes(){return t.observedAttributes||Y||[]}constructor(){if(super(),Z===!1)this._scheduler=new e(t,this);else{const a=this.attachShadow({mode:"open",...J});A&&(a.adoptedStyleSheets=A),this._scheduler=new e(t,a,this)}}connectedCallback(){this._scheduler.resume(),this._scheduler.update(),this._scheduler.renderResult?.setConnected(!0)}disconnectedCallback(){this._scheduler.pause(),this._scheduler.teardown(),this._scheduler.renderResult?.setConnected(!1)}attributeChangedCallback(a,g,m){if(g===m)return;let u=m===""?!0:m;Reflect.set(this,uo(a),u)}}function X(b){let a=b,g=!1;return Object.freeze({enumerable:!0,configurable:!0,get(){return a},set(m){g&&a===m||(g=!0,a=m,this._scheduler&&this._scheduler.update())}})}const oo=new Proxy(y.prototype,{getPrototypeOf(b){return b},set(b,a,g,m){let u;return a in b?(u=Object.getOwnPropertyDescriptor(b,a),u&&u.set?(u.set.call(m,g),!0):(Reflect.set(b,a,g,m),!0)):(typeof a=="symbol"||a[0]==="_"?u={enumerable:!0,configurable:!0,writable:!0,value:g}:u=X(g),Object.defineProperty(m,a,u),u.set&&u.set.call(m,g),!0)}});return Object.setPrototypeOf(M.prototype,oo),M}return s}class p{id;state;constructor(e,s){this.id=e,this.state=s}}function bo(o,...e){let s=ro(),t=B[C],r=t.get(s);return r||(r=new o(s,B,...e),t.set(s,r)),r.update(...e)}function f(o){return bo.bind(null,o)}function Q(o){return f(class extends p{callback;lastValues;values;_teardown;constructor(e,s,t,r){super(e,s),o(s,this)}update(e,s){this.callback=e,this.values=s}call(){const e=!this.values||this.hasChanged();this.lastValues=this.values,e&&this.run()}run(){this.teardown(),this._teardown=this.callback.call(this.state)}teardown(e){typeof this._teardown=="function"&&(this._teardown(),this._teardown=void 0),e&&(this.lastValues=this.values=void 0)}hasChanged(){return!this.lastValues||this.values.some((e,s)=>this.lastValues[s]!==e)}})}function H(o,e){o[h].push(e)}Q(H);const ho=o=>o instanceof Element?o:o.startNode||o.endNode||o.parentNode,po=f(class extends p{Context;value;_ranEffect;_unsubscribe;constructor(o,e,s){super(o,e),this._updater=this._updater.bind(this),this._ranEffect=!1,this._unsubscribe=null,H(e,this)}update(o){return this.Context!==o&&(this._subscribe(o),this.Context=o),this.value}call(){this._ranEffect||(this._ranEffect=!0,this._unsubscribe&&this._unsubscribe(),this._subscribe(this.Context),this.state.update())}_updater(o){this.value=o,this.state.update()}_subscribe(o){const e={Context:o,callback:this._updater};ho(this.state.host).dispatchEvent(new CustomEvent(D,{detail:e,bubbles:!0,cancelable:!0,composed:!0}));const{unsubscribe:t=null,value:r}=e;this.value=t?r:o.defaultValue,this._unsubscribe=t}teardown(){this._unsubscribe&&this._unsubscribe()}});function fo(o){return e=>{const s={Provider:class extends HTMLElement{listeners;_value;constructor(){super(),this.style.display="contents",this.listeners=new Set,this.addEventListener(D,this)}disconnectedCallback(){this.removeEventListener(D,this)}handleEvent(t){const{detail:r}=t;r.Context===s&&(r.value=this.value,r.unsubscribe=this.unsubscribe.bind(this,r.callback),this.listeners.add(r.callback),t.stopPropagation())}unsubscribe(t){this.listeners.delete(t)}set value(t){this._value=t;for(let r of this.listeners)r(t)}get value(){return this._value}},Consumer:o(function({render:t}){const r=po(s);return t(r)},{useShadowDOM:!1}),defaultValue:e};return s}}f(class extends p{value;values;constructor(o,e,s,t){super(o,e),this.value=s(),this.values=t}update(o,e){return this.hasChanged(e)&&(this.values=e,this.value=o()),this.value}hasChanged(o=[]){return o.some((e,s)=>this.values[s]!==e)}});function zo(o,e){o[z].push(e)}Q(zo);f(class extends p{args;constructor(o,e,s){super(o,e),this.updater=this.updater.bind(this),typeof s=="function"&&(s=s()),this.makeArgs(s)}update(){return this.args}updater(o){const[e]=this.args;typeof o=="function"&&(o=o(e)),!Object.is(e,o)&&(this.makeArgs(o),this.state.update())}makeArgs(o){this.args=Object.freeze([o,this.updater])}});f(class extends p{reducer;currentState;constructor(o,e,s,t,r){super(o,e),this.dispatch=this.dispatch.bind(this),this.currentState=r!==void 0?r(t):t}update(o){return this.reducer=o,[this.currentState,this.dispatch]}dispatch(o){this.currentState=this.reducer(this.currentState,o),this.state.update()}});const yo=/([A-Z])/gu;f(class extends p{property;eventName;constructor(o,e,s,t){if(super(o,e),this.state.virtual)throw new Error("Can't be used with virtual components.");this.updater=this.updater.bind(this),this.property=s,this.eventName=s.replace(yo,"-$1").toLowerCase()+"-changed",this.state.host[this.property]==null&&(typeof t=="function"&&(t=t()),t!=null&&this.updateProp(t))}update(o,e){return[this.state.host[this.property],this.updater]}updater(o){const e=this.state.host[this.property];typeof o=="function"&&(o=o(e)),!Object.is(e,o)&&this.updateProp(o)}updateProp(o){this.notify(o).defaultPrevented||(this.state.host[this.property]=o)}notify(o){const e=new CustomEvent(this.eventName,{detail:{value:o,path:this.property},cancelable:!0});return this.state.host.dispatchEvent(e),e}});function vo({render:o}){const e=go(o),s=fo(e);return{component:e,createContext:s}}const{component:xo}=vo({render:eo}),wo=U(q`
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
		${W(e,()=>i`<span class="dot" part="dot"></span>`,()=>L)}
		<slot name="prefix"></slot>
		<slot></slot>
		<slot name="suffix"></slot>
	</span>`};customElements.define("cosmoz-badge",xo(Eo,{observedAttributes:So,styleSheets:[wo,$o]}));const Po={title:"Cosmoz Badge",component:"cosmoz-badge",tags:["autodocs"],argTypes:{type:{control:"select",options:["pill","color","modern"],description:"Badge type variant",table:{defaultValue:{summary:"pill"}}},color:{control:"select",options:["gray","brand","error","warning","success"],description:"Badge color scheme",table:{defaultValue:{summary:"gray"}}},size:{control:"select",options:["sm","md","lg"],description:"Badge size",table:{defaultValue:{summary:"md"}}},dot:{control:"boolean",description:"Show dot indicator",table:{defaultValue:{summary:"false"}}},label:{control:"text",description:"Badge label text"}}},d=o=>to({...o,width:o.width||"12",height:o.height||"12"}),n=o=>so({...o,width:o.width||"12",height:o.height||"12"}),ko=o=>i`
    <cosmoz-badge
        type=${o.type||"pill"}
        color=${o.color||"gray"}
        size=${o.size||"md"}
        ?dot=${o.dot}
    >
        ${o.label||"Badge"}
    </cosmoz-badge>
`,v={args:{type:"pill",color:"gray",size:"md",label:"Label",dot:!1},render:ko},x={render:()=>i`
        <div class="story-row">
            <cosmoz-badge>Default</cosmoz-badge>
            <cosmoz-badge color="brand">Brand</cosmoz-badge>
            <cosmoz-badge color="error">Error</cosmoz-badge>
            <cosmoz-badge color="warning">Warning</cosmoz-badge>
            <cosmoz-badge color="success">Success</cosmoz-badge>
        </div>
    `,parameters:{docs:{description:{story:"All available color variants for the badge."}}}},w={render:()=>i`
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
                        ${d({slot:"prefix"})} Default
                    </cosmoz-badge>
                    <cosmoz-badge color="brand">
                        ${d({slot:"prefix"})} Brand
                    </cosmoz-badge>
                    <cosmoz-badge color="error">
                        ${d({slot:"prefix"})} Error
                    </cosmoz-badge>
                    <cosmoz-badge color="warning">
                        ${d({slot:"prefix"})} Warning
                    </cosmoz-badge>
                    <cosmoz-badge color="success">
                        ${d({slot:"prefix"})} Success
                    </cosmoz-badge>
                </div>
            </div>
            <div>
                <h1 class="story-section-title">Color</h1>
                <div class="story-row">
                    <cosmoz-badge type="color">
                        ${d({slot:"prefix"})} Default
                    </cosmoz-badge>
                    <cosmoz-badge type="color" color="brand">
                        ${d({slot:"prefix"})} Brand
                    </cosmoz-badge>
                    <cosmoz-badge type="color" color="error">
                        ${d({slot:"prefix"})} Error
                    </cosmoz-badge>
                    <cosmoz-badge type="color" color="warning">
                        ${d({slot:"prefix"})} Warning
                    </cosmoz-badge>
                    <cosmoz-badge type="color" color="success">
                        ${d({slot:"prefix"})} Success
                    </cosmoz-badge>
                </div>
            </div>
            <div>
                <h1 class="story-section-title">Modern</h1>
                <div class="story-row">
                    <cosmoz-badge type="modern">
                        ${d({slot:"prefix"})} Default
                    </cosmoz-badge>
                    <cosmoz-badge type="modern" color="brand">
                        ${d({slot:"prefix"})} Brand
                    </cosmoz-badge>
                    <cosmoz-badge type="modern" color="error">
                        ${d({slot:"prefix"})} Error
                    </cosmoz-badge>
                    <cosmoz-badge type="modern" color="warning">
                        ${d({slot:"prefix"})} Warning
                    </cosmoz-badge>
                    <cosmoz-badge type="modern" color="success">
                        ${d({slot:"prefix"})} Success
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
                        Default ${n({slot:"suffix"})}
                    </cosmoz-badge>
                    <cosmoz-badge color="brand">
                        Brand ${n({slot:"suffix"})}
                    </cosmoz-badge>
                    <cosmoz-badge color="error">
                        Error ${n({slot:"suffix"})}
                    </cosmoz-badge>
                    <cosmoz-badge color="warning">
                        Warning ${n({slot:"suffix"})}
                    </cosmoz-badge>
                    <cosmoz-badge color="success">
                        Success ${n({slot:"suffix"})}
                    </cosmoz-badge>
                </div>
            </div>
            <div>
                <h1 class="story-section-title">Color</h1>
                <div class="story-row">
                    <cosmoz-badge type="color">
                        Default ${n({slot:"suffix"})}
                    </cosmoz-badge>
                    <cosmoz-badge type="color" color="brand">
                        Brand ${n({slot:"suffix"})}
                    </cosmoz-badge>
                    <cosmoz-badge type="color" color="error">
                        Error ${n({slot:"suffix"})}
                    </cosmoz-badge>
                    <cosmoz-badge type="color" color="warning">
                        Warning ${n({slot:"suffix"})}
                    </cosmoz-badge>
                    <cosmoz-badge type="color" color="success">
                        Success ${n({slot:"suffix"})}
                    </cosmoz-badge>
                </div>
            </div>
            <div>
                <h1 class="story-section-title">Modern</h1>
                <div class="story-row">
                    <cosmoz-badge type="modern">
                        Default ${n({slot:"suffix"})}
                    </cosmoz-badge>
                    <cosmoz-badge type="modern" color="brand">
                        Brand ${n({slot:"suffix"})}
                    </cosmoz-badge>
                    <cosmoz-badge type="modern" color="error">
                        Error ${n({slot:"suffix"})}
                    </cosmoz-badge>
                    <cosmoz-badge type="modern" color="warning">
                        Warning ${n({slot:"suffix"})}
                    </cosmoz-badge>
                    <cosmoz-badge type="modern" color="success">
                        Success ${n({slot:"suffix"})}
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
}`,...v.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
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
}`,...x.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
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
}`,...w.parameters?.docs?.source}}};$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`{
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
                        \${customPrefixIcon({
    slot: 'prefix'
  })} Default
                    </cosmoz-badge>
                    <cosmoz-badge color="brand">
                        \${customPrefixIcon({
    slot: 'prefix'
  })} Brand
                    </cosmoz-badge>
                    <cosmoz-badge color="error">
                        \${customPrefixIcon({
    slot: 'prefix'
  })} Error
                    </cosmoz-badge>
                    <cosmoz-badge color="warning">
                        \${customPrefixIcon({
    slot: 'prefix'
  })} Warning
                    </cosmoz-badge>
                    <cosmoz-badge color="success">
                        \${customPrefixIcon({
    slot: 'prefix'
  })} Success
                    </cosmoz-badge>
                </div>
            </div>
            <div>
                <h1 class="story-section-title">Color</h1>
                <div class="story-row">
                    <cosmoz-badge type="color">
                        \${customPrefixIcon({
    slot: 'prefix'
  })} Default
                    </cosmoz-badge>
                    <cosmoz-badge type="color" color="brand">
                        \${customPrefixIcon({
    slot: 'prefix'
  })} Brand
                    </cosmoz-badge>
                    <cosmoz-badge type="color" color="error">
                        \${customPrefixIcon({
    slot: 'prefix'
  })} Error
                    </cosmoz-badge>
                    <cosmoz-badge type="color" color="warning">
                        \${customPrefixIcon({
    slot: 'prefix'
  })} Warning
                    </cosmoz-badge>
                    <cosmoz-badge type="color" color="success">
                        \${customPrefixIcon({
    slot: 'prefix'
  })} Success
                    </cosmoz-badge>
                </div>
            </div>
            <div>
                <h1 class="story-section-title">Modern</h1>
                <div class="story-row">
                    <cosmoz-badge type="modern">
                        \${customPrefixIcon({
    slot: 'prefix'
  })} Default
                    </cosmoz-badge>
                    <cosmoz-badge type="modern" color="brand">
                        \${customPrefixIcon({
    slot: 'prefix'
  })} Brand
                    </cosmoz-badge>
                    <cosmoz-badge type="modern" color="error">
                        \${customPrefixIcon({
    slot: 'prefix'
  })} Error
                    </cosmoz-badge>
                    <cosmoz-badge type="modern" color="warning">
                        \${customPrefixIcon({
    slot: 'prefix'
  })} Warning
                    </cosmoz-badge>
                    <cosmoz-badge type="modern" color="success">
                        \${customPrefixIcon({
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
                        Default \${customSuffixIcon({
    slot: 'suffix'
  })}
                    </cosmoz-badge>
                    <cosmoz-badge color="brand">
                        Brand \${customSuffixIcon({
    slot: 'suffix'
  })}
                    </cosmoz-badge>
                    <cosmoz-badge color="error">
                        Error \${customSuffixIcon({
    slot: 'suffix'
  })}
                    </cosmoz-badge>
                    <cosmoz-badge color="warning">
                        Warning \${customSuffixIcon({
    slot: 'suffix'
  })}
                    </cosmoz-badge>
                    <cosmoz-badge color="success">
                        Success \${customSuffixIcon({
    slot: 'suffix'
  })}
                    </cosmoz-badge>
                </div>
            </div>
            <div>
                <h1 class="story-section-title">Color</h1>
                <div class="story-row">
                    <cosmoz-badge type="color">
                        Default \${customSuffixIcon({
    slot: 'suffix'
  })}
                    </cosmoz-badge>
                    <cosmoz-badge type="color" color="brand">
                        Brand \${customSuffixIcon({
    slot: 'suffix'
  })}
                    </cosmoz-badge>
                    <cosmoz-badge type="color" color="error">
                        Error \${customSuffixIcon({
    slot: 'suffix'
  })}
                    </cosmoz-badge>
                    <cosmoz-badge type="color" color="warning">
                        Warning \${customSuffixIcon({
    slot: 'suffix'
  })}
                    </cosmoz-badge>
                    <cosmoz-badge type="color" color="success">
                        Success \${customSuffixIcon({
    slot: 'suffix'
  })}
                    </cosmoz-badge>
                </div>
            </div>
            <div>
                <h1 class="story-section-title">Modern</h1>
                <div class="story-row">
                    <cosmoz-badge type="modern">
                        Default \${customSuffixIcon({
    slot: 'suffix'
  })}
                    </cosmoz-badge>
                    <cosmoz-badge type="modern" color="brand">
                        Brand \${customSuffixIcon({
    slot: 'suffix'
  })}
                    </cosmoz-badge>
                    <cosmoz-badge type="modern" color="error">
                        Error \${customSuffixIcon({
    slot: 'suffix'
  })}
                    </cosmoz-badge>
                    <cosmoz-badge type="modern" color="warning">
                        Warning \${customSuffixIcon({
    slot: 'suffix'
  })}
                    </cosmoz-badge>
                    <cosmoz-badge type="modern" color="success">
                        Success \${customSuffixIcon({
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
}`,..._.parameters?.docs?.source}}};const Bo=["Default","Colors","Types","Sizes","WithDot","WithPrefixIcon","WithSuffixIcon","AllColorsByType"];export{_ as AllColorsByType,x as Colors,v as Default,$ as Sizes,w as Types,S as WithDot,E as WithPrefixIcon,k as WithSuffixIcon,Bo as __namedExportsOrder,Po as default};
