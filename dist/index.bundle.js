!function(e,n){"object"==typeof exports&&"undefined"!=typeof module?n(exports):"function"==typeof define&&define.amd?define(["exports"],n):n(e.litecomponent={})}(this,function(e){"use strict";class n extends HTMLElement{constructor(){super(),this.renderQueueToken=null,this.renderNow=this.renderNow.bind(this)}view(){}rendered(){}load(){this.queueRender()}unload(){this.clearRenderQueue()}adopted(){this.queueRender()}attrChanged(e,n,t){this.queueRender()}getRenderRoot(){return this}renderNow(){this.clearRenderQueue(),this._render(),this.rendered()}queueRender(){null===this.renderQueueToken&&(this.renderQueueToken=r.schedule(this.renderNow))}clearRenderQueue(){null!==this.renderQueueToken&&(r.cancel(this.renderQueueToken),this.renderQueueToken=null)}connectedCallback(){this.load()}disconnectedCallback(){this.unload()}adoptedCallback(){this.adopted()}attributeChangedCallback(e,n,t){this.attrChanged(e,n,t)}_render(){r.render(this.view(),this.getRenderRoot())}}function t(e){if(!e)throw new TypeError("invalid fn");return class extends n{view(){return e(this.attributes)}}}const r={render:function(){},schedule:window.requestAnimationFrame?window.requestAnimationFrame:setTimeout,cancel:window.cancelAnimationFrame?window.cancelAnimationFrame:clearTimeout};function i(...e){for(let r of e){if(null==r&&o(),n=HTMLElement,!(r.prototype instanceof n)){console.log("fn: ",r);let e=r;(r=t(r)).tag=e.tag}let e=r.tag;if(!e)throw new TypeError("no tag name provided for custom component");customElements.define(e,r)}var n}function o(){throw new TypeError("null component")}e.LiteElement=n,e.LiteComponent=class extends n{constructor(){super(),this.dispatch=this.dispatch.bind(this)}update(e,n){return!0}dispatch(e,n){this.update(e,n)&&this.queueRender()}},e.LiteFn=t,e.RenderManager=r,e.register=i,e.registerTag=function(e,n){null==n&&o(),n.tag=e,i(n)},Object.defineProperty(e,"__esModule",{value:!0})});