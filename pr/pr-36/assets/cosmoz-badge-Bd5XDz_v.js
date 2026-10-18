import{D as M,b as B}from"./iframe-U83xhAvN.js";let v,C=0;function _(t){v=t}function $(){v=null,C=0}function U(){return C++}const y=Symbol("haunted.phase"),m=Symbol("haunted.hook"),k=Symbol("haunted.update"),S=Symbol("haunted.commit"),u=Symbol("haunted.effects"),b=Symbol("haunted.layoutEffects"),z="haunted.context";class Q{update;host;virtual;[m];[u];[b];constructor(e,s){this.update=e,this.host=s,this[m]=new Map,this[u]=[],this[b]=[]}run(e){_(this);let s=e();return $(),s}_runEffects(e){let s=this[e];_(this);for(let r of s)r.call(this);$()}runEffects(){this._runEffects(u)}runLayoutEffects(){this._runEffects(b)}teardown(){this[m].forEach(s=>{typeof s.teardown=="function"&&s.teardown(!0)})}}const H=Promise.resolve().then.bind(Promise.resolve());function P(){let t=[],e;function s(){e=null;let r=t;t=[];for(var n=0,h=r.length;n<h;n++)r[n]()}return function(r){t.push(r),e==null&&(e=H(s))}}const q=P(),E=P();class Y{renderer;host;state;[y];_updateQueued;_active;constructor(e,s){this.renderer=e,this.host=s,this.state=new Q(this.update.bind(this),s),this[y]=null,this._updateQueued=!1,this._active=!0}update(){this._active&&(this._updateQueued||(q(()=>{let e=this.handlePhase(k);E(()=>{this.handlePhase(S,e),E(()=>{this.handlePhase(u)})}),this._updateQueued=!1}),this._updateQueued=!0))}handlePhase(e,s){switch(this[y]=e,e){case S:this.commit(s),this.runEffects(b);return;case k:return this.render();case u:return this.runEffects(u)}}render(){return this.state.run(()=>this.renderer.call(this.host,this.host))}runEffects(e){this.state._runEffects(e)}teardown(){this.state.teardown()}pause(){this._active=!1}resume(){this._active=!0}}const O=(...t)=>{const e=new CSSStyleSheet;return e.replaceSync(t.join("")),e},Z=t=>t?.map(e=>typeof e=="string"?O(e):e),G=(t,...e)=>t.flatMap((s,r)=>[s,e[r]||""]).join(""),R=G,V=(t="")=>t.replace(/-+([a-z])?/g,(e,s)=>s?s.toUpperCase():"");function J(t){class e extends Y{frag;renderResult;constructor(n,h,g){super(n,g||h),this.frag=h}commit(n){this.renderResult=t(n,this.frag)}}function s(r,n,h){const g=(h||n||{}).baseElement||HTMLElement,{observedAttributes:N=[],useShadowDOM:j=!0,shadowRootInit:I={},styleSheets:L}=h||n||{},w=Z(r.styleSheets||L);class x extends g{_scheduler;static get observedAttributes(){return r.observedAttributes||N||[]}constructor(){if(super(),j===!1)this._scheduler=new e(r,this);else{const i=this.attachShadow({mode:"open",...I});w&&(i.adoptedStyleSheets=w),this._scheduler=new e(r,i,this)}}connectedCallback(){this._scheduler.resume(),this._scheduler.update(),this._scheduler.renderResult?.setConnected(!0)}disconnectedCallback(){this._scheduler.pause(),this._scheduler.teardown(),this._scheduler.renderResult?.setConnected(!1)}attributeChangedCallback(i,d,a){if(d===a)return;let c=a===""?!0:a;Reflect.set(this,V(i),c)}}function D(l){let i=l,d=!1;return Object.freeze({enumerable:!0,configurable:!0,get(){return i},set(a){d&&i===a||(d=!0,i=a,this._scheduler&&this._scheduler.update())}})}const F=new Proxy(g.prototype,{getPrototypeOf(l){return l},set(l,i,d,a){let c;return i in l?(c=Object.getOwnPropertyDescriptor(l,i),c&&c.set?(c.set.call(a,d),!0):(Reflect.set(l,i,d,a),!0)):(typeof i=="symbol"||i[0]==="_"?c={enumerable:!0,configurable:!0,writable:!0,value:d}:c=D(d),Object.defineProperty(a,i,c),c.set&&c.set.call(a,d),!0)}});return Object.setPrototypeOf(x.prototype,F),x}return s}class p{id;state;constructor(e,s){this.id=e,this.state=s}}function K(t,...e){let s=U(),r=v[m],n=r.get(s);return n||(n=new t(s,v,...e),r.set(s,n)),n.update(...e)}function f(t){return K.bind(null,t)}function A(t){return f(class extends p{callback;lastValues;values;_teardown;constructor(e,s,r,n){super(e,s),t(s,this)}update(e,s){this.callback=e,this.values=s}call(){const e=!this.values||this.hasChanged();this.lastValues=this.values,e&&this.run()}run(){this.teardown(),this._teardown=this.callback.call(this.state)}teardown(e){typeof this._teardown=="function"&&(this._teardown(),this._teardown=void 0),e&&(this.lastValues=this.values=void 0)}hasChanged(){return!this.lastValues||this.values.some((e,s)=>this.lastValues[s]!==e)}})}function T(t,e){t[u].push(e)}A(T);const W=t=>t instanceof Element?t:t.startNode||t.endNode||t.parentNode,X=f(class extends p{Context;value;_ranEffect;_unsubscribe;constructor(t,e,s){super(t,e),this._updater=this._updater.bind(this),this._ranEffect=!1,this._unsubscribe=null,T(e,this)}update(t){return this.Context!==t&&(this._subscribe(t),this.Context=t),this.value}call(){this._ranEffect||(this._ranEffect=!0,this._unsubscribe&&this._unsubscribe(),this._subscribe(this.Context),this.state.update())}_updater(t){this.value=t,this.state.update()}_subscribe(t){const e={Context:t,callback:this._updater};W(this.state.host).dispatchEvent(new CustomEvent(z,{detail:e,bubbles:!0,cancelable:!0,composed:!0}));const{unsubscribe:r=null,value:n}=e;this.value=r?n:t.defaultValue,this._unsubscribe=r}teardown(){this._unsubscribe&&this._unsubscribe()}});function tt(t){return e=>{const s={Provider:class extends HTMLElement{listeners;_value;constructor(){super(),this.style.display="contents",this.listeners=new Set,this.addEventListener(z,this)}disconnectedCallback(){this.removeEventListener(z,this)}handleEvent(r){const{detail:n}=r;n.Context===s&&(n.value=this.value,n.unsubscribe=this.unsubscribe.bind(this,n.callback),this.listeners.add(n.callback),r.stopPropagation())}unsubscribe(r){this.listeners.delete(r)}set value(r){this._value=r;for(let n of this.listeners)n(r)}get value(){return this._value}},Consumer:t(function({render:r}){const n=X(s);return r(n)},{useShadowDOM:!1}),defaultValue:e};return s}}f(class extends p{value;values;constructor(t,e,s,r){super(t,e),this.value=s(),this.values=r}update(t,e){return this.hasChanged(e)&&(this.values=e,this.value=t()),this.value}hasChanged(t=[]){return t.some((e,s)=>this.values[s]!==e)}});function et(t,e){t[b].push(e)}A(et);f(class extends p{args;constructor(t,e,s){super(t,e),this.updater=this.updater.bind(this),typeof s=="function"&&(s=s()),this.makeArgs(s)}update(){return this.args}updater(t){const[e]=this.args;typeof t=="function"&&(t=t(e)),!Object.is(e,t)&&(this.makeArgs(t),this.state.update())}makeArgs(t){this.args=Object.freeze([t,this.updater])}});f(class extends p{reducer;currentState;constructor(t,e,s,r,n){super(t,e),this.dispatch=this.dispatch.bind(this),this.currentState=n!==void 0?n(r):r}update(t){return this.reducer=t,[this.currentState,this.dispatch]}dispatch(t){this.currentState=this.reducer(this.currentState,t),this.state.update()}});const st=/([A-Z])/gu;f(class extends p{property;eventName;constructor(t,e,s,r){if(super(t,e),this.state.virtual)throw new Error("Can't be used with virtual components.");this.updater=this.updater.bind(this),this.property=s,this.eventName=s.replace(st,"-$1").toLowerCase()+"-changed",this.state.host[this.property]==null&&(typeof r=="function"&&(r=r()),r!=null&&this.updateProp(r))}update(t,e){return[this.state.host[this.property],this.updater]}updater(t){const e=this.state.host[this.property];typeof t=="function"&&(t=t(e)),!Object.is(e,t)&&this.updateProp(t)}updateProp(t){this.notify(t).defaultPrevented||(this.state.host[this.property]=t)}notify(t){const e=new CustomEvent(this.eventName,{detail:{value:t,path:this.property},cancelable:!0});return this.state.host.dispatchEvent(e),e}});function ot({render:t}){const e=J(t),s=tt(e);return{component:e,createContext:s}}const{component:rt}=ot({render:M}),nt=O(R`
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
`),o=t=>`calc(var(--cz-spacing) * ${t})`,it=R`
	/* =========================================
	 * HOST
	 * ========================================= */
	:host {
		display: inline-block;
		max-width: 100%;
		min-width: 0;
	}

	/* =========================================
	 * BADGE BASE (default: pill, md)
	 * ========================================= */
	.badge {
		display: inline-flex;
		align-items: center;
		gap: ${o(1.5)};
		max-width: 100%;
		min-width: calc(var(--cz-spacing) * 2);
		white-space: nowrap;
		font-family: var(--cz-font-body);
		font-weight: var(--cz-font-weight-medium);
		border: 1px solid
			var(--cosmoz-badge-border-color, var(--cz-color-border-secondary));
		background-color: var(
			--cosmoz-badge-bg-color,
			var(--cz-color-bg-secondary)
		);
		color: var(--cz-color-text-secondary);
		border-radius: var(--cz-radius-full);
		padding: ${o(.5)} ${o(2)};
		font-size: var(--cz-text-sm);
		line-height: var(--cz-text-sm-line-height);
	}

	.content {
		overflow: hidden;
		text-overflow: ellipsis;
		min-width: 0;
	}

	/* =========================================
	 * COLOR VARIANTS
	 * ========================================= */

	:host([color='brand']) .badge {
		background-color: var(--cz-color-bg-brand-subtle);
		color: var(--cz-color-text-brand);
		border-color: var(--cz-color-border-brand-subtle);
	}

	:host([color='error']) .badge {
		background-color: var(--cz-color-bg-error);
		color: var(--cz-color-text-error);
		border-color: var(--cz-color-border-error-subtle);
	}

	:host([color='warning']) .badge {
		background-color: var(--cz-color-bg-warning);
		color: var(--cz-color-text-warning);
		border-color: var(--cz-color-border-warning-subtle);
	}

	:host([color='success']) .badge {
		background-color: var(--cz-color-bg-success);
		color: var(--cz-color-text-success);
		border-color: var(--cz-color-border-success-subtle);
	}

	:host([color='processing']) .badge {
		background-color: var(--cz-color-bg-processing);
		color: var(--cz-color-text-processing);
		border-color: var(--cz-color-border-processing-subtle);
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
		padding: ${o(.5)} ${o(2)};
	}

	:host([type='modern']) .badge {
		box-shadow: var(--cz-shadow-xs);
	}

	/* =========================================
	 * SIZE VARIANTS
	 * ========================================= */

	/* --- Pill sizes --- */
	:host([size='sm']) .badge {
		padding: ${o(.5)} ${o(2)};
		font-size: var(--cz-text-xs);
		line-height: var(--cz-text-xs-line-height);
		gap: ${o(1)};
	}

	:host([size='lg']) .badge {
		padding: ${o(1)} ${o(3)};
	}

	/* --- Badge sizes --- */
	:host([type='color'][size='sm']) .badge,
	:host([type='modern'][size='sm']) .badge {
		padding: ${o(.5)} ${o(1.5)};
		font-size: var(--cz-text-xs);
		line-height: var(--cz-text-xs-line-height);
		gap: ${o(1)};
	}

	:host([type='color'][size='lg']) .badge,
	:host([type='modern'][size='lg']) .badge {
		padding: ${o(1)} ${o(2.5)};
		border-radius: var(--cz-radius-md);
	}

	/* =========================================
	 * DOT INDICATOR
	 * ========================================= */
	.dot {
		width: ${o(2)};
		height: ${o(2)};
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
	:host([color='processing']) .dot {
		background-color: var(--cz-color-fg-processing-secondary);
	}
	/* Pill + dot: asymmetric padding (tighter left) */
	:host([dot]) .badge {
		padding: ${o(.5)} ${o(2.5)} ${o(.5)} ${o(2)};
	}

	:host([dot][size='sm']) .badge {
		padding: ${o(.5)} ${o(2)} ${o(.5)} ${o(1.5)};
	}

	:host([dot][size='lg']) .badge {
		padding: ${o(1)} ${o(3)} ${o(1)} ${o(2.5)};
	}

	/* Badge + dot: symmetric padding (same as base badge) */
	:host([dot][type='color']) .badge,
	:host([dot][type='modern']) .badge {
		padding: ${o(.5)} ${o(2)};
	}

	:host([dot][type='color'][size='sm']) .badge,
	:host([dot][type='modern'][size='sm']) .badge {
		padding: ${o(.5)} ${o(1.5)};
	}

	:host([dot][type='color'][size='lg']) .badge,
	:host([dot][type='modern'][size='lg']) .badge {
		padding: ${o(1)} ${o(2.5)};
	}

	/* =========================================
	 * ICON-ONLY TYPE
	 * ========================================= */
	:host([type='icon']) .badge {
		padding: ${o(2)};
		gap: 0;
	}

	:host([type='icon'][size='sm']) .badge {
		padding: ${o(1.5)};
	}

	:host([type='icon'][size='lg']) .badge {
		padding: ${o(2.5)};
	}

	:host([type='icon']) .dot,
	:host([type='icon']) slot[name='prefix'],
	:host([type='icon']) slot[name='suffix'] {
		display: none;
	}

	:host([type='icon']) ::slotted(svg) {
		width: ${o(4)};
		height: ${o(4)};
	}

	:host([type='icon'][size='sm']) ::slotted(svg) {
		width: ${o(3)};
		height: ${o(3)};
	}
	:host([type='icon'][size='lg']) ::slotted(svg) {
		width: ${o(5)};
		height: ${o(5)};
	}

	/* =========================================
	 * SLOTTED CONTENT (icons, images, flags)
	 * ========================================= */
	::slotted(svg) {
		display: block;
		width: ${o(3)};
		height: ${o(3)};
		flex-shrink: 0;
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
	:host([color='processing']) ::slotted(svg) {
		color: var(--cz-color-fg-processing-secondary);
	}

	/* Compact counters keep a stable pill height around smaller metadata text. */
	:host([size='xs']) .badge,
	:host([size='xs'][dot]) .badge {
		box-sizing: border-box;
		min-height: ${o(5)};
		padding: 0 ${o(1)};
		font-size: var(--cz-text-2xs, var(--cz-text-xs));
		line-height: var(--cz-text-2xs-line-height, var(--cz-text-xs-line-height));
		font-weight: var(--cz-font-weight-regular);
		gap: ${o(1)};
	}

	:host([type='icon'][size='xs']) .badge {
		padding: ${o(.5)};
	}

	:host([type='icon'][size='xs']) ::slotted(svg) {
		width: ${o(3)};
		height: ${o(3)};
	}
`,at=()=>B`<span class="badge" part="badge" role="status">
		<span class="dot" part="dot"></span>
		<slot name="prefix"></slot>
		<span class="content"><slot></slot></span>
		<slot name="suffix"></slot>
	</span>`;customElements.define("cosmoz-badge",rt(at,{styleSheets:[nt,it]}));
