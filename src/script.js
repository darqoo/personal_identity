var pageNumber = 1;
var opacity = 0;
var scroll;
var homePageAnimation = true;
var stop = false;

window.addEventListener('load', function() {
    $("#loader_bg").fadeOut();
    setTimeout(
        function() {
            homePage();
            homePageAnimation = false;
        }, 600);

});

function renderPage(page) {
    var innerContainer = document.getElementById('smoothly-show');
    switch (page) {
        case 'page_1':
            homePage();
            break;
        case 'page_2':
            skillsPage();
            break;
        case 'page_3':
            projectsPage();
            break;
        case 'page_4':
            contactPage();
            break;
        default:

    }
};

function homePage() {
    var row = [];

    document.getElementById('smoothly-show').style.opacity = 0;
    document.getElementById('home').style.display = 'block';
    document.getElementById('skills').style.display = 'none';
    document.getElementById('projects').style.display = 'none';
    document.getElementById('contact').style.display = 'none';
    smoothlyShow();
    if (homePageAnimation) {
        typedTextRead();
        typedTextWrite();
    } else {
        document.getElementById('my_text_read').style.display = "block";
    }

    function typedTextRead() {
        var text = document.getElementById('my_text_read');

        for (var x = 0; x < text.children.length; x++) {
            row.push(x);
            row[x] = [];
            for (var y = 0; y < text.children[x].textContent.length; y++) {
                row[x].push(text.children[x].textContent[y]);
            }
        }
    }

    function intervalWrite() {

        var inner = document.getElementById('my_text_write');
        var i = 0;
        var j = 0;
        var intervalWrite = setInterval(function() {
            if (i == row.length || stop) {
                clearInterval(intervalWrite);
            } else {
                if (j >= row[i].length) {
                    j = 0;
                    i++;
                } else {
                    if (j <= row[i].length) {
                        inner.children[i].innerHTML += row[i][j];
                        j++;
                    }
                };
            };
        }, 10);
    }

    function typedTextWrite() {
        var inner = document.getElementById('my_text_write');
        for (var line = 0; line < row.length; line++) {
            if (line === 0) inner.innerHTML += "<h1></h1>";
            else inner.innerHTML += "<p class='typed_line' id='line_" + line + "'></p>";
        }


        intervalWrite();

    }

}

function skillsPage() {

    var inner = document.getElementById('my_text_write');
    stop = true;
    inner.innerHTML = "";
    document.getElementById('smoothly-show').style.opacity = 0;
    document.getElementById('home').style.display = 'none';
    document.getElementById('skills').style.display = 'block';
    document.getElementById('projects').style.display = 'none';
    document.getElementById('contact').style.display = 'none';
    smoothlyShow();
}

function projectsPage() {
    document.getElementById('smoothly-show').style.opacity = 0;
    document.getElementById('home').style.display = 'none';
    document.getElementById('skills').style.display = 'none';
    document.getElementById('projects').style.display = 'block';
    document.getElementById('contact').style.display = 'none';
    smoothlyShow();
}

function contactPage() {
    document.getElementById('smoothly-show').style.opacity = 0;
    document.getElementById('home').style.display = 'none';
    document.getElementById('skills').style.display = 'none';
    document.getElementById('projects').style.display = 'none';
    document.getElementById('contact').style.display = 'block';
    smoothlyShow();
}

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
