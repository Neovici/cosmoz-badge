import{A as H,b as h,w as M,D as Y}from"./iframe-D6XcGbKp.js";import"./preload-helper-PPVm8Dsz.js";const x=e=>e??H;function j(e,t,s){return e?t(e):s?.(e)}const Z=({slot:e,title:t,className:s,width:r="24",height:o="24",styles:n}={})=>h`
  <svg
    slot=${x(e)}
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
    height=${o}
    style=${x(n)}
  >
    ${j(t,()=>M`<title>${t}</title>`)}
    <path
      d="M12 9v4m0 4h.01M10.615 3.892 2.39 18.098c-.456.788-.684 1.182-.65 1.506a1 1 0 0 0 .406.705c.263.191.718.191 1.629.191h16.45c.91 0 1.365 0 1.628-.191a1 1 0 0 0 .407-.705c.034-.324-.195-.718-.65-1.506L13.383 3.892c-.454-.785-.681-1.178-.978-1.31a1 1 0 0 0-.813 0c-.296.132-.523.525-.978 1.31Z"
    />
  </svg>
`,G=({slot:e,title:t,className:s,width:r="24",height:o="24",styles:n}={})=>h`
  <svg
    slot=${x(e)}
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
    height=${o}
    style=${x(n)}
  >
    ${j(t,()=>M`<title>${t}</title>`)}
    <path d="M12 19V5m0 0-7 7m7-7 7 7" />
  </svg>
`;let S,O=0;function A(e){S=e}function R(){S=null,O=0}function J(){return O++}const _=Symbol("haunted.phase"),w=Symbol("haunted.hook"),$=Symbol("haunted.update"),P=Symbol("haunted.commit"),u=Symbol("haunted.effects"),b=Symbol("haunted.layoutEffects"),k="haunted.context";class K{update;host;virtual;[w];[u];[b];constructor(t,s){this.update=t,this.host=s,this[w]=new Map,this[u]=[],this[b]=[]}run(t){A(this);let s=t();return R(),s}_runEffects(t){let s=this[t];A(this);for(let r of s)r.call(this);R()}runEffects(){this._runEffects(u)}runLayoutEffects(){this._runEffects(b)}teardown(){this[w].forEach(s=>{typeof s.teardown=="function"&&s.teardown(!0)})}}const X=Promise.resolve().then.bind(Promise.resolve());function B(){let e=[],t;function s(){t=null;let r=e;e=[];for(var o=0,n=r.length;o<n;o++)r[o]()}return function(r){e.push(r),t==null&&(t=X(s))}}const ee=B(),T=B();class te{renderer;host;state;[_];_updateQueued;_active;constructor(t,s){this.renderer=t,this.host=s,this.state=new K(this.update.bind(this),s),this[_]=null,this._updateQueued=!1,this._active=!0}update(){this._active&&(this._updateQueued||(ee(()=>{let t=this.handlePhase($);T(()=>{this.handlePhase(P,t),T(()=>{this.handlePhase(u)})}),this._updateQueued=!1}),this._updateQueued=!0))}handlePhase(t,s){switch(this[_]=t,t){case P:this.commit(s),this.runEffects(b);return;case $:return this.render();case u:return this.runEffects(u)}}render(){return this.state.run(()=>this.renderer.call(this.host,this.host))}runEffects(t){this.state._runEffects(t)}teardown(){this.state.teardown()}pause(){this._active=!1}resume(){this._active=!0}}const D=(...e)=>{const t=new CSSStyleSheet;return t.replaceSync(e.join("")),t},se=e=>e?.map(t=>typeof t=="string"?D(t):t),re=(e,...t)=>e.flatMap((s,r)=>[s,t[r]||""]).join(""),I=re,oe=(e="")=>e.replace(/-+([a-z])?/g,(t,s)=>s?s.toUpperCase():"");function ae(e){class t extends te{frag;renderResult;constructor(o,n,g){super(o,g||n),this.frag=n}commit(o){this.renderResult=e(o,this.frag)}}function s(r,o,n){const g=(n||o||{}).baseElement||HTMLElement,{observedAttributes:N=[],useShadowDOM:U=!0,shadowRootInit:q={},styleSheets:V}=n||o||{},E=se(r.styleSheets||V);class C extends g{_scheduler;static get observedAttributes(){return r.observedAttributes||N||[]}constructor(){if(super(),U===!1)this._scheduler=new t(r,this);else{const a=this.attachShadow({mode:"open",...q});E&&(a.adoptedStyleSheets=E),this._scheduler=new t(r,a,this)}}connectedCallback(){this._scheduler.resume(),this._scheduler.update(),this._scheduler.renderResult?.setConnected(!0)}disconnectedCallback(){this._scheduler.pause(),this._scheduler.teardown(),this._scheduler.renderResult?.setConnected(!1)}attributeChangedCallback(a,d,i){if(d===i)return;let c=i===""?!0:i;Reflect.set(this,oe(a),c)}}function W(l){let a=l,d=!1;return Object.freeze({enumerable:!0,configurable:!0,get(){return a},set(i){d&&a===i||(d=!0,a=i,this._scheduler&&this._scheduler.update())}})}const Q=new Proxy(g.prototype,{getPrototypeOf(l){return l},set(l,a,d,i){let c;return a in l?(c=Object.getOwnPropertyDescriptor(l,a),c&&c.set?(c.set.call(i,d),!0):(Reflect.set(l,a,d,i),!0)):(typeof a=="symbol"||a[0]==="_"?c={enumerable:!0,configurable:!0,writable:!0,value:d}:c=W(d),Object.defineProperty(i,a,c),c.set&&c.set.call(i,d),!0)}});return Object.setPrototypeOf(C.prototype,Q),C}return s}class f{id;state;constructor(t,s){this.id=t,this.state=s}}function ne(e,...t){let s=J(),r=S[w],o=r.get(s);return o||(o=new e(s,S,...t),r.set(s,o)),o.update(...t)}function p(e){return ne.bind(null,e)}function L(e){return p(class extends f{callback;lastValues;values;_teardown;constructor(t,s,r,o){super(t,s),e(s,this)}update(t,s){this.callback=t,this.values=s}call(){const t=!this.values||this.hasChanged();this.lastValues=this.values,t&&this.run()}run(){this.teardown(),this._teardown=this.callback.call(this.state)}teardown(t){typeof this._teardown=="function"&&(this._teardown(),this._teardown=void 0),t&&(this.lastValues=this.values=void 0)}hasChanged(){return!this.lastValues||this.values.some((t,s)=>this.lastValues[s]!==t)}})}function F(e,t){e[u].push(t)}L(F);const ie=e=>e instanceof Element?e:e.startNode||e.endNode||e.parentNode,ce=p(class extends f{Context;value;_ranEffect;_unsubscribe;constructor(e,t,s){super(e,t),this._updater=this._updater.bind(this),this._ranEffect=!1,this._unsubscribe=null,F(t,this)}update(e){return this.Context!==e&&(this._subscribe(e),this.Context=e),this.value}call(){this._ranEffect||(this._ranEffect=!0,this._unsubscribe&&this._unsubscribe(),this._subscribe(this.Context),this.state.update())}_updater(e){this.value=e,this.state.update()}_subscribe(e){const t={Context:e,callback:this._updater};ie(this.state.host).dispatchEvent(new CustomEvent(k,{detail:t,bubbles:!0,cancelable:!0,composed:!0}));const{unsubscribe:r=null,value:o}=t;this.value=r?o:e.defaultValue,this._unsubscribe=r}teardown(){this._unsubscribe&&this._unsubscribe()}});function de(e){return t=>{const s={Provider:class extends HTMLElement{listeners;_value;constructor(){super(),this.style.display="contents",this.listeners=new Set,this.addEventListener(k,this)}disconnectedCallback(){this.removeEventListener(k,this)}handleEvent(r){const{detail:o}=r;o.Context===s&&(o.value=this.value,o.unsubscribe=this.unsubscribe.bind(this,o.callback),this.listeners.add(o.callback),r.stopPropagation())}unsubscribe(r){this.listeners.delete(r)}set value(r){this._value=r;for(let o of this.listeners)o(r)}get value(){return this._value}},Consumer:e(function({render:r}){const o=ce(s);return r(o)},{useShadowDOM:!1}),defaultValue:t};return s}}p(class extends f{value;values;constructor(e,t,s,r){super(e,t),this.value=s(),this.values=r}update(e,t){return this.hasChanged(t)&&(this.values=t,this.value=e()),this.value}hasChanged(e=[]){return e.some((t,s)=>this.values[s]!==t)}});function le(e,t){e[b].push(t)}L(le);p(class extends f{args;constructor(e,t,s){super(e,t),this.updater=this.updater.bind(this),typeof s=="function"&&(s=s()),this.makeArgs(s)}update(){return this.args}updater(e){const[t]=this.args;typeof e=="function"&&(e=e(t)),!Object.is(t,e)&&(this.makeArgs(e),this.state.update())}makeArgs(e){this.args=Object.freeze([e,this.updater])}});p(class extends f{reducer;currentState;constructor(e,t,s,r,o){super(e,t),this.dispatch=this.dispatch.bind(this),this.currentState=o!==void 0?o(r):r}update(e){return this.reducer=e,[this.currentState,this.dispatch]}dispatch(e){this.currentState=this.reducer(this.currentState,e),this.state.update()}});const ue=/([A-Z])/gu;p(class extends f{property;eventName;constructor(e,t,s,r){if(super(e,t),this.state.virtual)throw new Error("Can't be used with virtual components.");this.updater=this.updater.bind(this),this.property=s,this.eventName=s.replace(ue,"-$1").toLowerCase()+"-changed",this.state.host[this.property]==null&&(typeof r=="function"&&(r=r()),r!=null&&this.updateProp(r))}update(e,t){return[this.state.host[this.property],this.updater]}updater(e){const t=this.state.host[this.property];typeof e=="function"&&(e=e(t)),!Object.is(t,e)&&this.updateProp(e)}updateProp(e){this.notify(e).defaultPrevented||(this.state.host[this.property]=e)}notify(e){const t=new CustomEvent(this.eventName,{detail:{value:e,path:this.property},cancelable:!0});return this.state.host.dispatchEvent(t),t}});function he({render:e}){const t=ae(e),s=de(t);return{component:t,createContext:s}}const{component:fe}=he({render:Y}),pe=D(I`
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
`),be=I`
	:host {
		display: inline-flex;
	}

	/* ========================================
	 * SIZE VARIANTS
	 * ======================================== */

	:host([size='sm']) .badge {
		height: calc(var(--cz-spacing) * 5);
		font-size: var(--cz-text-xs);
		line-height: var(--cz-text-xs-line-height);
		padding-inline: calc(var(--cz-spacing) * 2);
	}

	:host([size='md']) .badge {
		height: calc(var(--cz-spacing) * 5.5);
		font-size: var(--cz-text-sm);
		line-height: var(--cz-text-sm-line-height);
		padding-inline: calc(var(--cz-spacing) * 2.5);
	}

	:host([size='lg']) .badge {
		height: calc(var(--cz-spacing) * 6.5);
		font-size: var(--cz-text-sm);
		line-height: var(--cz-text-sm-line-height);
		padding-inline: calc(var(--cz-spacing) * 3);
	}

	/* ========================================
	* STYLE VARIANTS
	* ======================================== */
	:host([variant='error']) .badge {
		background-color: var(--cz-color-bg-error);
		color: var(--cz-color-text-error);
		border-color: var(--cz-color-border-error);
	}

	:host([variant='warning']) .badge {
		background-color: var(--cz-color-bg-warning);
		color: var(--cz-color-text-warning);
		border-color: var(--cz-color-border-warning);
	}

	:host([variant='success']) .badge {
		background-color: var(--cz-color-bg-success);
		color: var(--cz-color-text-success);
		border-color: var(--cz-color-border-success);
	}

	:host([variant='modern']) .badge {
		background-color: var(--cz-color-bg-primary);
		color: var(--cz-color-text-secondary);
		border-color: var(--cz-color-border-primary);
		box-shadow: var(--cz-shadow-xs);
	}

	/* ========================================
	 * SHAPE VARIANTS
	 * ======================================== */
	:host([shape='square']) .badge {
		border-radius: var(--cz-radius-sm);
	}
	/* ========================================
	 * BADGE BASE STYLES
	 * ======================================== */

	.badge {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		gap: var(--cz-spacing);
		font-family: var(--cz-font-body);
		font-weight: var(--cz-font-weight-medium);
		width: 100%;
		white-space: nowrap;
		border-width: 1px;
		border-style: solid;

		/* Default */
		height: calc(var(--cz-spacing) * 5.5);
		font-size: var(--cz-text-sm);
		line-height: var(--cz-text-sm-line-height);
		padding-inline: calc(var(--cz-spacing) * 2.5);
		background-color: var(--cz-color-bg-secondary);
		color: var(--cz-color-text-secondary);
		border-color: var(--cz-color-border-primary);
		border-radius: var(--cz-radius-full);
	}
`,ge=["variant","size","shape"],me=()=>h`<span class="badge" part="badge" role="status">
		<slot name="prefix"></slot>
		<slot></slot>
		<slot name="suffix"></slot>
	</span>`;customElements.define("cosmoz-badge",fe(me,{observedAttributes:ge,styleSheets:[pe,be]}));const we={title:"Cosmoz Badge",component:"cosmoz-badge",tags:["autodocs"],argTypes:{variant:{control:"select",options:["default","error","warning","success","modern"],description:"The visual style variant of the badge",table:{defaultValue:{summary:"default"}}},size:{control:"select",options:["sm","md","lg"],description:"The size of the badge",table:{defaultValue:{summary:"md"}}},shape:{control:"select",options:["rounded","square"],description:"The shape of the badge",table:{defaultValue:{summary:"rounded"}}},label:{control:"text",description:"Badge label text"}}},ve=e=>h`
    <cosmoz-badge
        variant=${e.variant||"default"}
        size=${e.size||"md"}
        shape=${e.shape||"rounded"}
    >
        ${e.label||"Badge"}
    </cosmoz-badge>
`,m={args:{variant:"default",size:"lg",shape:"rounded",label:"Default"},render:ve},v={render:()=>h`
        <div class="story-row">
            <cosmoz-badge variant="default">Default</cosmoz-badge>
            <cosmoz-badge variant="error">Error</cosmoz-badge>
            <cosmoz-badge variant="warning">Warning</cosmoz-badge>
            <cosmoz-badge variant="success">Success</cosmoz-badge>
            <cosmoz-badge variant="modern">Modern</cosmoz-badge>
        </div>
    `,parameters:{docs:{description:{story:"The five visual style variants available for the badge."}}}},z={render:()=>h`
        <div class="story-row">
            <cosmoz-badge shape="rounded">Rounded</cosmoz-badge>
            <cosmoz-badge shape="square">Square</cosmoz-badge>
        </div>
    `,parameters:{docs:{description:{story:"The two shape variants available for the badge."}}}},y={render:()=>h`
        <div class="story-row">
            <cosmoz-badge variant="warning">
                ${Z({width:"16",height:"16",slot:"prefix"})}
                Warning
            </cosmoz-badge>
            <cosmoz-badge variant="error">
                Label ${G({width:"16",height:"16",slot:"suffix"})}
            </cosmoz-badge>
        </div>
    `,parameters:{docs:{description:{story:"A badge with prefix and suffix icons."}}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'default',
    size: 'lg',
    shape: 'rounded',
    label: 'Default'
  },
  render: renderBadge
}`,...m.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: () => html\`
        <div class="story-row">
            <cosmoz-badge variant="default">Default</cosmoz-badge>
            <cosmoz-badge variant="error">Error</cosmoz-badge>
            <cosmoz-badge variant="warning">Warning</cosmoz-badge>
            <cosmoz-badge variant="success">Success</cosmoz-badge>
            <cosmoz-badge variant="modern">Modern</cosmoz-badge>
        </div>
    \`,
  parameters: {
    docs: {
      description: {
        story: 'The five visual style variants available for the badge.'
      }
    }
  }
}`,...v.parameters?.docs?.source}}};z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  render: () => html\`
        <div class="story-row">
            <cosmoz-badge shape="rounded">Rounded</cosmoz-badge>
            <cosmoz-badge shape="square">Square</cosmoz-badge>
        </div>
    \`,
  parameters: {
    docs: {
      description: {
        story: 'The two shape variants available for the badge.'
      }
    }
  }
}`,...z.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: () => html\`
        <div class="story-row">
            <cosmoz-badge variant="warning">
                \${alertTriangleIcon({
    width: '16',
    height: '16',
    slot: 'prefix'
  })}
                Warning
            </cosmoz-badge>
            <cosmoz-badge variant="error">
                Label \${arrowUpIcon({
    width: '16',
    height: '16',
    slot: 'suffix'
  })}
            </cosmoz-badge>
        </div>
    \`,
  parameters: {
    docs: {
      description: {
        story: 'A badge with prefix and suffix icons.'
      }
    }
  }
}`,...y.parameters?.docs?.source}}};const xe=["Default","Variants","Shapes","WithIcons"];export{m as Default,z as Shapes,v as Variants,y as WithIcons,xe as __namedExportsOrder,we as default};
