let counter = 0,
    Title = 'Janis', // website title
    direction = true
aniTitle = setInterval(function () {
    if (counter == Title.length) {
        direction = false
    }
    if (counter == false) {
        direction = true
    }
    counter = direction == true ? ++counter : --counter
    newtitle = counter == 0 ? '' : Title.slice(0, counter)
    document.title = '' + newtitle
}, 400)
window.oncontextmenu = function () {
    return false
}
$(document).x(function (E) {
    if (E.keyCode == 123) {
        return false
    } else {
        if (
            (E.ctrlKey && E.shiftKey && E.keyCode == 73) ||
            (E.ctrlKey && E.shiftKey && E.keyCode == 74)
        ) {
            return false
        }
    }
})
function audioPlay() {
    var E = document.getElementById('audio')
    E.volume = 0.3
    E.play()
}
function fullScreen() {
    if (document.documentElement.requestFullscreen) {
        document.documentElement.requestFullscreen();
    } else if (document.documentElement.mozRequestFullScreen) { // Firefox
        document.documentElement.mozRequestFullScreen();
    } else if (document.documentElement.webkitRequestFullscreen) { // Chrome, Safari
        document.documentElement.webkitRequestFullscreen();
    } else if (document.documentElement.msRequestFullscreen) { // IE/Edge
        document.documentElement.msRequestFullscreen();
    }
}
//function videoPlay() {
//    var E = document.getElementById('video')
//    E.play()
//}
