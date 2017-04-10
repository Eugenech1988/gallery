const loaderHide = () => {
    const $bodyVar = $('#main-wrapper');
    $bodyVar.addClass('fade');
    setTimeout(() => {
        $bodyVar.removeClass('fade');
        $bodyVar.addClass('loaded');
    }, 3000);
};

class gallery {
    constructor() {
        this.isInit = false;
        this.imgCount = $('.gallery__img').length;
    }

    galleryInnerCreate() {
        const $mainContent = $('.main-content');
        if (this.isInit == false) {
            $mainContent.append(`<div class="gallery-opened">
                <div class="gallery-opened__wrap">
                <div class="gallery-opened__bottom-wrap"></div>
                <div class="gallery-opened__overlay"></div>
                <div class="gallery-opened__preview-wrap"></div>
                </div>
                    <div class="arrow-wrap arrow-wrap--prev">
                    <a href="javascript:;" class="arrow-wrap__link">
                    <img src="../img/arrow-left-b.svg" alt="" class="arrow-wrap__link-img arrow-wrap__link-img--left">
                </a>
                </div>
                    <div class="arrow-wrap arrow-wrap--next">
                    <a href="javascript:;" class="arrow-wrap__link">
                    <img src="../img/arrow-left-b.svg" alt="" class="arrow-wrap__link-img arrow-wrap__link-img--right">
                </a>
                </div>
                </div>`)
        }
        this.isInit = true;
    }

    galleryBottomCreate() {
        const $galleryWrap = $('.gallery-opened__bottom-wrap');
        const $galleryWrapImg = $('.gallery__img');
        for (let i = 0; i < this.imgCount; i++) {
            $galleryWrap.append(`<div class="gallery-opened__bottom-img-wrap">
                <a href="" class="gallery-opened__bottom-img-wrap-link">
                    <img src="` + $galleryWrapImg.eq(i).attr('src') + `
                " alt="" class="gallery-opened__img">
                </a>
                </div>`);
        }
    }

    galleryBigPicCreate() {

    }
}

const Gallery = new gallery();

const galleryShow = () => {

    const $galleryWrap = $('.gallery-opened__wrap');
    const $galleryOverlay = $('.gallery-opened__overlay');
    const $galleryPic = $('.gallery__img-link');
    const $galleryBtn = $('.arrow-wrap');
    const $galleryBigPicWrap = $('.gallery-opened__preview-wrap');
    const galleryBigPicSrc = [];

    $.getJSON('js/ajax/img.json', function (data) {
        for (let i = 0; i < data.images.length; i++) {
            galleryBigPicSrc.push(data.images[i]);
        }
    });

    $galleryPic.on('click', ( e ) => {
        const $target = $(e.target);
        e.preventDefault();
        $galleryWrap.addClass('opened');
        $galleryBtn.addClass('opened');
        if ($('.gallery-opened__preview-img-wrap').length == 0 && ) {
            $galleryBigPicWrap.append(`
            <div class="gallery-opened__preview-img-wrap">
            <img src="` + galleryBigPicSrc[$target.closest('.col-lg-3').index()] + `" alt="" class="gallery-opened__preview-img">
            </div>`);
        }
    });

    $galleryOverlay.on('click', () => {
        $galleryWrap.removeClass('opened');
        $galleryBtn.removeClass('opened');
    });

};

window.onload = () => {
    loaderHide();
    Gallery.galleryInnerCreate();
    Gallery.galleryBottomCreate();
    galleryShow();
};
