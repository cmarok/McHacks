document.addEventListener('DOMContentLoaded', function() {

  var checkPageButton = document.getElementById('checkPage');

  var staff1 = document.getElementById('staffrating1');
  var food1 = document.getElementById('foodrating1');
  var hyg1 = document.getElementById('hygienerating1');
  var park1 = document.getElementById('parkingrating1');
  var wifi1 = document.getElementById('wifirating1');
  var local1 = document.getElementById('locationrating1');

  var staff2 = document.getElementById('staffrating2');
  var food2 = document.getElementById('foodrating2');
  var hyg2 = document.getElementById('hygienerating2');
  var park2 = document.getElementById('parkingrating2');
  var wifi2 = document.getElementById('wifirating2');
  var local2 = document.getElementById('locationrating2');

  var staff3 = document.getElementById('staffrating3');
  var food3 = document.getElementById('foodrating3');
  var hyg3 = document.getElementById('hygienerating3');
  var park3 = document.getElementById('parkingrating3');
  var wifi3 = document.getElementById('wifirating3');
  var local3 = document.getElementById('locationrating3');

  var staff4 = document.getElementById('staffrating4');
  var food4 = document.getElementById('foodrating4');
  var hyg4 = document.getElementById('hygienerating4');
  var park4 = document.getElementById('parkingrating4');
  var wifi4 = document.getElementById('wifirating4');
  var local4 = document.getElementById('locationrating4');

  var staff5 = document.getElementById('staffrating5');
  var food5 = document.getElementById('foodrating5');
  var hyg5 = document.getElementById('hygienerating5');
  var park5 = document.getElementById('parkingrating5');
  var wifi5 = document.getElementById('wifirating5');
  var local5 = document.getElementById('locationrating5');

  staff1.addEventListener('click', function() {
    chrome.tabs.getSelected(null, function(tab) {
      window.alert("dddd");
      /*d = document;
      var f = d.createElement('form');
      f.action = 'http://gtmetrix.com/analyze.html?bm';
      f.method = 'post';
      var i = d.createElement('input');
      i.type = 'hidden';
      i.name = 'url';
      i.value = tab.url;
      f.appendChild(i);
      d.body.appendChild(f);
      f.submit();*/
    }, false);
  }, false);

  checkPageButton.addEventListener('click', function() {

    chrome.tabs.getSelected(null, function(tab) {
      d = document;

      var f = d.createElement('form');
      f.action = 'http://gtmetrix.com/analyze.html?bm';
      f.method = 'post';
      var i = d.createElement('input');
      i.type = 'hidden';
      i.name = 'url';
      i.value = tab.url;
      f.appendChild(i);
      d.body.appendChild(f);
      f.submit();
    });
  }, false);
}, false);

/*
class Rating {

}

class Staff extends Rating {

}

class Food extends Rating {

}

class Hyg extends Rating {

}

class Parking extends Rating {

}

class Wifi extends Rating {

}

class Local extends Rating {

}
