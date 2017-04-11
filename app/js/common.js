const loaderHide = () => {
    const $bodyVar = $('#main-wrapper');
    $bodyVar.addClass('fade');
    setTimeout(() => {
        $bodyVar.removeClass('fade');
        $bodyVar.addClass('loaded');
    }, 3000);
};

class Gallery {
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
                    <a href="javascript:;" class="arrow-wrap__link arrow-wrap__link--prev">
                    <img src="../img/arrow-left-b.svg" alt="" class="arrow-wrap__link-img arrow-wrap__link-img--left">
                </a>
                </div>
                    <div class="arrow-wrap arrow-wrap--next">
                    <a href="javascript:;" class="arrow-wrap__link arrow-wrap__link--next">
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
                " alt="" class="gallery-opened__bottom-img">
                </a>
                </div>`);
        }
    }

}

const gallery = new Gallery();

const galleryShow = () => {

    const $galleryWrap = $('.gallery-opened__wrap');
    const $galleryOverlay = $('.gallery-opened__overlay');
    const $galleryPic = $('.gallery__img-link');
    const $galleryBtn = $('.arrow-wrap');
    const $galleryBigPicWrap = $('.gallery-opened__preview-wrap');
    const galleryBigPicSrc = [];
    const $galleryBottomLink = $('.gallery-opened__bottom-img-wrap-link');
    const $galleryNextIcon = $('.arrow-wrap__link--next');
    const $galleryPrevIcon = $('.arrow-wrap__link--prev');

    $.getJSON('js/ajax/img.json', function (data) {
        for (let i = 0; i < data.images.length; i++) {
            galleryBigPicSrc.push(data.images[i]);
        }
        for (let i = 0; i < galleryBigPicSrc.length; i++) {
            $galleryBigPicWrap.append(`
            <div class="gallery-opened__preview-img-wrap">
            <img src="` + galleryBigPicSrc[i] + `" alt="" class="gallery-opened__preview-img">
            </div>`);
        }
    });


    $galleryPic.on('click', ( e ) => {
        const $target = $(e.target);
        const $targetIndex = ($target.closest('.col-lg-3').index());
        const $galleryOpenedItem = $('.gallery-opened__preview-img-wrap');
        console.log($targetIndex);
        // const $galleryOpenedItem = $('.gallery-opened__preview-img-wrap:nth-child($targetIndex)');
        e.preventDefault();
        $galleryWrap.addClass('opened');
        $galleryBtn.addClass('opened');
        $galleryBigPicWrap.find($galleryOpenedItem).eq($targetIndex).addClass('current');
    });


    $galleryNextIcon.on('click', (e) => {
        const $target = $(e.target);
        const $galleryWrap = $('.gallery-opened__preview-wrap');
        e.preventDefault();
        $galleryWrap.find('.gallery-opened__preview-img-wrap.current').removeClass('current').next().addClass('current');
    });

    $galleryPrevIcon.on('click', (e) => {
        const $galleryWrap = $('.gallery-opened__preview-wrap');
        e.preventDefault();
        $galleryWrap.find('.gallery-opened__preview-img-wrap.current').removeClass('current').prev().addClass('current');
        if (!$galleryWrap.find('.gallery-opened__preview-img-wrap.current').prev()) {
            alert('stop');
        }
    });

    $galleryBottomLink.on('click', (e) => {
        const $target = $(e.target);
        e.preventDefault();
        $galleryPic.trigger('click');
    });

    $galleryOverlay.on('click', () => {
        const $galleryOpenedItem = $('.gallery-opened__preview-img-wrap');
        $galleryOpenedItem.removeClass('current');
        $galleryWrap.removeClass('opened');
        $galleryBtn.removeClass('opened');
    });

};

window.onload = () => {
    loaderHide();
    gallery.galleryInnerCreate();
    gallery.galleryBottomCreate();
    galleryShow();
};
