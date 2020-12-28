
    ! function (a) {
        a.extend({
            browserSelector: function () {
                ! function (a) {
                    (jQuery.browser = jQuery.browser || {}).mobile = /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4))
                }(navigator.userAgent || navigator.vendor || window.opera);
                var b = navigator.userAgent,
                    d = b.toLowerCase(),
                    e = function (a) {
                        return d.indexOf(a) > -1
                    },
                    f = "gecko",
                    g = "webkit",
                    h = "safari",
                    i = "opera",
                    j = document.documentElement,
                    k = [!/opera|webtv/i.test(d) && /msie\s(\d)/.test(d) ? "ie ie" + parseFloat(navigator.appVersion.split("MSIE")[1]) : e("firefox/2") ? f + " ff2" : e("firefox/3.5") ? f + " ff3 ff3_5" : e("firefox/3") ? f + " ff3" : e("gecko/") ? f : e("opera") ? i + (/version\/(\d+)/.test(d) ? " " + i + RegExp.jQuery1 : /opera(\s|\/)(\d+)/.test(d) ? " " + i + RegExp.jQuery2 : "") : e("konqueror") ? "konqueror" : e("chrome") ? g + " chrome" : e("iron") ? g + " iron" : e("applewebkit/") ? g + " " + h + (/version\/(\d+)/.test(d) ? " " + h + RegExp.jQuery1 : "") : e("mozilla/") ? f : "", e("j2me") ? "mobile" : e("iphone") ? "iphone" : e("ipod") ? "ipod" : e("mac") ? "mac" : e("darwin") ? "mac" : e("webtv") ? "webtv" : e("win") ? "win" : e("freebsd") ? "freebsd" : e("x11") || e("linux") ? "linux" : "", "js"];
                c = k.join(" "), a.browser.mobile && (c += " mobile"), j.className += " " + c;
                var l = !window.ActiveXObject && "ActiveXObject" in window;
                return l ? void a("html").removeClass("gecko").addClass("ie ie11") : (a("body").hasClass("dark") && a("html").addClass("dark"), void(a("body").hasClass("boxed") && a("html").addClass("boxed")))
            }
        }), a.browserSelector()
    }(jQuery),

    function (a) {
        "use strict";
        var b, c = {
                action: function () {},
                runOnLoad: !1,
                duration: 500
            },
            d = c,
            e = !1,
            f = {};
        f.init = function () {
            for (var b = 0; b <= arguments.length; b++) {
                var c = arguments[b];
                switch (typeof c) {
                    case "function":
                        d.action = c;
                        break;
                    case "boolean":
                        d.runOnLoad = c;
                        break;
                    case "number":
                        d.duration = c
                }
            }
            return this.each(function () {
                d.runOnLoad && d.action(), a(this).resize(function () {
                    f.timedAction.call(this)
                })
            })
        }, f.timedAction = function (a, c) {
            var f = function () {
                    var a = d.duration;
                    if (e) {
                        var c = new Date - b;
                        if (a = d.duration - c, 0 >= a) return clearTimeout(e), e = !1, void d.action()
                    }
                    g(a)
                },
                g = function (a) {
                    e = setTimeout(f, a)
                };
            b = new Date, "number" == typeof c && (d.duration = c), "function" == typeof a && (d.action = a), e || f()
        }, a.fn.afterResize = function (a) {
            return f[a] ? f[a].apply(this, Array.prototype.slice.call(arguments, 1)) : f.init.apply(this, arguments)
        }
    }(jQuery)





window.theme = {};

