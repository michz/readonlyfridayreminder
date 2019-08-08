window.lastImageUpdate = undefined;
window.updateTime = 5000;

function init() {
    updateOutput();
}

var cartoons = {
    monday: [
        "https://imgs.xkcd.com/comics/weekend.png",
        "https://imgs.xkcd.com/comics/dark_matter.png",
    ],
    friday: [
        "https://upload.wikimedia.org/wikipedia/commons/2/20/Stopsign.svg",
        "https://sayingimages.com/wp-content/uploads/its-friday-friday-gotta-get-down-on-friday-memes.jpg",
        "https://sayingimages.com/wp-content/uploads/hey-everybody-smile-its-friday-memes.jpg",
        "https://sayingimages.com/wp-content/uploads/at-least-its-friday-memes.jpg",
    ],
};

function updateOutput() {
    var body = document.getElementById('body');
    var m = moment();

    var dayOfWeek = m.format("d");
    for (var i = 0; i < body.children.length; ++i) {
        var dayPanel = body.children[i];

        if (dayPanel.id == 'day-'+dayOfWeek) {
            dayPanel.classList.remove('hidden');
        } else {
            dayPanel.classList.add('hidden');
        }
    }

    updateImages(m);
    setTimeout(updateOutput, window.updateTime);
}

function updateImages(m) {
    if (
        window.lastImageUpdate == undefined ||
        moment.duration(m.diff(window.lastImageUpdate)).asSeconds() >= 86400
    ) {
        window.lastImageUpdate = m;

        for (var i = 0; i < body.children.length; ++i) {
            var dayPanel = body.children[i];
            for (var j = 0; j < dayPanel.children.length; ++j) {
                if (dayPanel.children[j].hasAttribute('data-random-source-list')) {
                    setRandomImage(
                        cartoons[dayPanel.children[j].getAttribute('data-random-source-list')],
                        dayPanel.children[j]
                    );
                }
            }
        }
    }
}

function getRandomArrayEntry(a) {
    return a[Math.floor(Math.random() * a.length)];
}

function setRandomImage(a, imgTag) {
    imgTag.src = getRandomArrayEntry(a);
}
