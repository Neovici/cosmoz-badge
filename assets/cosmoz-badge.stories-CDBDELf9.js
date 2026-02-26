import{A as oo,b as g,w as G,D as eo}from"./iframe-eogU5pI2.js";import"./preload-helper-PPVm8Dsz.js";const P=o=>o??oo;function L(o,e,s){return o?e(o):s?.(o)}const so=({slot:o,title:e,className:s,width:r="24",height:t="24",styles:i}={})=>g`
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
    width=${r}
    height=${t}
    style=${P(i)}
  >
    ${L(e,()=>G`<title>${e}</title>`)}
    <path d="M5 12h14m0 0-7-7m7 7-7 7" />
  </svg>
`,ro=({slot:o,title:e,className:s,width:r="24",height:t="24",styles:i}={})=>g`
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
    width=${r}
    height=${t}
    style=${P(i)}
  >
    ${L(e,()=>G`<title>${e}</title>`)}
    <path d="M12 19V5m0 0-7 7m7-7 7 7" />
  </svg>
`;let B,N=0;function A(o){B=o}function R(){B=null,N=0}function to(){return N++}const I=Symbol("haunted.phase"),C=Symbol("haunted.hook"),T=Symbol("haunted.update"),O=Symbol("haunted.commit"),h=Symbol("haunted.effects"),z=Symbol("haunted.layoutEffects"),D="haunted.context";class co{update;host;virtual;[C];[h];[z];constructor(e,s){this.update=e,this.host=s,this[C]=new Map,this[h]=[],this[z]=[]}run(e){A(this);let s=e();return R(),s}_runEffects(e){let s=this[e];A(this);for(let r of s)r.call(this);R()}runEffects(){this._runEffects(h)}runLayoutEffects(){this._runEffects(z)}teardown(){this[C].forEach(s=>{typeof s.teardown=="function"&&s.teardown(!0)})}}const ao=Promise.resolve().then.bind(Promise.resolve());function V(){let o=[],e;function s(){e=null;let r=o;o=[];for(var t=0,i=r.length;t<i;t++)r[t]()}return function(r){o.push(r),e==null&&(e=ao(s))}}const no=V(),j=V();class io{renderer;host;state;[I];_updateQueued;_active;constructor(e,s){this.renderer=e,this.host=s,this.state=new co(this.update.bind(this),s),this[I]=null,this._updateQueued=!1,this._active=!0}update(){this._active&&(this._updateQueued||(no(()=>{let e=this.handlePhase(T);j(()=>{this.handlePhase(O,e),j(()=>{this.handlePhase(h)})}),this._updateQueued=!1}),this._updateQueued=!0))}handlePhase(e,s){switch(this[I]=e,e){case O:this.commit(s),this.runEffects(z);return;case T:return this.render();case h:return this.runEffects(h)}}render(){return this.state.run(()=>this.renderer.call(this.host,this.host))}runEffects(e){this.state._runEffects(e)}teardown(){this.state.teardown()}pause(){this._active=!1}resume(){this._active=!0}}const F=(...o)=>{const e=new CSSStyleSheet;return e.replaceSync(o.join("")),e},lo=o=>o?.map(e=>typeof e=="string"?F(e):e),mo=(o,...e)=>o.flatMap((s,r)=>[s,e[r]||""]).join(""),U=mo,go=(o="")=>o.replace(/-+([a-z])?/g,(e,s)=>s?s.toUpperCase():"");function uo(o){class e extends io{frag;renderResult;constructor(t,i,y){super(t,y||i),this.frag=i}commit(t){this.renderResult=o(t,this.frag)}}function s(r,t,i){const y=(i||t||{}).baseElement||HTMLElement,{observedAttributes:H=[],useShadowDOM:Y=!0,shadowRootInit:Z={},styleSheets:J}=i||t||{},W=lo(r.styleSheets||J);class M extends y{_scheduler;static get observedAttributes(){return r.observedAttributes||H||[]}constructor(){if(super(),Y===!1)this._scheduler=new e(r,this);else{const a=this.attachShadow({mode:"open",...Z});W&&(a.adoptedStyleSheets=W),this._scheduler=new e(r,a,this)}}connectedCallback(){this._scheduler.resume(),this._scheduler.update(),this._scheduler.renderResult?.setConnected(!0)}disconnectedCallback(){this._scheduler.pause(),this._scheduler.teardown(),this._scheduler.renderResult?.setConnected(!1)}attributeChangedCallback(a,u,l){if(u===l)return;let m=l===""?!0:l;Reflect.set(this,go(a),m)}}function K(b){let a=b,u=!1;return Object.freeze({enumerable:!0,configurable:!0,get(){return a},set(l){u&&a===l||(u=!0,a=l,this._scheduler&&this._scheduler.update())}})}const X=new Proxy(y.prototype,{getPrototypeOf(b){return b},set(b,a,u,l){let m;return a in b?(m=Object.getOwnPropertyDescriptor(b,a),m&&m.set?(m.set.call(l,u),!0):(Reflect.set(b,a,u,l),!0)):(typeof a=="symbol"||a[0]==="_"?m={enumerable:!0,configurable:!0,writable:!0,value:u}:m=K(u),Object.defineProperty(l,a,m),m.set&&m.set.call(l,u),!0)}});return Object.setPrototypeOf(M.prototype,X),M}return s}class p{id;state;constructor(e,s){this.id=e,this.state=s}}function bo(o,...e){let s=to(),r=B[C],t=r.get(s);return t||(t=new o(s,B,...e),r.set(s,t)),t.update(...e)}function f(o){return bo.bind(null,o)}function q(o){return f(class extends p{callback;lastValues;values;_teardown;constructor(e,s,r,t){super(e,s),o(s,this)}update(e,s){this.callback=e,this.values=s}call(){const e=!this.values||this.hasChanged();this.lastValues=this.values,e&&this.run()}run(){this.teardown(),this._teardown=this.callback.call(this.state)}teardown(e){typeof this._teardown=="function"&&(this._teardown(),this._teardown=void 0),e&&(this.lastValues=this.values=void 0)}hasChanged(){return!this.lastValues||this.values.some((e,s)=>this.lastValues[s]!==e)}})}function Q(o,e){o[h].push(e)}q(Q);const ho=o=>o instanceof Element?o:o.startNode||o.endNode||o.parentNode,po=f(class extends p{Context;value;_ranEffect;_unsubscribe;constructor(o,e,s){super(o,e),this._updater=this._updater.bind(this),this._ranEffect=!1,this._unsubscribe=null,Q(e,this)}update(o){return this.Context!==o&&(this._subscribe(o),this.Context=o),this.value}call(){this._ranEffect||(this._ranEffect=!0,this._unsubscribe&&this._unsubscribe(),this._subscribe(this.Context),this.state.update())}_updater(o){this.value=o,this.state.update()}_subscribe(o){const e={Context:o,callback:this._updater};ho(this.state.host).dispatchEvent(new CustomEvent(D,{detail:e,bubbles:!0,cancelable:!0,composed:!0}));const{unsubscribe:r=null,value:t}=e;this.value=r?t:o.defaultValue,this._unsubscribe=r}teardown(){this._unsubscribe&&this._unsubscribe()}});function fo(o){return e=>{const s={Provider:class extends HTMLElement{listeners;_value;constructor(){super(),this.style.display="contents",this.listeners=new Set,this.addEventListener(D,this)}disconnectedCallback(){this.removeEventListener(D,this)}handleEvent(r){const{detail:t}=r;t.Context===s&&(t.value=this.value,t.unsubscribe=this.unsubscribe.bind(this,t.callback),this.listeners.add(t.callback),r.stopPropagation())}unsubscribe(r){this.listeners.delete(r)}set value(r){this._value=r;for(let t of this.listeners)t(r)}get value(){return this._value}},Consumer:o(function({render:r}){const t=po(s);return r(t)},{useShadowDOM:!1}),defaultValue:e};return s}}f(class extends p{value;values;constructor(o,e,s,r){super(o,e),this.value=s(),this.values=r}update(o,e){return this.hasChanged(e)&&(this.values=e,this.value=o()),this.value}hasChanged(o=[]){return o.some((e,s)=>this.values[s]!==e)}});function zo(o,e){o[z].push(e)}q(zo);f(class extends p{args;constructor(o,e,s){super(o,e),this.updater=this.updater.bind(this),typeof s=="function"&&(s=s()),this.makeArgs(s)}update(){return this.args}updater(o){const[e]=this.args;typeof o=="function"&&(o=o(e)),!Object.is(e,o)&&(this.makeArgs(o),this.state.update())}makeArgs(o){this.args=Object.freeze([o,this.updater])}});f(class extends p{reducer;currentState;constructor(o,e,s,r,t){super(o,e),this.dispatch=this.dispatch.bind(this),this.currentState=t!==void 0?t(r):r}update(o){return this.reducer=o,[this.currentState,this.dispatch]}dispatch(o){this.currentState=this.reducer(this.currentState,o),this.state.update()}});const yo=/([A-Z])/gu;f(class extends p{property;eventName;constructor(o,e,s,r){if(super(o,e),this.state.virtual)throw new Error("Can't be used with virtual components.");this.updater=this.updater.bind(this),this.property=s,this.eventName=s.replace(yo,"-$1").toLowerCase()+"-changed",this.state.host[this.property]==null&&(typeof r=="function"&&(r=r()),r!=null&&this.updateProp(r))}update(o,e){return[this.state.host[this.property],this.updater]}updater(o){const e=this.state.host[this.property];typeof o=="function"&&(o=o(e)),!Object.is(e,o)&&this.updateProp(o)}updateProp(o){this.notify(o).defaultPrevented||(this.state.host[this.property]=o)}notify(o){const e=new CustomEvent(this.eventName,{detail:{value:o,path:this.property},cancelable:!0});return this.state.host.dispatchEvent(e),e}});function vo({render:o}){const e=uo(o),s=fo(e);return{component:e,createContext:s}}const{component:xo}=vo({render:eo}),wo=F(U`
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
`),c=o=>`calc(var(--cz-spacing) * ${o})`,$o=U`
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
	:host(:not([dot])) .dot {
		display: none;
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
`,So=()=>g`<span class="badge" part="badge" role="status">
		<span class="dot" part="dot"></span>
		<slot name="prefix"></slot>
		<slot></slot>
		<slot name="suffix"></slot>
	</span>`;customElements.define("cosmoz-badge",xo(So,{styleSheets:[wo,$o]}));const Co={title:"Cosmoz Badge",component:"cosmoz-badge",tags:["autodocs"],argTypes:{type:{control:"select",options:["pill","color","modern"],description:"Badge type variant",table:{defaultValue:{summary:"pill"}}},color:{control:"select",options:["gray","brand","error","warning","success"],description:"Badge color scheme",table:{defaultValue:{summary:"gray"}}},size:{control:"select",options:["sm","md","lg"],description:"Badge size",table:{defaultValue:{summary:"md"}}},dot:{control:"boolean",description:"Show dot indicator",table:{defaultValue:{summary:"false"}}},label:{control:"text",description:"Badge label text"}}},n=o=>ro({...o,width:o.width||"12",height:o.height||"12"}),d=o=>so({...o,width:o.width||"12",height:o.height||"12"}),Eo=o=>g`
    <cosmoz-badge
        type=${o.type||"pill"}
        color=${o.color||"gray"}
        size=${o.size||"md"}
        ?dot=${o.dot}
    >
        ${o.label||"Badge"}
    </cosmoz-badge>
`,v={args:{type:"pill",color:"gray",size:"md",label:"Label",dot:!1},render:Eo},x={render:()=>g`
        <div class="story-row">
            <cosmoz-badge>Default</cosmoz-badge>
            <cosmoz-badge color="brand">Brand</cosmoz-badge>
            <cosmoz-badge color="error">Error</cosmoz-badge>
            <cosmoz-badge color="warning">Warning</cosmoz-badge>
            <cosmoz-badge color="success">Success</cosmoz-badge>
        </div>
    `,parameters:{docs:{description:{story:"All available color variants for the badge."}}}},w={render:()=>g`
        <div class="story-row">
            <cosmoz-badge>Gray</cosmoz-badge>
            <cosmoz-badge type="color" color="brand">Color</cosmoz-badge>
            <cosmoz-badge type="modern">Modern</cosmoz-badge>
        </div>
    `,parameters:{docs:{description:{story:"The three badge types: pill (rounded), badge (square corners), and modern (shadow + neutral colors)."}}}},$={render:()=>g`
        <div class="story-row">
            <cosmoz-badge size="sm" color="brand">Small</cosmoz-badge>
            <cosmoz-badge size="md" color="brand">Medium</cosmoz-badge>
            <cosmoz-badge size="lg" color="brand">Large</cosmoz-badge>
        </div>
    `,parameters:{docs:{description:{story:"Badge sizes: sm, md, and lg."}}}},S={render:()=>g`
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
    `,parameters:{docs:{description:{story:"Badge with a colored dot indicator. The dot color follows the badge color scheme."}}}},E={render:()=>g`
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
    `,parameters:{docs:{description:{story:'Badge with a leading (prefix) icon. Place an SVG with slot="prefix".'}}}},k={render:()=>g`
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
    `,parameters:{docs:{description:{story:'Badge with a trailing (suffix) icon. Place an SVG with slot="suffix".'}}}},_={render:()=>g`
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
}`,..._.parameters?.docs?.source}}};const Po=["Default","Colors","Types","Sizes","WithDot","WithPrefixIcon","WithSuffixIcon","AllColorsByType"];export{_ as AllColorsByType,x as Colors,v as Default,$ as Sizes,w as Types,S as WithDot,E as WithPrefixIcon,k as WithSuffixIcon,Po as __namedExportsOrder,Co as default};
