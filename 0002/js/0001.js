console.log('js main file is loaded');
// this is raw / native javascript there is no plugins no jquery - this is all about improving and learning
// load the json file via http request locally it does not have any error handling
function loadJSON(callback) {
  var xhr;
  xhr = new XMLHttpRequest(); // creates and object

  xhr.onreadystatechange = function () {
    var results;
    if (xhr.readyState === 4) {
      if ((xhr.status >= 200 & xhr.status < 300) || (xhr.status === 304)) {
        callback(xhr.responseText);
      }
    }
  }
  xhr.open('get', 'js/data.json', true);
  xhr.send(null);
}


//this loads the json with a callback
loadJSON(function (response) {
  var data = JSON.parse(response);
  // I am passing the object to the another function so that not all the work and code is inside of this
  testing(data)
})

function testing (data) {
  if (data.hasOwnProperty('games')) {
    for (game in data.games) {
      var gameName, gameImg, gameUrl, gameDes, self, ul, li, liTitle, liP, liImg, liLink;

      // object variables
      gameName = data.games[game].name;
      gameImg = data.games[game].img;
      gameUrl = data.games[game].url;
      gameDes = data.games[game].description;

      // html elements
      liTitle = document.createElement('h2');
      liImg = new Image();
      liImg.src = gameImg;
      liLink = document.createElement('a')
      liLink.href = gameUrl;
      liP = document.createElement('p');
      liP.textContent = gameDes;

      //Put html elements together
      liTitle.appendChild(liLink).textContent = gameName;
      console.log(liTitle)


      console.log(liP)

      console.log(liImg)

      //this is creating the html components for the page
      function components () {
        ul = document.querySelector('ul.games-list');
        li = document.createElement('li');
        li.appendChild(liImg);
        ul.appendChild(li)
      }
      components();
    }
  }
}
