var pageNumber = 1;
var opacity = 0;
var scroll;
var row = [];
var stop = false;

window.addEventListener('load', function() {
    smoothlyShow();
    typedImageRead();
});

function typedImageRead() {
    var text = document.getElementById('my_photo_read');
    var letters = document.getElementById('my_photo_read').innerText;

    for (var x = 0; x < text.children.length; x++) {
        row.push(x);
        row[x] = [];
        for (var y = 0; y < text.children[x].textContent.length; y++) {
            if (text.children[x].textContent[y] === ":") {
                row[x].push("<span class='hidden'>" + text.children[x].textContent[y] + "</span>");
            } else {
                row[x].push(text.children[x].textContent[y]);
            }
        }
    }
}

function intervalWrite() {

    var inner = document.getElementById('my_photo_write');
    var i = 0;
    var j = 1;
    var intervalWrite = setInterval(function() {
        if (i == row.length || stop) {
            clearInterval(intervalWrite);
        } else {
            if (j - 1 >= row[i].length) {
                j = 1;
                i++;
            } else {
                if (j <= row[i].length) {
                    inner.children[i].innerHTML += row[i][j - 1] + row[i][j];
                    j += 2;
                }
                if (j <= row[i].length) {
                    inner.children[i].innerHTML += row[i][j - 1] + row[i][j];
                    j += 2;
                }
                if (j <= row[i].length) {
                    inner.children[i].innerHTML += row[i][j - 1] + row[i][j];
                    j += 2;
                }
                if (j <= row[i].length) {
                    inner.children[i].innerHTML += row[i][j - 1] + row[i][j];
                    j += 2;
                }
            };
        };
    }, 1);
}

function typedImegeWrite() {
    var inner = document.getElementById('my_photo_write');
    for (var line = 0; line < row.length; line++) {
        inner.innerHTML += "<p class='typed_line' id='line_" + line + "'></p>";
    }

    intervalWrite();

}

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
            stop = true;
            document.getElementById('smoothly-show').style.opacity = 0;
            innerContainer.innerHTML = '<h1>Projects</h1>';
            smoothlyShow();
            document.getElementById('my_photo_write').innerHTML = " ";
            break;
        case 'page_4':
            stop = false;
            document.getElementById('smoothly-show').style.opacity = 0;
            innerContainer.innerHTML = '<h1>Contact</h1>';
            smoothlyShow();
            typedImegeWrite();
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
        event.preventDefault();
        Y1 = event.changedTouches[0].clientY;
    });

    window.addEventListener('touchend', function(event) {
        event.preventDefault();
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
