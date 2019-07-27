function init() {
    updateOutput();
}

var cartoons = {
    monday: [
        "https://imgs.xkcd.com/comics/weekend.png"
    ],
    friday: [
        "https://upload.wikimedia.org/wikipedia/commons/2/20/Stopsign.svg"
    ],
};

function updateOutput() {
    var body = document.getElementById('body');
    var m = moment();

    body.innerHTML = "";

    switch (m.format("d")) {
        case "6": // Saturday
        case "0": // Sunday
            body.innerHTML = "It's weekend.<br><br>You should not have to work today. :(<br><br>Did someone make a change on readonly friday?!";
            break;
        case "1": // Monday
            body.innerHTML = "Oh guy, a new week is starting...";
            body.innerHTML += "<br><br><br><img src='"+getRandomArrayEntry(cartoons.monday)+"'>";
            body.innerHTML += "<br><br><br>At least it is not readonly friday.";
            break;
        case "2": // Tuesday
        case "3": // Wednesday
        case "4": // Thursday
            body.innerHTML = "It's not readonly friday. Happy changing!";
            break;
        case "5": // Friday
            body.innerHTML = "Attention! It's readonly friday! Better don't change anything today...";
            body.innerHTML += "<br><br><br><img src='"+getRandomArrayEntry(cartoons.friday)+"'>";
            break;
    }

    switch (m.format("d")) {
        case "5": // Friday
            body.style.color = "#E00";
            break;
        case "1": // Monday
        case "2": // Tuesday
        case "3": // Wednesday
        case "4": // Thursday
            body.style.color = "#0D0";
            break;
        case "6": // Saturday
        case "0": // Sunday
            body.style.color = "#DD0";
            break;
    }

    setTimeout(updateOutput, 5000);
}

function getRandomArrayEntry(a) {
    return a[Math.floor(Math.random() * a.length)];
}
