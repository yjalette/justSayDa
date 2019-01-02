//window.onbeforeunload = function () {
//    window.scrollTo(0,0);
//};




$(document).ready(function(){

    $("#myShop").hide();

//registration

    $("#log-tab").on("click", function(){

        $("#log-tab").addClass("active");
        $("#reg-tab").removeClass("active");
        $("#signIn-form").css("display", "block");
        $("#signUp-form").hide();
    });

    $("#reg-tab").on("click", function(){
        $("#reg-tab").addClass("active");
        $("#log-tab").removeClass("active");
        $("#signUp-form").show();
        $("#signIn-form").hide();
    });

// hover nav

    $(".dropbtn").on("mouseenter",function(){
        $(".dropdown-content").toggle();
    });

// slideshow
    let slideIndex = 0;
    showSlides();

    function showSlides(){
        let slides = $(".mySlides");
        for ( let i=0; i < slides.length; i++){
            $(slides[i]).css("display", "none");
        }
        slideIndex++;
        if (slideIndex > slides.length ) {slideIndex = 1;}
        $(slides[slideIndex - 1]).css("display", "block");
        setTimeout( showSlides, 3000);
    }

// shop
    displayOrder();

    function displayOrder(){
        var print;
        var design;
        var fabric;

        // display print

        $("#selectPrint").on("click", function () {
            let print_path = "images/" + $(this).val() + "-mir.jpg";
            let printImg = $("#print").attr("src", print_path);
            print = $(this).val();
        });

        // display design

        $("#selectDesign").on("click", function () {
            let design_path = "images/" + $(this).val() + ".jpg";
            let designImg = $("#design").attr("src", design_path);
            design = $(this).val();
        });

        // display fabric

        $("#selectFabric").on("click", function () {
            let fabric_path = "images/" + $(this).val() + ".jpg";
            let fabricImg = $("#fabric").attr("src", fabric_path);
            fabric = $(this).val();

            console.log(fabric);
        });

        // submit

        $("#buyButton").on("click", function(){
            let product_path = "images/" + design + "-" + fabric + "-" + print + ".jpeg";

            let product = $("#productImg").attr("src", product_path);

            if ( design == null){
                alert("Please select a print");
            } else if ( fabric == null) {
                alert("Please select a design");
            } else if ( print == null){
                alert("Please select a fabric");
            } else {
                $("#myShop").show();
                $(".showProduct").show();
                $("#buyButton").hide();
            }

        });
    }

    //intro
    var $sm = 100;
    var $md = 700;

    function resizeThis() {
        $imgH = $('.middle img').width();
        if ($(window).width() >= $sm) {
            $('.left,.right,.section').css('height', $imgH);
        } else {
            $('.left,.right,.section').css('height', 'auto');
        }
    }

    resizeThis();

    $(window).resize(function(){
        resizeThis();
    });

    $(window).scroll(function() {
        $('.section').each(function(){
            var $elementPos = $(this).offset().top;
            var $scrollPos = $(window).scrollTop();

            var $sectionH = $(this).height();
            var $h = $(window).height();
            var $sectionVert = (($h/2)-($sectionH/4));


            if (($elementPos - $sectionVert) <= $scrollPos && ($elementPos - $sectionVert) + $sectionH > $scrollPos) {
                $(this).addClass('animate');
            } else {
                $(this).removeClass('animate');
            }
        });
    });

    $('.btn-primary').click(function(){
        alert(':)');
    });
});


    $('a[href*="#"]:not([href="#"])').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
            if (target.length) {
                $('html, body').animate({
                    scrollTop: target.offset().top
                }, 1000);
                return false;
            }
        }
});

// designs

$(function() {
    var selectedClass = "";
    $(".leather, .silk, .denim").hide();
    $(".snd").hide();



    $(".fil-cat").click(function(){
        $("#showMore").hide();
        selectedClass = $(this).attr("data-rel");
        $("#portfolio").fadeTo(100, 0.1);
        $("#portfolio div").not("."+selectedClass).fadeOut().removeClass('scale-anm');
        setTimeout(function() {
            $("."+selectedClass).fadeIn().addClass('scale-anm');
            $("#portfolio").fadeTo(300, 1);
        }, 300);

    });

    $("#showMore").on("click", function(){
        $(".snd").show();
    })
});


