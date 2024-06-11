import {
	p as e,
	a,
	o as l,
	c as o,
	b as t,
	d as n,
	t as i,
	F as r,
	r as s,
	e as u,
	f as c,
	g as d,
	n as p,
	h as v,
	A as y,
	i as b,
	j as g
} from "./vendor.f7bb8302.js";
! function() {
	const e = document.createElement("link").relList;
	if (!(e && e.supports && e.supports("modulepreload"))) {
		for (const e of document.querySelectorAll('link[rel="modulepreload"]')) a(e);
		new MutationObserver((e => {
			for (const l of e)
				if ("childList" === l.type)
					for (const e of l.addedNodes) "LINK" === e.tagName && "modulepreload" === e.rel && a(e)
		})).observe(document, {
			childList: !0,
			subtree: !0
		})
	}

	function a(e) {
		if (e.ep) return;
		e.ep = !0;
		const a = function(e) {
			const a = {};
			return e.integrity && (a.integrity = e.integrity), e.referrerpolicy && (a.referrerPolicy = e
					.referrerpolicy), "use-credentials" === e.crossorigin ? a.credentials = "include" :
				"anonymous" === e.crossorigin ? a.credentials = "omit" : a.credentials = "same-origin", a
		}(e);
		fetch(e.href, a)
	}
}();
const m = {
	props: {
		items: {
			type: Array,
			required: !0
		}
	},
	data: () => ({
		selectedLabel: ""
	}),
	methods: {
		toggleDropdown() {
			this.$refs.dropdownContent.style.display = "block" === this.$refs.dropdownContent.style.display ?
				"none" : "block"
		},
		selectItem(e) {
			this.selectedLabel = e.label, this.$emit("select", e.value), this.toggleDropdown()
		}
	}
};
e("data-v-385a4c04");
const f = {
		class: "dropdown"
	},
	w = {
		class: "form-group"
	},
	h = t("label", null, "交通方式", -1),
	k = t("i", {
		class: "layui-icon layui-icon-down layui-font-12"
	}, null, -1),
	L = {
		class: "dropdown-content light line-green"
	},
	C = ["onClick"];
a(), m.render = function(e, a, u, c, d, p) {
	return l(), o("div", f, [t("div", w, [h, t("button", {
		class: "dropdown-button line-green",
		onClick: a[0] || (a[0] = (...e) => p.toggleDropdown && p.toggleDropdown(...e))
	}, [n(i(d.selectedLabel) + " ", 1), k])]), t("div", L, [(l(!0), o(r, null, s(u.items, ((e, a) => (
	l(), o("div", {
		key: a,
		class: "dropdown-item",
		onClick: a => p.selectItem(e)
	}, i(e.label), 9, C)))), 128))])])
}, m.__scopeId = "data-v-385a4c04";
const M = t("div", {
		class: "toptab"
	}, [t("form", null, [t("input", {
		class: "search",
		id: "tipinput",
		type: "text",
		placeholder: "输入关键字选取地点"
	})]), t("button", {
		class: "xq layui-btn layui-btn-primary layui-border-green ",
		style: {
			padding: "0 7.1px",
			color: "#39b54a"
		}
	}, "所有景点")], -1),
	A = {
		class: "button-container"
	},
	S = {
		id: "list-container",
		class: "form-group"
	},
	D = t("label", null, "已选地点", -1),
	x = ["onClick"],
	E = [t("i", {
		class: "layui-icon layui-icon-delete"
	}, null, -1)],
	T = t("div", {
		id: "route-result"
	}, null, -1);
