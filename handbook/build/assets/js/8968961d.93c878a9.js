"use strict";(self.webpackChunkfurion=self.webpackChunkfurion||[]).push([[2710],{3905:function(e,n,t){t.d(n,{Zo:function(){return d},kt:function(){return u}});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=a.createContext({}),c=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},d=function(e){var n=c(e.components);return a.createElement(l.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),m=c(t),u=r,k=m["".concat(l,".").concat(u)]||m[u]||p[u]||i;return t?a.createElement(k,o(o({ref:n},d),{},{components:t})):a.createElement(k,o({ref:n},d))}));function u(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,o=new Array(i);o[0]=m;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var c=2;c<i;c++)o[c]=t[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},5738:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return d},default:function(){return m}});var a=t(7462),r=t(3366),i=(t(7294),t(3905)),o=["components"],s={id:"dbcontext-delete",title:"9.8 \u5220\u9664\u64cd\u4f5c",sidebar_label:"9.8 \u5220\u9664\u64cd\u4f5c"},l=void 0,c={unversionedId:"dbcontext-delete",id:"dbcontext-delete",isDocsHomePage:!1,title:"9.8 \u5220\u9664\u64cd\u4f5c",description:"\u4ee5\u4e0b\u5185\u5bb9\u5305\u542b Exists \u5355\u8bcd\u7684\u5728 Furion 2.6.0 + \u7248\u672c\u4e2d\u5df2\u79fb\u9664\u3002",source:"@site/docs/dbcontext-delete.mdx",sourceDirName:".",slug:"/dbcontext-delete",permalink:"/furion/docs/dbcontext-delete",editUrl:"https://gitee.com/dotnetchina/Furion/tree/master/handbook/docs/dbcontext-delete.mdx",version:"current",lastUpdatedBy:"Monk",lastUpdatedAt:1626406190,formattedLastUpdatedAt:"7/16/2021",frontMatter:{id:"dbcontext-delete",title:"9.8 \u5220\u9664\u64cd\u4f5c",sidebar_label:"9.8 \u5220\u9664\u64cd\u4f5c"},sidebar:"docs",previous:{title:"9.7 \u65b0\u589e\u6216\u66f4\u65b0\u64cd\u4f5c",permalink:"/furion/docs/dbcontext-add-or-update"},next:{title:"9.9 \u6279\u91cf\u64cd\u4f5c",permalink:"/furion/docs/dbcontext-batch"}},d=[{value:"9.8.1 \u5220\u9664\u4e00\u4e2a\u5b9e\u4f53\uff08\u4e0d\u7acb\u5373\u63d0\u4ea4\uff09",id:"981-\u5220\u9664\u4e00\u4e2a\u5b9e\u4f53\uff08\u4e0d\u7acb\u5373\u63d0\u4ea4\uff09",children:[]},{value:"9.8.2 \u5220\u9664\u4e00\u4e2a\u5b9e\u4f53\uff08\u7acb\u5373\u63d0\u4ea4\uff09",id:"982-\u5220\u9664\u4e00\u4e2a\u5b9e\u4f53\uff08\u7acb\u5373\u63d0\u4ea4\uff09",children:[]},{value:"9.8.3 \u6839\u636e\u4e3b\u952e\u5220\u9664\u8bb0\u5f55\uff08\u4e0d\u7acb\u5373\u63d0\u4ea4\uff09",id:"983-\u6839\u636e\u4e3b\u952e\u5220\u9664\u8bb0\u5f55\uff08\u4e0d\u7acb\u5373\u63d0\u4ea4\uff09",children:[]},{value:"9.8.4 \u6839\u636e\u4e3b\u952e\u5220\u9664\u8bb0\u5f55\uff08\u7acb\u5373\u63d0\u4ea4\uff09",id:"984-\u6839\u636e\u4e3b\u952e\u5220\u9664\u8bb0\u5f55\uff08\u7acb\u5373\u63d0\u4ea4\uff09",children:[]},{value:"9.8.5 \u6570\u636e\u5b58\u5728\u624d\u6839\u636e\u4e3b\u952e\u5220\u9664\uff08\u4e0d\u7acb\u5373\u63d0\u4ea4\uff09",id:"985-\u6570\u636e\u5b58\u5728\u624d\u6839\u636e\u4e3b\u952e\u5220\u9664\uff08\u4e0d\u7acb\u5373\u63d0\u4ea4\uff09",children:[]},{value:"9.8.6 \u6570\u636e\u5b58\u5728\u624d\u6839\u636e\u4e3b\u952e\u5220\u9664\uff08\u7acb\u5373\u63d0\u4ea4\uff09",id:"986-\u6570\u636e\u5b58\u5728\u624d\u6839\u636e\u4e3b\u952e\u5220\u9664\uff08\u7acb\u5373\u63d0\u4ea4\uff09",children:[]},{value:"9.8.7 \u5047\u5220\u9664/\u8f6f\u5220\u9664",id:"987-\u5047\u5220\u9664\u8f6f\u5220\u9664",children:[{value:"9.8.7.1 \u6dfb\u52a0 <code>[FakeDelete]</code> \u6807\u8bb0",id:"9871-\u6dfb\u52a0-fakedelete-\u6807\u8bb0",children:[]},{value:"9.8.7.2 \u5047\u5220\u9664\u4f7f\u7528",id:"9872-\u5047\u5220\u9664\u4f7f\u7528",children:[]}]},{value:"9.8.8 \u53cd\u9988\u4e0e\u5efa\u8bae",id:"988-\u53cd\u9988\u4e0e\u5efa\u8bae",children:[]}],p={toc:d};function m(e){var n=e.components,t=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("div",{className:"admonition admonition-warning alert alert--danger"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"\u529f\u80fd\u79fb\u9664\u58f0\u660e")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"\u4ee5\u4e0b\u5185\u5bb9\u5305\u542b ",(0,i.kt)("inlineCode",{parentName:"p"},"Exists")," \u5355\u8bcd\u7684\u5728 ",(0,i.kt)("inlineCode",{parentName:"p"},"Furion 2.6.0 +")," \u7248\u672c\u4e2d\u5df2\u79fb\u9664\u3002"))),(0,i.kt)("h2",{id:"981-\u5220\u9664\u4e00\u4e2a\u5b9e\u4f53\uff08\u4e0d\u7acb\u5373\u63d0\u4ea4\uff09"},"9.8.1 \u5220\u9664\u4e00\u4e2a\u5b9e\u4f53\uff08\u4e0d\u7acb\u5373\u63d0\u4ea4\uff09"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cs"},"// ==== \u540c\u6b65\u64cd\u4f5c ====\n\n// \u793a\u4f8b\u4e00\nrepository.Delete(user);\n\n// \u793a\u4f8b\u4e8c\nuser.Delete();\n\n// \u793a\u4f8b\u4e09\nrepository.ChangeEntityState(user, EntityState.Deleted);\n\n// \u793a\u4f8b\u56db\nrepository.Entities.Remove(user);\n\n// ==== \u5f02\u6b65\u64cd\u4f5c ====\n\n// \u793a\u4f8b\u4e00\nawait repository.DeleteAsync(user);\n\n// \u793a\u4f8b\u4e8c\nawait user.DeleteAsync();\n")),(0,i.kt)("h2",{id:"982-\u5220\u9664\u4e00\u4e2a\u5b9e\u4f53\uff08\u7acb\u5373\u63d0\u4ea4\uff09"},"9.8.2 \u5220\u9664\u4e00\u4e2a\u5b9e\u4f53\uff08\u7acb\u5373\u63d0\u4ea4\uff09"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cs"},"// ==== \u540c\u6b65\u64cd\u4f5c ====\n\n// \u793a\u4f8b\u4e00\nrepository.DeleteNow(user);\n\n// \u793a\u4f8b\u4e8c\nuser.DeleteNow();\n\n// ==== \u5f02\u6b65\u64cd\u4f5c ====\n\n// \u793a\u4f8b\u4e00\nawait repository.DeleteNowAsync(user);\n\n// \u793a\u4f8b\u4e8c\nawait user.DeleteNowAsync();\n")),(0,i.kt)("h2",{id:"983-\u6839\u636e\u4e3b\u952e\u5220\u9664\u8bb0\u5f55\uff08\u4e0d\u7acb\u5373\u63d0\u4ea4\uff09"},"9.8.3 \u6839\u636e\u4e3b\u952e\u5220\u9664\u8bb0\u5f55\uff08\u4e0d\u7acb\u5373\u63d0\u4ea4\uff09"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cs"},"// ==== \u540c\u6b65\u64cd\u4f5c ====\n\n// \u793a\u4f8b\u4e00\nrepository.Delete(1);\n\n// \u793a\u4f8b\u4e8c\nuser.Delete(1);\n\n// ==== \u5f02\u6b65\u64cd\u4f5c ====\n\n// \u793a\u4f8b\u4e00\nawait repository.DeleteAsync(1);\n\n// \u793a\u4f8b\u4e8c\nawait user.DeleteAsync(1);\n")),(0,i.kt)("h2",{id:"984-\u6839\u636e\u4e3b\u952e\u5220\u9664\u8bb0\u5f55\uff08\u7acb\u5373\u63d0\u4ea4\uff09"},"9.8.4 \u6839\u636e\u4e3b\u952e\u5220\u9664\u8bb0\u5f55\uff08\u7acb\u5373\u63d0\u4ea4\uff09"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cs"},"// ==== \u540c\u6b65\u64cd\u4f5c ====\n\n// \u793a\u4f8b\u4e00\nrepository.DeleteNow(1);\n\n// \u793a\u4f8b\u4e8c\nuser.DeleteNow(1);\n\n// ==== \u5f02\u6b65\u64cd\u4f5c ====\n\n// \u793a\u4f8b\u4e00\nawait repository.DeleteNowAsync(1);\n\n// \u793a\u4f8b\u4e8c\nawait user.DeleteNowAsync(1);\n")),(0,i.kt)("h2",{id:"985-\u6570\u636e\u5b58\u5728\u624d\u6839\u636e\u4e3b\u952e\u5220\u9664\uff08\u4e0d\u7acb\u5373\u63d0\u4ea4\uff09"},"9.8.5 \u6570\u636e\u5b58\u5728\u624d\u6839\u636e\u4e3b\u952e\u5220\u9664\uff08\u4e0d\u7acb\u5373\u63d0\u4ea4\uff09"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cs"},"// ==== \u540c\u6b65\u64cd\u4f5c ====\n\n// \u793a\u4f8b\u4e00\nrepository.DeleteExists(1);\n\n// \u793a\u4f8b\u4e8c\nuser.DeleteExists(1);\n\n// ==== \u5f02\u6b65\u64cd\u4f5c ====\n\n// \u793a\u4f8b\u4e00\nawait repository.DeleteExistsAsync(1);\n\n// \u793a\u4f8b\u4e8c\nawait user.DeleteExistsAsync(1);\n")),(0,i.kt)("h2",{id:"986-\u6570\u636e\u5b58\u5728\u624d\u6839\u636e\u4e3b\u952e\u5220\u9664\uff08\u7acb\u5373\u63d0\u4ea4\uff09"},"9.8.6 \u6570\u636e\u5b58\u5728\u624d\u6839\u636e\u4e3b\u952e\u5220\u9664\uff08\u7acb\u5373\u63d0\u4ea4\uff09"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cs"},"// ==== \u540c\u6b65\u64cd\u4f5c ====\n\n// \u793a\u4f8b\u4e00\nrepository.DeleteExistsNow(1);\n\n// \u793a\u4f8b\u4e8c\nuser.DeleteExistsNow(1);\n\n// ==== \u5f02\u6b65\u64cd\u4f5c ====\n\n// \u793a\u4f8b\u4e00\nawait repository.DeleteExistsNowAsync(1);\n\n// \u793a\u4f8b\u4e8c\nawait user.DeleteExistsNowAsync(1);\n")),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"\u5c0f\u77e5\u8bc6")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"\u6240\u6709\u5e26 ",(0,i.kt)("inlineCode",{parentName:"p"},"Now")," \u7ed3\u5c3e\u7684\u8868\u793a\u7acb\u5373\u63d0\u4ea4\u5230\u6570\u636e\u5e93\uff0c\u4e5f\u5c31\u662f\u7acb\u5373\u8c03\u7528 ",(0,i.kt)("inlineCode",{parentName:"p"},"SaveChanges")," \u6216 ",(0,i.kt)("inlineCode",{parentName:"p"},"SaveChangesAsync"),"\u3002"))),(0,i.kt)("h2",{id:"987-\u5047\u5220\u9664\u8f6f\u5220\u9664"},"9.8.7 \u5047\u5220\u9664/\u8f6f\u5220\u9664"),(0,i.kt)("div",{className:"admonition admonition-warning alert alert--danger"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"\u529f\u80fd\u79fb\u9664\u58f0\u660e")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"\u4ee5\u4e0b\u5185\u5bb9\u5728 ",(0,i.kt)("inlineCode",{parentName:"p"},"Furion 2.10 +")," \u7248\u672c\u4e2d\u5df2\u79fb\u9664\u3002"))),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Furion")," \u6846\u67b6\u4e2d\u53ef\u4ee5\u901a\u8fc7 ",(0,i.kt)("inlineCode",{parentName:"p"},"[FakeDelete]")," \u7279\u6027\u6807\u8bb0\u5047\u5220\u9664\u7279\u6027\uff0c\u5982\uff1a"),(0,i.kt)("h3",{id:"9871-\u6dfb\u52a0-fakedelete-\u6807\u8bb0"},"9.8.7.1 \u6dfb\u52a0 ",(0,i.kt)("inlineCode",{parentName:"h3"},"[FakeDelete]")," \u6807\u8bb0"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cs",metastring:"{3}","{3}":!0},"public class Model: IEntity\n{\n    [FakeDelete(true)]  // \u8bbe\u7f6e\u5047\u5220\u9664\u7684\u503c\n    public bool IsDeleted { get; set; }\n}\n")),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"[FakeDelete]")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},(0,i.kt)("strong",{parentName:"p"},"`","[FakeDelete]")," \u5c5e\u6027\u62e5\u6709\u5e26\u4e00\u4e2a\u53c2\u6570\u7684\u6784\u9020\u51fd\u6570\uff0c\u8fd9\u4e2a\u53c2\u6570\u662f\u5047\u5220\u9664\u7684\u503c"))),(0,i.kt)("h3",{id:"9872-\u5047\u5220\u9664\u4f7f\u7528"},"9.8.7.2 \u5047\u5220\u9664\u4f7f\u7528"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cs"},"// ==== \u540c\u6b65\u64cd\u4f5c ====\n\n// \u793a\u4f8b\u4e00\nrepository.FakeDelete(entity);\n\n// \u793a\u4f8b\u4e8c\nrepository.FakeDeleteNow(entity);\n\n// \u793a\u4f8b\u4e09\nrepository.FakeDelete(1);\n\n// \u793a\u4f8b\u56db\nrepository.FakeDeleteNow(1);\n\n// \u793a\u4f8b\u4e94\nentity.FakeDelete();\n\n// \u793a\u4f8b\u516d\nrepository.UpdateInclude(user, u => u.IsDeleted);\n\n// ==== \u5f02\u6b65\u64cd\u4f5c ====\n\n// \u793a\u4f8b\u4e00\nawait repository.FakeDeleteAsync(entity);\n\n// \u793a\u4f8b\u4e8c\nawait repository.FakeDeleteNowAsync(entity);\n\n// \u793a\u4f8b\u4e09\nawait repository.FakeDeleteAsync(1);\n\n// \u793a\u4f8b\u56db\nawait repository.FakeDeleteNowAsync(1);\n\n// \u793a\u4f8b\u4e94\nawait entity.FakeDeleteAsync();\n\n// \u793a\u4f8b\u516d\nawait repository.UpdateIncludeAsync(user, u => u.IsDeleted);\n")),(0,i.kt)("h2",{id:"988-\u53cd\u9988\u4e0e\u5efa\u8bae"},"9.8.8 \u53cd\u9988\u4e0e\u5efa\u8bae"),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"\u4e0e\u6211\u4eec\u4ea4\u6d41")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"\u7ed9 Furion \u63d0 ",(0,i.kt)("a",{parentName:"p",href:"https://gitee.com/dotnetchina/Furion/issues/new?issue"},"Issue"),"\u3002"))))}m.isMDXComponent=!0}}]);