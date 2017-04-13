const loaderHide = () => {
    const $bodyVar = document.getElementById('main-wrapper');;
    $bodyVar.classList.add('fade');
    setTimeout(() => {
        $bodyVar.classList.remove('fade');
        $bodyVar.classList.add('loaded');
    }, 3000);
};

window.onload = () => {
    loaderHide();
};
