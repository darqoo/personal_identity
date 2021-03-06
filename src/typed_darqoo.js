var row = [];
var stop = false;


function typedTextRead() {
    var text = document.getElementById('my_photo_read');

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
    }, 1);
}

function intervalWriteWithoutTyping() {
    var inner = document.getElementById('my_photo_write');
    for (var line = 0; line < row.length; line++) {
        inner.innerHTML += "<p class='typed_line' id='line_" + line + "'></p>";
    }

    for (var i = 0; i < row.length || stop; i++) {
        for (var j = 0; j < row[i].length; j++) {
            inner.children[i].innerHTML += row[i][j];
        };
    };
}

function typedTextWrite() {
    var inner = document.getElementById('my_photo_write');
    for (var line = 0; line < row.length; line++) {
        inner.innerHTML += "<p class='typed_line' id='line_" + line + "'></p>";
    }

    intervalWrite();

}
