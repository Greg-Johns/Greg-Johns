webpackJsonp([35783957827783],{238:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var u=n(2),f=r(u),i=n(28),c=r(i),s=function(e){function t(){return o(this,t),a(this,e.apply(this,arguments))}return l(t,e),t.prototype.render=function(){return f.default.createElement(c.default,{to:this.props.node.frontmatter.path},f.default.createElement("section",null,f.default.createElement("h3",null,this.props.title),f.default.createElement("time",null,this.props.node.frontmatter.date),f.default.createElement("p",{dangerouslySetInnerHTML:{__html:this.props.node.excerpt}})))},t}(f.default.Component);t.default=s,e.exports=t.default},50:function(e,t){},241:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0,t.pageQuery=void 0;var u=n(2),f=r(u),i=n(28),c=r(i);n(50);var s=n(53),p=r(s),d=n(88),h=r(d),m=n(238),y=r(m),b=n(61),E=r(b),w=function(e){function t(){return o(this,t),a(this,e.apply(this,arguments))}return l(t,e),t.prototype.render=function(){var e=((0,p.default)(this,"props.data.site.siteMetadata.title"),(0,p.default)(this,"props.data.allMarkdownRemark.edges"));return f.default.createElement("div",{className:"mainGrid"},f.default.createElement(h.default,{title:(0,p.default)(this,"props.data.site.siteMetadata.title")}),f.default.createElement("header",null,(0,p.default)(this,"props.data.site.siteMetadata.title")),f.default.createElement("nav",null,"~",f.default.createElement(c.default,{className:"active"},"Blog"),"-",f.default.createElement(c.default,{to:"/about/"},"About"),"-",f.default.createElement(c.default,{to:"/portfolio/"},"Portfolio"),"-",f.default.createElement("a",{href:"www.gregjohns.com/cv"},"Resume"),"~"),e.map(function(e){if("/404/"!==e.node.path){var t=(0,p.default)(e,"node.frontmatter.title")||e.node.path;return f.default.createElement(y.default,{title:t,node:e.node})}}),f.default.createElement(E.default,null))},t}(f.default.Component);w.propTypes={route:f.default.PropTypes.object},t.default=w;t.pageQuery="** extracted graphql fragment **"}});
//# sourceMappingURL=component---src-pages-index-js-c8637a58e864d572dc85.js.map