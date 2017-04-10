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

var gallery = function () {
    function gallery() {
        _classCallCheck(this, gallery);

        this.isInit = false;
        this.imgCount = $('.gallery__img').length;
    }

    _createClass(gallery, [{
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

    return gallery;
}();

var Gallery = new gallery();

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
        console.log($targetIndex);
        // const $galleryOpenedItem = $('.gallery-opened__preview-img-wrap:nth-child($targetIndex)');
        e.preventDefault();
        $galleryWrap.addClass('opened');
        $galleryBtn.addClass('opened');
        // $galleryOpenedItem.addClass('current');
    });

    $galleryNextIcon.on('click', function (e) {
        var $target = $(e.target);
        e.preventDefault();
        $target.removeClass('current').next().addClass('current');
    });

    $galleryPrevIcon.on('click', function (e) {
        var $galleryTarget = $('.gallery-opened__preview-img-wrap');
        e.preventDefault();
        $galleryTarget.find('.current').removeClass('current').prev().addClass('current');
    });

    $galleryBottomLink.on('click', function (e) {
        var $target = $(e.target);
        e.preventDefault();
        $galleryPic.trigger('click');
    });

    $galleryOverlay.on('click', function () {
        $galleryWrap.removeClass('opened');
        $galleryBtn.removeClass('opened');
    });
};

