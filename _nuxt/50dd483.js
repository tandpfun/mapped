(window.webpackJsonp=window.webpackJsonp||[]).push([[3,4],{251:function(t,e,n){"use strict";n.r(e);var l={props:{name:{type:String,default:""},color:{type:String,default:""}}},r=n(47),component=Object(r.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"flex flex-row items-center"},[n("div",{staticClass:"w-5 h-5 rounded-md",style:"background: "+t.color}),t._v(" "),n("p",{staticClass:"ml-1"},[t._v(t._s(t.name))])])}),[],!1,null,null,null);e.default=component.exports},253:function(t,e,n){"use strict";n.r(e);var l={methods:{getDataset:function(){var t=this.$store.state.data.selectedDataset;return this.$store.state.data.datasets[t]}}},r=n(47),component=Object(r.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{},[n("div",{staticClass:"text-center"},[n("h1",{staticClass:"font-semibold text-lg"},[t._v("\n      "+t._s(t.getDataset()?t.getDataset().name:"Select a Dataset")+"\n    ")]),t._v(" "),t.getDataset()?n("div",[n("p",[t._v(t._s(t.getDataset().description))]),t._v(" "),n("div",{staticClass:"flex flex-col justify-center mt-4 mx-auto content-center flex-wrap"},[t._l(t.getDataset().groups,(function(t){return n("KeyGroup",{key:t.name,attrs:{name:t.name,color:t.color}})})),t._v(" "),n("KeyGroup",{attrs:{name:t.getDataset().unspecifiedMessage||"No Data",color:"#D3D3D3"}})],2)]):t._e()])])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{KeyGroup:n(251).default})}}]);