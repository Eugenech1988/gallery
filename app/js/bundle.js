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
                $mainContent.append('<div class="gallery-opened">\n                <div class="gallery-opened__wrap">\n                <div class="gallery-opened__bottom-wrap"></div>\n                <div class="gallery-opened__overlay"></div>\n                <div class="gallery-opened__preview-wrap"></div>\n                </div>\n                    <div class="arrow-wrap arrow-wrap--prev">\n                    <a href="javascript:;" class="arrow-wrap__link">\n                    <img src="../img/arrow-left-b.svg" alt="" class="arrow-wrap__link-img arrow-wrap__link-img--left">\n                </a>\n                </div>\n                    <div class="arrow-wrap arrow-wrap--next">\n                    <a href="javascript:;" class="arrow-wrap__link">\n                    <img src="../img/arrow-left-b.svg" alt="" class="arrow-wrap__link-img arrow-wrap__link-img--right">\n                </a>\n                </div>\n                </div>');
            }
            this.isInit = true;
        }
    }, {
        key: 'galleryBottomCreate',
        value: function galleryBottomCreate() {
            var $galleryWrap = $('.gallery-opened__bottom-wrap');
            var $galleryWrapImg = $('.gallery__img');
            for (var i = 0; i < this.imgCount; i++) {
                $galleryWrap.append('<div class="gallery-opened__bottom-img-wrap">\n                <a href="" class="gallery-opened__bottom-img-wrap-link">\n                    <img src="' + $galleryWrapImg.eq(i).attr('src') + '\n                " alt="" class="gallery-opened__img">\n                </a>\n                </div>');
            }
        }
    }, {
        key: 'galleryBigPicCreate',
        value: function galleryBigPicCreate() {}
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

    $.getJSON('js/ajax/img.json', function (data) {
        for (var i = 0; i < data.images.length; i++) {
            galleryBigPicSrc.push(data.images[i]);
        }
    });

    $galleryPic.on('click', function (e) {
        var $target = $(e.target);
        e.preventDefault();
        $galleryWrap.addClass('opened');
        $galleryBtn.addClass('opened');
        if ($('.gallery-opened__preview-img-wrap').length == 0) {
            $galleryBigPicWrap.append('\n            <div class="gallery-opened__preview-img-wrap">\n            <img src="' + galleryBigPicSrc[$target.closest('.col-lg-3').index()] + '" alt="" class="gallery-opened__preview-img">\n            </div>');
        }
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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbW1vbi5qcyJdLCJuYW1lcyI6WyJsb2FkZXJIaWRlIiwiJGJvZHlWYXIiLCIkIiwiYWRkQ2xhc3MiLCJzZXRUaW1lb3V0IiwicmVtb3ZlQ2xhc3MiLCJnYWxsZXJ5IiwiaXNJbml0IiwiaW1nQ291bnQiLCJsZW5ndGgiLCIkbWFpbkNvbnRlbnQiLCJhcHBlbmQiLCIkZ2FsbGVyeVdyYXAiLCIkZ2FsbGVyeVdyYXBJbWciLCJpIiwiZXEiLCJhdHRyIiwiR2FsbGVyeSIsImdhbGxlcnlTaG93IiwiJGdhbGxlcnlPdmVybGF5IiwiJGdhbGxlcnlQaWMiLCIkZ2FsbGVyeUJ0biIsIiRnYWxsZXJ5QmlnUGljV3JhcCIsImdhbGxlcnlCaWdQaWNTcmMiLCJnZXRKU09OIiwiZGF0YSIsImltYWdlcyIsInB1c2giLCJvbiIsImUiLCIkdGFyZ2V0IiwidGFyZ2V0IiwicHJldmVudERlZmF1bHQiLCJjbG9zZXN0IiwiaW5kZXgiLCJ3aW5kb3ciLCJvbmxvYWQiLCJnYWxsZXJ5SW5uZXJDcmVhdGUiLCJnYWxsZXJ5Qm90dG9tQ3JlYXRlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxJQUFNQSxhQUFhLFNBQWJBLFVBQWEsR0FBTTtBQUNyQixRQUFNQyxXQUFXQyxFQUFFLGVBQUYsQ0FBakI7QUFDQUQsYUFBU0UsUUFBVCxDQUFrQixNQUFsQjtBQUNBQyxlQUFXLFlBQU07QUFDYkgsaUJBQVNJLFdBQVQsQ0FBcUIsTUFBckI7QUFDQUosaUJBQVNFLFFBQVQsQ0FBa0IsUUFBbEI7QUFDSCxLQUhELEVBR0csSUFISDtBQUlILENBUEQ7O0lBU01HLE87QUFDRix1QkFBYztBQUFBOztBQUNWLGFBQUtDLE1BQUwsR0FBYyxLQUFkO0FBQ0EsYUFBS0MsUUFBTCxHQUFnQk4sRUFBRSxlQUFGLEVBQW1CTyxNQUFuQztBQUNIOzs7OzZDQUVvQjtBQUNqQixnQkFBTUMsZUFBZVIsRUFBRSxlQUFGLENBQXJCO0FBQ0EsZ0JBQUksS0FBS0ssTUFBTCxJQUFlLEtBQW5CLEVBQTBCO0FBQ3RCRyw2QkFBYUMsTUFBYjtBQWlCSDtBQUNELGlCQUFLSixNQUFMLEdBQWMsSUFBZDtBQUNIOzs7OENBRXFCO0FBQ2xCLGdCQUFNSyxlQUFlVixFQUFFLDhCQUFGLENBQXJCO0FBQ0EsZ0JBQU1XLGtCQUFrQlgsRUFBRSxlQUFGLENBQXhCO0FBQ0EsaUJBQUssSUFBSVksSUFBSSxDQUFiLEVBQWdCQSxJQUFJLEtBQUtOLFFBQXpCLEVBQW1DTSxHQUFuQyxFQUF3QztBQUNwQ0YsNkJBQWFELE1BQWIsQ0FBb0IsNEpBRUVFLGdCQUFnQkUsRUFBaEIsQ0FBbUJELENBQW5CLEVBQXNCRSxJQUF0QixDQUEyQixLQUEzQixDQUZGLDBHQUFwQjtBQU1IO0FBQ0o7Ozs4Q0FFcUIsQ0FFckI7Ozs7OztBQUdMLElBQU1DLFVBQVUsSUFBSVgsT0FBSixFQUFoQjs7QUFFQSxJQUFNWSxjQUFjLFNBQWRBLFdBQWMsR0FBTTs7QUFFdEIsUUFBTU4sZUFBZVYsRUFBRSx1QkFBRixDQUFyQjtBQUNBLFFBQU1pQixrQkFBa0JqQixFQUFFLDBCQUFGLENBQXhCO0FBQ0EsUUFBTWtCLGNBQWNsQixFQUFFLG9CQUFGLENBQXBCO0FBQ0EsUUFBTW1CLGNBQWNuQixFQUFFLGFBQUYsQ0FBcEI7QUFDQSxRQUFNb0IscUJBQXFCcEIsRUFBRSwrQkFBRixDQUEzQjtBQUNBLFFBQU1xQixtQkFBbUIsRUFBekI7O0FBRUFyQixNQUFFc0IsT0FBRixDQUFVLGtCQUFWLEVBQThCLFVBQVVDLElBQVYsRUFBZ0I7QUFDMUMsYUFBSyxJQUFJWCxJQUFJLENBQWIsRUFBZ0JBLElBQUlXLEtBQUtDLE1BQUwsQ0FBWWpCLE1BQWhDLEVBQXdDSyxHQUF4QyxFQUE2QztBQUN6Q1MsNkJBQWlCSSxJQUFqQixDQUFzQkYsS0FBS0MsTUFBTCxDQUFZWixDQUFaLENBQXRCO0FBQ0g7QUFDSixLQUpEOztBQU1BTSxnQkFBWVEsRUFBWixDQUFlLE9BQWYsRUFBd0IsVUFBRUMsQ0FBRixFQUFTO0FBQzdCLFlBQU1DLFVBQVU1QixFQUFFMkIsRUFBRUUsTUFBSixDQUFoQjtBQUNBRixVQUFFRyxjQUFGO0FBQ0FwQixxQkFBYVQsUUFBYixDQUFzQixRQUF0QjtBQUNBa0Isb0JBQVlsQixRQUFaLENBQXFCLFFBQXJCO0FBQ0EsWUFBSUQsRUFBRSxtQ0FBRixFQUF1Q08sTUFBdkMsSUFBaUQsQ0FBckQsRUFBd0Q7QUFDcERhLCtCQUFtQlgsTUFBbkIsQ0FBMEIseUZBRVpZLGlCQUFpQk8sUUFBUUcsT0FBUixDQUFnQixXQUFoQixFQUE2QkMsS0FBN0IsRUFBakIsQ0FGWSxzRUFBMUI7QUFJSDtBQUNKLEtBWEQ7O0FBYUFmLG9CQUFnQlMsRUFBaEIsQ0FBbUIsT0FBbkIsRUFBNEIsWUFBTTtBQUM5QmhCLHFCQUFhUCxXQUFiLENBQXlCLFFBQXpCO0FBQ0FnQixvQkFBWWhCLFdBQVosQ0FBd0IsUUFBeEI7QUFDSCxLQUhEO0FBS0gsQ0FqQ0Q7O0FBbUNBOEIsT0FBT0MsTUFBUCxHQUFnQixZQUFNO0FBQ2xCcEM7QUFDQWlCLFlBQVFvQixrQkFBUjtBQUNBcEIsWUFBUXFCLG1CQUFSO0FBQ0FwQjtBQUNILENBTEQiLCJmaWxlIjoiY29tbW9uLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgbG9hZGVySGlkZSA9ICgpID0+IHtcclxuICAgIGNvbnN0ICRib2R5VmFyID0gJCgnI21haW4td3JhcHBlcicpO1xyXG4gICAgJGJvZHlWYXIuYWRkQ2xhc3MoJ2ZhZGUnKTtcclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICRib2R5VmFyLnJlbW92ZUNsYXNzKCdmYWRlJyk7XHJcbiAgICAgICAgJGJvZHlWYXIuYWRkQ2xhc3MoJ2xvYWRlZCcpO1xyXG4gICAgfSwgMzAwMCk7XHJcbn07XHJcblxyXG5jbGFzcyBnYWxsZXJ5IHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMuaXNJbml0ID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5pbWdDb3VudCA9ICQoJy5nYWxsZXJ5X19pbWcnKS5sZW5ndGg7XHJcbiAgICB9XHJcblxyXG4gICAgZ2FsbGVyeUlubmVyQ3JlYXRlKCkge1xyXG4gICAgICAgIGNvbnN0ICRtYWluQ29udGVudCA9ICQoJy5tYWluLWNvbnRlbnQnKTtcclxuICAgICAgICBpZiAodGhpcy5pc0luaXQgPT0gZmFsc2UpIHtcclxuICAgICAgICAgICAgJG1haW5Db250ZW50LmFwcGVuZChgPGRpdiBjbGFzcz1cImdhbGxlcnktb3BlbmVkXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZ2FsbGVyeS1vcGVuZWRfX3dyYXBcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJnYWxsZXJ5LW9wZW5lZF9fYm90dG9tLXdyYXBcIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJnYWxsZXJ5LW9wZW5lZF9fb3ZlcmxheVwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImdhbGxlcnktb3BlbmVkX19wcmV2aWV3LXdyYXBcIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJhcnJvdy13cmFwIGFycm93LXdyYXAtLXByZXZcIj5cclxuICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiamF2YXNjcmlwdDo7XCIgY2xhc3M9XCJhcnJvdy13cmFwX19saW5rXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIuLi9pbWcvYXJyb3ctbGVmdC1iLnN2Z1wiIGFsdD1cIlwiIGNsYXNzPVwiYXJyb3ctd3JhcF9fbGluay1pbWcgYXJyb3ctd3JhcF9fbGluay1pbWctLWxlZnRcIj5cclxuICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJhcnJvdy13cmFwIGFycm93LXdyYXAtLW5leHRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiamF2YXNjcmlwdDo7XCIgY2xhc3M9XCJhcnJvdy13cmFwX19saW5rXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIuLi9pbWcvYXJyb3ctbGVmdC1iLnN2Z1wiIGFsdD1cIlwiIGNsYXNzPVwiYXJyb3ctd3JhcF9fbGluay1pbWcgYXJyb3ctd3JhcF9fbGluay1pbWctLXJpZ2h0XCI+XHJcbiAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PmApXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuaXNJbml0ID0gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICBnYWxsZXJ5Qm90dG9tQ3JlYXRlKCkge1xyXG4gICAgICAgIGNvbnN0ICRnYWxsZXJ5V3JhcCA9ICQoJy5nYWxsZXJ5LW9wZW5lZF9fYm90dG9tLXdyYXAnKTtcclxuICAgICAgICBjb25zdCAkZ2FsbGVyeVdyYXBJbWcgPSAkKCcuZ2FsbGVyeV9faW1nJyk7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmltZ0NvdW50OyBpKyspIHtcclxuICAgICAgICAgICAgJGdhbGxlcnlXcmFwLmFwcGVuZChgPGRpdiBjbGFzcz1cImdhbGxlcnktb3BlbmVkX19ib3R0b20taW1nLXdyYXBcIj5cclxuICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJcIiBjbGFzcz1cImdhbGxlcnktb3BlbmVkX19ib3R0b20taW1nLXdyYXAtbGlua1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiYCArICRnYWxsZXJ5V3JhcEltZy5lcShpKS5hdHRyKCdzcmMnKSArIGBcclxuICAgICAgICAgICAgICAgIFwiIGFsdD1cIlwiIGNsYXNzPVwiZ2FsbGVyeS1vcGVuZWRfX2ltZ1wiPlxyXG4gICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+YCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGdhbGxlcnlCaWdQaWNDcmVhdGUoKSB7XHJcblxyXG4gICAgfVxyXG59XHJcblxyXG5jb25zdCBHYWxsZXJ5ID0gbmV3IGdhbGxlcnkoKTtcclxuXHJcbmNvbnN0IGdhbGxlcnlTaG93ID0gKCkgPT4ge1xyXG5cclxuICAgIGNvbnN0ICRnYWxsZXJ5V3JhcCA9ICQoJy5nYWxsZXJ5LW9wZW5lZF9fd3JhcCcpO1xyXG4gICAgY29uc3QgJGdhbGxlcnlPdmVybGF5ID0gJCgnLmdhbGxlcnktb3BlbmVkX19vdmVybGF5Jyk7XHJcbiAgICBjb25zdCAkZ2FsbGVyeVBpYyA9ICQoJy5nYWxsZXJ5X19pbWctbGluaycpO1xyXG4gICAgY29uc3QgJGdhbGxlcnlCdG4gPSAkKCcuYXJyb3ctd3JhcCcpO1xyXG4gICAgY29uc3QgJGdhbGxlcnlCaWdQaWNXcmFwID0gJCgnLmdhbGxlcnktb3BlbmVkX19wcmV2aWV3LXdyYXAnKTtcclxuICAgIGNvbnN0IGdhbGxlcnlCaWdQaWNTcmMgPSBbXTtcclxuXHJcbiAgICAkLmdldEpTT04oJ2pzL2FqYXgvaW1nLmpzb24nLCBmdW5jdGlvbiAoZGF0YSkge1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZGF0YS5pbWFnZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgZ2FsbGVyeUJpZ1BpY1NyYy5wdXNoKGRhdGEuaW1hZ2VzW2ldKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICAkZ2FsbGVyeVBpYy5vbignY2xpY2snLCAoIGUgKSA9PiB7XHJcbiAgICAgICAgY29uc3QgJHRhcmdldCA9ICQoZS50YXJnZXQpO1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAkZ2FsbGVyeVdyYXAuYWRkQ2xhc3MoJ29wZW5lZCcpO1xyXG4gICAgICAgICRnYWxsZXJ5QnRuLmFkZENsYXNzKCdvcGVuZWQnKTtcclxuICAgICAgICBpZiAoJCgnLmdhbGxlcnktb3BlbmVkX19wcmV2aWV3LWltZy13cmFwJykubGVuZ3RoID09IDApIHtcclxuICAgICAgICAgICAgJGdhbGxlcnlCaWdQaWNXcmFwLmFwcGVuZChgXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJnYWxsZXJ5LW9wZW5lZF9fcHJldmlldy1pbWctd3JhcFwiPlxyXG4gICAgICAgICAgICA8aW1nIHNyYz1cImAgKyBnYWxsZXJ5QmlnUGljU3JjWyR0YXJnZXQuY2xvc2VzdCgnLmNvbC1sZy0zJykuaW5kZXgoKV0gKyBgXCIgYWx0PVwiXCIgY2xhc3M9XCJnYWxsZXJ5LW9wZW5lZF9fcHJldmlldy1pbWdcIj5cclxuICAgICAgICAgICAgPC9kaXY+YCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgJGdhbGxlcnlPdmVybGF5Lm9uKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICAkZ2FsbGVyeVdyYXAucmVtb3ZlQ2xhc3MoJ29wZW5lZCcpO1xyXG4gICAgICAgICRnYWxsZXJ5QnRuLnJlbW92ZUNsYXNzKCdvcGVuZWQnKTtcclxuICAgIH0pO1xyXG5cclxufTtcclxuXHJcbndpbmRvdy5vbmxvYWQgPSAoKSA9PiB7XHJcbiAgICBsb2FkZXJIaWRlKCk7XHJcbiAgICBHYWxsZXJ5LmdhbGxlcnlJbm5lckNyZWF0ZSgpO1xyXG4gICAgR2FsbGVyeS5nYWxsZXJ5Qm90dG9tQ3JlYXRlKCk7XHJcbiAgICBnYWxsZXJ5U2hvdygpO1xyXG59O1xyXG4iXX0=
