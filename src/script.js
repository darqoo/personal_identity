var pageNumber = 1;
var opacity = 0;
var scroll;
var homePageAnimation = true;
var stop = false;

function load() {

    var height = window.innerHeight;
    var width = window.innerWidth;
    if (width > 1920) {
        $('#bg2, #bg3, #bg4, #bg5').css({
            'background-size': width + 'px',
        })
    };
    if (height > 700) {
        if (width > 1920) {
            $('#bg2, #bg3, #bg4, #bg5').css({
                'background-position-y': (-width + 1920) / 2.4 + height - 800 + 'px'
            });
        } else {

            $('#bg2, #bg3, #bg4, #bg5').css({
                'background-position-y': height - 800 + 'px'
            });
        }
    } else if (height > 500) {
        $('#bg2, #bg3, #bg4, #bg5').css({
            'background-position-y': height - 600 + 'px'
        });
    }
}

window.addEventListener('resize', load);

window.addEventListener('load', function() {
    $("#loader_bg").fadeOut();
    setTimeout(
        function() {
            homePage();
            homePageAnimation = false;
        }, 600);
    navigate();
});

function navigate() {
    $('.menu_projects').mouseover(function() {
        $('.down').show();
    });
    $('#burger').click(function() {
        $('#navigation').toggle();
        $('.down').css({
            display: 'none'
        });
    })
    $('.menu_home').click(function() {
        renderPage('page_1');
        $('#navigation').hide();
    });
    $('.menu_skills').click(function() {
        renderPage('page_2');
        $('#navigation').hide();
    });
    $('.menu_projects').click(function() {
        renderPage('page_3');
        $('#navigation').hide();
    });
    $('.menu_business').click(function() {
        renderPage('page_31');
        $('#navigation').hide();
    });
    $('.menu_hobby').click(function() {
        renderPage('page_32');
        $('#navigation').hide();
    });
    $('.menu_labs').click(function() {
        renderPage('page_33');
        $('#navigation').hide();
    });
    $('.menu_contact').click(function() {
        renderPage('page_4');
        $('#navigation').hide();
    });
};

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
        case 'page_31':
            businessPage();
            break;
        case 'page_32':
            hobbyPage();
            break;
        case 'page_33':
            labsPage();
            break;
        default:
    };
};

function homePage() {
    var row = [];
    $('.' + pageNumber).css({
        'color': ''
    });
    pageNumber = 1;
    $('.' + pageNumber).css({
        'color': '#9acd32'
    });
    opacity = 0;
    document.getElementById('smoothly-show').style.opacity = 0;
    document.getElementById('home').style.display = 'block';
    document.getElementById('skills').style.display = 'none';
    document.getElementById('projects').style.display = 'none';
    document.getElementById('contact').style.display = 'none';
    document.getElementById('business').style.display = 'none';
    document.getElementById('hobby').style.display = 'none';
    document.getElementById('labs').style.display = 'none';
    smoothlyShow();
    if (homePageAnimation) {
        typedTextRead();
        typedTextWrite();
    } else {
        document.getElementById('my_text_read').style.display = "block";
    };

    function typedTextRead() {
        var text = document.getElementById('my_text_read');

        for (var x = 0; x < text.children.length; x++) {
            row.push(x);
            row[x] = [];
            for (var y = 0; y < text.children[x].textContent.length; y++) {
                row[x].push(text.children[x].textContent[y]);
            };
        };
    };

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
    };

    function typedTextWrite() {
        var inner = document.getElementById('my_text_write');
        for (var line = 0; line < row.length; line++) {
            if (line === 0) inner.innerHTML += "<h1></h1>";
            else inner.innerHTML += "<p class='typed_line' id='line_" + line + "'></p>";
        };
        intervalWrite();
    };
};

function skillsPage() {
    $('.' + pageNumber).css({
        'color': ''
    });
    pageNumber = 2;
    $('.' + pageNumber).css({
        'color': '#9acd32'
    });
    stop = true;
    document.getElementById('smoothly-show').style.opacity = 0;
    document.getElementById('home').style.display = 'none';
    document.getElementById('skills').style.display = 'block';
    document.getElementById('projects').style.display = 'none';
    document.getElementById('contact').style.display = 'none';
    document.getElementById('business').style.display = 'none';
    document.getElementById('hobby').style.display = 'none';
    document.getElementById('labs').style.display = 'none';
    smoothlyShow();
};

function projectsPage() {
    $('.' + pageNumber).css({
        'color': ''
    });
    pageNumber = 3;
    $('.' + pageNumber).css({
        'color': '#9acd32'
    });
    stop = true;
    document.getElementById('smoothly-show').style.opacity = 0;
    document.getElementById('home').style.display = 'none';
    document.getElementById('skills').style.display = 'none';
    document.getElementById('projects').style.display = 'block';
    document.getElementById('contact').style.display = 'none';
    document.getElementById('business').style.display = 'none';
    document.getElementById('hobby').style.display = 'none';
    document.getElementById('labs').style.display = 'none';
    smoothlyShow();
};

function businessPage() {
    $('.' + pageNumber).css({
        'color': ''
    });
    pageNumber = 31;
    $('.' + pageNumber).css({
        'color': '#9acd32'
    });
    stop = true;
    document.getElementById('smoothly-show').style.opacity = 0;
    document.getElementById('home').style.display = 'none';
    document.getElementById('skills').style.display = 'none';
    document.getElementById('projects').style.display = 'none';
    document.getElementById('contact').style.display = 'none';
    document.getElementById('business').style.display = 'block';
    document.getElementById('hobby').style.display = 'none';
    document.getElementById('labs').style.display = 'none';
    smoothlyShow();
};

