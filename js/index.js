var testMode = 0;

$(document).ready(function () {
  // Hamburger icon change
  $("#hamburger-icon1").click(() => {
    $("#menu-items").slideDown(250);
    $("#hamburger-icon1").toggle();
    $("#hamburger-icon2").toggle();
  });

  $("#hamburger-icon2").click(() => {
    $("#menu-items").slideUp(250);
    $("#hamburger-icon1").toggle();
    $("#hamburger-icon2").toggle();
  });

  // Box Shadow on Menu Bar
  $(window).scroll(function () {
    var height = $(this).scrollTop();
    var width = $(window).width();

    // console.log(height+" "+width);
    var scrollBreakPoint = 10;
    if (width > 768) scrollBreakPoint = 50;

    if (height >= scrollBreakPoint) {
      $("#menu-bar").css("box-shadow", "0px 1px 5px #00000029");
    }

    if (height < scrollBreakPoint) {
      $("#menu-bar").css("box-shadow", "none");
    }
  });

  // Hide Menu Bar when menu links are clicked
  $("#menu-items-mobile > a").click((e) => {
    $("#hamburger-icon2").trigger("click");

    var targetHref = e.currentTarget.hash;
    $("html, body").animate(
      { scrollTop: $(targetHref).offset().top - 120 },
      100
    );
  });
});

// Splide Slider animation
if ($("#image-slider-1").length) {
  document.addEventListener("DOMContentLoaded", function () {
    new Splide("#image-slider-1", {
      perPage: 2,
      rewind: true,
      width: "68%",
      height: "63%",
      arrows: true,
      autoplay: true,
      interval: 4000,
      resetProgress: false,
      keyboard: "focused",

      breakpoints: {
        768: {
          perPage: 1,
          width: "100%",
          height: "100%",
        },
      },
    }).mount();
  });
}

// FAQ
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    closeAllAccordions(this);
    this.classList.toggle("active");
    var panel = this.nextElementSibling;

    if (panel.style.height === "") {
      panel.style.height = panel.scrollHeight + "px";
    } else {
      panel.style.height = "";
    }
  });
}

function closeAllAccordions(curr) {
  for (i = 0; i < acc.length; i++) {
    if (acc[i] == curr) continue;
    var panel = acc[i].nextElementSibling;
    if (panel.style.height) {
      acc[i].click();
    }
  }
}

// Tags redirect to blog page
tagsElements = document.querySelectorAll(".tags a");
for (let i = 0; i < tagsElements.length; i++) {
  if (tagsElements[i].href.slice(-1) == "#")
    tagsElements[i].href =
      "/blog.html" + "?tags=" + tagsElements[i].text.trim().toLowerCase();
}

window.addEventListener("load", (event) => {
  // for future
});

function updateMonthLi() {
  var monthDOM = document.querySelector(".month-li");
  var d = new Date();
  var month = new Array();
  month[0] = "January";
  month[1] = "February";
  month[2] = "March";
  month[3] = "April";
  month[4] = "May";
  month[5] = "June";
  month[6] = "July";
  month[7] = "August";
  month[8] = "September";
  month[9] = "October";
  month[10] = "November";
  month[11] = "December";
  var date = d.getDate();
  if (parseInt(date) <= 9) {
    date = "0" + date;
  }
  var month = month[d.getMonth()];
  var year = d.getFullYear();
  monthDOM.innerHTML = date + " " + month + " " + year;
}
updateMonthLi();

function getReferralsCnt() {}

// Update Referral in landing page
function changeReferralCnt(cnt) {
  try {
    dom = document.getElementById("referralCntID");
    dom.innerHTML = cnt;
  } catch (err) {
    // do nothing
  }
}

// Toolkit
function copyToClipboard(text) {
  var input = document.createElement("textarea");
  input.innerHTML = text;
  document.body.appendChild(input);
  input.select();
  var result = document.execCommand("copy");
  document.body.removeChild(input);
  return result;
}

// tooltip

var isCodeCopied = 0;

function addToClipboard() {
  copyToClipboard("TNMBH");
  var tooltip = document.getElementById("myTooltip");
  var couponTextDom = document.querySelector(".coupon-code");
  var couponContainerDom = document.querySelector(".copy-container");
  var copyIconDom = document.querySelector(".copy-icon");
  tooltip.innerHTML = "Coupon Copied!";
  tooltip.style.width = "140px";
  tooltip.style.backgroundColor = "#0f9d58";
  tooltip.classList.add("arrow-color");
  tooltip.style.left = "70%";
  var boxLabelDom = document.querySelector(".box-label");
  boxLabelDom.style.color = "#0f9d58";
  boxLabelDom.innerHTML = "Paste on Checkout";
  couponTextDom.classList.add("add-green-color");
  couponContainerDom.classList.add("add-green-border-color");
  copyIconDom.classList.add("add-green-fill-color");
  isCodeCopied = 1;
}

function outFunc() {
  var tooltip = document.getElementById("myTooltip");
  tooltip.innerHTML = "Copy Coupon Code";
  tooltip.style.width = "160px";
  if (isCodeCopied == 1) {
    tooltip.style.backgroundColor = "#0f9d58";
  } else {
    tooltip.style.backgroundColor = "#555";
  }
  // tooltip.classList.remove('arrow-color');
  tooltip.style.left = "30%";
}

// Copy Btn box-label background color fix
var boxLabelDOM = document.querySelector(".box-label");
var landingPageDOM = document.getElementById("landing-page");
// console.log("BOX:", window.getComputedStyle(boxLabelDOM).backgroundColor);
// console.log("LANDIN:", window.getComputedStyle(landingPageDOM).backgroundColor);
boxLabelDOM.style.backgroundColor =
  window.getComputedStyle(landingPageDOM).backgroundColor;