// prints

(function() {
    var method;
    var noop = function() {};
    var methods = [
        'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
        'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
        'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
        'timeStamp', 'trace', 'warn'
    ];
    var length = methods.length;
    var console = (window.console = window.console || {});

    while (length--) {
        method = methods[length];

        // Only stub undefined methods.
        if (!console[method]) {
            console[method] = noop;
        }
    }
}());


(function($) {
    function injector(t, splitter, klass, after) {
        var text = t.text(),
            a = text.split(splitter),
            inject = '';
        if (a.length) {
            $(a).each(function(i, item) {
                inject += '<span class="' + klass + (i + 1) + '" aria-hidden="true">' + item + '</span>' + after;
            });
            t.attr('aria-label', text)
                .empty()
                .append(inject)

        }
    }

    var methods = {
        init: function() {

            return this.each(function() {
                injector($(this), '', 'char', '');
            });

        },

        words: function() {

            return this.each(function() {
                injector($(this), ' ', 'word', ' ');
            });

        },

        lines: function() {

            return this.each(function() {
                var r = "eefec303079ad17405c889e092e105b0";

                injector($(this).children("br").replaceWith(r).end(), r, 'line', '');
            });

        }
    };

    $.fn.lettering = function(method) {
        // Method calling logic
        if (method && methods[method]) {
            return methods[method].apply(this, [].slice.call(arguments, 1));
        } else if (method === 'letters' || !method) {
            return methods.init.apply(this, [].slice.call(arguments, 0)); // always pass an array
        }
        $.error('Method ' + method + ' does not exist on jQuery.lettering');
        return this;
    };

})(jQuery);


(function($) {

    $.fn.fitText = function(kompressor, options) {

        // Setup options
        var compressor = kompressor || 1,
            settings = $.extend({
                'minFontSize': Number.NEGATIVE_INFINITY,
                'maxFontSize': Number.POSITIVE_INFINITY
            }, options);

        return this.each(function() {

            // Store the object
            var $this = $(this);

            // Resizer() resizes items based on the object width divided by the compressor * 10
            var resizer = function() {
                $this.css('font-size', Math.max(Math.min($this.width() / (compressor * 10), parseFloat(settings.maxFontSize)), parseFloat(settings.minFontSize)));
            };

            // Call once to set.
            resizer();

            // Call on resize. Opera debounces their resize by default.
            $(window).on('resize', resizer);

        });

    };

})(jQuery);