// Sticky Menu
(function(theme, $) {

	theme = theme || {};

	var initialized = false;

	$.extend(theme, {

		StickyMenu: {

			defaults: {
				wrapper: $('#header'),
				stickyEnabled: true,
				stickyEnableOnBoxed: true,
				stickyEnableOnMobile: true,
				stickyWithGap: true,
				stickyChangeLogoSize: true,
				stickyBodyPadding: true,
				menuAfterHeader: false,
				alwaysStickyEnabled: false,
				logoPaddingTop: 28,
				logoSmallWidth: 82,
				logoSmallHeight: 40
			},

			initialize: function($wrapper, opts) {
				if (initialized) {
					return this;
				}

				initialized = true;
				this.$wrapper = ($wrapper || this.defaults.wrapper);

				this
					.setOptions(opts)
					.build()
					.events();

				return this;
			},

			setOptions: function(opts) {
				this.options = $.extend(true, {}, this.defaults, opts, this.$wrapper.data('plugin-options'));

				return this;
			},

			build: function() {
				if (!this.options.stickyEnableOnBoxed && $('body').hasClass('boxed') || !this.options.stickyEnabled) {
					return this;
				}

				var self = this,
					$body = $('body'),
					$header = self.$wrapper,
					$headerContainer = $header.parent(),
					$headerNavItems = $header.find('ul.nav-main > li > a'),
					$logoWrapper = $header.find('.logo'),
					$logo = $logoWrapper.find('img'),
					logoWidth = $logo.attr('width'),
					logoHeight = $logo.attr('height'),
					logoPaddingTop = parseInt($logo.attr('data-sticky-padding') ? $logo.attr('data-sticky-padding') : self.options.logoPaddingTop),
					logoSmallWidth = parseInt($logo.attr('data-sticky-width') ? $logo.attr('data-sticky-width') : self.options.logoSmallWidth),
					logoSmallHeight = parseInt($logo.attr('data-sticky-height') ? $logo.attr('data-sticky-height') : self.options.logoSmallHeight),
					headerHeight = $header.height(),
					stickyGap = 0;

				if (this.options.menuAfterHeader) {
					$headerContainer.css('min-height', $header.height());
				}

				$(window).afterResize(function() {
					$headerContainer.css('min-height', $header.height());
				});

				self.checkStickyMenu = function() {

					if ((!self.options.stickyEnableOnBoxed && $body.hasClass('boxed')) || ($(window).width() < 991 && !self.options.stickyEnableOnMobile)) {
						self.stickyMenuDeactivate();
						$header.removeClass('fixed')
						return false;
					}

					if (self.options.stickyWithGap) {
						stickyGap = ((headerHeight - 15) - logoSmallHeight);
					} else {
						stickyGap = 0;
					}

					// Menu After Header
					if (!this.options.menuAfterHeader) {

						if ($(window).scrollTop() > stickyGap) {
							self.stickyMenuActivate();
						} else {
							self.stickyMenuDeactivate();
						}

					} else {

						if ($(window).scrollTop() > $headerContainer.offset().top) {
							$header.addClass('fixed');
						} else {
							$header.removeClass('fixed');
						}

					}

				}

				self.stickyMenuActivate = function() {

					if ($body.hasClass('sticky-menu-active')) {
						return false;
					}

					$logo.stop(true, true);

					$body.addClass('sticky-menu-active').removeClass('sticky-menu-deactive');

					if (self.options.stickyBodyPadding) {
						$body.css('padding-top', headerHeight);
					}

					// Flat Menu Items
					if ($header.hasClass('flat-menu')) {
						$headerNavItems.addClass('sticky-menu-active');
					}

					if (self.options.stickyChangeLogoSize) {

						$logoWrapper.addClass('logo-sticky-active');

						$logo.animate({
							width: logoSmallWidth,
							height: logoSmallHeight,
							top: logoPaddingTop + 'px'
						}, 200, function() {
							$.event.trigger({
								type: "stickyMenu.active"
							});						
						});

					}

				}

				self.stickyMenuDeactivate = function() {

					if ($body.hasClass('sticky-menu-active')) {

						$body.removeClass('sticky-menu-active').addClass('sticky-menu-deactive');

						if (self.options.stickyBodyPadding) {
							$body.css('padding-top', 0);
						}

						// Flat Menu Items
						if ($header.hasClass('flat-menu')) {
							$headerNavItems.removeClass('sticky-menu-active');
						}

						if (self.options.stickyChangeLogoSize) {

							$logoWrapper.removeClass('logo-sticky-active');

							$logo.animate({
								width: logoWidth,
								height: logoHeight,
								top: '0px'
							}, 200, function() {
								$.event.trigger({
									type: "stickyMenu.deactive"
								});						
							});

						}

					}

				}

				if (!self.options.alwaysStickyEnabled) {

					$body.addClass('sticky-menu-deactive');

					self.checkStickyMenu();

				} else {

					$body.addClass('sticky-menu-active always-sticky').removeClass('sticky-menu-deactive');

					if (self.options.stickyBodyPadding) {
						$body.css('padding-top', headerHeight);
					}

				}

				return this;
			},

			events: function() {
				var self = this;

				if (!this.options.stickyEnableOnBoxed && $('body').hasClass('boxed') || !this.options.stickyEnabled) {
					return this;
				}

				if (!self.options.alwaysStickyEnabled) {
					$(window).on('scroll resize', function() {
						self.checkStickyMenu();
					});
				}

				return this;
			}

		}

	});

}).apply(this, [window.theme, jQuery]);

(function($) {

	'use strict';

	// Sticky Menu
	if (typeof theme.StickyMenu !== 'undefined') {
		theme.StickyMenu.initialize();
	}

	// Nav Menu
	if (typeof theme.Nav !== 'undefined') {
		theme.Nav.initialize();
	}

	// Search
	if (typeof theme.Search !== 'undefined') {
		theme.Search.initialize();
	}

	// Newsletter
	if (typeof theme.Newsletter !== 'undefined') {
		theme.Newsletter.initialize();
	}

	// Account
	if (typeof theme.Account !== 'undefined') {
		theme.Account.initialize();
	}

}).apply(this, [jQuery]);



// Commom Plugins
(function($) {

    'use strict';

    // Scroll to Top Button.
    if (typeof theme.PluginScrollToTop !== 'undefined') {
        theme.PluginScrollToTop.initialize();
    }

    // Parallax
    if (typeof theme.PluginParallax !== 'undefined') {
        theme.PluginParallax.initialize();
    }

    // Tooltips
    if ($.isFunction($.fn['tooltip'])) {
        $('[data-tooltip]').tooltip();
    }

    }).apply(this, [jQuery]);




