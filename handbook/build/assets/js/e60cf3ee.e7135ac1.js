"use strict";(self.webpackChunkfurion=self.webpackChunkfurion||[]).push([[2574],{3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return m}});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var d=a.createContext({}),p=function(e){var n=a.useContext(d),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},c=function(e){var n=p(e.components);return a.createElement(d.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},u=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,d=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=p(t),m=r,k=u["".concat(d,".").concat(m)]||u[m]||s[m]||i;return t?a.createElement(k,l(l({ref:n},c),{},{components:t})):a.createElement(k,l({ref:n},c))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,l=new Array(i);l[0]=u;var o={};for(var d in n)hasOwnProperty.call(n,d)&&(o[d]=n[d]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var p=2;p<i;p++)l[p]=t[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},4001:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return d},contentTitle:function(){return p},metadata:function(){return c},toc:function(){return s},default:function(){return m}});var a=t(7462),r=t(3366),i=(t(7294),t(3905)),l=t(4996),o=["components"],d={id:"dbcontext-function",title:"9.14 \u51fd\u6570\u64cd\u4f5c",sidebar_label:"9.14 \u51fd\u6570\u64cd\u4f5c"},p=void 0,c={unversionedId:"dbcontext-function",id:"dbcontext-function",isDocsHomePage:!1,title:"9.14 \u51fd\u6570\u64cd\u4f5c",description:"\u63a8\u8350\u4f7f\u7528 \u300a9.17 Sql \u9ad8\u7ea7\u4ee3\u7406\u300b\u4ee3\u66ff\u672c\u7ae0\u8282\u529f\u80fd\u3002Sql \u9ad8\u7ea7\u4ee3\u7406 \u80fd\u591f\u63d0\u4f9b\u66f4\u5bb9\u6613\u4e14\u66f4\u6613\u7ef4\u62a4\u7684\u65b9\u5f0f\u3002",source:"@site/docs/dbcontext-function.mdx",sourceDirName:".",slug:"/dbcontext-function",permalink:"/furion/docs/dbcontext-function",editUrl:"https://gitee.com/dotnetchina/Furion/tree/master/handbook/docs/dbcontext-function.mdx",version:"current",lastUpdatedBy:"Monk",lastUpdatedAt:1614238444,formattedLastUpdatedAt:"2/25/2021",frontMatter:{id:"dbcontext-function",title:"9.14 \u51fd\u6570\u64cd\u4f5c",sidebar_label:"9.14 \u51fd\u6570\u64cd\u4f5c"},sidebar:"docs",previous:{title:"9.13 \u5b58\u50a8\u8fc7\u7a0b\u64cd\u4f5c",permalink:"/furion/docs/dbcontext-proc"},next:{title:"9.15 Sql \u64cd\u4f5c",permalink:"/furion/docs/dbcontext-sql"}},s=[{value:"9.14.1 \u6570\u636e\u5e93\u51fd\u6570",id:"9141-\u6570\u636e\u5e93\u51fd\u6570",children:[{value:"9.14.1.1 \u652f\u6301\u6807\u91cf\u51fd\u6570\u7684\u6570\u636e\u5e93",id:"91411-\u652f\u6301\u6807\u91cf\u51fd\u6570\u7684\u6570\u636e\u5e93",children:[]},{value:"9.14.1.2 \u652f\u6301\u8868\u503c\u51fd\u6570\u7684\u6570\u636e\u5e93",id:"91412-\u652f\u6301\u8868\u503c\u51fd\u6570\u7684\u6570\u636e\u5e93",children:[]}]},{value:"9.14.2 \u6570\u636e\u5e93\u51fd\u6570\u7c7b\u578b",id:"9142-\u6570\u636e\u5e93\u51fd\u6570\u7c7b\u578b",children:[]},{value:"9.14.3 \u51fd\u6570\u7684\u4f7f\u7528",id:"9143-\u51fd\u6570\u7684\u4f7f\u7528",children:[{value:"9.14.3.1 \u6807\u91cf\u51fd\u6570\u8fd4\u56de <code>object</code>",id:"91431-\u6807\u91cf\u51fd\u6570\u8fd4\u56de-object",children:[]},{value:"9.14.3.2 \u6807\u91cf\u51fd\u6570\u8fd4\u56de <code>T</code>",id:"91432-\u6807\u91cf\u51fd\u6570\u8fd4\u56de-t",children:[]},{value:"9.14.3.3 \u8868\u503c\u51fd\u6570\u8fd4\u56de <code>DataTable</code>",id:"91433-\u8868\u503c\u51fd\u6570\u8fd4\u56de-datatable",children:[]},{value:"9.14.3.4 \u8868\u503c\u51fd\u6570\u8fd4\u56de <code>List&lt;T&gt;</code>",id:"91434-\u8868\u503c\u51fd\u6570\u8fd4\u56de-listt",children:[]}]},{value:"9.14.4 \u5728 <code>Linq</code> \u4e2d\u4f7f\u7528 <code>\u6807\u91cf\u51fd\u6570</code>",id:"9144-\u5728-linq-\u4e2d\u4f7f\u7528-\u6807\u91cf\u51fd\u6570",children:[{value:"9.14.4.1 \u521b\u5efa\u6807\u91cf\u51fd\u6570",id:"91441-\u521b\u5efa\u6807\u91cf\u51fd\u6570",children:[]},{value:"9.14.4.2 \u521b\u5efa\u9759\u6001\u7c7b\u548c\u9759\u6001\u65b9\u6cd5",id:"91442-\u521b\u5efa\u9759\u6001\u7c7b\u548c\u9759\u6001\u65b9\u6cd5",children:[]},{value:"9.14.4.3 \u5728 <code>Linq</code> \u4e2d\u4f7f\u7528",id:"91443-\u5728-linq-\u4e2d\u4f7f\u7528",children:[]}]},{value:"9.14.5 \u5728 <code>Linq</code> \u4e2d\u4f7f\u7528 <code>\u8868\u503c\u51fd\u6570</code>",id:"9145-\u5728-linq-\u4e2d\u4f7f\u7528-\u8868\u503c\u51fd\u6570",children:[{value:"9.14.5.1 \u521b\u5efa\u8868\u503c\u51fd\u6570",id:"91451-\u521b\u5efa\u8868\u503c\u51fd\u6570",children:[]},{value:"9.14.5.2 \u521b\u5efa\u8868\u503c\u51fd\u6570\u6a21\u578b",id:"91452-\u521b\u5efa\u8868\u503c\u51fd\u6570\u6a21\u578b",children:[]},{value:"9.14.5.3 \u8868\u503c\u51fd\u6570\u914d\u7f6e",id:"91453-\u8868\u503c\u51fd\u6570\u914d\u7f6e",children:[]},{value:"9.14.5.4 \u5728 <code>Linq</code> \u4e2d\u4f7f\u7528",id:"91454-\u5728-linq-\u4e2d\u4f7f\u7528",children:[]}]},{value:"9.14.6 \u5728 <code>EF Core</code> \u5185\u7f6e\u51fd\u6570",id:"9146-\u5728-ef-core-\u5185\u7f6e\u51fd\u6570",children:[]},{value:"9.14.7 \u53cd\u9988\u4e0e\u5efa\u8bae",id:"9147-\u53cd\u9988\u4e0e\u5efa\u8bae",children:[]}],u={toc:s};function m(e){var n=e.components,t=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("div",{className:"admonition admonition-important alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"\u6e29\u99a8\u63d0\u793a")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"\u63a8\u8350\u4f7f\u7528 \u300a",(0,i.kt)("a",{parentName:"p",href:"/furion/docs/dbcontext-sql-proxy"},"9.17 Sql \u9ad8\u7ea7\u4ee3\u7406"),"\u300b\u4ee3\u66ff\u672c\u7ae0\u8282\u529f\u80fd\u3002",(0,i.kt)("inlineCode",{parentName:"p"},"Sql \u9ad8\u7ea7\u4ee3\u7406")," \u80fd\u591f\u63d0\u4f9b\u66f4\u5bb9\u6613\u4e14\u66f4\u6613\u7ef4\u62a4\u7684\u65b9\u5f0f\u3002"))),(0,i.kt)("h2",{id:"9141-\u6570\u636e\u5e93\u51fd\u6570"},"9.14.1 \u6570\u636e\u5e93\u51fd\u6570"),(0,i.kt)("p",null,"\u5f15\u7528\u767e\u5ea6\u767e\u79d1\uff1a"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"\u6570\u636e\u5e93\u51fd\u6570\u662f\u6307\u5f53\u9700\u8981\u5206\u6790\u6570\u636e\u6e05\u5355\u4e2d\u7684\u6570\u503c\u662f\u5426\u7b26\u5408\u7279\u5b9a\u6761\u4ef6\u65f6\uff0c\u4f7f\u7528\u6570\u636e\u5e93\u5de5\u4f5c\u8868\u51fd\u6570\u3002")),(0,i.kt)("p",null,"\u7b80\u5355\u6765\u8bf4\uff0c\u6570\u636e\u5e93\u51fd\u6570\u5c31\u662f\u7528\u4e8e\u5b50\u8ba1\u7b97\u7684\u51fd\u6570\u3002\u5176\u8ba1\u7b97\u7684\u7ed3\u679c\u53ef\u4ee5\u7528\u4e8e\u6784\u5efa ",(0,i.kt)("inlineCode",{parentName:"p"},"sql")," \u8bed\u53e5\u3002"),(0,i.kt)("h3",{id:"91411-\u652f\u6301\u6807\u91cf\u51fd\u6570\u7684\u6570\u636e\u5e93"},"9.14.1.1 \u652f\u6301\u6807\u91cf\u51fd\u6570\u7684\u6570\u636e\u5e93"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"SqlServer"),(0,i.kt)("th",{parentName:"tr",align:null},"Sqlite"),(0,i.kt)("th",{parentName:"tr",align:null},"Cosmos"),(0,i.kt)("th",{parentName:"tr",align:null},"InMemoryDatabase"),(0,i.kt)("th",{parentName:"tr",align:null},"MySql"),(0,i.kt)("th",{parentName:"tr",align:null},"PostgreSQL"),(0,i.kt)("th",{parentName:"tr",align:null},"Oracle"),(0,i.kt)("th",{parentName:"tr",align:null},"Firebird"),(0,i.kt)("th",{parentName:"tr",align:null},"Dm"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"\u2714"),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"\u2714"),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"\u2714"),(0,i.kt)("td",{parentName:"tr",align:null},"\u2714"),(0,i.kt)("td",{parentName:"tr",align:null},"\u2714"),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null})))),(0,i.kt)("h3",{id:"91412-\u652f\u6301\u8868\u503c\u51fd\u6570\u7684\u6570\u636e\u5e93"},"9.14.1.2 \u652f\u6301\u8868\u503c\u51fd\u6570\u7684\u6570\u636e\u5e93"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"SqlServer"),(0,i.kt)("th",{parentName:"tr",align:null},"Sqlite"),(0,i.kt)("th",{parentName:"tr",align:null},"Cosmos"),(0,i.kt)("th",{parentName:"tr",align:null},"InMemoryDatabase"),(0,i.kt)("th",{parentName:"tr",align:null},"MySql"),(0,i.kt)("th",{parentName:"tr",align:null},"PostgreSQL"),(0,i.kt)("th",{parentName:"tr",align:null},"Oracle"),(0,i.kt)("th",{parentName:"tr",align:null},"Firebird"),(0,i.kt)("th",{parentName:"tr",align:null},"Dm"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"\u2714"),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"\u2714"),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"\u2714"),(0,i.kt)("td",{parentName:"tr",align:null},"\u2714"),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null})))),(0,i.kt)("h2",{id:"9142-\u6570\u636e\u5e93\u51fd\u6570\u7c7b\u578b"},"9.14.2 \u6570\u636e\u5e93\u51fd\u6570\u7c7b\u578b"),(0,i.kt)("p",null,"\u5728\u5173\u7cfb\u578b\u6570\u636e\u5e93\u4e2d\uff0c\u6570\u636e\u5e93\u51fd\u6570\u6709\u8fd9\u4e24\u79cd\u7c7b\u578b\uff1a"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"\u6807\u91cf\u51fd\u6570"),"\uff1a\u53ea\u80fd\u8fd4\u56de\u5355\u4e2a\u503c"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"\u8868\u503c\u51fd\u6570"),"\uff1a\u53ea\u80fd\u8fd4\u56de\u4e00\u4e2a\u7ed3\u679c\u96c6")),(0,i.kt)("h2",{id:"9143-\u51fd\u6570\u7684\u4f7f\u7528"},"9.14.3 \u51fd\u6570\u7684\u4f7f\u7528"),(0,i.kt)("h3",{id:"91431-\u6807\u91cf\u51fd\u6570\u8fd4\u56de-object"},"9.14.3.1 \u6807\u91cf\u51fd\u6570\u8fd4\u56de ",(0,i.kt)("inlineCode",{parentName:"h3"},"object")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cs"},'// ISqlRepository \u65b9\u6cd5\nvar value = _sqlRepository.SqlFunctionScalar("func_GetValue");\n\n// ISqlDispatchProxy \u65b9\u5f0f\nvar value = _sqlExecuteProxy.GetValue();  // \u63a8\u8350\u65b9\u5f0f\n\n// \u5b9e\u4f53\u4ed3\u50a8\u65b9\u5f0f\nvar value = _personRepository.SqlFunctionScalar("func_GetValue");\n\n// IRepository \u975e\u6cdb\u578b\u65b9\u5f0f\nvar value = _repository.Sql().SqlFunctionScalar("func_GetValue");\n\n// \u53d8\u6001\u61d2\u4eba\u65b9\u5f0f\uff0c\u76f4\u63a5\u901a\u8fc7\u51fd\u6570\u540d\u6267\u884c\nvar value = "func_GetValue".SqlFunctionScalar();\n')),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"\u5173\u4e8e\u5f02\u6b65")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},(0,i.kt)("inlineCode",{parentName:"p"},"Furion")," \u6846\u67b6\u6bcf\u4e00\u4e2a\u6570\u636e\u5e93\u64cd\u4f5c\u90fd\u652f\u6301\u5f02\u6b65\u65b9\u5f0f\uff0c\u7531\u4e8e\u7bc7\u5e45\u6709\u9650\uff0c\u5c31\u4e0d\u5217\u4e3e\u5f02\u6b65\u65b9\u5f0f\u4e86\u3002"))),(0,i.kt)("h3",{id:"91432-\u6807\u91cf\u51fd\u6570\u8fd4\u56de-t"},"9.14.3.2 \u6807\u91cf\u51fd\u6570\u8fd4\u56de ",(0,i.kt)("inlineCode",{parentName:"h3"},"T")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cs"},'// ISqlRepository \u65b9\u6cd5\nvar value = _sqlRepository.SqlFunctionScalar<string>("func_GetValue");\n\n// ISqlDispatchProxy \u65b9\u5f0f\nvar value = _sqlExecuteProxy.GetValue();  // \u63a8\u8350\u65b9\u5f0f\n\n// \u5b9e\u4f53\u4ed3\u50a8\u65b9\u5f0f\nvar value = _personRepository.SqlFunctionScalar<string>("func_GetValue");\n\n// IRepository \u975e\u6cdb\u578b\u65b9\u5f0f\nvar value = _repository.Sql().SqlFunctionScalar<string>("func_GetValue");\n\n// \u53d8\u6001\u61d2\u4eba\u65b9\u5f0f\uff0c\u76f4\u63a5\u901a\u8fc7\u51fd\u6570\u540d\u6267\u884c\nvar value = "func_GetValue".SqlFunctionScalar<string>();\n')),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"\u5173\u4e8e\u5f02\u6b65")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},(0,i.kt)("inlineCode",{parentName:"p"},"Furion")," \u6846\u67b6\u6bcf\u4e00\u4e2a\u6570\u636e\u5e93\u64cd\u4f5c\u90fd\u652f\u6301\u5f02\u6b65\u65b9\u5f0f\uff0c\u7531\u4e8e\u7bc7\u5e45\u6709\u9650\uff0c\u5c31\u4e0d\u5217\u4e3e\u5f02\u6b65\u65b9\u5f0f\u4e86\u3002"))),(0,i.kt)("h3",{id:"91433-\u8868\u503c\u51fd\u6570\u8fd4\u56de-datatable"},"9.14.3.3 \u8868\u503c\u51fd\u6570\u8fd4\u56de ",(0,i.kt)("inlineCode",{parentName:"h3"},"DataTable")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cs"},'// ISqlRepository \u65b9\u6cd5\nvar value = _sqlRepository.SqlFunctionQuery("func_GetTable");\n\n// ISqlDispatchProxy \u65b9\u5f0f\nvar value = _sqlExecuteProxy.GetTable();  // \u63a8\u8350\u65b9\u5f0f\n\n// \u5b9e\u4f53\u4ed3\u50a8\u65b9\u5f0f\nvar value = _personRepository.SqlFunctionQuery("func_GetTable");\n\n// IRepository \u975e\u6cdb\u578b\u65b9\u5f0f\nvar value = _repository.Sql().SqlFunctionQuery("func_GetTable");\n\n// \u53d8\u6001\u61d2\u4eba\u65b9\u5f0f\uff0c\u76f4\u63a5\u901a\u8fc7\u51fd\u6570\u540d\u6267\u884c\nvar value = "func_GetTable".SqlFunctionQuery();\n')),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"\u5173\u4e8e\u5f02\u6b65")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},(0,i.kt)("inlineCode",{parentName:"p"},"Furion")," \u6846\u67b6\u6bcf\u4e00\u4e2a\u6570\u636e\u5e93\u64cd\u4f5c\u90fd\u652f\u6301\u5f02\u6b65\u65b9\u5f0f\uff0c\u7531\u4e8e\u7bc7\u5e45\u6709\u9650\uff0c\u5c31\u4e0d\u5217\u4e3e\u5f02\u6b65\u65b9\u5f0f\u4e86\u3002"))),(0,i.kt)("h3",{id:"91434-\u8868\u503c\u51fd\u6570\u8fd4\u56de-listt"},"9.14.3.4 \u8868\u503c\u51fd\u6570\u8fd4\u56de ",(0,i.kt)("inlineCode",{parentName:"h3"},"List<T>")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cs"},'// ISqlRepository \u65b9\u6cd5\nvar value = _sqlRepository.SqlFunctionQuery<Person>("func_GetTable");\n\n// ISqlDispatchProxy \u65b9\u5f0f\nvar value = _sqlExecuteProxy.GetTable();  // \u63a8\u8350\u65b9\u5f0f\n\n// \u5b9e\u4f53\u4ed3\u50a8\u65b9\u5f0f\nvar value = _personRepository.SqlFunctionQuery<Person>("func_GetTable");\n\n// IRepository \u975e\u6cdb\u578b\u65b9\u5f0f\nvar value = _repository.Sql().SqlFunctionQuery<Person>("func_GetTable");\n\n// \u53d8\u6001\u61d2\u4eba\u65b9\u5f0f\uff0c\u76f4\u63a5\u901a\u8fc7\u51fd\u6570\u540d\u6267\u884c\nvar value = "func_GetTable".SqlFunctionQuery<Person>();\n')),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"\u5173\u4e8e\u5f02\u6b65")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},(0,i.kt)("inlineCode",{parentName:"p"},"Furion")," \u6846\u67b6\u6bcf\u4e00\u4e2a\u6570\u636e\u5e93\u64cd\u4f5c\u90fd\u652f\u6301\u5f02\u6b65\u65b9\u5f0f\uff0c\u7531\u4e8e\u7bc7\u5e45\u6709\u9650\uff0c\u5c31\u4e0d\u5217\u4e3e\u5f02\u6b65\u65b9\u5f0f\u4e86\u3002"))),(0,i.kt)("h2",{id:"9144-\u5728-linq-\u4e2d\u4f7f\u7528-\u6807\u91cf\u51fd\u6570"},"9.14.4 \u5728 ",(0,i.kt)("inlineCode",{parentName:"h2"},"Linq")," \u4e2d\u4f7f\u7528 ",(0,i.kt)("inlineCode",{parentName:"h2"},"\u6807\u91cf\u51fd\u6570")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Furion")," \u6846\u67b6\u63d0\u4f9b\u975e\u5e38\u7075\u6d3b\u7684\u5728 ",(0,i.kt)("inlineCode",{parentName:"p"},"Linq")," \u4e2d\u4f7f\u7528\u6807\u91cf\u51fd\u6570\u7684\u65b9\u6cd5\u3002\u5982\u679c\u50cf\u4f7f\u7528\u8fd9\u6837\u7684\u65b9\u5f0f\uff0c\u9700\u8981\u6ee1\u8db3\u4ee5\u4e0b\u4e24\u4e2a\u6761\u4ef6\uff1a"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u6807\u91cf\u51fd\u6570\u5fc5\u987b\u5b9a\u4e49\u5728",(0,i.kt)("strong",{parentName:"li"},"\u516c\u5f00\u9759\u6001\u7c7b"),"\u4e2d\uff0c\u4e14\u81ea\u5df1\u4e5f\u662f",(0,i.kt)("strong",{parentName:"li"},"\u516c\u5f00\u9759\u6001\u65b9\u6cd5")),(0,i.kt)("li",{parentName:"ul"},"\u8be5",(0,i.kt)("strong",{parentName:"li"},"\u516c\u5f00\u9759\u6001\u65b9\u6cd5"),"\u5fc5\u987b\u8d34\u6709 ",(0,i.kt)("inlineCode",{parentName:"li"},"[QueryableFunction]")," \u7279\u6027")),(0,i.kt)("p",null,"\u793a\u4f8b\u5982\u4e0b\uff1a"),(0,i.kt)("h3",{id:"91441-\u521b\u5efa\u6807\u91cf\u51fd\u6570"},"9.14.4.1 \u521b\u5efa\u6807\u91cf\u51fd\u6570"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE FUNCTION FN_GetId\n(\n    @id INT\n)\nRETURNS INT\nAS\nBEGIN\n    RETURN @id + 1;\nEND;\n")),(0,i.kt)("h3",{id:"91442-\u521b\u5efa\u9759\u6001\u7c7b\u548c\u9759\u6001\u65b9\u6cd5"},"9.14.4.2 \u521b\u5efa\u9759\u6001\u7c7b\u548c\u9759\u6001\u65b9\u6cd5"),(0,i.kt)("p",null,"\u521b\u5efa\u9759\u6001\u7c7b\uff0c\u5982 ",(0,i.kt)("inlineCode",{parentName:"p"},"QueryFunctions"),"\uff0c\u5c06\u8be5 ",(0,i.kt)("inlineCode",{parentName:"p"},"\u6807\u91cf\u51fd\u6570")," \u653e\u5728\u9759\u6001\u7c7b\u4e2d\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cs",metastring:"{1, 7, 10-11}","{1,":!0,"7,":!0,"10-11}":!0},'using Furion.DatabaseAccessor;\nusing System;\n\nnamespace Furion.Application\n{\n    // \u5fc5\u987b\u662f\u516c\u5f00\u9759\u6001\u7684\n    public static class QueryFunctions\n    {\n        // \u5fc5\u987b\u662f\u9759\u6001\u65b9\u6cd5\n        [QueryableFunction("FN_GetId", "dbo")]  // \u914d\u7f6e\u6807\u91cf\u51fd\u6570\n        public static int GetId(int id) => throw new NotSupportedException();\n    }\n}\n')),(0,i.kt)("h3",{id:"91443-\u5728-linq-\u4e2d\u4f7f\u7528"},"9.14.4.3 \u5728 ",(0,i.kt)("inlineCode",{parentName:"h3"},"Linq")," \u4e2d\u4f7f\u7528"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cs"},"_personRepository.Where(u => u.Id > QueryFunctions.GetId(1)).ToList();\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT [p].[Id], [p].[Address], [p].[Age], [p].[CreatedTime], [p].[IsDeleted], [p].[Name], [p].[UpdatedTime]\nFROM [Person] AS [p]\nWHERE [p].[Id] > [dbo].[FN_GetId](1)    // \ud83d\udca5 \u6ce8\u610f\u8fd9\u91cc\n")),(0,i.kt)("img",{src:(0,l.Z)("img/fn1.png")}),(0,i.kt)("h2",{id:"9145-\u5728-linq-\u4e2d\u4f7f\u7528-\u8868\u503c\u51fd\u6570"},"9.14.5 \u5728 ",(0,i.kt)("inlineCode",{parentName:"h2"},"Linq")," \u4e2d\u4f7f\u7528 ",(0,i.kt)("inlineCode",{parentName:"h2"},"\u8868\u503c\u51fd\u6570")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"EF Core 5.0")," \u7248\u672c\u652f\u6301\u5728 ",(0,i.kt)("inlineCode",{parentName:"p"},"Linq")," \u4e2d\u64cd\u4f5c ",(0,i.kt)("inlineCode",{parentName:"p"},"\u8868\u503c\u51fd\u6570"),"\uff0c\u64cd\u4f5c\u6709\u70b9\u7c7b\u4f3c ",(0,i.kt)("inlineCode",{parentName:"p"},"\u89c6\u56fe\u64cd\u4f5c")),(0,i.kt)("p",null,"\u793a\u4f8b\u5982\u4e0b\uff1a"),(0,i.kt)("h3",{id:"91451-\u521b\u5efa\u8868\u503c\u51fd\u6570"},"9.14.5.1 \u521b\u5efa\u8868\u503c\u51fd\u6570"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE FUNCTION dbo.GetPersons\n(\n    @id INT\n)\nRETURNS TABLE\nAS\nRETURN\n(\n    SELECT Id,\n           Name,\n           Age,\n           Address\n    FROM dbo.Person\n    WHERE Id > @id\n);\n")),(0,i.kt)("h3",{id:"91452-\u521b\u5efa\u8868\u503c\u51fd\u6570\u6a21\u578b"},"9.14.5.2 \u521b\u5efa\u8868\u503c\u51fd\u6570\u6a21\u578b"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cs"},"namespace Furion.Core\n{\n    public class F_Person\n    {\n        /// <summary>\n        /// \u4e3b\u952eId\n        /// </summary>\n        public int Id { get; set; }\n\n        /// <summary>\n        /// \u59d3\u540d\n        /// </summary>\n        public string Name { get; set; }\n\n        /// <summary>\n        /// \u5e74\u9f84\n        /// </summary>\n        public int Age { get; set; }\n\n        /// <summary>\n        /// \u4f4f\u5740\n        /// </summary>\n        public string Address { get; set; }\n    }\n}\n")),(0,i.kt)("h3",{id:"91453-\u8868\u503c\u51fd\u6570\u914d\u7f6e"},"9.14.5.3 \u8868\u503c\u51fd\u6570\u914d\u7f6e"),(0,i.kt)("p",null,"\u5728 ",(0,i.kt)("inlineCode",{parentName:"p"},"DbContext")," \u7c7b\u4e2d\u5b9a\u4e49\u65b9\u6cd5\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cs",metastring:"{3,10,20-21}","{3,10,20-21}":!0},'using Furion.DatabaseAccessor;\nusing Microsoft.EntityFrameworkCore;\nusing System.Linq;\n\nnamespace Furion.EntityFramework.Core\n{\n    [AppDbContext("Sqlite3ConnectionString")]\n    public class FurionDbContext : AppDbContext<FurionDbContext>\n    {\n        public IQueryable<F_Person> GetPersons(int id) => FromExpression(() => GetPersons(id));\n\n        public FurionDbContext(DbContextOptions<FurionDbContext> options) : base(options)\n        {\n        }\n\n        protected override void OnModelCreating(ModelBuilder modelBuilder)\n        {\n            base.OnModelCreating(modelBuilder);\n\n            modelBuilder.Entity(typeof(F_Person)).HasNoKey();\n            modelBuilder.HasDbFunction(() => GetPersons(default));\n        }\n    }\n}\n')),(0,i.kt)("h3",{id:"91454-\u5728-linq-\u4e2d\u4f7f\u7528"},"9.14.5.4 \u5728 ",(0,i.kt)("inlineCode",{parentName:"h3"},"Linq")," \u4e2d\u4f7f\u7528"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cs"},'IQueryable<F_Person> query = _repository.DynamicDbContext.GetPersons(1);\nvar result = query.Where(u => u.Name.Equals("Furion")).ToList();\n')),(0,i.kt)("p",null,"\u6700\u7ec8\u751f\u6210 ",(0,i.kt)("inlineCode",{parentName:"p"},"Sql")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT [g].Id, [g].Name, [g].Age, [g].Address\nFROM dbo.GetPersons(1) AS [g]\nWHERE [g].Name == N'Furion';\n")),(0,i.kt)("h2",{id:"9146-\u5728-ef-core-\u5185\u7f6e\u51fd\u6570"},"9.14.6 \u5728 ",(0,i.kt)("inlineCode",{parentName:"h2"},"EF Core")," \u5185\u7f6e\u51fd\u6570"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"EF Core")," \u4e3a\u6211\u4eec\u63d0\u4f9b\u4e86\u5f88\u591a\u5e38\u7528\u7684\u5185\u7f6e\u51fd\u6570\uff0c\u53ef\u4ee5\u5728 ",(0,i.kt)("inlineCode",{parentName:"p"},"Lambda")," \u6761\u4ef6\u4e2d\u4f7f\u7528\uff0c\u4e3b\u8981\u662f\u901a\u8fc7 EF.Functions \u8c03\u7528\uff0c\u5982\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cs"},"_repository.Where(u => EF.Functions.DateDiffHour(u.CreatedDt, DateTime.Now) > 8).FirstOrDefault();\n")),(0,i.kt)("p",null,"\u8fd9\u4e2a\u8bed\u53e5\u4f7f\u7528\u4e86 EF.Functions.DateDiffHour \u6700\u7ec8\u751f\u6210\u7684 Sql \u5982\u4e0b\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT TOP(1) [a].*\nFROM [dbo].[TEST] AS [a]\nWHERE DATEDIFF(HOUR, [a].[CREATED_DT], GETDATE()) > 8\n")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"EF Core")," \u5185\u7f6e\u51fd\u6570\u5c31\u4e0d\u4e00\u4e00\u5217\u51fa\u4e86\uff0c\u53ef\u4ee5\u901a\u8fc7 ",(0,i.kt)("inlineCode",{parentName:"p"},"EF.Functions")," \u67e5\u770b\u66f4\u591a\uff0c\u5982\u679c\u4e0d\u80fd\u6ee1\u8db3\u81ea\u5df1\u7684\u9700\u6c42\uff0c\u90a3\u4e48\u53ef\u4ee5\u81ea\u5b9a\u4e49 ",(0,i.kt)("inlineCode",{parentName:"p"},"Linq")," \u6807\u91cf\u51fd\u6570"),(0,i.kt)("h2",{id:"9147-\u53cd\u9988\u4e0e\u5efa\u8bae"},"9.14.7 \u53cd\u9988\u4e0e\u5efa\u8bae"),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"\u4e0e\u6211\u4eec\u4ea4\u6d41")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"\u7ed9 Furion \u63d0 ",(0,i.kt)("a",{parentName:"p",href:"https://gitee.com/dotnetchina/Furion/issues/new?issue"},"Issue"),"\u3002"))))}m.isMDXComponent=!0}}]);