(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{306:function(t,a,s){"use strict";s.r(a);var e=s(10),v=Object(e.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"已知问题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#已知问题"}},[t._v("#")]),t._v(" 已知问题")]),t._v(" "),a("h2",{attrs:{id:"部署问题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#部署问题"}},[t._v("#")]),t._v(" 部署问题")]),t._v(" "),a("h3",{attrs:{id:"静态文件在debug-false下存在加载错误"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#静态文件在debug-false下存在加载错误"}},[t._v("#")]),t._v(" 静态文件在"),a("code",[t._v("DEBUG=False")]),t._v("下存在加载错误")]),t._v(" "),a("p",[a("strong",[t._v("问题已定位")]),t._v("。")]),t._v(" "),a("p",[t._v("在"),a("code",[t._v("DEBUG=TRUE")]),t._v("下，静态文件由django自行导航，因此不会产生该错误。然而，"),a("code",[t._v("DEBUG=FALSE")]),t._v("下需要自行设置路由。因此，只需要在"),a("code",[t._v("settings.py")]),t._v("增加"),a("code",[t._v("STATIC_ROOT='static'")]),t._v("并且将静态文件移入"),a("code",[t._v("/statics/")]),t._v("文件夹下即可。部署前，执行")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("python manage.py collectstatic\n")])])]),a("p",[t._v("问题本能得以解决。")]),t._v(" "),a("p",[t._v("然而由于初期开发时用户头像一并储存在"),a("code",[t._v("/static")]),t._v("目录下，而显然其不能算静态文件：会随着用户上传新头像而改变。因此，本bug悬而未决。")])])}),[],!1,null,null,null);a.default=v.exports}}]);