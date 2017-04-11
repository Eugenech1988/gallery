'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var loaderHide = function loaderHide() {
    var $bodyVar = $('#main-wrapper');
    $bodyVar.addClass('fade');
    setTimeout(function () {
        $bodyVar.removeClass('fade');
        $bodyVar.addClass('loaded');
    }, 3000);
};

var Gallery = function () {
    function Gallery() {
        _classCallCheck(this, Gallery);

        this.isInit = false;
        this.imgCount = $('.gallery__img').length;
    }

    _createClass(Gallery, [{
        key: 'galleryInnerCreate',
        value: function galleryInnerCreate() {
            var $mainContent = $('.main-content');
            if (this.isInit == false) {
                $mainContent.append('<div class="gallery-opened">\n                <div class="gallery-opened__wrap">\n                <div class="gallery-opened__bottom-wrap"></div>\n                <div class="gallery-opened__overlay"></div>\n                <div class="gallery-opened__preview-wrap"></div>\n                </div>\n                    <div class="arrow-wrap arrow-wrap--prev">\n                    <a href="javascript:;" class="arrow-wrap__link arrow-wrap__link--prev">\n                    <img src="../img/arrow-left-b.svg" alt="" class="arrow-wrap__link-img arrow-wrap__link-img--left">\n                </a>\n                </div>\n                    <div class="arrow-wrap arrow-wrap--next">\n                    <a href="javascript:;" class="arrow-wrap__link arrow-wrap__link--next">\n                    <img src="../img/arrow-left-b.svg" alt="" class="arrow-wrap__link-img arrow-wrap__link-img--right">\n                </a>\n                </div>\n                </div>');
            }
            this.isInit = true;
        }
    }, {
        key: 'galleryBottomCreate',
        value: function galleryBottomCreate() {
            var $galleryWrap = $('.gallery-opened__bottom-wrap');
            var $galleryWrapImg = $('.gallery__img');
            for (var i = 0; i < this.imgCount; i++) {
                $galleryWrap.append('<div class="gallery-opened__bottom-img-wrap">\n                <a href="" class="gallery-opened__bottom-img-wrap-link">\n                    <img src="' + $galleryWrapImg.eq(i).attr('src') + '\n                " alt="" class="gallery-opened__bottom-img">\n                </a>\n                </div>');
            }
        }
    }]);

    return Gallery;
}();

var gallery = new Gallery();

var galleryShow = function galleryShow() {

    var $galleryWrap = $('.gallery-opened__wrap');
    var $galleryOverlay = $('.gallery-opened__overlay');
    var $galleryPic = $('.gallery__img-link');
    var $galleryBtn = $('.arrow-wrap');
    var $galleryBigPicWrap = $('.gallery-opened__preview-wrap');
    var galleryBigPicSrc = [];
    var $galleryBottomLink = $('.gallery-opened__bottom-img-wrap-link');
    var $galleryNextIcon = $('.arrow-wrap__link--next');
    var $galleryPrevIcon = $('.arrow-wrap__link--prev');

    $.getJSON('js/ajax/img.json', function (data) {
        for (var i = 0; i < data.images.length; i++) {
            galleryBigPicSrc.push(data.images[i]);
        }
        for (var _i = 0; _i < galleryBigPicSrc.length; _i++) {
            $galleryBigPicWrap.append('\n            <div class="gallery-opened__preview-img-wrap">\n            <img src="' + galleryBigPicSrc[_i] + '" alt="" class="gallery-opened__preview-img">\n            </div>');
        }
    });

    $galleryPic.on('click', function (e) {
        var $target = $(e.target);
        var $targetIndex = $target.closest('.col-lg-3').index();
        var $galleryOpenedItem = $('.gallery-opened__preview-img-wrap');
        console.log($targetIndex);
        // const $galleryOpenedItem = $('.gallery-opened__preview-img-wrap:nth-child($targetIndex)');
        e.preventDefault();
        $galleryWrap.addClass('opened');
        $galleryBtn.addClass('opened');
        $galleryBigPicWrap.find($galleryOpenedItem).eq($targetIndex).addClass('current');
    });

    $galleryNextIcon.on('click', function (e) {
        var $target = $(e.target);
        var $galleryWrap = $('.gallery-opened__preview-wrap');
        e.preventDefault();
        $galleryWrap.find('.gallery-opened__preview-img-wrap.current').removeClass('current').next().addClass('current');
    });

    $galleryPrevIcon.on('click', function (e) {
        var $galleryWrap = $('.gallery-opened__preview-wrap');
        e.preventDefault();
        $galleryWrap.find('.gallery-opened__preview-img-wrap.current').removeClass('current').prev().addClass('current');
        if (!$galleryWrap.find('.gallery-opened__preview-img-wrap.current').prev()) {
            alert('stop');
        }
    });

    $galleryBottomLink.on('click', function (e) {
        var $target = $(e.target);
        e.preventDefault();
        $galleryPic.trigger('click');
    });

    $galleryOverlay.on('click', function () {
        var $galleryOpenedItem = $('.gallery-opened__preview-img-wrap');
        $galleryOpenedItem.removeClass('current');
        $galleryWrap.removeClass('opened');
        $galleryBtn.removeClass('opened');
    });
};

