var tabPinterestPosition = [];
var tabCssAjax = [];
var styleCss = "";
var styleCssAjax = "";
var currentW = 0;
var intervalW = 0;
var viewPort = 0;
var viewPortFull = 0;
var searchKeys = [];
var tabTemplateJS = [ "GBLoginTemplate", "GBArticleListTemplateTypeUneGrid",
		"GBArticleListTemplateTypeSlideShow", "GBArticleListTemplateTypeGrid",
		"GBArticleDetailTemplateTypeToolBarUp",
		"GBArticleDetailTemplateTypeClassic",
		"GBCategoriesTemplateTypeFilters", "GBCategoriesTemplateTypeList",
		"GBCategoriesTemplateTypeCircleBand", "GBCommentTemplateTypeClassic",
		"GBTwitterListTemplateTypeSingle", "GBFacebookListTemplateTypeClassic",
		"GBAgendaDetailTemplateTypeToolbarUp", "GBMapListTemplateTypeClassic",
		"GBPluginTemplateTypeClassic", "GBPhotoListTemplateTypePinterest",
		"GBTwitterDetailTemplateTypeClassic",
		"GBPhotoDetailTemplateTypeToolBarUp",
		"GBSoundDetailTemplateTypeClassic", "GBSubmitListTemplateTypeClassic",
		"GBSubmitDetailTemplateTypeClassic",
		"GBBookmarkListTemplateTypeClassic", "GBLiveListTemplateTypeClassic",
		"GBLiveListTemplateTypePlus", "GBSoundDetailTemplateTypeSoundCloud",
		"GBSettingsListTemplateTypeClassic", "GBShareTemplateTypeClassic",
		"GBDeactivatedTemplateTypeClassic",
		"GBArticleListTemplateTypeMinimalColor",
		"GBArticleListTemplateTypeMinimalPhotos",
		"GBArticleDetailTemplateTypeToolBarSlide",
		"GBArticleDetailTemplateTypeToolBarSwipe" ];
var tabOrientationJS = [ "GBArticleListTemplateTypeUneGrid",
		"GBArticleDetailTemplateTypeClassic",
		"GBArticleDetailTemplateTypeToolBarUp",
		"GBArticleListTemplateTypeGrid", "GBFacebookListTemplateTypeClassic",
		"GBMapListTemplateTypeClassic", "GBPluginTemplateTypeClassic",
		"GBPhotoDetailTemplateTypeToolBarUp",
		"GBPhotoListTemplateTypePinterest", "GBSubmitListTemplateTypeClassic",
		"GBCommentTemplateTypeClassic", "GBSubmitDetailTemplateTypeClassic",
		"GBAgendaDetailTemplateTypeToolbarUp",
		"GBBookmarkListTemplateTypeClassic",
		"GBSoundDetailTemplateTypeSoundCloud", "GBLiveListTemplateTypePlus",
		"GBLiveListTemplateTypeClassic", "GBShareTemplateTypeClassic",
		"GBDeactivatedTemplateTypeClassic",
		"GBArticleListTemplateTypeMinimalColor",
		"GBArticleListTemplateTypeMinimalPhotos" ];
