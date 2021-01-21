var models = [
  {
    name: "Bmw 418d",
    image: "img/bmw.jpg",
  },
  {
    name: "Hond Civic",
    image: "img/honda.jpg",
  },
  {
    name: "Mazda CX-3",
    image: "img/mazda.jpg",
  },
  {
    name: "Skoda Superb",
    image: "img/skoda.jpg",
  },
  {
    name: "Volvo cs60",
    image: "img/volvo.jpg",
  },
];
var index = 0;
var slaytCount = models.length;
var interval;
var settings = {
  duration: "2000",
  random: true,
};
document.querySelectorAll(".arrow").forEach(function (item) {
  item.addEventListener("mouseenter", function () {
    clearInterval(interval);
  });
});

document.querySelectorAll(".arrow").forEach(function (item) {
  item.addEventListener("mouseleave", function () {
    init(settings);
  });
});

init(settings);
document
  .querySelector(".fa-arrow-circle-left")
  .addEventListener("click", function () {
    index--;
    showSlide(index);
    console.log(index);
  });
document
  .querySelector(".fa-arrow-circle-right")
  .addEventListener("click", function () {
    index++;
    showSlide(index);
    console.log(index);
  });

function init(s) {
  var prev;
  interval = setInterval(function () {
    if (settings.random) {
      do {
        index = Math.floor(Math.random() * slaytCount);
      } while (index == prev);
      prev = index;
    } else {
      if (slaytCount == index + 1) {
        index = -1;
      }
      showSlide(index);
      index++;
    }
    console.log(index);
    showSlide(index);
  }, settings.duration);
}

function showSlide(i) {
  index = i;
  if (i < 0) {
    index = slaytCount - 1;
  }
  if (i >= slaytCount) {
    index = 0;
  }
  document.querySelector(".card-img-top").textContent = models[index].name;
  document
    .querySelector(".card-img-top")
    .setAttribute("src", models[index].image);
  document.querySelector(".card-link").setAttribute("href", models[index].link);
}