function hobbyPage() {
    $('.' + pageNumber).css({
        'color': ''
    });
    pageNumber = 32;
    $('.' + pageNumber).css({
        'color': '#9acd32'
    });
    stop = true;
    document.getElementById('smoothly-show').style.opacity = 0;
    document.getElementById('home').style.display = 'none';
    document.getElementById('skills').style.display = 'none';
    document.getElementById('projects').style.display = 'none';
    document.getElementById('contact').style.display = 'none';
    document.getElementById('business').style.display = 'none';
    document.getElementById('hobby').style.display = 'block';
    document.getElementById('labs').style.display = 'none';
    smoothlyShow();
};

function labsPage() {
    $('.' + pageNumber).css({
        'color': ''
    });
    pageNumber = 33;
    $('.' + pageNumber).css({
        'color': '#9acd32'
    });
    stop = true;
    document.getElementById('smoothly-show').style.opacity = 0;
    document.getElementById('home').style.display = 'none';
    document.getElementById('skills').style.display = 'none';
    document.getElementById('projects').style.display = 'none';
    document.getElementById('contact').style.display = 'none';
    document.getElementById('business').style.display = 'none';
    document.getElementById('hobby').style.display = 'none';
    document.getElementById('labs').style.display = 'block';
    smoothlyShow();
};

function contactPage() {
    $('.' + pageNumber).css({
        'color': ''
    });
    pageNumber = 4;
    $('.' + pageNumber).css({
        'color': '#9acd32'
    });
    stop = true;
    document.getElementById('smoothly-show').style.opacity = 0;
    document.getElementById('home').style.display = 'none';
    document.getElementById('skills').style.display = 'none';
    document.getElementById('projects').style.display = 'none';
    document.getElementById('contact').style.display = 'block';
    document.getElementById('business').style.display = 'none';
    document.getElementById('hobby').style.display = 'none';
    document.getElementById('labs').style.display = 'none';
    smoothlyShow();
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
        $('.' + pageNumber).css({
            'color': ''
        });
        pageNumber--;
        $('.' + pageNumber).css({
            'color': '#9acd32'
        });
        renderPage('page_' + pageNumber);
    };
};

function loadPreviusPage() {
    var opacity = document.getElementById('smoothly-show').style.opacity;
    if (opacity === '1') {
        $('.' + pageNumber).css({
            'color': ''
        });
        pageNumber++;
        $('.' + pageNumber).css({
            'color': '#9acd32'
        });
        renderPage('page_' + pageNumber);
    };
};

function mouseScroll(event) {
    if (pageNumber >= 31 && pageNumber <= 33 && event.deltaY === -53) {
        if (pageNumber === 31 && event.deltaY === -53) {
            $('.' + pageNumber).css({
                'color': ''
            });
            pageNumber = 4;
            loadNextPage();
        } else {
            loadNextPage();
        };
    };
    if (pageNumber < 33 && pageNumber >= 31 && event.deltaY === 53) loadPreviusPage();
    if (pageNumber > 1 && pageNumber <= 4 && event.deltaY === -53) loadNextPage();
    if (pageNumber < 4 && pageNumber >= 1 && event.deltaY === 53) loadPreviusPage();
};

function fingerScroll() {
    var Y1;
    window.addEventListener('touchstart', function(event) {
        Y1 = event.changedTouches[0].clientY;
    }, {
        passive: false
    });

    window.addEventListener('touchend', function(event) {
        var Y2 = event.changedTouches[0].clientY;
        var direction = Y1 - Y2;
        if (pageNumber >= 31 && pageNumber <= 33 && direction < -50) {
            if (pageNumber === 31 && direction < -50) {
                $('.' + pageNumber).css({
                    'color': ''
                });
                pageNumber = 4;
                loadNextPage();
            } else {
                loadNextPage();
            };
        };
        if (pageNumber < 33 && pageNumber >= 31 && direction > 50) loadPreviusPage();
        if (pageNumber < 4 && direction > 50) loadPreviusPage();
        if (pageNumber > 1 && direction < -50) loadNextPage();
    }, {
        passive: false
    });
};

function scrollPage() {
    window.addEventListener('wheel', mouseScroll);
    fingerScroll();
};

scrollPage();
var clickin = true;

// function moveBackground() {
//     var width = window.innerWidth;
//     if (width > 1200) {
//         if (clickin) {
//             $(window).click(function() {
//                 // $('#bg2').animate({
//                 //     'background-position-x': '-=5'
//                 //     // 'background-size': '-=5%'
//                 // }, 500, 'linear');
//                 // $('#bg3').animate({
//                 //     'background-position-x': '-=12'
//                 //     // 'background-size': '-=5%'
//                 // }, 500, 'linear');
//                 // $('#bg4').animate({
//                 //     'background-position-x': '-=18'
//                 //     // 'background-size': '-=5%'
//                 // }, 500, 'linear');
//                 // $('#bg5').animate({
//                 //     'background-position-x': '-=75'
//                 //     // 'background-size': '+=5%'
//                 // }, 500, 'linear');
//
//
//                 clickin = false;
//             });
//         }
//     }
// };

load();
// moveBackground();
