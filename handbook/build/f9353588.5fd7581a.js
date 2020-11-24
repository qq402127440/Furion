(window.webpackJsonp=window.webpackJsonp||[]).push([[79],{145:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return a})),t.d(n,"metadata",(function(){return u})),t.d(n,"rightToc",(function(){return s})),t.d(n,"default",(function(){return p}));var r=t(3),i=t(7),o=(t(0),t(152)),c=t(154),a={id:"get-start",title:"2. \u4e00\u5206\u949f\u5165\u95e8",sidebar_label:"2. \u4e00\u5206\u949f\u5165\u95e8"},u={unversionedId:"get-start",id:"get-start",isDocsHomePage:!1,title:"2. \u4e00\u5206\u949f\u5165\u95e8",description:"2.1 \u521b\u5efa Web \u9879\u76ee",source:"@site/docs\\get-start.mdx",slug:"/get-start",permalink:"/furion/docs/get-start",editUrl:"https://gitee.com/monksoul/Furion/tree/master/handbook/docs/get-start.mdx",version:"current",sidebar_label:"2. \u4e00\u5206\u949f\u5165\u95e8",sidebar:"docs",previous:{title:"1.4 \u9879\u76ee\u5f15\u7528",permalink:"/furion/docs/reference"},next:{title:"3. \u5e94\u7528\u542f\u52a8",permalink:"/furion/docs/appstartup"}},s=[{value:"2.1 \u521b\u5efa <code>Web</code> \u9879\u76ee",id:"21-\u521b\u5efa-web-\u9879\u76ee",children:[{value:"2.1.1 \u521b\u5efa <code>ASP.NET Core Web \u5e94\u7528\u7a0b\u5e8f</code>",id:"211-\u521b\u5efa-aspnet-core-web-\u5e94\u7528\u7a0b\u5e8f",children:[]}]},{value:"2.2 \u6dfb\u52a0 <code>Furion</code> \u4f9d\u8d56\u5305",id:"22-\u6dfb\u52a0-furion-\u4f9d\u8d56\u5305",children:[]},{value:"2.3 <code>Furion</code> \u57fa\u672c\u914d\u7f6e",id:"23-furion-\u57fa\u672c\u914d\u7f6e",children:[{value:"2.3.1 <code>Program.cs</code> \u6dfb\u52a0 <code>Inject()</code>",id:"231-programcs-\u6dfb\u52a0-inject",children:[]},{value:"2.3.2 \u5728 <code>Startup.cs</code> \u4e2d\u6dfb\u52a0\u4e24\u4e2a <code>Inject()</code>",id:"232-\u5728-startupcs-\u4e2d\u6dfb\u52a0\u4e24\u4e2a-inject",children:[]}]},{value:"2.4 \u542f\u52a8\u6d4f\u89c8\u5668",id:"24-\u542f\u52a8\u6d4f\u89c8\u5668",children:[]}],l={rightToc:s};function p(e){var n=e.components,t=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},l,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"21-\u521b\u5efa-web-\u9879\u76ee"},"2.1 \u521b\u5efa ",Object(o.b)("inlineCode",{parentName:"h2"},"Web")," \u9879\u76ee"),Object(o.b)("h3",{id:"211-\u521b\u5efa-aspnet-core-web-\u5e94\u7528\u7a0b\u5e8f"},"2.1.1 \u521b\u5efa ",Object(o.b)("inlineCode",{parentName:"h3"},"ASP.NET Core Web \u5e94\u7528\u7a0b\u5e8f")),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"\u6253\u5f00 ",Object(o.b)("inlineCode",{parentName:"li"},"Visual Studio 2019")," \u5e76\u521b\u5efa ",Object(o.b)("inlineCode",{parentName:"li"},"Web")," \u9879\u76ee")),Object(o.b)("img",{src:Object(c.a)("img/rm1.png")}),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"\u914d\u7f6e\u9879\u76ee\u540d\u79f0")),Object(o.b)("img",{src:Object(c.a)("img/rm2.png")}),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"\u9009\u62e9 ",Object(o.b)("inlineCode",{parentName:"li"},"WebAPI")," \u9879\u76ee")),Object(o.b)("img",{src:Object(c.a)("img/rm3.png")}),Object(o.b)("h2",{id:"22-\u6dfb\u52a0-furion-\u4f9d\u8d56\u5305"},"2.2 \u6dfb\u52a0 ",Object(o.b)("inlineCode",{parentName:"h2"},"Furion")," \u4f9d\u8d56\u5305"),Object(o.b)("img",{src:Object(c.a)("img/rm4.png")}),Object(o.b)("h2",{id:"23-furion-\u57fa\u672c\u914d\u7f6e"},"2.3 ",Object(o.b)("inlineCode",{parentName:"h2"},"Furion")," \u57fa\u672c\u914d\u7f6e"),Object(o.b)("h3",{id:"231-programcs-\u6dfb\u52a0-inject"},"2.3.1 ",Object(o.b)("inlineCode",{parentName:"h3"},"Program.cs")," \u6dfb\u52a0 ",Object(o.b)("inlineCode",{parentName:"h3"},"Inject()")),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-cs",metastring:"{18}","{18}":!0}),"using Microsoft.AspNetCore.Hosting;\nusing Microsoft.Extensions.Hosting;\n\nnamespace FurStart\n{\n    public class Program\n    {\n        public static void Main(string[] args)\n        {\n            CreateHostBuilder(args).Build().Run();\n        }\n\n        public static IHostBuilder CreateHostBuilder(string[] args) =>\n            Host.CreateDefaultBuilder(args)\n                .ConfigureWebHostDefaults(webBuilder =>\n                {\n                    webBuilder\n                    .Inject()   // \u6dfb\u52a0\u8fd9\u4e00\u884c\n                    .UseStartup<Startup>();\n                });\n    }\n}\n")),Object(o.b)("h3",{id:"232-\u5728-startupcs-\u4e2d\u6dfb\u52a0\u4e24\u4e2a-inject"},"2.3.2 \u5728 ",Object(o.b)("inlineCode",{parentName:"h3"},"Startup.cs")," \u4e2d\u6dfb\u52a0\u4e24\u4e2a ",Object(o.b)("inlineCode",{parentName:"h3"},"Inject()")),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-cs",metastring:"{20,36}","{20,36}":!0}),"using Microsoft.AspNetCore.Builder;\nusing Microsoft.AspNetCore.Hosting;\nusing Microsoft.Extensions.Configuration;\nusing Microsoft.Extensions.DependencyInjection;\nusing Microsoft.Extensions.Hosting;\n\nnamespace FurStart\n{\n    public class Startup\n    {\n        public Startup(IConfiguration configuration)\n        {\n            Configuration = configuration;\n        }\n\n        public IConfiguration Configuration { get; }\n\n        public void ConfigureServices(IServiceCollection services)\n        {\n            services.AddControllers().AddInject();  // \u6dfb\u52a0 AddInject();\n        }\n\n        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)\n        {\n            if (env.IsDevelopment())\n            {\n                app.UseDeveloperExceptionPage();\n            }\n\n            app.UseHttpsRedirection();\n\n            app.UseRouting();\n\n            app.UseAuthorization();\n\n            app.UseInject(string.Empty); // \u6dfb\u52a0\u8fd9\u4e00\u884c\uff0c\u5982\u679c\u662f MVC\u548cAPI\u5171\u5b58\u9879\u76ee\uff0c\u65e0\u9700\u6dfb\u52a0 string.Empty\n\n            app.UseEndpoints(endpoints =>\n            {\n                endpoints.MapControllers();\n            });\n        }\n    }\n}\n")),Object(o.b)("h2",{id:"24-\u542f\u52a8\u6d4f\u89c8\u5668"},"2.4 \u542f\u52a8\u6d4f\u89c8\u5668"),Object(o.b)("p",null,"\u542f\u52a8\u6d4f\u89c8\u5668\u67e5\u770b\u6548\u679c\u3002"),Object(o.b)("img",{src:Object(c.a)("img/rm5.png")}),Object(o.b)("p",null,"\u8bf4\u597d\u4e00\u5206\u949f\u5165\u95e8\uff0c\u4f60\u4eec\u7528\u4e86\u591a\u957f\u65f6\u95f4\u3002\ud83d\ude01"))}p.isMDXComponent=!0},152:function(e,n,t){"use strict";t.d(n,"a",(function(){return p})),t.d(n,"b",(function(){return f}));var r=t(0),i=t.n(r);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function u(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=i.a.createContext({}),l=function(e){var n=i.a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},p=function(e){var n=l(e.components);return i.a.createElement(s.Provider,{value:n},e.children)},b={inlineCode:"code",wrapper:function(e){var n=e.children;return i.a.createElement(i.a.Fragment,{},n)}},d=i.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),p=l(t),d=r,f=p["".concat(c,".").concat(d)]||p[d]||b[d]||o;return t?i.a.createElement(f,a(a({ref:n},s),{},{components:t})):i.a.createElement(f,a({ref:n},s))}));function f(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,c=new Array(o);c[0]=d;var a={};for(var u in n)hasOwnProperty.call(n,u)&&(a[u]=n[u]);a.originalType=e,a.mdxType="string"==typeof e?e:r,c[1]=a;for(var s=2;s<o;s++)c[s]=t[s];return i.a.createElement.apply(null,c)}return i.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},153:function(e,n,t){"use strict";t.r(n);var r=t(0),i=t(20);n.default=function(){var e=Object(r.useContext)(i.a);if(null===e)throw new Error("Docusaurus context not provided");return e}},154:function(e,n,t){"use strict";t.d(n,"b",(function(){return o})),t.d(n,"a",(function(){return c}));var r=t(153),i=t(155);function o(){var e=Object(r.default)().siteConfig,n=(e=void 0===e?{}:e).baseUrl,t=void 0===n?"/":n,o=e.url;return{withBaseUrl:function(e,n){return function(e,n,t,r){var o=void 0===r?{}:r,c=o.forcePrependBaseUrl,a=void 0!==c&&c,u=o.absolute,s=void 0!==u&&u;if(!t)return t;if(t.startsWith("#"))return t;if(Object(i.b)(t))return t;if(a)return n+t;var l=t.startsWith(n)?t:n+t.replace(/^\//,"");return s?e+l:l}(o,t,e,n)}}}function c(e,n){return void 0===n&&(n={}),(0,o().withBaseUrl)(e,n)}},155:function(e,n,t){"use strict";function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function i(e){return void 0!==e&&!r(e)}t.d(n,"b",(function(){return r})),t.d(n,"a",(function(){return i}))}}]);