g({
	setup(e) {
		const a = u(null),
			g = u(null),
			f = u(null),
			w = u(!1),
			h = u("details"),
			k = u([]),
			L = u("driving"),
			C = u([]),
			O = u(!1),
			$ = u(null),
			z = [{
				label: "驾车",
				value: "driving"
			}, {
				label: "步行",
				value: "walking"
			}, {
				label: "公交",
				value: "transit"
			}, {
				label: "骑行",
				value: "ride"
			}],
			I = e => {
				L.value = e, console.log("交通方式为", L.value)
			},
			P = () => {
				window._AMapSecurityConfig = {
					securityJsCode: "1b5d3c14f874581eb68170e94e9b016b"
				}, y.load({
					key: "0c98ca29e35114981e32cd86293258f3",
					version: "2.0",
					plugins: ["AMap.ElasticMarker", "AMap.Scale", "AMap.ToolBar", "AMap.HawkEye",
						"AMap.MapType", "AMap.Geolocation", "AMap.AutoComplete", "AMap.PlaceSearch",
						"AMap.Driving", "AMap.Walking", "AMap.Transfer", "AMap.Riding"
					],
					Loca: {
						version: "2.0.0"
					}
				}).then((e => {
					var l;
					f.value = e, a.value = new e.Map("container", {
						viewMode: "3D",
						zoom: 12,
						zooms: [5, 30],
						center: [112.96, 28.146505],
						resizeEnable: !0,
						showLabel: !0,
						mapStyle: "amap://styles/whitesmoke",
						preserveDrawingBuffer: !0
					}, HTMLCanvasElement.prototype.getContext = (l = HTMLCanvasElement
						.prototype.getContext,
						function(e, a) {
							return e.indexOf("webgl") > -1 && (a = Object.assign({}, a, {
								preserveDrawingBuffer: !0
							})), l.call(this, e, a)
						})), _();
					const o = new Loca.Container({
						map: a.value
					});
					var t = window.labelsLayer = new Loca.LabelsLayer({
							zooms: [0, 20]
						}),
						n = new Loca.GeoJSONSource({
							url: "static/points/spot_location.json"
						});
					t.setSource(n), t.setStyle({
						icon: {
							type: "image",
							image: "static/img/icon.png",
							size: [48, 75],
							anchor: "center"
						},
						text: {
							content: (e, a) => a.properties.name,
							style: {
								fontSize: 14,
								fontWeight: "normal",
								fillColor: "#5CDE8E",
								strokeColor: "#000",
								strokeWidth: 2
							},
							direction: "bottom"
						},
						extData: (e, a) => a.properties
					}), o.add(t), t.on("complete", (() => {
						var l = new e.Marker({
								offset: [70, -15]
							}),
							o = t.getLabelsLayer().getAllOverlays();
						for (let e of o) e.on("mouseover", (o => {
							var t = o.data.data && o.data.data.position;
							t && (l.setContent(
									'<div class="amap-info-window">地址：' +
									e.getExtData().address + "</div>"),
								l.setPosition(t), a.add(l))
						})), e.on("mouseout", (() => {
							a.remove(l)
						}))
					}))
				})).catch((e => {
					console.log(e)
				}))
			},
			_ = () => {
				new f.value.AutoComplete({
					input: "tipinput"
				}).on("select", j)
			},
			j = e => {
				g.value ? (g.value.setCity(e.poi.adcode), g.value.search(e.poi.name, q)) : (g.value = new f
					.value.PlaceSearch({
						map: a.value,
						panel: "panel"
					}), g.value.setCity(e.poi.adcode), g.value.search(e.poi.name, q)), g.value.on(
					"markerClick", (e => {
						const {
							lng: a,
							lat: l
						} = e.data.location;
						O.value ? (k.value.push([a, l]), C.value.push(e.data.name), console.log(
								`Selected POI: ${e.data.name}, Coordinates: [${a}, ${l}]`)) : console
							.log(`POI Coordinates: Longitude: ${a}, Latitude: ${l}`)
					}))
			},
			q = (e, a) => {
				"complete" === e && "OK" === a.info ? w.value = a.poiList.pois.length > 0 : w.value = !1
			},
			H = e => {
				h.value = e
			},
			N = () => {
				O.value = !0, alert("点击地图上的地点以选取途径点")
			},
			R = () => {
				if (console.log("生成路线被调用"), console.log("交通方式为", L.value), k.value.length < 2)
				return void alert("请至少选取两个地点");
				const [e, ...l] = k.value, o = l.pop();
				$.value && ($.value.clear(), $.value = null);
				let t = {
					map: a.value,
					panel: "route-result",
					waypoints: l.map((e => new f.value.LngLat(e[0], e[1])))
				};
				switch (console.log("routeOptions:", t), L.value) {
					case "driving":
						$.value = new f.value.Driving(t);
						break;
					case "walking":
						$.value = new f.value.Walking(t);
						break;
					case "transit":
						return $.value = new f.value.Transfer({
							map: a.value,
							panel: "route-result",
							city: "长沙市",
							policy: f.value.TransferPolicy.LEAST_TIME
						}), void $.value.search(new f.value.LngLat(e[0], e[1]), new f.value.LngLat(o[0], o[
							1]));
					case "ride":
						$.value = new f.value.Riding(t);
						break;
					default:
						return void console.error("未知的交通方式:", L.value)
				}
				$.value.search(new f.value.LngLat(e[0], e[1]), new f.value.LngLat(o[0], o[1]), {
					waypoints: l.map((e => new f.value.LngLat(e[0], e[1])))
				}), console.log("点数据为：", [e, ...l]), console.log("结束点数据为：", o)
			},
			W = () => {
				$.value && ($.value.clear(), $.value = null), k.value = [], C.value = []
			},
			B = () => {
				setTimeout((() => {
					const e = document.querySelector("#container");
					e ? b(e, {
						useCORS: !0,
						allowTaint: !1,
						scale: 2,
						height: 400,
						windowHeight: 400
					}).then((e => {
						const a = e.toDataURL("image/png"),
							l = document.createElement("a");
						l.href = a, l.download = "map-route.png", l.click()
					})).catch((e => {
						console.error("保存地图容器为图片时出错：", e)
					})) : console.error("地图容器未找到")
				}), 2e3)
			};
		return c((() => {
			P()
		})), d((() => {
			a.value && a.value.destroy()
		})), (e, a) => (l(), o("div", null, [M, t("div", {
			id: "container",
			ref: (e, a) => {
				a.amap = e
			}
		}, null, 512), t("div", {
			class: "panel-container",
			style: p({
				display: w.value ? "block" : "none"
			})
		}, [t("div", A, [t("button", {
			class: "layui-btn layui-btn-primary layui-border-green",
			style: {
				"margin-left": "0px",
				"background-color": "white",
				color: "#39b54a"
			},
			onClick: a[0] || (a[0] = e => H("details"))
		}, "景点详情"), t("button", {
			class: "layui-btn layui-btn-primary layui-border-green",
			style: {
				"margin-left": "0px",
				"background-color": "white",
				color: "#39b54a"
			},
			onClick: a[1] || (a[1] = e => H("route"))
		}, "路线规划")]), t("div", {
			id: "panel",
			style: p({
				display: w.value && "details" === h.value ? "block" : "none"
			})
		}, null, 4), t("div", {
			id: "route-search",
			style: p({
				display: w.value && "route" === h.value ? "block" : "none"
			})
		}, [t("button", {
			class: "xz layui-btn layui-btn-primary layui-border-green",
			style: {
				color: "#39b54a"
			},
			onClick: N
		}, "选取地点"), t("div", S, [D, t("ol", null, [(l(!0), o(r, null, s(C.value,
			((e, a) => (l(), o("li", {
				class: "form-group list",
				key: a
			}, [n(i(e), 1), t("button", {
				onClick: e => (
				e => {
					C.value
						.splice(
							e,
							1
							),
						k
						.value
						.splice(
							e,
							1
							)
				})(a),
				type: "button",
				class: "layui-btn layui-btn-sm layui-btn-disabled"
			}, E, 8, x)])))), 128))])]), v(m, {
			title: "交通方式",
			items: z,
			onSelect: I
		}), t("div", {
			class: "bugroup"
		}, [t("button", {
			class: "layui-btn layui-btn-primary layui-border-green routebu",
			style: {
				color: "#39b54a"
			},
			onClick: R
		}, "生成路线"), t("button", {
			class: "layui-btn layui-btn-primary layui-border-green routebu",
			style: {
				color: "#39b54a"
			},
			onClick: W
		}, "清除路线"), t("button", {
			class: "layui-btn layui-btn-primary layui-border-green",
			style: {
				color: "#39b54a"
			},
			onClick: B
		}, "提交路线")]), T], 4)], 4)]))
	}
}).mount("#app");