var changingOrientation = false;
var loadingMore = false;
var loggedInServices = [];
(function() {
	var d, c;
	jQuery.uaMatch = function(a) {
		a = a.toLowerCase();
		var b = /(chrome)[ \/]([\w.]+)/.exec(a)
				|| /(webkit)[ \/]([\w.]+)/.exec(a)
				|| /(opera)(?:.*version|)[ \/]([\w.]+)/.exec(a)
				|| /(msie) ([\w.]+)/.exec(a) || a.indexOf("compatible") < 0
				&& /(mozilla)(?:.*? rv:([\w.]+)|)/.exec(a) || [];
		return {
			browser : b[1] || "",
			version : b[2] || "0"
		}
	};
	d = jQuery.uaMatch(navigator.userAgent);
	c = {};
	if (d.browser) {
		c[d.browser] = true;
		c.version = d.version
	}
	if (c.chrome) {
		c.webkit = true
	} else {
		if (c.webkit) {
			c.safari = true
		}
	}
	jQuery.browser = c;
	jQuery.sub = function() {
		function f(h, e) {
			return new f.fn.init(h, e)
		}
		jQuery.extend(true, f, this);
		f.superclass = this;
		f.fn = f.prototype = this();
		f.fn.constructor = f;
		f.sub = this.sub;
		f.fn.init = function a(h, e) {
			if (e && e instanceof jQuery && !(e instanceof f)) {
				e = f(e)
			}
			return jQuery.fn.init.call(this, h, e, b)
		};
		f.fn.init.prototype = f.fn;
		var b = f(document);
		return f
	}
})();
(function(u) {
	var x = u('<style rel="alternate stylesheet" type="text/css" />').appendTo(
			"head")[0], p = x.sheet ? "sheet" : "styleSheet", r = x[p], n = r.rules ? "rules"
			: "cssRules", t = r.deleteRule ? "deleteRule" : "removeRule", w = r.ownerNode ? "ownerNode"
			: "owningElement", v = /^([^{]+)\{([^}]*)\}/m, o = /([^:]+):([^;}]+)/;
	r.disabled = true;
	var q = u.rule = function(b, a) {
		if (!(this instanceof q)) {
			return new q(b, a)
		}
		this.sheets = q.sheets(a);
		if (b && v.test(b)) {
			b = q.clean(b)
		}
		if (typeof b == "object" && !b.exec) {
			y(this, b.get ? b.get() : b.splice ? b : [ b ])
		} else {
			y(this, this.sheets.cssRules().get());
			if (b) {
				return this.filter(b)
			}
		}
		return this
	};
	u.extend(q, {
		sheets : function(a) {
			var b = a;
			if (typeof b != "object") {
				b = u.makeArray(document.styleSheets)
			}
			b = u(b).not(r);
			if (typeof a == "string") {
				b = b.ownerNode().filter(a).sheet()
			}
			return b
		},
		rule : function(a) {
			if (a.selectorText) {
				return [ "", a.selectorText, a.style.cssText ]
			}
			return v.exec(a)
		},
		appendTo : function(c, e, d) {
			switch (typeof e) {
			case "string":
				e = this.sheets(e);
			case "object":
				if (e[0]) {
					e = e[0]
				}
				if (e[p]) {
					e = e[p]
				}
				if (e[n]) {
					break
				}
			default:
				if (typeof c == "object") {
					return c
				}
				e = r
			}
			var a;
			if (!d && (a = this.parent(c))) {
				c = this.remove(c, a)
			}
			var b = this.rule(c);
			if (e.addRule) {
				e.addRule(b[1], b[2] || ";")
			} else {
				if (e.insertRule) {
					e.insertRule(b[1] + "{" + b[2] + "}", e[n].length)
				}
			}
			return e[n][e[n].length - 1]
		},
		remove : function(b, a) {
			a = a || this.parent(b);
			if (a != r) {
				var c = a ? u.inArray(b, a[n]) : -1;
				if (c != -1) {
					b = this.appendTo(b, 0, true);
					a[t](c)
				}
			}
			return b
		},
		clean : function(a) {
			return u.map(a.split("}"), function(b) {
				if (b) {
					return q.appendTo(b + "}")
				}
			})
		},
		parent : function(a) {
			if (typeof a == "string" || !u.browser.msie) {
				return a.parentStyleSheet
			}
			var b;
			this.sheets().each(function() {
				if (u.inArray(a, this[n]) != -1) {
					b = this;
					return false
				}
			});
			return b
		},
		outerText : function(a) {
			return !a || !a.selectorText ? "" : [ a.selectorText + "{",
					"\t" + a.style.cssText, "}" ].join("\n").toLowerCase()
		},
		text : function(a, b) {
			if (b !== undefined) {
				a.style.cssText = b
			}
			return !a ? "" : a.style.cssText.toLowerCase()
		}
	});
	q.fn = q.prototype = {
		pushStack : function(c, a) {
			var b = q(c, a || this.sheets);
			b.prevObject = this;
			return b
		},
		end : function() {
			return this.prevObject || q(0, [])
		},
		filter : function(b) {
			var a;
			if (!b) {
				b = /./
			}
			if (b.split) {
				a = u.trim(b).toLowerCase().split(/\s*,\s*/);
				b = function() {
					var c = this.selectorText || "";
					return !!u.grep(c.toLowerCase().split(/\s*,\s*/), function(
							d) {
						return u.inArray(d, a) != -1
					}).length
				}
			} else {
				if (b.exec) {
					a = b;
					b = function() {
						return a.test(this.selectorText)
					}
				}
			}
			return this.pushStack(u.grep(this, function(c, d) {
				return b.call(c, d)
			}))
		},
		add : function(b, a) {
			return this.pushStack(u.merge(this.get(), q(b, a)))
		},
		is : function(a) {
			return !!(a && this.filter(a).length)
		},
		not : function(a, b) {
			a = q(a, b);
			return this.filter(function() {
				return u.inArray(this, a) == -1
			})
		},
		append : function(c) {
			var a = this, b;
			u.each(c.split(/\s*;\s*/), function(d, e) {
				if ((b = o.exec(e))) {
					a.css(b[1], b[2])
				}
			});
			return this
		},
		text : function(a) {
			return !arguments.length ? q.text(this[0]) : this.each(function() {
				q.text(this, a)
			})
		},
		outerText : function() {
			return q.outerText(this[0])
		}
	};
	u.each({
		ownerNode : w,
		sheet : p,
		cssRules : n
	}, function(c, b) {
		var a = b == n;
		u.fn[c] = function() {
			return this.map(function() {
				return a ? u.makeArray(this[b]) : this[b]
			})
		}
	});
	u.fn.cssText = function() {
		return this.filter("link,style").eq(0).sheet().cssRules().map(
				function() {
					return q.outerText(this)
				}).get().join("\n")
	};
	u.each("remove,appendTo,parent".split(","), function(b, a) {
		q.fn[a] = function() {
			var d = u.makeArray(arguments), c = this;
			d.unshift(0);
			return this.each(function(e) {
				d[0] = this;
				c[e] = q[a].apply(q, d) || c[e]
			})
		}
	});
	u
			.each(
					("each,index,get,size,eq,slice,map,attr,andSelf,css,show,hide,toggle,queue,dequeue,stop,animate,fadeIn,fadeOut,fadeTo")
							.split(","), function(b, a) {
						q.fn[a] = u.fn[a]
					});
	function y(a, b) {
		a.length = 0;
		Array.prototype.push.apply(a, b)
	}
	var s = u.curCSS;
	u.curCSS = function(a, b) {
		return ("selectorText" in a) ? a.style[b]
				|| u.prop(a, b == "opacity" ? 1 : 0, "curCSS", 0, b) : s.apply(
				this, arguments)
	};
	q.cache = {};
	var z = function(a) {
		return function(b) {
			var c = b.selectorText;
			if (c) {
				arguments[0] = q.cache[c] = q.cache[c] || {}
			}
			return a.apply(u, arguments)
		}
	};
	u.data = z(u.data);
	u.removeData = z(u.removeData);
	u(window).unload(function() {
		u(r).cssRules().remove()
	})
})(jQuery);
function init(theme, mytheme, backup, initCallback, noTimeoutCallback) {
	var stopCallback = false;
	if (initCallback && !noTimeoutCallback) {
		setTimeout(function() {
			if (!stopCallback) {
				initCallback
			}
		}, 4000)
	}
	if (!theme) {
		theme = 0
	}
	if (!mytheme) {
		mytheme = 0
	}
	if (!backup) {
		backup = 0
	}
	href = document.location.href;
	document.location.href = href + (href.match(/\?/) ? "&" : "?") + "theme="
			+ theme + "&mytheme=" + mytheme + "&backup=" + backup;
	if (initCallback) {
		stopCallback = true;
		eval(initCallback)
	}
}
$(function() {
	if ($("body").hasClass("nofixed")) {
		$("body")
				.css("background-color", $("#fake-bg").css("background-color"))
	}
	if (getCookie("pixel_ratio") == null
			&& (typeof window.devicePixelRatio == "undefined" || window.devicePixelRatio <= 1)) {
	}
	initTimeZone();
	initHomeMenu();
	initSwipeMenu();
	initAppCache();
	initSwitches();
	initInfiniteScroll();
	initSearchBar();
	initLocalStorage();
	$(window).on("load", function() {
		setTimeout(function() {
			hideAddressBar()
		}, 100);
		$("section.menu a[href], section.home a[href]").each(function() {
			$.mobile.loadPage($(this).attr("href"), {
				type : false,
				reloadPage : false,
				type : "get"
			})
		})
	})
});
$(document).on("mobileinit", function() {
	$.mobile.defaultPageTransition = "fade";
	$.mobile.page.prototype.options.domCache = true;
	$.event.special.swipe.horizontalDistanceThreshold = 100;
	$.event.special.swipe.verticalDistanceThreshold = 100;
	if ($.mobile.browser.ie) {
		$.mobile.ajaxEnabled = false;
		$.mobile.pushStateEnabled = false
	}
});
$(document).on("pagebeforeload", function(a) {
	initLocalStorage()
});
$(document).on("pageload", function(c, a) {
	var b = a.xhr.getResponseHeader("X-Redirect");
	if (b) {
		a.page.jqmData("redirect", b)
	}
});
$(document).on("pagecreate", function(b) {
	$(".GBSearchTemplate").css("visibility", "hidden");
	var a = $(b.target).attr("data-url");
	if (styleCssAjax != "" && !tabCssAjax[a]) {
		tabCssAjax[a] = styleCssAjax
	}
	styleCssAjax = ""
});
$(document).on("pagebeforechange", function(c, a) {
	if ($.type(a.toPage) !== "string") {
		var b = a.toPage.jqmData("redirect");
		if (b) {
			a.toPage = b;
			a.options.data = "";
			a.type = "get"
		}
	}
});
$(document).on("pagechange", function(c, b) {
	var a = $(b.toPage[0]).attr("data-url");
	if (tabCssAjax[a]) {
		$.rule(tabCssAjax[a]).appendTo("style")
	}
	hideAddressBar()
});
$(document).on(
		"pagebeforeshow",
		function(a) {
			$(".ui-header-fixed").show();
			if ($("#root").hasClass("locked")
					|| ($(".home").length && !$.mobile.path
							.parseUrl(location.href).search
							.match(/(section|key)=/))) {
				swipe(true)
			}
			currentW = 0;
			if (styleCss != "") {
				$("#extend-style").html(styleCss)
			}
			if (navigator.userAgent
					.match(/Android (1.0|1.1|1.5|1.6|2.0|2.1|2.2|2.3)/)) {
				$("[data-prefetch]").removeAttr("data-prefetch")
			}
			initTouchScroll();
			initAds()
		});
$(document)
		.on(
				"pageshow",
				function(e) {
					initLazyLoad();
					$(window).off("orientationchange").on("orientationchange",
							function(event) {
								setTimeout(function() {
									hideAddressBar();
									changeOrientation(event.orientation)
								}, 0)
							});
					changeOrientation($.event.special.orientationchange
							.orientation());
					var processJS = false;
					for (template in tabTemplateJS) {
						if ($.mobile.activePage.find("."
								+ tabTemplateJS[template]).length
								&& $.mobile.activePage.find(
										"." + tabTemplateJS[template]).attr(
										"data-js") != "false") {
							var fct = eval("init" + tabTemplateJS[template]);
							if (typeof fct == "function") {
								fct()
							}
							processJS = true;
							if ($.inArray(tabTemplateJS[template],
									tabOrientationJS) >= 0) {
								$(window).on("orientationchange", {
									callback : fct
								}, function(e) {
									setTimeout(function() {
										changingOrientation = true;
										e.data.callback();
										changingOrientation = false;
										hideAddressBar()
									}, 0)
								})
							}
						}
					}
					if (processJS) {
						setTimeout(function() {
							hideAddressBar()
						}, 0)
					}
				});
