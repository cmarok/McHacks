document.addEventListener('DOMContentLoaded', function () {

     var staff1 = document.getElementById('staffrating1');
     staff1.addEventListener("click", function(){
         changeRating("staff", 1);
     });
     var staff2 = document.getElementById('staffrating2');
     staff2.addEventListener("click", function(){
         changeRating("staff", 2);
     });
     var staff3 = document.getElementById('staffrating3');
     staff3.addEventListener("click", function(){
         changeRating("staff", 3);
     });
     var staff4 = document.getElementById('staffrating4');
     staff4.addEventListener("click", function(){
         changeRating("staff", 4);
     });
     var staff5 = document.getElementById('staffrating5');
     staff5.addEventListener("click", function(){
         changeRating("staff", 5);
     });

     var food1 = document.getElementById('foodrating1');
     food1.addEventListener("click", function(){
         changeRating("food", 1);
     });
     var food2 = document.getElementById('foodrating2');
     food2.addEventListener("click", function(){
         changeRating("food", 2);
     });
     var food3 = document.getElementById('foodrating3');
     food3.addEventListener("click", function(){
         changeRating("food", 3);
     });
     var food4 = document.getElementById('foodrating4');
     food4.addEventListener("click", function(){
         changeRating("food", 4);
     });
     var food5 = document.getElementById('foodrating5');
     food5.addEventListener("click", function(){
         changeRating("food", 5);
     });

     var hygiene1 = document.getElementById('hygienerating1');
     hygiene1.addEventListener("click", function(){
         changeRating("hygiene", 1);
     });
     var hygiene2 = document.getElementById('hygienerating2');
     hygiene2.addEventListener("click", function(){
         changeRating("hygiene", 2);
     });
     var hygiene3 = document.getElementById('hygienerating3');
     hygiene3.addEventListener("click", function(){
         changeRating("hygiene", 3);
     });
     var hygiene4 = document.getElementById('hygienerating4');
     hygiene4.addEventListener("click", function(){
         changeRating("hygiene", 4);
     });
     var hygiene5 = document.getElementById('hygienerating5');
     hygiene5.addEventListener("click", function(){
         changeRating("hygiene", 5);
     });

     var parking1 = document.getElementById('parkingrating1');
     parking1.addEventListener("click", function(){
         changeRating("parking", 1);
     });
     var parking2 = document.getElementById('parkingrating2');
     parking2.addEventListener("click", function(){
         changeRating("parking", 2);
     });
     var parking3 = document.getElementById('parkingrating3');
     parking3.addEventListener("click", function(){
         changeRating("parking", 3);
     });
     var parking4 = document.getElementById('parkingrating4');
     parking4.addEventListener("click", function(){
         changeRating("parking", 4);
     });
     var parking5 = document.getElementById('parkingrating5');
     parking5.addEventListener("click", function(){
         changeRating("parking", 5);
     });

     var wifi1 = document.getElementById('wifirating1');
     wifi1.addEventListener("click", function(){
         changeRating("wifi", 1);
     });
     var wifi2 = document.getElementById('wifirating2');
     wifi2.addEventListener("click", function(){
         changeRating("wifi", 2);
     });
     var wifi3 = document.getElementById('wifirating3');
     wifi3.addEventListener("click", function(){
         changeRating("wifi", 3);
     });
     var wifi4 = document.getElementById('wifirating4');
     wifi4.addEventListener("click", function(){
         changeRating("wifi", 4);
     });
     var wifi5 = document.getElementById('wifirating5');
     wifi5.addEventListener("click", function(){
         changeRating("wifi", 5);
     });

     var location1 = document.getElementById('locationrating1');
     location1.addEventListener("click", function(){
         changeRating("location", 1);
     });
     var location2 = document.getElementById('locationrating2');
     location2.addEventListener("click", function(){
         changeRating("location", 2);
     });
     var location3 = document.getElementById('locationrating3');
     location3.addEventListener("click", function(){
         changeRating("location", 3);
     });
     var location4 = document.getElementById('locationrating4');
     location4.addEventListener("click", function(){
         changeRating("location", 4);
     });
     var location5 = document.getElementById('locationrating5');
     location5.addEventListener("click", function(){
         changeRating("location", 5);
     });

}, false);

function changeRating(group, rating) {
  if (group == "staff") {
    if (rating == 1) {
      alert("ss");
    }
  }
}
