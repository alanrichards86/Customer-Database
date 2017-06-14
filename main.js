// 1. Fetch your users data
// 2. Loop over the data
// 3. Display it in the `.customers` element
(function () {
  'use strict';

let request = new
Request('https://randomuser.me/api/?results=12')
console.log(request);

fetch(request).then(function(response) {
   response.json().then(function(data){
     console.log(data);
   });
});


})();
