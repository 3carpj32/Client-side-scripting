function main()
{
    getnewtime();
    getnewdate();
}

function rollover(pizza_image_2) {
    pizza_image_2.src = "img/pizza%202.png2";
}

function shrinkimage(fullsizeimage) {
    fullsizeimage.src = "img/three%20pizzas.jpg";
}

function getnewtime() {
    var dayNow = new Date();
    var hours = dayNow.getHours();  
    var minutes = dayNow.getMinutes();
    var seconds = dayNow.getSeconds();
    var clock = hours + ":" + minutes + ":" + seconds;
  document.getElementById("clockLocation").innerHTML = clock;

}


function getnewdate() {
    var dayNow = new Date();
    var day = dayNow.getDate();
    var month = dayNow.getMonth();
    var year = dayNow.getFullYear();
    var date = day + ":" + (month+1) + ":" + year;
    document.getElementById("dateLocation").innerHTML = date;

}