$.fn.circleType = function(options) {

    var self = this,
        settings = {
            dir: 1,
            position: 'relative',
        };
    if (typeof($.fn.lettering) !== 'function') {
        console.log('Lettering.js is required');
        return;
    }
    return this.each(function() {

        if (options) {
            $.extend(settings, options);
        }
        var elem = this,
            delta = (180 / Math.PI),
            fs = parseInt($(elem).css('font-size'), 10),
            ch = parseInt($(elem).css('line-height'), 10) || fs,
            txt = elem.innerHTML.replace(/^\s+|\s+$/g, '').replace(/\s/g, '&nbsp;'),
            letters,
            center;

        elem.innerHTML = txt
        $(elem).lettering();

        elem.style.position = settings.position;

        letters = elem.getElementsByTagName('span');
        center = Math.floor(letters.length / 2)

        var layout = function() {
            var tw = 0,
                i,
                offset = 0,
                minRadius,
                origin,
                innerRadius,
                l, style, r, transform;

            for (i = 0; i < letters.length; i++) {
                tw += letters[i].offsetWidth;
            }
            minRadius = (tw / Math.PI) / 2 + ch;

            if (settings.fluid && !settings.fitText) {
                settings.radius = Math.max(elem.offsetWidth / 2, minRadius);
            } else if (!settings.radius) {
                settings.radius = minRadius;
            }

            if (settings.dir === -1) {
                origin = 'center ' + (-settings.radius + ch) / fs + 'em';
            } else {
                origin = 'center ' + settings.radius / fs + 'em';
            }

            innerRadius = settings.radius - ch;

            for (i = 0; i < letters.length; i++) {
                l = letters[i];
                offset += l.offsetWidth / 2 / innerRadius * delta;
                l.rot = offset;
                offset += l.offsetWidth / 2 / innerRadius * delta;
            }
            for (i = 0; i < letters.length; i++) {
                l = letters[i]
                style = l.style
                r = (-offset * settings.dir / 2) + l.rot * settings.dir
                transform = 'rotate(' + r + 'deg)';

                style.position = 'absolute';
                style.left = '50%';
                style.marginLeft = -(l.offsetWidth / 2) / fs + 'em';

                style.webkitTransform = transform;
                style.MozTransform = transform;
                style.OTransform = transform;
                style.msTransform = transform;
                style.transform = transform;

                style.webkitTransformOrigin = origin;
                style.MozTransformOrigin = origin;
                style.OTransformOrigin = origin;
                style.msTransformOrigin = origin;
                style.transformOrigin = origin;
                if (settings.dir === -1) {
                    style.bottom = 0;
                }
            }

            if (settings.fitText) {
                if (typeof($.fn.fitText) !== 'function') {
                    console.log('FitText.js is required when using the fitText option');
                } else {
                    $(elem).fitText();
                    $(window).resize(function() {
                        updateHeight();
                    });
                }
            }
            updateHeight();

            if (typeof settings.callback === 'function') {
                // Execute our callback with the element we transformed as `this`
                settings.callback.apply(elem);
            }
        };

        var getBounds = function(elem) {
            var docElem = document.documentElement,
                box = elem.getBoundingClientRect();
            return {
                top: box.top + window.pageYOffset - docElem.clientTop,
                left: box.left + window.pageXOffset - docElem.clientLeft,
                height: box.height
            };
        };

        var updateHeight = function() {
            var mid = getBounds(letters[center]),
                first = getBounds(letters[0]),
                h;
            if (mid.top < first.top) {
                h = first.top - mid.top + first.height;
            } else {
                h = mid.top - first.top + first.height;
            }
            elem.style.height = h + 'px';
        }

        if (settings.fluid && !settings.fitText) {
            $(window).resize(function() {
                layout();
            });
        }

        if (document.readyState !== "complete") {
            elem.style.visibility = 'hidden';
            $(window).on('load', function() {
                elem.style.visibility = 'visible';
                layout();
            });
        } else {
            layout();
        }
    });
};;
(function(factory) {
    if (typeof define === 'function' && define.amd) {
        define(['jquery'], factory);
    } else if (typeof exports === 'object') {
        module.exports = factory(require("jquery"));
    } else {
        factory(jQuery);
    }
}
 (function($) {
    var pluginName = "tinycircleslider",
        defaults = {
            interval: false,
            intervalTime: 3500,
            dotsSnap: false,
            dotsHide: true,
            radius: 140,
            start: 0,
            slides: []
        };

    function Plugin($container, options) {

        this.options = $.extend({}, defaults, options);


        this._defaults = defaults;


        this._name = pluginName;

        var self = this,
            $viewport = $container.find(".viewport"),
            $overview = $container.find(".overview"),
            $slides = $overview.children(),
            $thumb = $container.find(".thumb"),
            $dots = $container.find(".dot"),
            $links = $slides.find("a")

        , containerSize = {
            width: $container.outerWidth(true),
            height: $container.outerHeight(true)
        }, slideSize = {
            width: $slides.first().outerWidth(true),
            height: $slides.first().outerHeight(true)
        }, thumbSize = {
            width: $thumb.outerWidth(true),
            height: $thumb.outerHeight(true)
        }, dotSize = {
            width: $dots.outerWidth(),
            height: $dots.outerHeight()
        }

        , intervalTimer = null, animationTimer = null, touchEvents = 'ontouchstart' in window, isTouchEvent = false, hasRequestAnimationFrame = 'requestAnimationFrame' in window;

        this.dots = [];


        this.slideCurrent = 0;


        this.angleCurrent = 0;


        this.slidesTotal = $slides.length;


        this.intervalActive = false;


        function _initialize() {
            _setDots();

            $overview
                .append($slides.first().clone())
                .css("width", slideSize.width * ($slides.length + 1));

            _setEvents();

            _setCSS(0);
            self.move(self.options.start, self.options.interval);

            return self;
        }


        function _setEvents() {
            if (touchEvents) {
                $container[0].ontouchstart = _startDrag;
                $container[0].ontouchmove = _drag;
                $container[0].ontouchend = _endDrag;
            }

            $thumb.bind("mousedown", _startDrag);

            var snapHandler = function(event) {
                event.preventDefault();
                event.stopImmediatePropagation();

                self.stop();
                self.move($(this).attr("data-slide-index"));

                return false;
            };

            if (touchEvents) {
                $container.delegate(".dot", "touchstart", snapHandler);
            }
            $container.delegate(".dot", "mousedown", snapHandler);
        }


        function _setTimer(slideFirst) {
            intervalTimer = setTimeout(function() {
                self.move(self.slideCurrent + 1, true);
            }, (slideFirst ? 50 : self.options.intervalTime));
        }


        function _toRadians(degrees) {
            return degrees * (Math.PI / 180);
        }


        function _toDegrees(radians) {
            return radians * 180 / Math.PI;
        }


        function _setDots() {
            var docFragment = document.createDocumentFragment();

            $dots.remove();

            $slides.each(function(index, slide) {
                var $dotClone = null,
                    angle = parseInt($(slide).attr("data-degrees"), 10) || (index * 360 / self.slidesTotal),
                    position = {
                        top: -Math.cos(_toRadians(angle)) * self.options.radius + containerSize.height / 2 - dotSize.height / 2,
                        left: Math.sin(_toRadians(angle)) * self.options.radius + containerSize.width / 2 - dotSize.width / 2
                    };

                if ($dots.length > 0) {
                    $dotClone = $dots.clone();
                    $dotClone
                        .addClass($(slide).attr("data-classname"))
                        .css(position);

                    docFragment.appendChild($dotClone[0]);
                }

                self.dots.push({
                    "angle": angle,
                    "slide": slide,
                    "dot": $dotClone
                });
            });

            self.dots.sort(function(dotA, dotB) {
                return dotA.angle - dotB.angle;
            });

            $.each(self.dots, function(index, dot) {
                // custom
                if ($(dot.dot).length > 0) {
                    if (index === 4) {
                        $(dot.dot)
                            .addClass("dot-" + (index + 1))
                            .attr('data-slide-index', index)
                            .html("<h1><div class='flip text'>" + options.slides[index] + "</div><div class='flip-curve curve'>&nbsp;</div></h1>");
                    } else {
                        $(dot.dot)
                            .addClass("dot-" + (index + 1))
                            .attr('data-slide-index', index)
                            .html("<h1><div class='text'>" + options.slides[index] + "</div></h1>");
                    }
                }

            });

            $container.append(docFragment);
            // custom
            $('h1').each(function(i, text) {
                if ($(this).find('div').html() === "Norway") {
                    $(this).find('div.text').circleType({
                        radius: 220,
                        dir: -1
                    });
                } else {
                    $(this).find('div.text').circleType({
                        radius: 220
                    });
                }
            });

            $dots = $container.find(".dot");
        }


        this.start = function(first) {
            if (self.options.interval) {
                self.intervalActive = true;

                _setTimer(first);
            }
            return self;
        };


        this.stop = function() {
            self.intervalActive = false;

            clearTimeout(intervalTimer);

            return self;
        };


        function _findShortestPath(angleA, angleB) {
            var angleCW, angleCCW, angleShortest;

            if (angleA > angleB) {
                angleCW = angleA - angleB;
                angleCCW = -(angleB + 360 - angleA);
            } else {
                angleCW = angleA + 360 - angleB;
                angleCCW = -(angleB - angleA);
            }

            angleShortest = angleCW < Math.abs(angleCCW) ? angleCW : angleCCW;

            return [angleShortest, angleCCW, angleCW];
        }

        /**
    * @method _findClosestSlide
    * @private
    * @param {Number} [angle]
    */
        function _findClosestSlide(angle) {
            var closestDotAngleToAngleCCW = 9999,
                closestDotAngleToAngleCW = 9999,
                closestDotAngleToAngle = 9999,
                closestSlideCCW = 0,
                closestSlideCW = 0,
                closestSlide = 0;

            $.each(self.dots, function(index, dot) {
                var delta = _findShortestPath(dot.angle, angle);

                if (Math.abs(delta[0]) < Math.abs(closestDotAngleToAngle)) {
                    closestDotAngleToAngle = delta[0];
                    closestSlide = index;
                }

                if (Math.abs(delta[1]) < Math.abs(closestDotAngleToAngleCCW)) {
                    closestDotAngleToAngleCCW = delta[1];
                    closestSlideCCW = index;
                }

                if (Math.abs(delta[2]) < Math.abs(closestDotAngleToAngleCW)) {
                    closestDotAngleToAngleCW = delta[2];
                    closestSlideCW = index;
                }
            });

            return [
                [closestSlide, closestSlideCCW, closestSlideCW],
                [closestDotAngleToAngle, closestDotAngleToAngleCCW, closestDotAngleToAngleCW]
            ];
        }


        this.move = function(index) {
            var slideIndex = Math.max(0, isNaN(index) ? self.slideCurrent : index);

            if (slideIndex >= self.slidesTotal) {
                slideIndex = 0;
            }

            var angleDestination = self.dots[slideIndex] && self.dots[slideIndex].angle,
                angleDelta = _findShortestPath(angleDestination, self.angleCurrent)[0],
                angleStep = angleDelta > 0 ? -2 : 2;

            self.slideCurrent = slideIndex;
            _stepMove(angleStep, angleDelta, 50);

            self.start();

            return self;
        };


        function _sanitizeAngle(degrees) {
            return (degrees < 0) ? 360 + (degrees % -360) : degrees % 360;
        }


        function _stepMove(angleStep, angleDelta, stepInterval) {
            var angleStepNew = angleStep,
                endAnimation = false;

            if (Math.abs(angleStep) > Math.abs(angleDelta)) {
                angleStepNew = -angleDelta;
                endAnimation = true;
            } else if (hasRequestAnimationFrame) {
                requestAnimationFrame(function() {
                    _stepMove(angleStepNew, angleDelta + angleStep);
                });
            } else {
                animationTimer = setTimeout(function() {
                    _stepMove(angleStepNew, angleDelta + angleStep, stepInterval * 0.9);
                }, stepInterval);
            }

            self.angleCurrent = _sanitizeAngle(self.angleCurrent - angleStepNew);

            _setCSS(self.angleCurrent, endAnimation);
        }


        function _page(event) {
            return {
                x: isTouchEvent ? event.targetTouches[0].pageX : (event.pageX || event.clientX),
                y: isTouchEvent ? event.targetTouches[0].pageY : (event.pageY || event.clientY)
            };
        }


        function _drag(event) {
            var containerOffset = $container.offset(),
                thumbPositionNew = {
                    left: _page(event).x - containerOffset.left - (containerSize.width / 2),
                    top: _page(event).y - containerOffset.top - (containerSize.height / 2)
                };

            self.angleCurrent = _sanitizeAngle(
                _toDegrees(
                    Math.atan2(thumbPositionNew.left, -thumbPositionNew.top)
                )
            );

            if (!hasRequestAnimationFrame) {
                _setCSS(self.angleCurrent);
            }

            return false;
        }


        function _setCSS(angle, fireCallback) {
            closestSlidesAndAngles = _findClosestSlide(angle);
            closestSlides = closestSlidesAndAngles[0];
            closestAngles = closestSlidesAndAngles[1];

            $overview.css("left", -(closestSlides[1] * slideSize.width + Math.abs(closestAngles[1]) * slideSize.width / (Math.abs(closestAngles[1]) + Math.abs(closestAngles[2]))));
            $thumb.css({
                top: -Math.cos(_toRadians(angle)) * self.options.radius + (containerSize.height / 2 - thumbSize.height / 2),
                left: Math.sin(_toRadians(angle)) * self.options.radius + (containerSize.width / 2 - thumbSize.width / 2)
            });

            if (fireCallback) {
                /**
    * The move event will trigger when the carousel slides to a new slide.
    *
    * @event move
    * custom
    */
                $container.trigger("move", [$slides[self.slideCurrent], self.slideCurrent]);
                var slideno = _findClosestSlide(self.angleCurrent)[0][0];
                $('.dot').removeClass('active');
                $('.dot:eq(' + slideno + ')').addClass('active');
                $('#overlayActive').removeClass('slideno(0) slideno(1) slideno(2) slideno(3) slideno(4) slideno(5) slideno(6) slideno(7)').addClass('slideno(' + slideno + ')');

                $('.dot-1').mouseover(function() {
                    $('#overlayInteraction').addClass('is-slide1-hovered');
                });
                $('.dot-1').mouseout(function() {
                    $('#overlayInteraction').removeClass('is-slide1-hovered');
                });

                $('.dot-2').mouseover(function() {
                    $('#overlayInteraction').addClass('is-slide2-hovered');
                });
                $('.dot-2').mouseout(function() {
                    $('#overlayInteraction').removeClass('is-slide2-hovered');
                });

                $('.dot-3').mouseover(function() {
                    $('#overlayInteraction').addClass('is-slide3-hovered');
                });
                $('.dot-3').mouseout(function() {
                    $('#overlayInteraction').removeClass('is-slide3-hovered');
                });

                $('.dot-4').mouseover(function() {
                    $('#overlayInteraction').addClass('is-slide4-hovered');
                });
                $('.dot-4').mouseout(function() {
                    $('#overlayInteraction').removeClass('is-slide4-hovered');
                });

                $('.dot-5').mouseover(function() {
                    $('#overlayInteraction').addClass('is-slide5-hovered');
                });
                $('.dot-5').mouseout(function() {
                    $('#overlayInteraction').removeClass('is-slide5-hovered');
                });

                $('.dot-6').mouseover(function() {
                    $('#overlayInteraction').addClass('is-slide6-hovered');
                });
                $('.dot-6').mouseout(function() {
                    $('#overlayInteraction').removeClass('is-slide6-hovered');
                });

                $('.dot-7').mouseover(function() {
                    $('#overlayInteraction').addClass('is-slide7-hovered');
                });
                $('.dot-7').mouseout(function() {
                    $('#overlayInteraction').removeClass('is-slide7-hovered');
                });

                $('.dot-8').mouseover(function() {
                    $('#overlayInteraction').addClass('is-slide8-hovered');
                });
                $('.dot-8').mouseout(function() {
                    $('#overlayInteraction').removeClass('is-slide8-hovered');
                });

            }
        }


        function _endDrag(event) {
            if ($(event.target).hasClass("dot")) {
                return false;
            }
            self.dragging = false;
            event.preventDefault();

            $(document).unbind("mousemove mouseup");
            $thumb.unbind("mouseup");

            if (self.options.dotsHide) {
                $dots.stop(true, true).fadeOut("slow");
            }

            if (self.options.dotsSnap) {
                self.move(_findClosestSlide(self.angleCurrent)[0][0]);
            }
        }

        function _dragAnimationLoop() {
            if (self.dragging) {
                _setCSS(self.angleCurrent);
                requestAnimationFrame(function() {
                    _dragAnimationLoop();
                });
            }
        }

        /**
    * @method _startDrag
    * @private
    * @param {Object} [event]
    */
        function _startDrag(event) {
            event.preventDefault();
            isTouchEvent = event.type == 'touchstart';
            self.dragging = true;

            if ($(event.target).hasClass("dot")) {
                return false;
            }

            self.stop();

            $(document).mousemove(_drag);
            $(document).mouseup(_endDrag);
            $thumb.mouseup(_endDrag);

            if (self.options.dotsHide) {
                $dots.stop(true, true).fadeIn("slow");
            }

            if (hasRequestAnimationFrame) {
                _dragAnimationLoop();
            }
        }

        return _initialize();
    }


    $.fn[pluginName] = function(options) {
        return this.each(function() {
            if (!$.data(this, "plugin_" + pluginName)) {
                $.data(this, "plugin_" + pluginName, new Plugin($(this), options));
            }
        });
    };
}));
$(document).ready(function() {
    var widthtoacquire = $(window).width() - 30;
    var radius = (widthtoacquire - 80) / 2 > 150 ? 150 : (widthtoacquire - 80) / 2;

    $("#rotatescroll").tinycircleslider({
        dotsSnap: true,
        radius: radius,
        dotsHide: false,
        slides: ["New York", "Amsterdam", "Paris", "Tokyo", "Vancouver", "Moscow", "Seoul", "London"],
        interval: false
    });

});






