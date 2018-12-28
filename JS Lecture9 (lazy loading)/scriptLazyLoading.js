window.onload = function () {
    display();
};

window.addEventListener('scroll', function () {
    display();
});

function isInView(item) {
    let rect = item.getBoundingClientRect();
    return rect.top >= 0 && rect.top < window.innerHeight;
}

function display() {
    let img = document.getElementsByTagName('img');
    [].forEach.call(img, function (value) {
        if (isInView(value)) {
            value.setAttribute('src', value.getAttribute('data-src'));
        }
    })
}
