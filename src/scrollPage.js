! function(i) {
    var n = {
        easing: "ease",
        animationTime: 1300,
        pagination: !0
    };
    i.fn.swipeEvents = function() {
        return this.each(function() {
            function n(i) {
                var n = i.originalEvent.touches;
                n && n.length && (e = n[0].pageX, a = n[0].pageY, s.bind("touchmove", t))
            }

            function t(i) {
                var n = i.originalEvent.touches;
                if (n && n.length) {
                    var o = e - n[0].pageX,
                        r = a - n[0].pageY;
                    o >= 50 && s.trigger("swipeLeft"), -50 >= o && s.trigger("swipeRight"), r >= 50 && s.trigger("swipeUp"), -50 >= r && s.trigger("swipeDown"), (Math.abs(o) >= 50 || Math.abs(r) >= 50) && s.unbind("touchmove", t)
                }
                i.preventDefault()
            }
            var e, a, s = i(this);
            s.bind("touchstart", n)
        })
    }, i.fn.HSlider = function(t) {
        var e = i.extend({}, n, t),
            a = i(this),
            s = i("section"),
            o = s.length,
            r = !1,
            l = "";
        i.fn.transformPage = function(n, t) {
            return i(this).css({
                "-webkit-transform": "translate3d(" + t + "%, 0 ,0)",
                "-webkit-transition": "all " + n.animationTime + "ms " + n.easing,
                "-moz-transform": "translate3d(" + t + "%, 0 ,0)",
                "-moz-transition": "all " + n.animationTime + "ms " + n.easing,
                "-ms-transform": "translate3d(" + t + "%, 0 ,0)",
                "-ms-transition": "all " + n.animationTime + "ms " + n.easing,
                transform: "translate3d(" + t + "%, 0 ,0)",
                transition: "all " + n.animationTime + "ms " + n.easing
            }), i(this)
        }, i.fn.slideLeft = function() {
            var n = i("section.active").data("index");
            return o > n && (location.hash = "#" + (n + 1)), i(this)
        }, i.fn.slideRight = function() {
            var n = i("section.active").data("index");
            return o >= n && n > 1 && (location.hash = "#" + (n - 1)), i(this)
        }, i.fn._render = function() {
            var n = Math.floor(Number(location.hash.split("#")[1]));
            n = n ? n : 1, 1 > n && (n = 1), n > o && (n = o);
            var t = n;
            i("section.active").removeClass("active"), i(".pagination li a.active").removeClass("active"), i("section[data-index=" + t + "]").addClass("active"), i(".pagination li a[data-index=" + t + "]").addClass("active");
            var s = 100 * (t - 1) * -1;
            return a.transformPage(e, s), i(this)
        }, i.fn._renderPagination = function() {
            e.pagination && (i("<ul class='pagination'>" + l + "</ul>").prependTo("body"), posTop = a.find(".HSlider").height() / 2 * -1, a.find(".HSlider").css("margin-top", posTop), i(".pagination li a").click(function() {
                var n = i(this).data("index");
                location.hash = "#" + n
            }))
        }, i.fn._bindEvent = function() {
            return i(window).on("hashchange", a._render), i(document).bind("mousewheel DOMMouseScroll", function(i) {
                i.preventDefault();
                var n = i.originalEvent.wheelDelta || -i.originalEvent.detail;
                a._handleMouseScroll(i, n)
            }), a.swipeEvents().bind("swipeLeft", function() {
                a.slideLeft()
            }).bind("swipeRight", function() {
                a.slideRight()
            }), i(this)
        }, i.fn._handleMouseScroll = function(i, n) {
            if (0 == r) {
                if (0 == n) return;
                0 > n ? a.slideLeft() : a.slideRight(), r = !0, setTimeout(function() {
                    r = !1
                }, Number(e.animationTime) + 100)
            }
        }, i.fn._initStyle = function() {
            return a.addClass("HSlider").css({
                position: "relative",
                width: "100%",
                height: "100%"
            }), i.each(s, function(n) {
                i(this).css({
                    position: "absolute",
                    width: "100%",
                    height: "100%",
                    left: 100 * n + "%"
                }).addClass("section").attr("data-index", n + 1), i(this).find("img").css({
                    minWidth: "100%",
                    minHeight: "100%",
                    position: "absolute",
                    zIndex: 1
                }), i(this).find("article").css({
                    position: "absolute",
                    boxSizing: "border-box",
                    width: "100%",
                    bottom: 0,
                    zIndex: 4
                }), 1 == e.pagination && (l += "<li><a data-index='" + (n + 1) + "' href='#" + (n + 1) + "'></a></li>")
            }), i(this)
        }, a._initStyle()._bindEvent()._render()._renderPagination()
    }
}(window.jQuery);
