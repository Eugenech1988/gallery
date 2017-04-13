'use strict';

var loaderHide = function loaderHide() {
    var $bodyVar = document.getElementById('main-wrapper');;
    $bodyVar.classList.add('fade');
    setTimeout(function () {
        $bodyVar.classList.remove('fade');
        $bodyVar.classList.add('loaded');
    }, 3000);
};

window.onload = function () {
    loaderHide();
};
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbW1vbi5qcyJdLCJuYW1lcyI6WyJsb2FkZXJIaWRlIiwiJGJvZHlWYXIiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiY2xhc3NMaXN0IiwiYWRkIiwic2V0VGltZW91dCIsInJlbW92ZSIsIndpbmRvdyIsIm9ubG9hZCJdLCJtYXBwaW5ncyI6Ijs7QUFBQSxJQUFNQSxhQUFhLFNBQWJBLFVBQWEsR0FBTTtBQUNyQixRQUFNQyxXQUFXQyxTQUFTQyxjQUFULENBQXdCLGNBQXhCLENBQWpCLENBQXlEO0FBQ3pERixhQUFTRyxTQUFULENBQW1CQyxHQUFuQixDQUF1QixNQUF2QjtBQUNBQyxlQUFXLFlBQU07QUFDYkwsaUJBQVNHLFNBQVQsQ0FBbUJHLE1BQW5CLENBQTBCLE1BQTFCO0FBQ0FOLGlCQUFTRyxTQUFULENBQW1CQyxHQUFuQixDQUF1QixRQUF2QjtBQUNILEtBSEQsRUFHRyxJQUhIO0FBSUgsQ0FQRDs7QUFTQUcsT0FBT0MsTUFBUCxHQUFnQixZQUFNO0FBQ2xCVDtBQUNILENBRkQiLCJmaWxlIjoiY29tbW9uLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgbG9hZGVySGlkZSA9ICgpID0+IHtcclxuICAgIGNvbnN0ICRib2R5VmFyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21haW4td3JhcHBlcicpOztcclxuICAgICRib2R5VmFyLmNsYXNzTGlzdC5hZGQoJ2ZhZGUnKTtcclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICRib2R5VmFyLmNsYXNzTGlzdC5yZW1vdmUoJ2ZhZGUnKTtcclxuICAgICAgICAkYm9keVZhci5jbGFzc0xpc3QuYWRkKCdsb2FkZWQnKTtcclxuICAgIH0sIDMwMDApO1xyXG59O1xyXG5cclxud2luZG93Lm9ubG9hZCA9ICgpID0+IHtcclxuICAgIGxvYWRlckhpZGUoKTtcclxufTtcclxuIl19
