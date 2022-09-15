var link = "https://rebrand.ly/coding-ninjas-42-off";

function openInNewTab() {
  window.open(link, "_blank");
}

function openInSameTab() {
  window.open(link, "_self");
}

function redirect() {
  openInSameTab(link);
}

function forceStop(params) {
  var storedHash = window.location.hash;
  window.setInterval(function () {
    if (window.location.hash != storedHash) {
      window.location.hash = storedHash;
    }
  }, 50);

  changeHashOnLoad();
}

function ingridient() {
  forceStop();
  // ANCHOR:
  // 1.5m
  // setTimeout(redirect, 1000 * 90);
  // 3m
  setTimeout(redirect, 1000 * 180);
  // 5m
  setTimeout(redirect, 1000 * 300);
  // 10m
  setTimeout(redirect, 1000 * 600);
}

function ingridientForScholarship() {
  link = "https://rebrand.ly/cn-schlorship-test";
  ingridient();
}

function ingridientForMasaiSchool() {
  link = "https://rebrand.ly/masai-school";
  ingridient();
}

function ingridientForAlmaBetter() {
  link = "https://rebrand.ly/almabetter";
  ingridient();
}

function ingridientForWritesonic() {
  link = "https://rebrand.ly/writesonic-discount";
  ingridient();
}

function ingridientForLearnApp() {
  link = "https://rebrand.ly/learnapp-discount";
  ingridient();
}

function ingridientForcodedamn() {
  link = "https://rebrand.ly/codedamn";
  ingridient();
}

function ingridientForNewtonSchool() {
  link = "https://rebrand.ly/newton-school";
  ingridient();
}

function ingridientForiNeuron() {
  link = "https://rebrand.ly/ineuron";
  ingridient();
}

// Using JQuery
var storedHash = window.location.hash;
function changeHashOnLoad() {
  window.location.href += "#";
  setTimeout("changeHashAgain()", "50");
}

function changeHashAgain() {
  window.location.href += "1";
}

function restoreHash() {
  if (window.location.hash != storedHash) {
    window.location.hash = storedHash;
  }
}

function stopUsingHash() {
  changeHashOnLoad();

  if (window.addEventListener) {
    window.addEventListener(
      "hashchange",
      function () {
        restoreHash();
      },
      false
    );
  } else if (window.attachEvent) {
    window.attachEvent("onhashchange", function () {
      restoreHash();
    });
  }
}

function takeRisk() {
  // TODO: Test fully on other website
  var aajLenaHaiRisk = 0;

  if (aajLenaHaiRisk == 1) {
    return 1;
  }

  var koiTensionNhiLeLo = 0;
  if (koiTensionNhiLeLo == 0) {
    return 0;
  }

  var d = new Date();
  var n = d.getDay();

  if (n == 0 || n == 6) {
    // return 1;
  }

  var today = new Date();
  var hr = today.getHours();

  if (hr >= 19 || hr < 1) {
    // return 1;
  }

  return 0;
}

$(window).on("load", function (e) {
  if (takeRisk() == 0) {
    return false;
  }
  stopUsingHash();
  stopUsingHistory();
});

function stopUsingHistory() {
  window.history.pushState(null, "", window.location.href);
  window.onpopstate = function () {
    window.history.pushState(null, "", window.location.href);
  };
}
