var pageNumber = 1;
var opacity = 0;
var scroll;

window.addEventListener('load', function() {
    smoothlyShow();
});

function renderPage(page) {
    var innerContainer = document.getElementById('smoothly-show');
    switch (page) {
        case 'page_1':
            document.getElementById('smoothly-show').style.opacity = 0;
            innerContainer.innerHTML = '<h1>Home</h1>';
            smoothlyShow();
            break;
        case 'page_2':
            document.getElementById('smoothly-show').style.opacity = 0;
            innerContainer.innerHTML = '<h1>Skills</h1>';
            smoothlyShow();
            break;
        case 'page_3':
            document.getElementById('smoothly-show').style.opacity = 0;
            innerContainer.innerHTML = '<h1>Projects</h1>';
            smoothlyShow();
            break;
        case 'page_4':
            document.getElementById('smoothly-show').style.opacity = 0;
            innerContainer.innerHTML = '<h1>Contact</h1>';
            smoothlyShow();
            break;
        default:

    }
};

function smoothlyShow() {
    var innerContainer = document.getElementById('smoothly-show');
    var intervalShow = setInterval(function() {
        if (opacity > 100) {
            clearInterval(intervalShow);
            opacity = 0;
        } else {
            innerContainer.style.opacity = opacity / 100;
            opacity += 1;
        };
    }, 10);
};

function loadNextPage() {
    var opacity = document.getElementById('smoothly-show').style.opacity;
    if (opacity === '1') {
        pageNumber--;
        renderPage('page_' + pageNumber);
    };
};

function loadPreviusPage() {
    var opacity = document.getElementById('smoothly-show').style.opacity;
    if (opacity === '1') {
        pageNumber++;
        renderPage('page_' + pageNumber);
    };
};

function mouseScroll(event) {
    if (pageNumber > 1 && event.deltaY === -53) loadNextPage();
    if (pageNumber < 4 && event.deltaY === 53) loadPreviusPage();
}

function fingerScroll() {
    var Y1;
    window.addEventListener('touchstart', function(event) {
        Y1 = event.changedTouches[0].clientY;
    });

    window.addEventListener('touchend', function(event) {
        var Y2 = event.changedTouches[0].clientY;
        var direction = Y1 - Y2;
        if (pageNumber > 1 && direction < 50) loadNextPage();
        if (pageNumber < 4 && direction > -50) loadPreviusPage();
    });
}

function scrollPage() {
    window.addEventListener('wheel', mouseScroll);
    fingerScroll();
};

scrollPage();