window.onload = function () {
    loaderHide();
    gallery.galleryInnerCreate();
    gallery.galleryBottomCreate();
    galleryShow();
};
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbW1vbi5qcyJdLCJuYW1lcyI6WyJsb2FkZXJIaWRlIiwiJGJvZHlWYXIiLCIkIiwiYWRkQ2xhc3MiLCJzZXRUaW1lb3V0IiwicmVtb3ZlQ2xhc3MiLCJHYWxsZXJ5IiwiaXNJbml0IiwiaW1nQ291bnQiLCJsZW5ndGgiLCIkbWFpbkNvbnRlbnQiLCJhcHBlbmQiLCIkZ2FsbGVyeVdyYXAiLCIkZ2FsbGVyeVdyYXBJbWciLCJpIiwiZXEiLCJhdHRyIiwiZ2FsbGVyeSIsImdhbGxlcnlTaG93IiwiJGdhbGxlcnlPdmVybGF5IiwiJGdhbGxlcnlQaWMiLCIkZ2FsbGVyeUJ0biIsIiRnYWxsZXJ5QmlnUGljV3JhcCIsImdhbGxlcnlCaWdQaWNTcmMiLCIkZ2FsbGVyeUJvdHRvbUxpbmsiLCIkZ2FsbGVyeU5leHRJY29uIiwiJGdhbGxlcnlQcmV2SWNvbiIsImdldEpTT04iLCJkYXRhIiwiaW1hZ2VzIiwicHVzaCIsIm9uIiwiZSIsIiR0YXJnZXQiLCJ0YXJnZXQiLCIkdGFyZ2V0SW5kZXgiLCJjbG9zZXN0IiwiaW5kZXgiLCIkZ2FsbGVyeU9wZW5lZEl0ZW0iLCJjb25zb2xlIiwibG9nIiwicHJldmVudERlZmF1bHQiLCJmaW5kIiwibmV4dCIsInByZXYiLCJhbGVydCIsInRyaWdnZXIiLCJ3aW5kb3ciLCJvbmxvYWQiLCJnYWxsZXJ5SW5uZXJDcmVhdGUiLCJnYWxsZXJ5Qm90dG9tQ3JlYXRlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxJQUFNQSxhQUFhLFNBQWJBLFVBQWEsR0FBTTtBQUNyQixRQUFNQyxXQUFXQyxFQUFFLGVBQUYsQ0FBakI7QUFDQUQsYUFBU0UsUUFBVCxDQUFrQixNQUFsQjtBQUNBQyxlQUFXLFlBQU07QUFDYkgsaUJBQVNJLFdBQVQsQ0FBcUIsTUFBckI7QUFDQUosaUJBQVNFLFFBQVQsQ0FBa0IsUUFBbEI7QUFDSCxLQUhELEVBR0csSUFISDtBQUlILENBUEQ7O0lBU01HLE87QUFDRix1QkFBYztBQUFBOztBQUNWLGFBQUtDLE1B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L0QsQ0FBMkUsU0FBM0UsRUFBc0ZzQyxJQUF0RixHQUE2RnhDLFFBQTdGLENBQXNHLFNBQXRHO0FBQ0gsS0FMRDs7QUFPQXVCLHFCQUFpQkssRUFBakIsQ0FBb0IsT0FBcEIsRUFBNkIsVUFBQ0MsQ0FBRCxFQUFPO0FBQ2hDLFlBQU1wQixlQUFlVixFQUFFLCtCQUFGLENBQXJCO0FBQ0E4QixVQUFFUyxjQUFGO0FBQ0E3QixxQkFBYThCLElBQWIsQ0FBa0IsMkNBQWxCLEVBQStEckMsV0FBL0QsQ0FBMkUsU0FBM0UsRUFBc0Z1QyxJQUF0RixHQUE2RnpDLFFBQTdGLENBQXNHLFNBQXRHO0FBQ0EsWUFBSSxDQUFDUyxhQUFhOEIsSUFBYixDQUFrQiwyQ0FBbEIsRUFBK0RFLElBQS9ELEVBQUwsRUFBNEU7QUFDeEVDLGtCQUFNLE1BQU47QUFDSDtBQUNKLEtBUEQ7O0FBU0FyQix1QkFBbUJPLEVBQW5CLENBQXNCLE9BQXRCLEVBQStCLFVBQUNDLENBQUQsRUFBTztBQUNsQyxZQUFNQyxVQUFVL0IsRUFBRThCLEVBQUVFLE1BQUosQ0FBaEI7QUFDQUYsVUFBRVMsY0FBRjtBQUNBckIsb0JBQVkwQixPQUFaLENBQW9CLE9BQXBCO0FBQ0gsS0FKRDs7QUFNQTNCLG9CQUFnQlksRUFBaEIsQ0FBbUIsT0FBbkIsRUFBNEIsWUFBTTtBQUM5QixZQUFNTyxxQkFBcUJwQyxFQUFFLG1DQUFGLENBQTNCO0FBQ0FvQywyQkFBbUJqQyxXQUFuQixDQUErQixTQUEvQjtBQUNBTyxxQkFBYVAsV0FBYixDQUF5QixRQUF6QjtBQUNBZ0Isb0JBQVloQixXQUFaLENBQXdCLFFBQXhCO0FBQ0gsS0FMRDtBQU9ILENBbkVEOztBQXFFQTBDLE9BQU9DLE1BQVAsR0FBZ0IsWUFBTTtBQUNsQmhEO0FBQ0FpQixZQUFRZ0Msa0JBQVI7QUFDQWhDLFlBQVFpQyxtQkFBUjtBQUNBaEM7QUFDSCxDQUxEIiwiZmlsZSI6ImNvbW1vbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGxvYWRlckhpZGUgPSAoKSA9PiB7XHJcbiAgICBjb25zdCAkYm9keVZhciA9ICQoJyNtYWluLXdyYXBwZXInKTtcclxuICAgICRib2R5VmFyLmFkZENsYXNzKCdmYWRlJyk7XHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAkYm9keVZhci5yZW1vdmVDbGFzcygnZmFkZScpO1xyXG4gICAgICAgICRib2R5VmFyLmFkZENsYXNzKCdsb2FkZWQnKTtcclxuICAgIH0sIDMwMDApO1xyXG59O1xyXG5cclxuY2xhc3MgR2FsbGVyeSB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLmlzSW5pdCA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuaW1nQ291bnQgPSAkKCcuZ2FsbGVyeV9faW1nJykubGVuZ3RoO1xyXG4gICAgfVxyXG5cclxuICAgIGdhbGxlcnlJbm5lckNyZWF0ZSgpIHtcclxuICAgICAgICBjb25zdCAkbWFpbkNvbnRlbnQgPSAkKCcubWFpbi1jb250ZW50Jyk7XHJcbiAgICAgICAgaWYgKHRoaXMuaXNJbml0ID09IGZhbHNlKSB7XHJcbiAgICAgICAgICAgICRtYWluQ29udGVudC5hcHBlbmQoYDxkaXYgY2xhc3M9XCJnYWxsZXJ5LW9wZW5lZFwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImdhbGxlcnktb3BlbmVkX193cmFwXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZ2FsbGVyeS1vcGVuZWRfX2JvdHRvbS13cmFwXCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZ2FsbGVyeS1vcGVuZWRfX292ZXJsYXlcIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJnYWxsZXJ5LW9wZW5lZF9fcHJldmlldy13cmFwXCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYXJyb3ctd3JhcCBhcnJvdy13cmFwLS1wcmV2XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cImphdmFzY3JpcHQ6O1wiIGNsYXNzPVwiYXJyb3ctd3JhcF9fbGluayBhcnJvdy13cmFwX19saW5rLS1wcmV2XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIuLi9pbWcvYXJyb3ctbGVmdC1iLnN2Z1wiIGFsdD1cIlwiIGNsYXNzPVwiYXJyb3ctd3JhcF9fbGluay1pbWcgYXJyb3ctd3JhcF9fbGluay1pbWctLWxlZnRcIj5cclxuICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJhcnJvdy13cmFwIGFycm93LXdyYXAtLW5leHRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiamF2YXNjcmlwdDo7XCIgY2xhc3M9XCJhcnJvdy13cmFwX19saW5rIGFycm93LXdyYXBfX2xpbmstLW5leHRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi4uL2ltZy9hcnJvdy1sZWZ0LWIuc3ZnXCIgYWx0PVwiXCIgY2xhc3M9XCJhcnJvdy13cmFwX19saW5rLWltZyBhcnJvdy13cmFwX19saW5rLWltZy0tcmlnaHRcIj5cclxuICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+YClcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5pc0luaXQgPSB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIGdhbGxlcnlCb3R0b21DcmVhdGUoKSB7XHJcbiAgICAgICAgY29uc3QgJGdhbGxlcnlXcmFwID0gJCgnLmdhbGxlcnktb3BlbmVkX19ib3R0b20td3JhcCcpO1xyXG4gICAgICAgIGNvbnN0ICRnYWxsZXJ5V3JhcEltZyA9ICQoJy5nYWxsZXJ5X19pbWcnKTtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuaW1nQ291bnQ7IGkrKykge1xyXG4gICAgICAgICAgICAkZ2FsbGVyeVdyYXAuYXBwZW5kKGA8ZGl2IGNsYXNzPVwiZ2FsbGVyeS1vcGVuZWRfX2JvdHRvbS1pbWctd3JhcFwiPlxyXG4gICAgICAgICAgICAgICAgPGEgaHJlZj1cIlwiIGNsYXNzPVwiZ2FsbGVyeS1vcGVuZWRfX2JvdHRvbS1pbWctd3JhcC1saW5rXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCJgICsgJGdhbGxlcnlXcmFwSW1nLmVxKGkpLmF0dHIoJ3NyYycpICsgYFxyXG4gICAgICAgICAgICAgICAgXCIgYWx0PVwiXCIgY2xhc3M9XCJnYWxsZXJ5LW9wZW5lZF9fYm90dG9tLWltZ1wiPlxyXG4gICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+YCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxufVxyXG5cclxuY29uc3QgZ2FsbGVyeSA9IG5ldyBHYWxsZXJ5KCk7XHJcblxyXG5jb25zdCBnYWxsZXJ5U2hvdyA9ICgpID0+IHtcclxuXHJcbiAgICBjb25zdCAkZ2FsbGVyeVdyYXAgPSAkKCcuZ2FsbGVyeS1vcGVuZWRfX3dyYXAnKTtcclxuICAgIGNvbnN0ICRnYWxsZXJ5T3ZlcmxheSA9ICQoJy5nYWxsZXJ5LW9wZW5lZF9fb3ZlcmxheScpO1xyXG4gICAgY29uc3QgJGdhbGxlcnlQaWMgPSAkKCcuZ2FsbGVyeV9faW1nLWxpbmsnKTtcclxuICAgIGNvbnN0ICRnYWxsZXJ5QnRuID0gJCgnLmFycm93LXdyYXAnKTtcclxuICAgIGNvbnN0ICRnYWxsZXJ5QmlnUGljV3JhcCA9ICQoJy5nYWxsZXJ5LW9wZW5lZF9fcHJldmlldy13cmFwJyk7XHJcbiAgICBjb25zdCBnYWxsZXJ5QmlnUGljU3JjID0gW107XHJcbiAgICBjb25zdCAkZ2FsbGVyeUJvdHRvbUxpbmsgPSAkKCcuZ2FsbGVyeS1vcGVuZWRfX2JvdHRvbS1pbWctd3JhcC1saW5rJyk7XHJcbiAgICBjb25zdCAkZ2FsbGVyeU5leHRJY29uID0gJCgnLmFycm93LXdyYXBfX2xpbmstLW5leHQnKTtcclxuICAgIGNvbnN0ICRnYWxsZXJ5UHJldkljb24gPSAkKCcuYXJyb3ctd3JhcF9fbGluay0tcHJldicpO1xyXG5cclxuICAgICQuZ2V0SlNPTignanMvYWpheC9pbWcuanNvbicsIGZ1bmN0aW9uIChkYXRhKSB7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBkYXRhLmltYWdlcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBnYWxsZXJ5QmlnUGljU3JjLnB1c2goZGF0YS5pbWFnZXNbaV0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGdhbGxlcnlCaWdQaWNTcmMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgJGdhbGxlcnlCaWdQaWNXcmFwLmFwcGVuZChgXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJnYWxsZXJ5LW9wZW5lZF9fcHJldmlldy1pbWctd3JhcFwiPlxyXG4gICAgICAgICAgICA8aW1nIHNyYz1cImAgKyBnYWxsZXJ5QmlnUGljU3JjW2ldICsgYFwiIGFsdD1cIlwiIGNsYXNzPVwiZ2FsbGVyeS1vcGVuZWRfX3ByZXZpZXctaW1nXCI+XHJcbiAgICAgICAgICAgIDwvZGl2PmApO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuXHJcbiAgICAkZ2FsbGVyeVBpYy5vbignY2xpY2snLCAoIGUgKSA9PiB7XHJcbiAgICAgICAgY29uc3QgJHRhcmdldCA9ICQoZS50YXJnZXQpO1xyXG4gICAgICAgIGNvbnN0ICR0YXJnZXRJbmRleCA9ICgkdGFyZ2V0LmNsb3Nlc3QoJy5jb2wtbGctMycpLmluZGV4KCkpO1xyXG4gICAgICAgIGNvbnN0ICRnYWxsZXJ5T3BlbmVkSXRlbSA9ICQoJy5nYWxsZXJ5LW9wZW5lZF9fcHJldmlldy1pbWctd3JhcCcpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCR0YXJnZXRJbmRleCk7XHJcbiAgICAgICAgLy8gY29uc3QgJGdhbGxlcnlPcGVuZWRJdGVtID0gJCgnLmdhbGxlcnktb3BlbmVkX19wcmV2aWV3LWltZy13cmFwOm50aC1jaGlsZCgkdGFyZ2V0SW5kZXgpJyk7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICRnYWxsZXJ5V3JhcC5hZGRDbGFzcygnb3BlbmVkJyk7XHJcbiAgICAgICAgJGdhbGxlcnlCdG4uYWRkQ2xhc3MoJ29wZW5lZCcpO1xyXG4gICAgICAgICRnYWxsZXJ5QmlnUGljV3JhcC5maW5kKCRnYWxsZXJ5T3BlbmVkSXRlbSkuZXEoJHRhcmdldEluZGV4KS5hZGRDbGFzcygnY3VycmVudCcpO1xyXG4gICAgfSk7XHJcblxyXG5cclxuICAgICRnYWxsZXJ5TmV4dEljb24ub24oJ2NsaWNrJywgKGUpID0+IHtcclxuICAgICAgICBjb25zdCAkdGFyZ2V0ID0gJChlLnRhcmdldCk7XHJcbiAgICAgICAgY29uc3QgJGdhbGxlcnlXcmFwID0gJCgnLmdhbGxlcnktb3BlbmVkX19wcmV2aWV3LXdyYXAnKTtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgJGdhbGxlcnlXcmFwLmZpbmQoJy5nYWxsZXJ5LW9wZW5lZF9fcHJldmlldy1pbWctd3JhcC5jdXJyZW50JykucmVtb3ZlQ2xhc3MoJ2N1cnJlbnQnKS5uZXh0KCkuYWRkQ2xhc3MoJ2N1cnJlbnQnKTtcclxuICAgIH0pO1xyXG5cclxuICAgICRnYWxsZXJ5UHJldkljb24ub24oJ2NsaWNrJywgKGUpID0+IHtcclxuICAgICAgICBjb25zdCAkZ2FsbGVyeVdyYXAgPSAkKCcuZ2FsbGVyeS1vcGVuZWRfX3ByZXZpZXctd3JhcCcpO1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAkZ2FsbGVyeVdyYXAuZmluZCgnLmdhbGxlcnktb3BlbmVkX19wcmV2aWV3LWltZy13cmFwLmN1cnJlbnQnKS5yZW1vdmVDbGFzcygnY3VycmVudCcpLnByZXYoKS5hZGRDbGFzcygnY3VycmVudCcpO1xyXG4gICAgICAgIGlmICghJGdhbGxlcnlXcmFwLmZpbmQoJy5nYWxsZXJ5LW9wZW5lZF9fcHJldmlldy1pbWctd3JhcC5jdXJyZW50JykucHJldigpKSB7XHJcbiAgICAgICAgICAgIGFsZXJ0KCdzdG9wJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgJGdhbGxlcnlCb3R0b21MaW5rLm9uKCdjbGljaycsIChlKSA9PiB7XHJcbiAgICAgICAgY29uc3QgJHRhcmdldCA9ICQoZS50YXJnZXQpO1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAkZ2FsbGVyeVBpYy50cmlnZ2VyKCdjbGljaycpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgJGdhbGxlcnlPdmVybGF5Lm9uKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICBjb25zdCAkZ2FsbGVyeU9wZW5lZEl0ZW0gPSAkKCcuZ2FsbGVyeS1vcGVuZWRfX3ByZXZpZXctaW1nLXdyYXAnKTtcclxuICAgICAgICAkZ2FsbGVyeU9wZW5lZEl0ZW0ucmVtb3ZlQ2xhc3MoJ2N1cnJlbnQnKTtcclxuICAgICAgICAkZ2FsbGVyeVdyYXAucmVtb3ZlQ2xhc3MoJ29wZW5lZCcpO1xyXG4gICAgICAgICRnYWxsZXJ5QnRuLnJlbW92ZUNsYXNzKCdvcGVuZWQnKTtcclxuICAgIH0pO1xyXG5cclxufTtcclxuXHJcbndpbmRvdy5vbmxvYWQgPSAoKSA9PiB7XHJcbiAgICBsb2FkZXJIaWRlKCk7XHJcbiAgICBnYWxsZXJ5LmdhbGxlcnlJbm5lckNyZWF0ZSgpO1xyXG4gICAgZ2FsbGVyeS5nYWxsZXJ5Qm90dG9tQ3JlYXRlKCk7XHJcbiAgICBnYWxsZXJ5U2hvdygpO1xyXG59O1xyXG4iXX0=