function changeOrientation(a) {
	$("body").removeClass("portrait landscape");
	$("body").addClass(a);
	adjustFakeBg();
	if ($("body").hasClass("locked")) {
		$("html, body").css({
			"min-height" : viewPortHeight(0, 0, true) + "px",
			height : viewPortHeight(0, 0, true) + "px"
		})
	}
	if (currentW != 0 && currentW == $(window).width()) {
		window.setTimeout(function() {
			changeOrientation(a)
		}, 0)
	} else {
		currentW = $(window).width();
		setSwipeBg()
	}
}
function initGBArticleListTemplateTypeSlideShow() {
	slideShowContent($(".slideshow").parent(), ".slideshow", $(".pager span",
			$.mobile.activePage))
}
function initGBArticleListTemplateTypeGrid() {
	sameHeightContent(".GBArticleListTemplateTypeGrid .same-height .infos")
}
function initGBArticleListTemplateTypeUneGrid() {
	sameHeightContent(".same-height .toresize")
}
function initGBArticleDetailTemplateTypeToolBarUp() {
	if (!changingOrientation) {
		var b = $.mobile.activePage;
		b.off("swipeleft swiperight").on("swipeleft swiperight", function(d) {
			var c = $(this).find(".pager .sel");
			if (d.type == "swiperight" && c.prev().length) {
				c.prev().trigger("click")
			} else {
				if (d.type == "swipeleft" && c.next().length) {
					c.next().trigger("click")
				}
			}
		})
	}
	var a = viewPortHeight($(".ui-content", $.mobile.activePage).css(
			"margin-top"), $(".ui-content", $.mobile.activePage).css(
			"margin-bottom"));
	$(".ui-content > div:eq(0)", $.mobile.activePage).css("min-height",
			a + "px")
}
function initGBArticleDetailTemplateTypeClassic() {
	if (!changingOrientation) {
		var b = $.mobile.activePage;
		b.off("swipeleft swiperight").on("swipeleft swiperight", function(c) {
			if (c.type == "swiperight" && $(".prev-item", b).length) {
				$(".prev-item", b).trigger("click")
			} else {
				if (c.type == "swipeleft" && $(".next-item", b).length) {
					$(".next-item", b).trigger("click")
				}
			}
		})
	}
	var a = viewPortHeight($(".ui-content", $.mobile.activePage).css(
			"margin-top"), $(".ui-content", $.mobile.activePage).css(
			"margin-bottom"));
	$(".ui-content > div", $.mobile.activePage).css("min-height", a + "px")
}
function initGBCategoriesTemplateTypeFilters() {
	$(".list-subsections", $.mobile.activePage).parent().off(
			"popupbeforeposition popupafteropen").on(
			{
				popupbeforeposition : function(a, b) {
					$(this).hide();
					$(this).find(".filter").width(
							($.mobile.activePage.width() * 80 / 100))
							.css("min-height",
									viewPortHeight(0, 0, true) * 50 / 100)
				},
				popupafteropen : function(a, b) {
					if ($("body").hasClass("desktop")) {
						$(this).css(
								"left",
								($.mobile.activePage.width() - $(this).width())
										/ 2 + "px")
					}
					$(this).show()
				}
			})
}
function initGBCategoriesTemplateTypeList() {
	var a = viewPortHeight($(".main-content", $.mobile.activePage).parent()
			.css("margin-top"), $(".main-content", $.mobile.activePage)
			.parent().css("margin-bottom"));
	$(".subsections .main-content > div", $.mobile.activePage).css(
			"min-height", a + "px")
}
function initGBCategoriesTemplateTypeCircleBand() {
	setTimeout(function() {
		var a = $(".subsections ul", $.mobile.activePage);
		width = 0;
		a.find("li").each(function() {
			width += $(this).outerWidth(false)
		});
		a.css("width", width + a.find("li").length + "px")
	}, 2000)
}
function initGBCommentTemplateTypeClassic() {
	var a = viewPortHeight($(".ui-content", $.mobile.activePage).css(
			"margin-top"), $(".ui-content", $.mobile.activePage).css(
			"margin-bottom"));
	if ($("form", $.mobile.activePage).length) {
		a -= $(".infos", $.mobile.activePage).height()
				+ $("h2", $.mobile.activePage).height();
		a -= parseInt($("textarea.form").css("padding-top")) * 2
				+ parseInt($("textarea.form").css("margin-top"));
		$("textarea.form", $.mobile.activePage).height(a);
		if (!changingOrientation) {
			$("form input, form textarea", $.mobile.activePage).off("focus")
					.on("focus", function() {
						$(this).removeClass("error")
					});
			$("form", $.mobile.activePage)
					.off("submit")
					.on(
							"submit",
							function(b) {
								$("input:visible, textarea", $(this))
										.each(
												function() {
													if ($(this).val().length == 0) {
														$(this).addClass(
																"error")
													}
													if ($(this).attr("name") == "comment_email"
															&& !isValidEmail($(
																	this).val())) {
														$(this).addClass(
																"error")
													}
													if ($(this).attr("name") == "comment_content"
															&& $(this).val() > 1500) {
														$(this).addClass(
																"error")
													}
												});
								if ($(".error", $(this)).length
										|| $(".GBLoginTemplate",
												$.mobile.activePage).is(
												":visible")) {
									b.preventDefault();
									b.stopPropagation();
									return false
								}
							})
		}
	} else {
		$(".ui-content .noitems, .ui-content > div:eq(0)", $.mobile.activePage)
				.css("min-height", a + "px")
	}
}
function initGBTwitterListTemplateTypeSingle() {
	var a = $.mobile.activePage;
	a.off("swipeleft swiperight").on(
			"swipeleft swiperight",
			function(c) {
				var b = null;
				if (c.type == "swiperight"
						&& $(this).find(".column:visible").prev().length) {
					b = $(this).find(".column:visible").prev()
				} else {
					if (c.type == "swipeleft"
							&& $(this).find(".column:visible").next().length) {
						b = $(this).find(".column:visible").next()
					}
				}
				if (b != null) {
					$(".column", $.mobile.activePage).hide();
					$(".column:eq(" + b.index() + ")", $.mobile.activePage)
							.show()
				}
			});
	$(".main-content a", $.mobile.activePage).removeClass("ui-link")
}
function initGBTwitterDetailTemplateTypeClassic() {
	var a = $.mobile.activePage;
	a.off("swipeleft swiperight").on("swipeleft swiperight", function(b) {
		if (b.type == "swiperight" && $(".prev-tweet", a).length) {
			$(".prev-tweet", a).trigger("click")
		} else {
			if (b.type == "swipeleft" && $(".next-tweet", a).length) {
				$(".next-tweet", a).trigger("click")
			}
		}
	})
}
function initGBFacebookListTemplateTypeClassic() {
	if (!changingOrientation && $.mobile.activePage.find(".div-map").length) {
		id = $.mobile.activePage.find(".div-map > .map").attr("id").replace(
				/map-canvas-/, "");
		gmapScript(id)
	}
}
function initGBMapListTemplateTypeClassic() {
	if (!changingOrientation) {
		gmapScript($(".GBMapListTemplateTypeClassic > div", $.mobile.activePage)
				.attr("id").replace("map-canvas-", ""))
	}
	var a = viewPortHeight($(".ui-content", $.mobile.activePage).css(
			"margin-top"), $(".ui-content", $.mobile.activePage).css(
			"margin-bottom"));
	$(".GBMapListTemplateTypeClassic > div", $.mobile.activePage).height(a)
}
function initGBPluginTemplateTypeClassic() {
	var b = $.mobile.activePage;
	var a = b.find("iframe");
	$("iframe", $.mobile.activePage).height(viewPortHeight(0, 0));
	$("iframe", $.mobile.activePage).on(
			"load",
			function() {
				$(this).contents().find("body").css("font-size",
						(coeffSize * 12) + "px").css("min-height",
						$(this).css("height"));
				$(this).contents().find("a").each(function() {
					if ($.mobile.path.isExternal($(this).attr("href"))) {
						$(this).attr("target", "_blank")
					}
				})
			})
}
function initGBAgendaDetailTemplateTypeToolbarUp() {
	var b = viewPortHeight($(".ui-content", $.mobile.activePage).css(
			"margin-top"), $(".ui-content", $.mobile.activePage).css(
			"margin-bottom"));
	$(".GBAgendaDetailTemplateTypeToolbarUp > div", $.mobile.activePage).eq(0)
			.css("min-height", b);
	var a = mosaicSize($(".GBAgendaDetailTemplateTypeToolbarUp",
			$.mobile.activePage), 2, 10);
	$(
			".detail-article .div-button, .detail-article .button-event, .detail-article .backto",
			$.mobile.activePage).width(a);
	if (!changingOrientation) {
		gmapScript($(".div-map > div", $.mobile.activePage).attr("id").replace(
				"map-canvas-", ""))
	}
}
function initGBPhotoDetailTemplateTypeToolBarUp() {
	$("img.detail-photo", $.mobile.activePage).css("max-height",
			viewPortHeight(0, 0) + "px");
	$(".encapse-photo", $.mobile.activePage).css("line-height",
			viewPortHeight(0, 0) + "px");
	$(".encapse-photo", $.mobile.activePage).css("height",
			viewPortHeight(0, 0) + "px");
	if (!$("body").hasClass("nofixed")) {
		disableScroll()
	}
	if (!changingOrientation) {
		var a = $.mobile.activePage;
		a.off("swipeleft swiperight").on("swipeleft swiperight", function(b) {
			if (b.type == "swiperight" && $(".prev-photo", a).length) {
				$(".prev-photo", a).trigger("click")
			} else {
				if (b.type == "swipeleft" && $(".next-photo", a).length) {
					$(".next-photo", a).trigger("click")
				}
			}
		})
	}
}
function initGBPhotoListTemplateTypePinterest() {
	tabPinterestPosition = [];
	$(
			".GBPhotoListTemplateTypePinterest, .GBPhotoListTemplateTypePinterest img",
			$.mobile.activePage).height("auto");
	pinterestPosition($(".ui-content", $.mobile.activePage), 0, 2, 10)
}
function initGBSoundDetailTemplateTypeClassic() {
	var a = $("audio, video", $.mobile.activePage).get(0);
	a.load();
	$(a)
			.off("loadedmetadata")
			.on(
					"loadedmetadata",
					function() {
						var b = parseFloat(this.duration);
						if (!isNaN(b) && isFinite(b) && b > 0) {
							$(".progress-range", $.mobile.activePage).attr(
									"max", b).slider("refresh");
							if (!$(".GBSoundDetailTemplateTypeSoundCloud",
									$.mobile.activePage).length) {
								$("table.controls tr.progressbar td:eq(2)",
										$.mobile.activePage).html(
										secondsToHms(b))
							}
							$("table.controls tr.progressbar td",
									$.mobile.activePage).css("visibility",
									"visible");
							$(a).off("ended").on(
									"ended",
									function() {
										$(".player-play", $.mobile.activePage)
												.trigger("click")
									});
							$(a)
									.off("timeupdate")
									.on(
											"timeupdate",
											function() {
												$(".progress-range",
														$.mobile.activePage)
														.val(this.currentTime)
														.slider("refresh");
												if (!$(
														".GBSoundDetailTemplateTypeSoundCloud",
														$.mobile.activePage).length) {
													$(
															"table.controls tr.progressbar td:eq(0)",
															$.mobile.activePage)
															.html(
																	secondsToHms(this.currentTime))
												}
											});
							$(".progress-range", $.mobile.activePage).off(
									"slidestart").on(
									"slidestart",
									function() {
										$(".player-play", $.mobile.activePage)
												.trigger("click", [ "pause" ]);
										a.currentTime = $(this).val()
									});
							$(".progress-range", $.mobile.activePage)
									.off("slidestop")
									.on(
											"slidestop",
											function() {
												if ($(this).val() < a.duration) {
													a.currentTime = $(this)
															.val();
													$(".player-play",
															$.mobile.activePage)
															.trigger("click")
												}
												if (!$(
														".GBSoundDetailTemplateTypeSoundCloud",
														$.mobile.activePage).length) {
													$(
															"table.controls tr.progressbar td:eq(0)",
															$.mobile.activePage)
															.html(
																	secondsToHms($(
																			this)
																			.val()))
												}
												$(".progress-range",
														$.mobile.activePage)
														.val($(this).val())
														.slider("refresh")
											})
						}
					});
	$(".player-play", $.mobile.activePage).off("click").on(
			"click",
			function(c, b) {
				if ($(this).find("img").attr("src").match("-play")
						&& b != "pause") {
					if ($(this).find("img").hasClass("change-playpause")) {
						$(this).find("img").attr(
								"src",
								$(this).find("img").attr("src").replace(
										"-play", "-pause"));
						$(this).next(".loop").addClass("ball")
					}
					a.play()
				} else {
					$(this).find("img").attr(
							"src",
							$(this).find("img").attr("src").replace("-pause",
									"-play"));
					a.pause();
					$(this).next(".loop").removeClass("ball")
				}
			});
	$("table.controls a.change-track", $.mobile.activePage).off("click").on(
			"click",
			function() {
				$(".player-play", $.mobile.activePage).trigger("click",
						[ "pause" ])
			})
}
function initGBLiveListTemplateTypeClassic() {
	var a = viewPortHeight($(".ui-content", $.mobile.activePage).css(
			"margin-top"), $(".ui-content", $.mobile.activePage).css(
			"margin-bottom"));
	$(".GBLiveListTemplateTypeClassic > .relative", $.mobile.activePage)
			.height(a);
	if (!changingOrientation) {
		initGBSoundDetailTemplateTypeClassic();
		$("audio, video", $.mobile.activePage)
				.off("canplay")
				.on(
						"canplay",
						function() {
							if ($(this).get(0).networkState == $(this).get(0).NETWORK_EMPTY) {
								$(".circle, .loop", $.mobile.activePage).hide()
							}
						})
	}
}
function initGBLiveListTemplateTypePlus() {
	var a = viewPortHeight($(".ui-content", $.mobile.activePage).css(
			"margin-top"), $(".ui-content", $.mobile.activePage).css(
			"margin-bottom"));
	$(".GBLiveListTemplateTypePlus > .relative", $.mobile.activePage).height(a);
	if (!changingOrientation) {
		initGBSoundDetailTemplateTypeClassic()
	}
}
function initGBSubmitListTemplateTypeClassic() {
	if (!changingOrientation) {
		if (!inputFileEnabled()) {
			$("table td:eq(0), table td:eq(1)", $.mobile.activePage).hide()
		} else {
			$("table td a.video, table td a.photo", $.mobile.activePage).off(
					"click").on("click", function(c) {
				$(this).next("input").trigger("click");
				c.preventDefault();
				c.stopPropagation();
				return false
			});
			$("[type=file]", $.mobile.activePage).off("change").on(
					"change",
					function(f) {
						var d = $(this).attr("name").replace("submit_", "");
						var c = "var dataSend = {submit_object_name: '"
								+ f.target.files[0].name
								+ "'}; $.mobile.changePage('"
								+ $(this).prev("a").attr("href")
								+ "', { type: 'post', data: dataSend });";
						uploadFile(f.target.files[0], d, c)
					})
		}
	}
	var a = $(".main-content table td:visible", $.mobile.activePage).length;
	var b = Math.floor((viewPortHeight($(".ui-content", $.mobile.activePage)
			.css("margin-top"), $(".ui-content", $.mobile.activePage).css(
			"margin-bottom")) / a)) - 1;
	$(".main-content table td", $.mobile.activePage).height(b)
}
function initGBSubmitDetailTemplateTypeClassic() {
	var a = viewPortHeight($(".ui-content", $.mobile.activePage).css(
			"margin-top"), $(".ui-content", $.mobile.activePage).css(
			"margin-bottom"));
	a -= (parseInt($(".infos-form", $.mobile.activePage).css("padding-top")) + parseInt($(
			".infos-form", $.mobile.activePage).css("padding-bottom")));
	$(".infos-form", $.mobile.activePage).css("min-height", a + "px");
	$(".photo, video", $.mobile.activePage).height(parseInt(a * 0.4));
	a -= $(".infos-top", $.mobile.activePage).height();
	$(".textarea-form", $.mobile.activePage).height(parseInt(a - 20));
	if (!changingOrientation) {
		$("form input, form textarea", $.mobile.activePage).off("focus").on(
				"focus", function() {
					$(this).removeClass("error")
				});
		$("form", $.mobile.activePage).off("submit").on(
				"submit",
				function(b) {
					$("input:visible, textarea", $(this)).each(
							function() {
								if ($(this).val().length == 0) {
									$(this).addClass("error")
								}
								if ($(this).attr("name") == "submit_user"
										&& !isValidEmail($(this).val())) {
									$(this).addClass("error")
								}
							});
					if ($(".error", $(this)).length) {
						b.preventDefault();
						b.stopPropagation();
						return false
					}
				});
		$(".switch-user").off("click").on("click", function() {
			$(".GBLoginTemplate", $.mobile.activePage).popup("open")
		})
	}
}
function initGBBookmarkListTemplateTypeClassic() {
	var a = viewPortHeight($(".ui-content", $.mobile.activePage).css(
			"margin-top"), $(".ui-content", $.mobile.activePage).css(
			"margin-bottom"));
	$("article.noitems", $.mobile.activePage).css("min-height", a + "px")
}
function initGBSoundDetailTemplateTypeSoundCloud() {
	var a = viewPortHeight(0, 0)
			+ $("[data-role=footer]", $.mobile.activePage).height();
	$(".GBSoundDetailTemplateTypeSoundCloud:eq(0), .bg-cover",
			$.mobile.activePage).css("min-height", a + "px")
}
function initGBSettingsListTemplateTypeClassic() {
	$("img.switch-on-off", $.mobile.activePage).off("click").on(
			"click",
			function(b) {
				if ($(this).attr("class").match("connect")) {
					var a = $(this).attr("class").replace(
							"switch-on-off connect", "");
					if ($(this).attr("src").match("-off")) {
						b.preventDefault();
						b.stopPropagation();
						oAuthLogin(a, location.href)
					} else {
						oAuthLogout(a)
					}
				}
			});
	if (window.applicationCache || typeof localStorage != "undefined") {
		$(".clear-cache", $.mobile.activePage).off("click").on("click",
				function(a) {
					$.post(location.href, {
						action : "clearcache"
					}, function(b) {
						alert(b);
						window.applicationCache.update();
						localStorage.removeItem("searches");
						window.location.reload()
					});
					a.preventDefault();
					a.stopPropagation();
					return false
				})
	}
}
function initSwipeMenu() {
	if ($("section.menu").length) {
		$("section.menu nav ul li a").on(
				"vclick",
				function() {
					$("section.menu nav ul li").removeClass("sel");
					$(this).parent().addClass("sel");
					$("img:eq(1)", $("section.menu nav ul li a")).addClass(
							"hidden");
					$("img:eq(0)", $("section.menu nav ul li a")).removeClass(
							"hidden");
					$("img:eq(1)", $(this)).removeClass("hidden");
					$("img:eq(0)", $(this)).addClass("hidden")
				})
	}
}
function initTouchScroll() {
	$(document).off("scrollstart");
	if (!$("body").hasClass("desktop") && !$.support.touchOverflow) {
		var a = 0;
		var b = 0;
		$("[data-scroll]").off("touchstart").on("touchstart", function(c) {
			a = this.scrollTop + c.originalEvent.touches[0].pageY;
			b = this.scrollLeft + c.originalEvent.touches[0].pageX
		});
		$("[data-scroll]")
				.off("touchmove")
				.on(
						"touchmove",
						function(c) {
							if ($(this).attr("data-scroll") == "y") {
								if ((this.scrollTop < this.scrollHeight
										- this.offsetHeight && this.scrollTop
										+ c.originalEvent.touches[0].pageY < a - 5)
										|| (this.scrollTop != 0 && this.scrollTop
												+ c.originalEvent.touches[0].pageY > a + 5)) {
									c.preventDefault();
									this.scrollTop = a
											- c.originalEvent.touches[0].pageY
								}
							} else {
								if ($(this).attr("data-scroll") == "x") {
									if ((this.scrollLeft < this.scrollWidth
											- this.offsetWidth && this.scrollLeft
											+ c.originalEvent.touches[0].pageX < b - 5)
											|| (this.scrollLeft != 0 && this.scrollLeft
													+ c.originalEvent.touches[0].pageX > b + 5)) {
										c.preventDefault();
										this.scrollLeft = b
												- c.originalEvent.touches[0].pageX
									}
								}
							}
						})
	}
}
function initAppCache() {
	if (window.applicationCache) {
		$(window.applicationCache).on("updateready", function() {
			if (window.applicationCache.status == 4) {
				window.applicationCache.swapCache()
			}
		})
	}
}
function initLazyLoad() {
	$("img[id]", $.mobile.activePage).each(function() {
		if ($(this).attr("id").match("img-")) {
			$(this).attr("data-original", $(this).attr("src"));
			$(this).attr("src", "/static/files/1.png")
		}
	});
	$("[data-original]:visible").lazyload({
		effect : "fadeIn",
		load : function() {
			$(this).removeAttr("data-original")
		}
	})
}
function initSwitches() {
	$(document).on("click", "img.switch-on-off", function(a) {
		var b = $(this).attr("src");
		if (b.match(/switch-on/)) {
			b = b.replace("switch-on", "switch-off")
		} else {
			b = b.replace("switch-off", "switch-on")
		}
		$(this).attr("src", b);
		a.stopPropagation()
	})
}
function initInfiniteScroll() {
	var a = $('<div id="buffer"></div>');
	$(document)
			.on(
					"scrollstop",
					function() {
						if ($("[data-next]", $.mobile.activePage).length
								&& !loadingMore
								&& !$("#root").hasClass("locked")) {
							var e = 0;
							if (navigator.userAgent.indexOf("iPod") >= 0
									|| navigator.userAgent.indexOf("iPhone") >= 0) {
								if ((("standalone" in window.navigator) && !window.navigator.standalone)) {
									e = 60
								}
							}
							if (($(document).height() - ($(window).scrollTop() + $(
									window).height())) == e
									&& $(".ui-content", $.mobile.activePage)
											.is(":visible")) {
								var d = $("[data-next]", $.mobile.activePage)
										.attr("data-next");
								var c = $("[data-section]", $.mobile.activePage)
										.attr("data-section");
								if (d != "") {
									var b = {
										send : "data",
										action : "nextpage",
										section : c,
										path : d
									};
									loadingMore = true;
									$
											.post(
													$.mobile.path
															.get(location.href),
													b,
													function(f) {
														if (f != "") {
															a.html(f);
															$(
																	"[data-next]",
																	$.mobile.activePage)
																	.append(
																			$(
																					"[data-next]",
																					a)
																					.html());
															if ($(
																	"[data-next]",
																	a)
																	.attr(
																			"data-next") != "") {
																$(
																		"[data-next]",
																		$.mobile.activePage)
																		.attr(
																				"data-next",
																				$(
																						"[data-next]",
																						a)
																						.attr(
																								"data-next"))
															} else {
																$(
																		"[data-next]",
																		$.mobile.activePage)
																		.removeAttr(
																				"data-next")
															}
														} else {
															$(
																	"[data-next]",
																	$.mobile.activePage)
																	.removeAttr(
																			"data-next")
														}
														a.html("");
														initLazyLoad();
														$(document).trigger(
																"updatelayout");
														loadingMore = false
													})
								}
							}
						}
					})
}
function initSearchBar() {
	$(document)
			.on(
					"focus",
					".GBSearchTemplate input.search-input",
					function() {
						var b = $(this).parents(".GBSearchTemplate");
						var c = $(".searches", $.mobile.activePage);
						$(".ui-header-fixed").hide();
						b.fixedtoolbar({
							hideDuringFocus : "input, select, textarea"
						}).css({
							top : 0,
							position : "fixed",
							zIndex : 10
						});
						$(this).parent().addClass("focus");
						$("ul", c).css(
								"min-height",
								viewPortHeight($(".ui-content",
										$.mobile.activePage).css("margin-top"),
										$(".ui-content", $.mobile.activePage)
												.css("margin-bottom"))
										+ "px");
						$(".ui-content, .list-subsections", $.mobile.activePage)
								.hide();
						$("a.close-searchbar", $.mobile.activePage).show();
						searchKeys = [];
						if (typeof localStorage != "undefined") {
							if (localStorage.getItem("searches")) {
								searchKeys = JSON.parse(localStorage
										.getItem("searches"))
							}
							if (searchKeys.length > 0) {
								var e = $(".search-history",
										$.mobile.activePage);
								e.html("");
								for (i in searchKeys) {
									var d = $("img:first", c).clone()
											.removeClass("hidden");
									var a = $('<li><a href="'
											+ $("form", b).attr("action")
											+ "&amp;key="
											+ encodeURIComponent(searchKeys[i])
											+ '">' + searchKeys[i]
											+ "</a></li>");
									a.append(d);
									e.append(a)
								}
								e.appendTo(c)
							}
						}
						c.show()
					});
	$(document).on(
			"blur",
			".GBSearchTemplate input.search-input",
			function(b) {
				var a = $(this);
				setTimeout(
						function() {
							a.val("");
							$(".GBSearchTemplate img.search-close",
									$.mobile.activePage).hide();
							var c = a.parents(".GBSearchTemplate");
							$(".ui-header-fixed").show();
							$(".ui-header-fixed, .ui-footer-fixed")
									.fixedtoolbar("show");
							a.parent().removeClass("focus");
							c.fixedtoolbar("destroy").removeAttr("style").css(
									"visibility", "visible");
							a.parent().next().next().hide();
							$(".searches", $.mobile.activePage).hide();
							$(".ui-content, .list-subsections",
									$.mobile.activePage).show()
						}, 100)
			});
	$(document).on(
			"keyup",
			".GBSearchTemplate input.search-input",
			function(a) {
				if (a.which != 13) {
					if ($(this).val() != "") {
						$(".GBSearchTemplate img.search-close",
								$.mobile.activePage).show()
					} else {
						$(".GBSearchTemplate img.search-close",
								$.mobile.activePage).hide()
					}
				}
			});
	$(document).on(
			"submit",
			".GBSearchTemplate form",
			function() {
				if (typeof localStorage != "undefined") {
					searchKeys.push($(".GBSearchTemplate input.search-input",
							$.mobile.activePage).val());
					localStorage
							.setItem("searches", JSON.stringify(searchKeys))
				}
			});
	$(document).on(
			"click",
			".GBSearchTemplate img.search-close",
			function(a) {
				$(".GBSearchTemplate input.search-input", $.mobile.activePage)
						.val("").focus();
				a.preventDefault();
				return false
			})
}
function initGBShareTemplateTypeClassic() {
	var a = viewPortHeight($(".ui-content", $.mobile.activePage).css(
			"margin-top"), $(".ui-content", $.mobile.activePage).css(
			"margin-bottom"));
	$("textarea.form", $.mobile.activePage).css("min-height", a + "px");
	if (!changingOrientation) {
		$(".cartouche > img", $.mobile.activePage).off("click").on(
				"click",
				function(c) {
					var b = $(this).jqmData("service");
					if ($(this).attr("src").match("-off")) {
						if ($(this).hasClass("connect")) {
							oAuthLogin(b, location.href)
						} else {
							$("#share_" + b).val(1);
							$(this).attr("src",
									$(this).attr("src").replace("-off", "-on"))
						}
					} else {
						$("#share_" + b).val(0);
						$(this).attr("src",
								$(this).attr("src").replace("-on", "-off"))
					}
				});
		$("form input, form textarea", $.mobile.activePage).off("focus").on(
				"focus", function() {
					$(this).removeClass("error")
				});
		$("textarea", $.mobile.activePage).off("keydown").on(
				"keydown",
				function(b) {
					charCounter($(this), b, 140, $("#charcounter",
							$.mobile.activePage))
				}).off("paste").on(
				"paste",
				function(b) {
					charCounter($(this), b, 140, $("#charcounter",
							$.mobile.activePage))
				});
		charCounter($("textarea", $.mobile.activePage), null, 140, $(
				"#charcounter", $.mobile.activePage));
		$("form", $.mobile.activePage).off("submit").on("submit", function(c) {
			var b = 0;
			$(".share-service", $(this)).each(function() {
				if ($(this).val() == 1) {
					b = 1
				}
			});
			$("textarea", $(this)).each(function() {
				if ($(this).val() == "") {
					b = 0
				}
			});
			if (!b) {
				c.preventDefault();
				c.stopPropagation();
				return false
			}
		})
	}
}
function initLocalStorage() {
	if (typeof localStorage != "undefined") {
		var b = [ "fa", "tw", "li", "tu", "po" ];
		for (i in b) {
			var a = localStorage.getItem("gb" + b[i]);
			if (a && $.inArray(b[i], loggedInServices) == -1
					&& !$("body").hasClass(b[i])) {
				$.ajax({
					type : "POST",
					url : $.mobile.path.get(location.href),
					data : {
						send : "data",
						action : "storagetoken",
						service : b[i],
						val : a
					},
					context : {
						service : b[i]
					},
					success : function(c) {
						if (c != "ok") {
							localStorage.removeItem("gb" + $(this)[0].service)
						} else {
							loggedInServices.push($(this)[0].service)
						}
					}
				})
			}
			if ($("body").hasClass(b[i])) {
				$.ajax({
					type : "POST",
					url : $.mobile.path.get(location.href),
					data : {
						send : "data",
						action : "storagetoken",
						service : b[i]
					},
					context : {
						service : b[i]
					},
					success : function(e, f, d) {
						var c = d.getResponseHeader("X-Connect-Service");
						if (c) {
							localStorage.setItem("gb" + $(this)[0].service, c);
							loggedInServices.push($(this)[0].service);
							$("body").removeClass($(this)[0].service)
						}
					}
				})
			}
		}
	}
}
function initGBDeactivatedTemplateTypeClassic() {
	var a = viewPortHeight($(".ui-content", $.mobile.activePage).css(
			"margin-top"), $(".ui-content", $.mobile.activePage).css(
			"margin-bottom"));
	$("article.noitems", $.mobile.activePage).css({
		height : a + "px",
		lineHeight : a + "px"
	})
}
function initHomeMenu() {
	$(document).on("click", "section.home a[href]", function(e) {
		var link = $.mobile.path.parseUrl($(this).attr("href")).search;
		var current = $.mobile.path.parseUrl(location.href).search;
		if (link == current) {
			e.preventDefault();
			e.stopPropagation;
			swipe();
			return false
		}
	});
	if ($("section.home").length) {
		var template = $("section.home").parent().attr("class").replace(
				/(GBRootControllerType\w+) .*/, "$1");
		if ($.type(window["init" + template]) != "undefined") {
			eval("init" + template + "();")
		}
	}
}
function initGBRootControllerTypeGrid() {
	var a = viewPortHeight(0, 0, true);
	a -= $(".home h2").height();
	$(".home .home-menu > div:first").height(
			$(".home .home-menu > div:first").height());
	$(".home > .relative").css("min-height", a + "px");
	$(".home .home-menu").css(
			"top",
			Math.max((16 * coeffSize), parseInt(($(".home > .relative")
					.height() - $(".home .home-menu").height()) / 2))
					+ "px");
	slideShowContent($(".home .home-menu"), ".home-sections",
			$(".home .home-menu .pager span"), true)
}
function initGBRootControllerTypeSlate() {
	var b = viewPortHeight(0, 0, true);
	var a = $(".home .home-menu ul").attr("data-max");
	if (b < 430) {
		nb = 6
	} else {
		if (b < 490) {
			nb = 7
		} else {
			if (b < 540) {
				nb = 8
			} else {
				if (b < 580) {
					nb = 9
				} else {
					nb = 10
				}
			}
		}
	}
	nb = Math.min(nb, a);
	var c;
	while ((c = $(".home .home-menu ul > a:lt(" + nb + ")").remove()).length) {
		$('<li class="home-sections"/>').append(c).appendTo(
				$(".home .home-menu ul"));
		$(".home .home-menu .pager").append("<span>")
	}
	$(".home .home-menu ul").height($(".home .home-menu ul").height());
	if (!$(".home .home-menu .pager span.sel").length) {
		$(".home .home-menu .pager span:first").addClass("sel")
	}
	$(".home .home-menu").css(
			"top",
			Math.max(10, parseInt((b - $(".home .home-menu").height()) / 2))
					+ "px");
	$(".home .home-menu").css(
			"left",
			Math.max(10, parseInt(($(window).width() - $(".home .home-menu")
					.width()) / 2))
					+ "px");
	slideShowContent($(".home .home-menu"), ".home-sections",
			$(".home .home-menu .pager span"), true)
}
function initGBRootControllerTypeLargeTypo() {
	var a = viewPortHeight(0, 0, true);
	if (a < 430) {
		nb = 6
	} else {
		if (a < 490) {
			nb = 7
		} else {
			if (a < 540) {
				nb = 8
			} else {
				if (a < 580) {
					nb = 9
				} else {
					nb = 10
				}
			}
		}
	}
	if ($(".home tr:gt(" + nb + ")").length) {
		$(".home")
				.append(
						$(
								'<table cellpadding="0" cellspacing="0" style="height: auto"/>')
								.append($(".home tr:gt(" + nb + ")").remove()))
	}
	$(".home table").css("font-size", a + "px");
	$(".home td a").css(
			"font-size",
			Math.max(7.2, Math
					.floor((70 - 5 * $(".home table:first tr").length) * 0.18))
					+ "%");
	setTimeout(function() {
		$(".home table:last tr").height(
				$(".home table:first tr:eq(0)").height())
	}, 0)
}
function initGBLoginTemplate() {
	$(".GBLoginTemplate", $.mobile.activePage).parent().off("popupafteropen")
			.on(
					"popupafteropen",
					function(a, b) {
						$(this).prev().css(
								"top",
								parseInt($("header[data-role=header]",
										$.mobile.activePage).height()
										+ "px"))
					});
	$(".GBLoginTemplate .login a", $.mobile.activePage).off("click").on(
			"click",
			function(b) {
				b.preventDefault();
				var a = $(this).attr("class").replace(/connect-([^ ]+)(.*)/,
						"$1");
				oAuthLogin(a, $.mobile.path.parseUrl(location.href).hrefNoHash
						.replace(/(s=[a-z]+)/, "")
						+ "s=" + a)
			});
	if ($(".requirelogin", $.mobile.activePage).length) {
		$(".GBLoginTemplate", $.mobile.activePage).popup("open")
	}
}
function initGBArticleListTemplateTypeMinimalColor() {
	var a = viewPortHeight(0, 0);
	$(".bg", $.mobile.activePage).height(a);
	if (!changingOrientation) {
		slideShowContent($(".bg").parent(), ".bg", $(".pager a",
				$.mobile.activePage), true);
		$(".bg", $(".bg").parent()).on("swipeleft swiperight", function() {
			hideAddressBar()
		})
	}
}
function initGBArticleListTemplateTypeMinimalPhotos() {
	initGBArticleListTemplateTypeMinimalColor()
}
function initGBArticleDetailTemplateTypeToolBarSlide() {
	var a = $(".toolbar", $.mobile.activePage).height();
	$(".toolbarbg", $.mobile.activePage).height(a)
}
function initGBArticleDetailTemplateTypeToolBarSwipe() {
	var a = $(".GBArticleDetailTemplateTypeToolBarUp.ui-footer:last",
			$.mobile.activePage).appendTo($.mobile.activePage);
	a.children().addClass("ui-panel-animate")
}
function initTimeZone() {
	var e = new Date();
	var f = e.getTimezoneOffset();
	var b = (f / 60) * 3600;
	var a = getCookie("tzoffset");
	if (a == null || (-b) != a) {
		var c = new Date();
		c.setTime(c.getTime() + (1000 * 3600 * 24 * 30 * 12));
		setCookie("tzoffset", -b, c);
		window.location.reload()
	}
}
function initAds() {
}
function charCounter(d, f, h, a, b) {
	var k = d.val();
	var c = k
			.replace(
					/[hH][tT][tT][pP][sS]?:\/\/[^ ,'">\]\)<>?«»“”‘’\n\r]*[^\. ,'">\]\)«»“”‘’\n\r]/,
					"012345678901234567890123");
	var j = c.length;
	if (f != null) {
		var g = 1;
		if ((d.is("textarea") || f.keyCode != 13) && f.keyCode != 46
				&& f.keyCode != 37 && f.keyCode != 38 && f.keyCode != 39
				&& f.keyCode != 40) {
			if (j >= h && f.keyCode != 8) {
				g = 0
			}
			if (f.keyCode == 13) {
				g = 0
			}
			if (!g) {
				if (f.preventDefault) {
					f.preventDefault()
				} else {
					f.cancelBubble = true
				}
				if (f.stopPropagation) {
					f.stopPropagation()
				} else {
					f.returnValue = false
				}
			} else {
				setTimeout(function() {
					charCounter(d, null, h, a, k)
				}, 1)
			}
			return false
		}
	} else {
		if (c.length >= h) {
			d.val(b)
		}
		j = d
				.val()
				.replace(
						/[hH][tT][tT][pP][sS]?:\/\/[^ ,'">\]\)<>?«»“”‘’\n\r]*[^\. ,'">\]\)«»“”‘’\n\r]/,
						"012345678901234567890123").length;
		a.html(h - j)
	}
}
function mosaicSize(e, d, a) {
	var b = e.width() - 2;
	if (d == 0) {
		return b
	}
	var c = Math.floor((b - coeffSize * a * (d + 1)) / d);
	return c
}
function swipe(a) {
	var c = "menu";
	var b = 80;
	if ($(".GBRootControllerTypeLittleSwipe").length) {
		b = 28
	}
	if ($("#root section.home").length) {
		c = "home";
		b = 100
	}
	setTimeout(function() {
		hideAddressBar()
	}, 0);
	if (!$("#root").hasClass("locked")) {
		$("html, body").css({
			"min-height" : viewPortHeight(0, 0, true) + "px",
			height : viewPortHeight(0, 0, true) + "px"
		});
		$("body, #root").addClass("locked");
		if (!a) {
			$(".ui-page-active, .ui-page-active header[data-role=header]")
					.animate({
						marginLeft : b + "%"
					}, 300);
			$("#root section." + c).animate({
				marginLeft : 0
			}, 300)
		} else {
			$(".ui-page-active, .ui-page-active header[data-role=header]").css(
					{
						marginLeft : b + "%"
					});
			$("#root section." + c).css({
				marginLeft : 0
			});
			$("#root").addClass("locked")
		}
	} else {
		if (!a) {
			$(".ui-page-active, .ui-page-active header[data-role=header]")
					.animate({
						marginLeft : "0px"
					}, 300);
			$("#root section." + c).animate({
				marginLeft : "-" + b + "%"
			}, 300, function() {
				$("#root, body").removeClass("locked");
				$("body").css("height", "")
			})
		} else {
			$(".ui-page-active, .ui-page-active header[data-role=header]").css(
					{
						marginLeft : "0px"
					});
			$("#root section." + c).css({
				marginLeft : "-" + b + "%"
			});
			$("#root, body").removeClass("locked");
			$("body").css("height", "")
		}
	}
	if ($("#root section.home").length
			&& (!$.mobile.path.parseUrl(location.href).search.match("section="))) {
		setTimeout(function() {
			$(".ui-page-active, .ui-page-active header[data-role=header]").css(
					{
						marginLeft : b + "%"
					})
		}, 0)
	}
	return false
}
function pinterestPosition(e, j, a, c) {
	var m, g, l, b;
	var f = e.find(".GBPhotoListTemplateTypePinterest img");
	var k = f.length;
	m = mosaicSize(e, a, c);
	var d = $(f[j]);
	if (!tabPinterestPosition[j % a]) {
		tabPinterestPosition[j % a] = coeffSize * c
	}
	d.css({
		width : m + "px"
	});
	if (d.length && !d.height()) {
		$("<img>").attr("src", d.attr("src")).load(
				function() {
					pinterestPositionImg(e, j, a, c, m, parseInt(m
							* this.height / this.width), d, k, true)
				})
	} else {
		pinterestPositionImg(e, j, a, c, m, d.height(), d, k, false)
	}
}
function pinterestPositionImg(g, k, b, e, n, j, f, m, o) {
	var c = pinterestMinCol();
	var l = tabPinterestPosition[c];
	tabPinterestPosition[c] += j + coeffSize * e;
	var d = (c) * n + e * ((c) + 1);
	f.css({
		height : j + "px",
		left : d + "px",
		top : l + "px",
		visibility : "visible"
	});
	var a = $(".GBPhotoListTemplateTypePinterest", g);
	a.css("height", Math.max(a.height(), parseInt(tabPinterestPosition[c]))
			+ "px");
	if (k < m - 1) {
		if (o) {
			setTimeout(function() {
				pinterestPosition(g, k + 1, b, e)
			}, 100)
		} else {
			pinterestPosition(g, k + 1, b, e)
		}
	}
}
function pinterestMinCol() {
	var a = 0;
	var b = -1;
	for (i = 0; i < tabPinterestPosition.length; i++) {
		if (b == -1 || tabPinterestPosition[i] < b) {
			b = tabPinterestPosition[i];
			a = i
		}
	}
	return a
}
var plusminus = 0;
function clickToolBar(c, b, e) {
	if (c == "iconComments" || c == "iconShare") {
		e.next("a").eq(0).trigger("click")
	}
	if (c == "iconPlus" || c == "iconMinus") {
		var d = 2;
		if (c == "iconPlus") {
			plusminus++
		}
		if (plusminus > 0) {
			$("#section-detail-" + b + " .detail-article .content").each(
					function() {
						size = parseInt($(this).css("font-size"));
						$(this).css("font-size",
								(c == "iconPlus" ? size + d : size - d) + "px")
					})
		}
		if (c != "iconPlus") {
			plusminus--
		}
		plusminus = Math.max(0, plusminus)
	}
	if (c == "toolbarSlide") {
		e.parents("section").find(".toolbar, .toolbarbg")
				.fixedtoolbar("toggle")
	}
	if (c == "toolbarSwipe") {
		e.parents("section").find(".ui-panel").panel("toggle")
	}
	if (c == "iconFavoris") {
	}
	if (c == "iconLike" || c == "iconPocket") {
		var a = c == "iconLike" ? "fblike" : "pocketadd";
		$.post($.mobile.path.get(location.href), {
			send : "data",
			action : a,
			itemurl : e.attr("data-url"),
			redirto : location.href
		}, function(f) {
			if (f.match(/http(s)?:\/\//)) {
				window.location.href = f
			} else {
				alert(f)
			}
		})
	}
}
function cssLoad(a) {
	styleCss += a
}
function cssLoadAjax(a) {
	styleCssAjax = a
}
function viewPortHeight(d, c, b) {
	var a;
	if ((viewPort > 0 && !b)) {
		a = viewPort
	} else {
		if ((viewPortFull > 0 && b)) {
			a = viewPortFull
		} else {
			a = $.mobile.getScreenHeight()
		}
	}
	if (!b) {
		a -= parseInt($("[data-role=header]", $.mobile.activePage).height()) + 1;
		if ($("[data-role=footer]", $.mobile.activePage).length) {
			a -= parseInt($("[data-role=footer]", $.mobile.activePage).height()) + 1
		}
		a -= (parseInt(d) + parseInt(c))
	}
	return a
}
function setSwipeBg() {
	var a = ".GBRootControllerTypeFacebookMenu section.menu, .GBRootControllerTypeLittleSwipe section.menu, .GBRootControllerTypeFacebookMenu section.menu header, .GBRootControllerTypeFacebookMenu section.menu a, .GBRootControllerTypeLittleSwipe section.menu a { background-size: "
			+ currentW + "px 100% !important; }";
	if ($("#swipe-css").length) {
		$("#swipe-css").html(a)
	} else {
		$("<style id='swipe-css'></style>").html(a).appendTo("head")
	}
	if ($("body").hasClass("locked")) {
		$("body").height(viewPortHeight(0, 0, true))
	}
}
function inputFileEnabled() {
	if (navigator.userAgent
			.match(/(Android (1.0|1.1|1.5|1.6|2.0|2.1))|(Windows Phone (OS 7|8.0)|(XBLWP)|(ZuneWP)|(w(eb)?OSBrowser)|(webOS)|Pre\/1.2|Kindle\/(1.0|2.0|2.5|3.0))/)) {
		return false
	}
	if (!window.FormData || !window.File) {
		return false
	}
	var a = $("<input type='file' />");
	return !a.disabled
}
function getCookie(a) {
	if (a && a != "" && document.cookie) {
		index = document.cookie.indexOf(a);
		if (index != -1) {
			nDeb = (document.cookie.indexOf("=", index) + 1);
			nFin = document.cookie.indexOf(";", index);
			if (nFin == -1) {
				nFin = document.cookie.length
			}
			return unescape(document.cookie.substring(nDeb, nFin))
		}
	}
	return null
}
function setCookie(b, d, c, e, a, f) {
	szCookie = b + "=" + escape(d)
			+ ((c) ? "; expires=" + c.toGMTString() : "")
			+ ((e) ? "; path=" + e : "") + ((a) ? "; domain=" + a : "")
			+ ((f) ? "; secure" : "");
	document.cookie = szCookie
}
function hideAddressBar(a) {
	var b = 1;
	if ($(".GBSearchTemplate", $.mobile.activePage).length) {
		b = $(".GBSearchTemplate").position().top;
		$(".GBSearchTemplate").css("visibility", "visible")
	}
	if (a != null) {
		b = a
	}
	window.scrollTo(0, b);
	adjustFakeBg()
}
function disableScroll() {
	$(document).off("scrollstart").on("scrollstart", function(a) {
		a.preventDefault();
		a.stopPropagation();
		return false
	})
}
jQuery.fn.style = function(b, e, a) {
	var d = this.get(0);
	if (typeof d == "undefined") {
		return
	}
	var c = this.get(0).style;
	if (typeof b != "undefined") {
		if (typeof e != "undefined") {
			var a = typeof a != "undefined" ? a : "";
			c.setProperty(b, e, a)
		} else {
			return c.getPropertyValue(b)
		}
	} else {
		return c
	}
};
function adjustFakeBg() {
	$("#fake-bg").height(viewPortHeight(0, 0, true));
	var a = 0;
	if ($(".ui-content", $.mobile.activePage).length) {
		a = parseInt($(".ui-content", $.mobile.activePage).css("margin-top")) - 1
	}
	$("#fake-bg-header").height(
			$("[data-role=header]", $.mobile.activePage).height() + a)
}
function isValidEmail(a) {
	return a
			.match(/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/)
}
function uploadFile(file, type, success, error) {
	if (type == null) {
		return false
	}
	var fd = new FormData();
	fd.append("file", file);
	fd.append("action", "upload_file");
	fd.append("type", type);
	showObstrusiveLoading();
	$.ajax({
		url : $.mobile.path.get(location.href),
		type : "POST",
		data : fd,
		processData : false,
		contentType : false,
		error : function() {
			if (error != null) {
				eval(error)
			}
			hideObstrusiveLoading()
		},
		complete : function(result) {
			if (result.responseText == "ok" && success != null) {
				eval(success)
			}
			hideObstrusiveLoading()
		}
	})
}
function showObstrusiveLoading() {
	$("#obstrusive-loading").show();
	disableScroll()
}
function hideObstrusiveLoading() {
	$("#obstrusive-loading").hide();
	$(document).off("scrollstart")
}
$.ajaxPrefilter(function(a, c, b) {
	if (applicationCache
			&& applicationCache.status != applicationCache.UNCACHED
			&& applicationCache.status != applicationCache.OBSOLETE) {
		a.isLocal = true
	}
});
function FBLoadSdk(a) {
	switch ($("html").attr("lang")) {
	case "ar":
		locale = "ar_AR";
		break;
	case "de":
		locale = "de_DE";
		break;
	case "es":
		locale = "es_ES";
		break;
	case "fr":
		locale = "fr_FR";
		break;
	case "it":
		locale = "it_IT";
		break;
	case "jp":
		locale = "ja_JP";
		break;
	case "nl":
		locale = "nl_NL";
		break;
	case "ru":
		locale = "ru_RU";
		break;
	default:
		locale = "en_US"
	}
	if (!$("#fb-root").length) {
		$("body").append('<div id="fb-root"></div>')
	}
	$
			.getCachedScript("//connect.facebook.net/" + locale + "/all.js")
			.done(
					function() {
						window.fbAsyncInit = function() {
							FB
									.init({
										appId : a,
										version : "v1.0",
										channelUrl : "//"
												+ $.mobile.path
														.parseUrl(location.href).host
												+ "/_public/channel.html"
									});
							FB.Event
									.subscribe(
											"auth.statusChange",
											function(c) {
												var b = $
														.unparam($.mobile.path
																.parseUrl(location.href).search
																.replace("?",
																		""));
												if (c.status == "connected"
														&& b.code && b.state) {
													showObstrusiveLoading();
													delete b.code;
													delete b.state;
													$
															.post(
																	$.mobile.path
																			.get(location.href),
																	{
																		send : "data",
																		action : "oauth",
																		service : "facebook",
																		redirto : $.mobile.path
																				.parseUrl(location.href).hrefNoSearch
																				+ "?"
																				+ $
																						.param(b),
																		fbtoken : c.authResponse.accessToken
																	},
																	function(d) {
																		if (d != "") {
																			window.location.href = d
																		} else {
																			hideObstrusiveLoading()
																		}
																	})
												}
											})
						}
					})
}
jQuery.extend({
	unparam : function(b) {
		var a = {};
		$.each(b.split("&"), function() {
			var c = this.split("=");
			var d = this.split("[]");
			if (d.length > 1) {
				if (!a[d[0]]) {
					a[d[0]] = new Array()
				}
				a[d[0]].push(c[1])
			} else {
				if (c[0] != "") {
					a[c[0]] = c[1]
				}
			}
		});
		return a
	}
});
function oAuthLogin(a, b) {
	showObstrusiveLoading();
	$.post($.mobile.path.get(location.href), {
		send : "data",
		action : "oauth",
		service : a,
		redirto : b
	}, function(c) {
		if (c != "") {
			hideObstrusiveLoading();
			window.location.href = c
		}
	})
}
function oAuthLogout(a) {
	showObstrusiveLoading();
	$.post($.mobile.path.get(location.href), {
		send : "data",
		action : "logout",
		service : a
	}, function() {
		if (typeof localStorage != "undefined") {
			key = "gb" + a.substring(0, 2);
			localStorage.removeItem(key)
		}
		hideObstrusiveLoading()
	})
}
function getCurrentGeoloc(a) {
	if (navigator.geolocation) {
		navigator.geolocation.getCurrentPosition(function(b) {
			infopos += "Longitude: " + b.coords.longitude + "\n"
		})
	}
}
function slideShowContent(c, a, b, d) {
	b.off("click").on("click", function(e) {
		$(a, c).hide();
		$(a + ":eq(" + $(this).index() + ")", c).fadeIn();
		if (d) {
			b.parent().children().removeClass("sel");
			$(this).addClass("sel")
		}
		e.stopPropagation();
		e.preventDefault()
	});
	$(a, c).off("swipeleft swiperight").on(
			"swipeleft swiperight",
			function(f) {
				if ($(this).is(":visible")) {
					var e = null;
					if (f.type == "swipeleft" && $(this).next(a).length) {
						e = $(this).next()
					} else {
						if (f.type == "swiperight" && $(this).prev(a).length) {
							e = $(this).prev()
						}
					}
					if (e != null) {
						$(a, c).hide();
						$(a + ":eq(" + e.index() + ")", c).fadeIn();
						if (d) {
							b.parent().children().removeClass("sel");
							b.parent().children(":eq(" + e.index() + ")")
									.addClass("sel")
						}
					}
				}
			})
}
function sameHeightContent(b) {
	var a = 0;
	$(b, $.mobile.activePage).each(function(c) {
		a = Math.max(a, $(this).height())
	});
	$(b, $.mobile.activePage).height(a)
}
window.Html5goToSection = function(a) {
	var b = $('a[href="' + a + '"]');
	if (!b.length) {
		b = $('<a class="hidden" href="' + a + '"></a>');
		$("#root").append(b)
	}
	b.trigger("click")
};
$.getCachedScript = function(a, b) {
	b = $.extend(b || {}, {
		dataType : "script",
		cache : true,
		url : a
	});
	return jQuery.ajax(b)
};
var wait = function(a) {
	var b = $.Deferred();
	setTimeout(function() {
		b.resolve()
	}, a);
	return b.promise()
};
document.write = function(a) {
	$.mobile.activePage.append(a)
};