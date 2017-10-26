var Typed = function(element) {
    this.element = element;
    var words = element.dataset.words;
    this.words = words.split().filter(function(v) {
        return v;
    });

    this.progress = {
        word: 0,
        char: 0,
        building: true,
        atWordEnd: false,
    };

    this.typing = true;

    this.doTyping();
};

Typed.prototype.doTyping = function() {
    var e = this.element;
    var p = this.progress;
    var w = p.word;
    var c = p.char;
    var currentChar = this.words[w][c];
    p.atWordEnd = false;
    if (this.cursor) {
        this.cursor.element.style.opacity = "1";
        this.cursor.on = true;
        clearInterval(this.cursor.interval);
        // var itself = this.cursor;
        // this.cursor.interval = setInterval(function() {
        //     itself.updateBlinkState();
        // }, 400);
    }
    if (p.building) {
        e.innerHTML += currentChar;
        p.char += 1;
        if (p.char == this.words[w].length) {
            p.building = false;
            p.atWordEnd = true;
        }
    } else {
        e.innerHTML = e.innerHTML.slice(0, -1);
        if (!this.element.innerHTML) {
            p.building = true;
            p.word = (p.word + 1) % this.words.length;
            p.char = 0;
        }
    }

    if (!p.building) {
        this.typing = false;
    }

    var myself = this;
    setTimeout(function() {
        if (myself.typing) {
            myself.doTyping();
        };
    }, 20);
};

var Cursor = function(element) {
    this.element = element;
    this.cursorDisplay = "_";
    element.innerHTML = this.cursorDisplay;
    this.on = true;
    element.style.transition = "all 0.1s";
    var myself = this;
    this.interval = setInterval(function() {
        myself.updateBlinkState();
    }, 400);
}
Cursor.prototype.updateBlinkState = function() {
    if (this.on) {
        this.element.style.display = "none";
        this.on = false;
    } else {
        this.element.style.display = "inline";
        this.on = true;
    }
}

function TyperSetup1() {
    var typed = {};
    var elements = document.getElementsByClassName("typed_1");
    for (var i = 0, e; e = elements[i++];) {
        typed[e.id] = new Typed(e);
    }
}

function TyperSetup2() {
    var typed = {};
    var elements = document.getElementsByClassName("typed_2");
    for (var i = 0, e; e = elements[i++];) {
        typed[e.id] = new Typed(e);
    }
}

function TyperSetup3() {
    var typed = {};
    var elements = document.getElementsByClassName("typed_3");
    for (var i = 0, e; e = elements[i++];) {
        typed[e.id] = new Typed(e);
    }
}

function TyperSetup4() {
    var typed = {};
    var elements = document.getElementsByClassName("typed_4");
    for (var i = 0, e; e = elements[i++];) {
        typed[e.id] = new Typed(e);
    }

}

function cursorBlink(a) {
    var elements2 = document.getElementsByClassName("cursor" + a);
    for (var i = 0, e; e = elements2[i++];) {
        var t = new Cursor(e);
    }
}

function wait(funk, time) {
    window.setTimeout(funk, time);
}

wait(TyperSetup1, 0);
wait(TyperSetup2, 500);
wait(TyperSetup3, 1500);
wait(TyperSetup4, 5600);
wait(function() {
    $('.cursor1').css('display', 'none')
}, 490);
wait(function() {
    $('.cursor2').css('display', 'none')
}, 1490);
wait(function() {
    $('.cursor3').css('display', 'none')
}, 5090);
wait(function() {
    $('.cursor2').css('display', 'inline')
}, 490);
wait(function() {
    $('.cursor3').css('display', 'inline')
}, 1490);
wait(function() {
    $('.cursor4').css('display', 'inline');
    cursorBlink(4);
}, 5390);
