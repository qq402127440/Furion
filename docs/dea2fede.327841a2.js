(window.webpackJsonp=window.webpackJsonp||[]).push([[70],{135:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return l})),t.d(n,"metadata",(function(){return s})),t.d(n,"rightToc",(function(){return b})),t.d(n,"default",(function(){return d}));var a=t(3),r=t(7),o=(t(0),t(152)),i=(t(154),t(160)),c=t(161),l={id:"tran",title:"9.25 \u4e8b\u52a1\u548c\u5de5\u4f5c\u5355\u5143",sidebar_label:"9.25 \u4e8b\u52a1\u548c\u5de5\u4f5c\u5355\u5143"},s={unversionedId:"tran",id:"tran",isDocsHomePage:!1,title:"9.25 \u4e8b\u52a1\u548c\u5de5\u4f5c\u5355\u5143",description:"9.25.1 \u4e8b\u52a1",source:"@site/docs\\tran.mdx",slug:"/tran",permalink:"/docs/tran",editUrl:"https://gitee.com/monksoul/Furion/tree/master/handbook/docs/tran.mdx",version:"current",sidebar_label:"9.25 \u4e8b\u52a1\u548c\u5de5\u4f5c\u5355\u5143",sidebar:"docs",previous:{title:"9.24 \u6570\u636e\u5e93\u64cd\u4f5c\u62e6\u622a\u5668",permalink:"/docs/dbcontext-Interceptor"},next:{title:"9.26 \u8bfb\u5199\u5206\u79bb/\u4e3b\u4ece\u590d\u5236",permalink:"/docs/dbcontext-read-write"}},b=[{value:"9.25.1 \u4e8b\u52a1",id:"9251-\u4e8b\u52a1",children:[]},{value:"9.25.2 \u5de5\u4f5c\u5355\u5143",id:"9252-\u5de5\u4f5c\u5355\u5143",children:[]},{value:"9.25.3 \u5982\u4f55\u4f7f\u7528",id:"9253-\u5982\u4f55\u4f7f\u7528",children:[{value:"9.25.3.1 \u81ea\u52a8\u7ba1\u7406",id:"92531-\u81ea\u52a8\u7ba1\u7406",children:[]},{value:"9.25.3.2 \u624b\u52a8\u7ba1\u7406",id:"92532-\u624b\u52a8\u7ba1\u7406",children:[]}]},{value:"9.25.4 \u5de5\u4f5c\u5355\u5143\u7279\u6027\u8bf4\u660e",id:"9254-\u5de5\u4f5c\u5355\u5143\u7279\u6027\u8bf4\u660e",children:[{value:"9.25.4.1 <code>[UnitOfWork]</code>",id:"92541-unitofwork",children:[]}]},{value:"9.25.5 \u53cd\u9988\u4e0e\u5efa\u8bae",id:"9255-\u53cd\u9988\u4e0e\u5efa\u8bae",children:[]}],u={rightToc:b};function d(e){var n=e.components,t=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},u,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"9251-\u4e8b\u52a1"},"9.25.1 \u4e8b\u52a1"),Object(o.b)("p",null,"\u4e8b\u52a1\u6307\u4f5c\u4e3a\u5355\u4e2a\u903b\u8f91\u5de5\u4f5c\u5355\u5143\u6267\u884c\u7684\u4e00\u7cfb\u5217\u64cd\u4f5c\uff0c\u8981\u4e48",Object(o.b)("strong",{parentName:"p"},"\u5b8c\u5168\u5730\u6267\u884c\uff0c\u8981\u4e48\u5b8c\u5168\u5730\u4e0d\u6267\u884c"),"\u3002"),Object(o.b)("p",null,"\u7b80\u5355\u7684\u8bf4\uff0c\u4e8b\u52a1\u5c31\u662f\u5e76\u53d1\u63a7\u5236\u7684\u5355\u4f4d\uff0c\u662f\u7528\u6237\u5b9a\u4e49\u7684\u4e00\u4e2a\u64cd\u4f5c\u5e8f\u5217\u3002 \u800c\u4e00\u4e2a\u903b\u8f91\u5de5\u4f5c\u5355\u5143\u8981\u6210\u4e3a\u4e8b\u52a1\uff0c\u5c31\u5fc5\u987b\u6ee1\u8db3 ",Object(o.b)("inlineCode",{parentName:"p"},"ACID")," \u5c5e\u6027\u3002"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"A"),"\uff1a\u539f\u5b50\u6027\uff08Atomicity\uff09\uff1a\u4e8b\u52a1\u4e2d\u7684\u64cd\u4f5c\u8981\u4e48\u90fd\u4e0d\u505a\uff0c\u8981\u4e48\u5c31\u5168\u505a"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"C"),"\uff1a\u4e00\u81f4\u6027\uff08Consistency\uff09\uff1a\u4e8b\u52a1\u6267\u884c\u7684\u7ed3\u679c\u5fc5\u987b\u662f\u4ece\u6570\u636e\u5e93\u4ece\u4e00\u4e2a\u4e00\u81f4\u6027\u72b6\u6001\u8f6c\u6362\u5230\u53e6\u4e00\u4e2a\u4e00\u81f4\u6027\u72b6\u6001"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"I"),"\uff1a\u9694\u79bb\u6027\uff08Isolation\uff09\uff1a\u4e00\u4e2a\u4e8b\u52a1\u7684\u6267\u884c\u4e0d\u80fd\u88ab\u5176\u4ed6\u4e8b\u52a1\u5e72\u6270"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"D"),"\uff1a\u6301\u4e45\u6027\uff08Durability\uff09\uff1a\u4e00\u4e2a\u4e8b\u52a1\u4e00\u65e6\u63d0\u4ea4\uff0c\u5b83\u5bf9\u6570\u636e\u5e93\u4e2d\u6570\u636e\u7684\u6539\u53d8\u5c31\u5e94\u8be5\u662f\u6c38\u4e45\u6027\u7684")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c",Object(o.b)("inlineCode",{parentName:"strong"},"Furion")," \u6846\u67b6\u4e3a\u6bcf\u4e00\u6b21\u8bf7\u6c42\u90fd\u5f00\u542f\u4e86\u5206\u5e03\u5f0f\u4e8b\u52a1\uff0c\u4fdd\u8bc1\u4e86\u6bcf\u4e00\u6b21\u8bf7\u6c42\u90fd\u662f\u4e00\u4e2a\u5b8c\u6574\u7684 ",Object(o.b)("inlineCode",{parentName:"strong"},"\u5de5\u4f5c\u5355\u5143")),"\u3002\u5f53\u7136\uff0c\u6211\u4eec\u4e5f\u53ef\u4ee5\u624b\u52a8\u7ba1\u7406\u4e8b\u52a1\u3002"),Object(o.b)("h2",{id:"9252-\u5de5\u4f5c\u5355\u5143"},"9.25.2 \u5de5\u4f5c\u5355\u5143"),Object(o.b)("p",null,"\u7b80\u5355\u6765\u8bf4\uff0c\u5c31\u662f\u4e3a\u4e86\u4fdd\u8bc1\u4e00\u6b21\u5b8c\u6574\u7684\u529f\u80fd\u64cd\u4f5c\u6240\u4ea7\u751f\u7684\u4e00\u4e9b\u5217\u63d0\u4ea4\u6570\u636e\u7684\u5b8c\u6574\u6027\uff0c\u8d77\u7740\u4e8b\u52a1\u7684\u4f5c\u7528\u3002\u5728\u8ba1\u7b97\u673a\u9886\u57df\u4e2d\uff0c\u5de5\u4f5c\u5355\u5143\u901a\u5e38\u7528 ",Object(o.b)("inlineCode",{parentName:"p"},"UnitOfWork")," \u540d\u79f0\u8868\u793a\u3002"),Object(o.b)("p",null,"\u901a\u5e38\u6211\u4eec\u4fdd\u8bc1\u7528\u6237\u7684\u6bcf\u4e00\u6b21\u8bf7\u6c42\u90fd\u662f\u5904\u4e8e\u5728\u4e00\u4e2a\u529f\u80fd\u5355\u5143\u4e2d\uff0c\u4e5f\u5c31\u662f\u5de5\u4f5c\u5355\u5143\u3002"),Object(o.b)("h2",{id:"9253-\u5982\u4f55\u4f7f\u7528"},"9.25.3 \u5982\u4f55\u4f7f\u7528"),Object(o.b)("h3",{id:"92531-\u81ea\u52a8\u7ba1\u7406"},"9.25.3.1 \u81ea\u52a8\u7ba1\u7406"),Object(o.b)("p",null,"\u5728 ",Object(o.b)("inlineCode",{parentName:"p"},"Furion")," \u6846\u67b6\u4e2d\uff0c\u6211\u4eec\u53ea\u9700\u8981\u5728\u63a7\u5236\u5668 Action \u4e2d\u8d34 ",Object(o.b)("inlineCode",{parentName:"p"},"[UnitOfWork]")," \u7279\u6027\u5373\u53ef\u5f00\u542f\u5de5\u4f5c\u5355\u5143\u6a21\u5f0f\uff0c\u4fdd\u8bc1\u4e86\u6bcf\u4e00\u6b21\u8bf7\u6c42\u90fd\u662f\u4e00\u4e2a ",Object(o.b)("inlineCode",{parentName:"p"},"\u5de5\u4f5c\u5355\u5143"),"\uff0c\u8981\u4e48\u540c\u65f6\u6210\u529f\uff0c\u8981\u4e48\u540c\u65f6\u5931\u8d25\u3002"),Object(o.b)("h3",{id:"92532-\u624b\u52a8\u7ba1\u7406"},"9.25.3.2 \u624b\u52a8\u7ba1\u7406"),Object(o.b)(i.a,{defaultValue:"one",values:[{label:"\u793a\u4f8b\u4e00",value:"one"},{label:"\u793a\u4f8b\u4e8c",value:"two"},{label:"\u793a\u4f8b\u4e09",value:"three"}],mdxType:"Tabs"},Object(o.b)(c.a,{value:"one",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-cs"}),'// \u5f00\u542f\u4e8b\u52a1\nusing (var transaction = _testRepository.Database.BeginTransaction())\n{\n    try\n    {\n        _testRepository.Insert(new Blog { Url = "http://blogs.msdn.com/dotnet" });\n        _testRepository.SaveChanges();\n\n        _testRepository.Insert(new Blog { Url = "http://blogs.msdn.com/visualstudio" });\n        _testRepository.SaveChanges();\n\n        var blogs = _testRepository.Entity\n                .OrderBy(b => b.Url)\n                .ToList();\n\n        // \u63d0\u4ea4\u4e8b\u52a1\n        transaction.Commit();\n     }\n     catch (Exception)\n     {\n        // \u56de\u6eda\u4e8b\u52a1\n        transaction.RollBack();\n     }\n}\n'))),Object(o.b)(c.a,{value:"two",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-cs"}),'var options = new DbContextOptionsBuilder<HoaDbContext>()\n    .UseSqlServer(new SqlConnection(connectionString))\n    .Options;\n\n// \u521b\u5efa\u8fde\u63a5\u5b57\u7b26\u4e32\nusing (var context1 = new HoaDbContext(options))\n{\n    // \u5f00\u542f\u4e8b\u52a1\n    using (var transaction = context1.Database.BeginTransaction())\n    {\n        try\n        {\n            _testRepository.Insert(new Blog { Url = "http://blogs.msdn.com/dotnet" });\n            _testRepository.SaveChanges();\n\n            context1.Blogs.Add(new Blog { Url = "http://blogs.msdn.com/dotnet" });\n            context1.SaveChanges();\n\n            // \u521b\u5efa\u65b0\u7684\u8fde\u63a5\u5bf9\u8c61\n            using (var context2 = new HoaDbContext(options))\n            {\n                // \u5171\u4eab\u8fde\u63a5\u4e8b\u52a1\n                context2.Database.UseTransaction(transaction.GetDbTransaction());\n\n                var blogs = context2.Blogs\n                    .OrderBy(b => b.Url)\n                    .ToList();\n            }\n\n            // \u63d0\u4ea4\u4e8b\u52a1\n            transaction.Commit();\n        }\n        catch (Exception)\n        {\n            // \u56de\u6eda\u4e8b\u52a1\n            transaction.RollBack();\n        }\n    }\n}\n'))),Object(o.b)(c.a,{value:"three",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-cs"}),'// \u5f00\u542f\u5206\u5e03\u5f0f\u4e8b\u52a1\nusing (var scope = new TransactionScope(\n    TransactionScopeOption.Required,\n    new TransactionOptions { IsolationLevel = IsolationLevel.ReadCommitted }))\n{\n    using (var connection = new SqlConnection(connectionString))\n    {\n        connection.Open();\n\n        try\n        {\n            // \u8fd9\u91cc\u662f Ado.NET \u64cd\u4f5c\n            var command = connection.CreateCommand();\n            command.CommandText = "DELETE FROM dbo.Blogs";\n            command.ExecuteNonQuery();\n\n            // \u521b\u5efaEF Core \u6570\u636e\u5e93\u4e0a\u4e0b\u6587\n            var options = new DbContextOptionsBuilder<BloggingContext>()\n                .UseSqlServer(connection)\n                .Options;\n            using (var context = new BloggingContext(options))\n            {\n                context.Blogs.Add(new Blog { Url = "http://blogs.msdn.com/dotnet" });\n                context.SaveChanges();\n            }\n\n            // \u6846\u67b6\u5c01\u88c5\u7684\u4ed3\u50a8\n            _testRepository.Insert(new Blog { Url = "http://blogs.msdn.com/dotnet" });\n            _testRepository.SaveChanges();\n\n           // \u63d0\u4ea4\u4e8b\u52a1\n            scope.Complete();\n        }\n        catch (System.Exception)\n        {\n            // \u81ea\u52a8\u56de\u6eda\n        }\n    }\n}\n')))),Object(o.b)("h2",{id:"9254-\u5de5\u4f5c\u5355\u5143\u7279\u6027\u8bf4\u660e"},"9.25.4 \u5de5\u4f5c\u5355\u5143\u7279\u6027\u8bf4\u660e"),Object(o.b)("h3",{id:"92541-unitofwork"},"9.25.4.1 ",Object(o.b)("inlineCode",{parentName:"h3"},"[UnitOfWork]")),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"[UnitOfWork]")," \u7279\u6027\u7528\u6765\u6807\u8bb0\u4e8b\u52a1\u4fe1\u606f\uff0c\u5982\u4f5c\u7528\u8303\u56f4\uff0c\u9694\u79bb\u7ea7\u522b\u7b49\u3002"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"Enabled"),"\uff1a\u662f\u5426\u542f\u52a8\u5de5\u4f5c\u5355\u5143\uff0c\u9ed8\u8ba4 ",Object(o.b)("inlineCode",{parentName:"li"},"true")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"ScopeOption"),"\uff1a\u5b9a\u4e49\u4e8b\u52a1\u8303\u56f4\u884c\u4e3a\uff0c\u9ed8\u8ba4 ",Object(o.b)("inlineCode",{parentName:"li"},"TransactionScopeOption.Required")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"IsolationLevel"),"\uff1a\u8bbe\u7f6e\u4e8b\u52a1\u9694\u79bb\u7ea7\u522b\uff0c\u9ed8\u8ba4 ",Object(o.b)("inlineCode",{parentName:"li"},"IsolationLevel.ReadCommitted"),";"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"AsyncFlowOption"),"\uff1a\u5141\u8bb8\u8de8\u7ebf\u7a0b\u8fde\u7eed\u4efb\u52a1\u7684\u4e8b\u52a1\u6d41\uff0c\u5982\u6709\u5f02\u6b65\u64cd\u4f5c\u9700\u5f00\u542f\u8be5\u9009\u9879\uff0c\u9ed8\u8ba4\u5f00\u542f")),Object(o.b)("div",{className:"admonition admonition-important alert alert--info"},Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(o.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"\u7279\u522b\u6ce8\u610f")),Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"\u4e00\u65e6\u65b9\u6cd5\u8d34\u4e86 ",Object(o.b)("inlineCode",{parentName:"p"},"[UnitOfWork(false)]")," \u7279\u6027\u540e\uff0c\u90a3\u4e48\u8be5\u65b9\u6cd5\u4e0d\u518d\u542f\u7528\u5de5\u4f5c\u5355\u5143\u6a21\u5f0f\uff0c\u4e5f\u5c31\u662f\u4e0d\u5305\u542b\u4e8b\u52a1\uff0c\u4e5f\u4e0d\u4f1a\u81ea\u52a8\u63d0\u4ea4\u6570\u636e\u5e93\u3002\u614e\u7528!"))),Object(o.b)("h2",{id:"9255-\u53cd\u9988\u4e0e\u5efa\u8bae"},"9.25.5 \u53cd\u9988\u4e0e\u5efa\u8bae"),Object(o.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(o.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"\u4e0e\u6211\u4eec\u4ea4\u6d41")),Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"\u7ed9 Furion \u63d0 ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://gitee.com/monksoul/Furion/issues/new?issue"}),"Issue"),"\u3002"))),Object(o.b)("hr",null),Object(o.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(o.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"\u4e86\u89e3\u66f4\u591a")),Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"\u60f3\u4e86\u89e3\u66f4\u591a ",Object(o.b)("inlineCode",{parentName:"p"},"\u4e8b\u52a1")," \u77e5\u8bc6\u53ef\u67e5\u9605 ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://docs.microsoft.com/zh-cn/ef/core/saving/transactions"}),"EF Core - \u4f7f\u7528\u4e8b\u52a1")," \u7ae0\u8282\u3002"))))}d.isMDXComponent=!0},152:function(e,n,t){"use strict";t.d(n,"a",(function(){return u})),t.d(n,"b",(function(){return m}));var a=t(0),r=t.n(a);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=r.a.createContext({}),b=function(e){var n=r.a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},u=function(e){var n=b(e.components);return r.a.createElement(s.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},p=r.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=b(t),p=a,m=u["".concat(i,".").concat(p)]||u[p]||d[p]||o;return t?r.a.createElement(m,c(c({ref:n},s),{},{components:t})):r.a.createElement(m,c({ref:n},s))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=p;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var s=2;s<o;s++)i[s]=t[s];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,t)}p.displayName="MDXCreateElement"},153:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t(20);n.default=function(){var e=Object(a.useContext)(r.a);if(null===e)throw new Error("Docusaurus context not provided");return e}},154:function(e,n,t){"use strict";t.d(n,"b",(function(){return o})),t.d(n,"a",(function(){return i}));var a=t(153),r=t(155);function o(){var e=Object(a.default)().siteConfig,n=(e=void 0===e?{}:e).baseUrl,t=void 0===n?"/":n,o=e.url;return{withBaseUrl:function(e,n){return function(e,n,t,a){var o=void 0===a?{}:a,i=o.forcePrependBaseUrl,c=void 0!==i&&i,l=o.absolute,s=void 0!==l&&l;if(!t)return t;if(t.startsWith("#"))return t;if(Object(r.b)(t))return t;if(c)return n+t;var b=t.startsWith(n)?t:n+t.replace(/^\//,"");return s?e+b:b}(o,t,e,n)}}}function i(e,n){return void 0===n&&(n={}),(0,o().withBaseUrl)(e,n)}},155:function(e,n,t){"use strict";function a(e){return!0===/^(\w*:|\/\/)/.test(e)}function r(e){return void 0!==e&&!a(e)}t.d(n,"b",(function(){return a})),t.d(n,"a",(function(){return r}))},156:function(e,n,t){"use strict";function a(e){var n,t,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(n=0;n<e.length;n++)e[n]&&(t=a(e[n]))&&(r&&(r+=" "),r+=t);else for(n in e)e[n]&&(r&&(r+=" "),r+=n);return r}n.a=function(){for(var e,n,t=0,r="";t<arguments.length;)(e=arguments[t++])&&(n=a(e))&&(r&&(r+=" "),r+=n);return r}},158:function(e,n,t){"use strict";var a=t(0),r=t(159);n.a=function(){var e=Object(a.useContext)(r.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},159:function(e,n,t){"use strict";var a=t(0),r=Object(a.createContext)(void 0);n.a=r},160:function(e,n,t){"use strict";var a=t(0),r=t.n(a),o=t(158),i=t(156),c=t(52),l=t.n(c),s=37,b=39;n.a=function(e){var n=e.lazy,t=e.block,c=e.children,u=e.defaultValue,d=e.values,p=e.groupId,m=e.className,O=Object(o.a)(),v=O.tabGroupChoices,j=O.setTabGroupChoices,f=Object(a.useState)(u),g=f[0],h=f[1];if(null!=p){var N=v[p];null!=N&&N!==g&&d.some((function(e){return e.value===N}))&&h(N)}var y=function(e){h(e),null!=p&&j(p,e)},w=[];return r.a.createElement("div",null,r.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(i.a)("tabs",{"tabs--block":t},m)},d.map((function(e){var n=e.value,t=e.label;return r.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":g===n,className:Object(i.a)("tabs__item",l.a.tabItem,{"tabs__item--active":g===n}),key:n,ref:function(e){return w.push(e)},onKeyDown:function(e){!function(e,n,t){switch(t.keyCode){case b:!function(e,n){var t=e.indexOf(n)+1;e[t]?e[t].focus():e[0].focus()}(e,n);break;case s:!function(e,n){var t=e.indexOf(n)-1;e[t]?e[t].focus():e[e.length-1].focus()}(e,n)}}(w,e.target,e)},onFocus:function(){return y(n)},onClick:function(){y(n)}},t)}))),n?Object(a.cloneElement)(c.filter((function(e){return e.props.value===g}))[0],{className:"margin-vert--md"}):r.a.createElement("div",{className:"margin-vert--md"},c.map((function(e,n){return Object(a.cloneElement)(e,{key:n,hidden:e.props.value!==g})}))))}},161:function(e,n,t){"use strict";var a=t(3),r=t(0),o=t.n(r);n.a=function(e){var n=e.children,t=e.hidden,r=e.className;return o.a.createElement("div",Object(a.a)({role:"tabpanel"},{hidden:t,className:r}),n)}}}]);