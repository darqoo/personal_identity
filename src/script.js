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
    }, 15);
};

function scrollPage() {
    window.addEventListener('wheel', function scroll(event) {
        if (pageNumber > 1) {
            if (event.deltaY === -53) {
                if (document.getElementById('smoothly-show').style.opacity === '1') {
                    pageNumber--;
                    renderPage('page_' + pageNumber);
                }
            }
        }
        if (pageNumber < 4) {
            if (event.deltaY === 53) {
                if (document.getElementById('smoothly-show').style.opacity === '1') {
                    pageNumber++;
                    renderPage('page_' + pageNumber);
                }
            }
        }
    });
};

scrollPage();
