(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{254:function(t,e,r){"use strict";r.r(e);var n={methods:{getDataset:function(){var t=this.$store.state.data.selectedDataset;return this.$store.state.data.datasets[t]}}},l=r(47),component=Object(l.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return t.getDataset()?r("div",{staticClass:"text-gray-500"},[r("p",[t._v("\n    Data provided by "+t._s(t.getDataset().source.name)+"'s \""),r("a",{staticClass:"text-blue-400 hover:underline",attrs:{href:t.getDataset().source.link,target:"_blank"}},[t._v(t._s(t.getDataset().source.title))]),t._v('". '+t._s(t.getDataset().source.date)+"\n  ")])]):t._e()}),[],!1,null,null,null);e.default=component.exports}}]);