window.onload = function () {
    loaderHide();
    Gallery.galleryInnerCreate();
    Gallery.galleryBottomCreate();
    galleryShow();
};
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbW1vbi5qcyJdLCJuYW1lcyI6WyJsb2FkZXJIaWRlIiwiJGJvZHlWYXIiLCIkIiwiYWRkQ2xhc3MiLCJzZXRUaW1lb3V0IiwicmVtb3ZlQ2xhc3MiLCJnYWxsZXJ5IiwiaXNJbml0IiwiaW1nQ291bnQiLCJsZW5ndGgiLCIkbWFpbkNvbnRlbnQiLCJhcHBlbmQiLCIkZ2FsbGVyeVdyYXAiLCIkZ2FsbGVyeVdyYXBJbWciLCJpIiwiZXEiLCJhdHRyIiwiR2FsbGVyeSIsImdhbGxlcnlTaG93IiwiJGdhbGxlcnlPdmVybGF5IiwiJGdhbGxlcnlQaWMiLCIkZ2FsbGVyeUJ0biIsIiRnYWxsZXJ5QmlnUGljV3JhcCIsImdhbGxlcnlCaWdQaWNTcmMiLCIkZ2FsbGVyeUJvdHRvbUxpbmsiLCIkZ2FsbGVyeU5leHRJY29uIiwiJGdhbGxlcnlQcmV2SWNvbiIsImdldEpTT04iLCJkYXRhIiwiaW1hZ2VzIiwicHVzaCIsIm9uIiwiZSIsIiR0YXJnZXQiLCJ0YXJnZXQiLCIkdGFyZ2V0SW5kZXgiLCJjbG9zZXN0IiwiaW5kZXgiLCJjb25zb2xlIiwibG9nIiwicHJldmVudERlZmF1bHQiLCJuZXh0IiwiJGdhbGxlcnlUYXJnZXQiLCJmaW5kIiwicHJldiIsInRyaWdnZXIiLCJ3aW5kb3ciLCJvbmxvYWQiLCJnYWxsZXJ5SW5uZXJDcmVhdGUiLCJnYWxsZXJ5Qm90dG9tQ3JlYXRlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxJQUFNQSxhQUFhLFNBQWJBLFVBQWEsR0FBTTtBQUNyQixRQUFNQyxXQUFXQyxFQUFFLGVBQUYsQ0FBakI7QUFDQUQsYUFBU0UsUUFBVCxDQUFrQixNQUFsQjtBQUNBQyxlQUFXLFlBQU07QUFDYkgsaUJBQVNJLFdBQVQsQ0FBcUIsTUFBckI7QUFDQUosaUJBQVNFLFFBQVQsQ0FBa0IsUUFBbEI7QUFDSCxLQUhELEVBR0csSUFISDtBQUlILENBUEQ7O0lBU01HLE87QUFDRix1QkFBYztBQUFBOztBQUNWLGFBQUtDLE1BQUwsR0FBYyxLQUFk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QixVQUFwQixFQUFnQ3RDLFdBQWhDLENBQTRDLFNBQTVDLEVBQXVEdUMsSUFBdkQsR0FBOER6QyxRQUE5RCxDQUF1RSxTQUF2RTtBQUNILEtBSkQ7O0FBTUFxQix1QkFBbUJPLEVBQW5CLENBQXNCLE9BQXRCLEVBQStCLFVBQUNDLENBQUQsRUFBTztBQUNsQyxZQUFNQyxVQUFVL0IsRUFBRThCLEVBQUVFLE1BQUosQ0FBaEI7QUFDQUYsVUFBRVEsY0FBRjtBQUNBcEIsb0JBQVl5QixPQUFaLENBQW9CLE9BQXBCO0FBQ0gsS0FKRDs7QUFRQTFCLG9CQUFnQlksRUFBaEIsQ0FBbUIsT0FBbkIsRUFBNEIsWUFBTTtBQUM5Qm5CLHFCQUFhUCxXQUFiLENBQXlCLFFBQXpCO0FBQ0FnQixvQkFBWWhCLFdBQVosQ0FBd0IsUUFBeEI7QUFDSCxLQUhEO0FBS0gsQ0E5REQ7O0FBZ0VBeUMsT0FBT0MsTUFBUCxHQUFnQixZQUFNO0FBQ2xCL0M7QUFDQWlCLFlBQVErQixrQkFBUjtBQUNBL0IsWUFBUWdDLG1CQUFSO0FBQ0EvQjtBQUNILENBTEQiLCJmaWxlIjoiY29tbW9uLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgbG9hZGVySGlkZSA9ICgpID0+IHtcclxuICAgIGNvbnN0ICRib2R5VmFyID0gJCgnI21haW4td3JhcHBlcicpO1xyXG4gICAgJGJvZHlWYXIuYWRkQ2xhc3MoJ2ZhZGUnKTtcclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICRib2R5VmFyLnJlbW92ZUNsYXNzKCdmYWRlJyk7XHJcbiAgICAgICAgJGJvZHlWYXIuYWRkQ2xhc3MoJ2xvYWRlZCcpO1xyXG4gICAgfSwgMzAwMCk7XHJcbn07XHJcblxyXG5jbGFzcyBnYWxsZXJ5IHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMuaXNJbml0ID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5pbWdDb3VudCA9ICQoJy5nYWxsZXJ5X19pbWcnKS5sZW5ndGg7XHJcbiAgICB9XHJcblxyXG4gICAgZ2FsbGVyeUlubmVyQ3JlYXRlKCkge1xyXG4gICAgICAgIGNvbnN0ICRtYWluQ29udGVudCA9ICQoJy5tYWluLWNvbnRlbnQnKTtcclxuICAgICAgICBpZiAodGhpcy5pc0luaXQgPT0gZmFsc2UpIHtcclxuICAgICAgICAgICAgJG1haW5Db250ZW50LmFwcGVuZChgPGRpdiBjbGFzcz1cImdhbGxlcnktb3BlbmVkXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZ2FsbGVyeS1vcGVuZWRfX3dyYXBcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJnYWxsZXJ5LW9wZW5lZF9fYm90dG9tLXdyYXBcIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJnYWxsZXJ5LW9wZW5lZF9fb3ZlcmxheVwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImdhbGxlcnktb3BlbmVkX19wcmV2aWV3LXdyYXBcIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJhcnJvdy13cmFwIGFycm93LXdyYXAtLXByZXZcIj5cclxuICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiamF2YXNjcmlwdDo7XCIgY2xhc3M9XCJhcnJvdy13cmFwX19saW5rIGFycm93LXdyYXBfX2xpbmstLXByZXZcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi4uL2ltZy9hcnJvdy1sZWZ0LWIuc3ZnXCIgYWx0PVwiXCIgY2xhc3M9XCJhcnJvdy13cmFwX19saW5rLWltZyBhcnJvdy13cmFwX19saW5rLWltZy0tbGVmdFwiPlxyXG4gICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImFycm93LXdyYXAgYXJyb3ctd3JhcC0tbmV4dFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJqYXZhc2NyaXB0OjtcIiBjbGFzcz1cImFycm93LXdyYXBfX2xpbmsgYXJyb3ctd3JhcF9fbGluay0tbmV4dFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiLi4vaW1nL2Fycm93LWxlZnQtYi5zdmdcIiBhbHQ9XCJcIiBjbGFzcz1cImFycm93LXdyYXBfX2xpbmstaW1nIGFycm93LXdyYXBfX2xpbmstaW1nLS1yaWdodFwiPlxyXG4gICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5gKVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmlzSW5pdCA9IHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgZ2FsbGVyeUJvdHRvbUNyZWF0ZSgpIHtcclxuICAgICAgICBjb25zdCAkZ2FsbGVyeVdyYXAgPSAkKCcuZ2FsbGVyeS1vcGVuZWRfX2JvdHRvbS13cmFwJyk7XHJcbiAgICAgICAgY29uc3QgJGdhbGxlcnlXcmFwSW1nID0gJCgnLmdhbGxlcnlfX2ltZycpO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5pbWdDb3VudDsgaSsrKSB7XHJcbiAgICAgICAgICAgICRnYWxsZXJ5V3JhcC5hcHBlbmQoYDxkaXYgY2xhc3M9XCJnYWxsZXJ5LW9wZW5lZF9fYm90dG9tLWltZy13cmFwXCI+XHJcbiAgICAgICAgICAgICAgICA8YSBocmVmPVwiXCIgY2xhc3M9XCJnYWxsZXJ5LW9wZW5lZF9fYm90dG9tLWltZy13cmFwLWxpbmtcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cImAgKyAkZ2FsbGVyeVdyYXBJbWcuZXEoaSkuYXR0cignc3JjJykgKyBgXHJcbiAgICAgICAgICAgICAgICBcIiBhbHQ9XCJcIiBjbGFzcz1cImdhbGxlcnktb3BlbmVkX19ib3R0b20taW1nXCI+XHJcbiAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5gKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5jb25zdCBHYWxsZXJ5ID0gbmV3IGdhbGxlcnkoKTtcclxuXHJcbmNvbnN0IGdhbGxlcnlTaG93ID0gKCkgPT4ge1xyXG5cclxuICAgIGNvbnN0ICRnYWxsZXJ5V3JhcCA9ICQoJy5nYWxsZXJ5LW9wZW5lZF9fd3JhcCcpO1xyXG4gICAgY29uc3QgJGdhbGxlcnlPdmVybGF5ID0gJCgnLmdhbGxlcnktb3BlbmVkX19vdmVybGF5Jyk7XHJcbiAgICBjb25zdCAkZ2FsbGVyeVBpYyA9ICQoJy5nYWxsZXJ5X19pbWctbGluaycpO1xyXG4gICAgY29uc3QgJGdhbGxlcnlCdG4gPSAkKCcuYXJyb3ctd3JhcCcpO1xyXG4gICAgY29uc3QgJGdhbGxlcnlCaWdQaWNXcmFwID0gJCgnLmdhbGxlcnktb3BlbmVkX19wcmV2aWV3LXdyYXAnKTtcclxuICAgIGNvbnN0IGdhbGxlcnlCaWdQaWNTcmMgPSBbXTtcclxuICAgIGNvbnN0ICRnYWxsZXJ5Qm90dG9tTGluayA9ICQoJy5nYWxsZXJ5LW9wZW5lZF9fYm90dG9tLWltZy13cmFwLWxpbmsnKTtcclxuICAgIGNvbnN0ICRnYWxsZXJ5TmV4dEljb24gPSAkKCcuYXJyb3ctd3JhcF9fbGluay0tbmV4dCcpO1xyXG4gICAgY29uc3QgJGdhbGxlcnlQcmV2SWNvbiA9ICQoJy5hcnJvdy13cmFwX19saW5rLS1wcmV2Jyk7XHJcblxyXG5cclxuICAgICQuZ2V0SlNPTignanMvYWpheC9pbWcuanNvbicsIGZ1bmN0aW9uIChkYXRhKSB7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBkYXRhLmltYWdlcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBnYWxsZXJ5QmlnUGljU3JjLnB1c2goZGF0YS5pbWFnZXNbaV0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGdhbGxlcnlCaWdQaWNTcmMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgJGdhbGxlcnlCaWdQaWNXcmFwLmFwcGVuZChgXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJnYWxsZXJ5LW9wZW5lZF9fcHJldmlldy1pbWctd3JhcFwiPlxyXG4gICAgICAgICAgICA8aW1nIHNyYz1cImAgKyBnYWxsZXJ5QmlnUGljU3JjW2ldICsgYFwiIGFsdD1cIlwiIGNsYXNzPVwiZ2FsbGVyeS1vcGVuZWRfX3ByZXZpZXctaW1nXCI+XHJcbiAgICAgICAgICAgIDwvZGl2PmApO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgICRnYWxsZXJ5UGljLm9uKCdjbGljaycsICggZSApID0+IHtcclxuICAgICAgICBjb25zdCAkdGFyZ2V0ID0gJChlLnRhcmdldCk7XHJcbiAgICAgICAgY29uc3QgJHRhcmdldEluZGV4ID0gKCR0YXJnZXQuY2xvc2VzdCgnLmNvbC1sZy0zJykuaW5kZXgoKSk7XHJcbiAgICAgICAgY29uc29sZS5sb2coJHRhcmdldEluZGV4KTtcclxuICAgICAgICAvLyBjb25zdCAkZ2FsbGVyeU9wZW5lZEl0ZW0gPSAkKCcuZ2FsbGVyeS1vcGVuZWRfX3ByZXZpZXctaW1nLXdyYXA6bnRoLWNoaWxkKCR0YXJnZXRJbmRleCknKTtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgJGdhbGxlcnlXcmFwLmFkZENsYXNzKCdvcGVuZWQnKTtcclxuICAgICAgICAkZ2FsbGVyeUJ0bi5hZGRDbGFzcygnb3BlbmVkJyk7XHJcbiAgICAgICAgLy8gJGdhbGxlcnlPcGVuZWRJdGVtLmFkZENsYXNzKCdjdXJyZW50Jyk7XHJcbiAgICB9KTtcclxuXHJcblxyXG4gICAgJGdhbGxlcnlOZXh0SWNvbi5vbignY2xpY2snLCAoZSkgPT4ge1xyXG4gICAgICAgIGNvbnN0ICR0YXJnZXQgPSAkKGUudGFyZ2V0KTtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgJHRhcmdldC5yZW1vdmVDbGFzcygnY3VycmVudCcpLm5leHQoKS5hZGRDbGFzcygnY3VycmVudCcpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgJGdhbGxlcnlQcmV2SWNvbi5vbignY2xpY2snLCAoZSkgPT4ge1xyXG4gICAgICAgIGNvbnN0ICRnYWxsZXJ5VGFyZ2V0ID0gJCgnLmdhbGxlcnktb3BlbmVkX19wcmV2aWV3LWltZy13cmFwJyk7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICRnYWxsZXJ5VGFyZ2V0LmZpbmQoJy5jdXJyZW50JykucmVtb3ZlQ2xhc3MoJ2N1cnJlbnQnKS5wcmV2KCkuYWRkQ2xhc3MoJ2N1cnJlbnQnKTtcclxuICAgIH0pO1xyXG5cclxuICAgICRnYWxsZXJ5Qm90dG9tTGluay5vbignY2xpY2snLCAoZSkgPT4ge1xyXG4gICAgICAgIGNvbnN0ICR0YXJnZXQgPSAkKGUudGFyZ2V0KTtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgJGdhbGxlcnlQaWMudHJpZ2dlcignY2xpY2snKTtcclxuICAgIH0pO1xyXG5cclxuXHJcblxyXG4gICAgJGdhbGxlcnlPdmVybGF5Lm9uKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICAkZ2FsbGVyeVdyYXAucmVtb3ZlQ2xhc3MoJ29wZW5lZCcpO1xyXG4gICAgICAgICRnYWxsZXJ5QnRuLnJlbW92ZUNsYXNzKCdvcGVuZWQnKTtcclxuICAgIH0pO1xyXG5cclxufTtcclxuXHJcbndpbmRvdy5vbmxvYWQgPSAoKSA9PiB7XHJcbiAgICBsb2FkZXJIaWRlKCk7XHJcbiAgICBHYWxsZXJ5LmdhbGxlcnlJbm5lckNyZWF0ZSgpO1xyXG4gICAgR2FsbGVyeS5nYWxsZXJ5Qm90dG9tQ3JlYXRlKCk7XHJcbiAgICBnYWxsZXJ5U2hvdygpO1xyXG59O1xyXG4iXX0=
