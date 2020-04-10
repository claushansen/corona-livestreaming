//Placediv
var condiv = document.createElement('div');
condiv.id = 'condiv';
condiv.style.zindex = '1000';
condiv.style.width = '50%';
condiv.style.height = '100px';
condiv.style.position = 'absolute';
condiv.style.top = '35%';
condiv.style.left = '25%';
condiv.style.fontSize = '60px';
condiv.style.color = '#ffffff';

condiv.style.textAlign = 'center';
condiv.innerHTML = '<p>Test</p>';
document.body.appendChild(condiv);

//



var confirmedBox = document.getElementById('ember26');
var deathBox = document.getElementById('ember83');
confirmedBox.classList.remove('invisible');
deathBox.classList.remove('invisible');

confirmedBox.style.zIndex = 100;
confirmedBox.style.top = '60%';
confirmedBox.style.left = '33%';
confirmedBox.style.height = '103px';

deathBox.style.top = '60%';
deathBox.style.left = '50%';
deathBox.style.height = '98px';





var countryElements = document.getElementById('ember48').getElementsByClassName('feature-list-item');
var scrollbody = document.getElementById('ember48').getElementsByClassName('widget-body');
var i = 0;
setInterval(function () {
    if (i == countryElements.length - 1) {
        i = 0;
        scrollbody[0].scrollTop = 0;
    }

    var conName = countryElements[i].getElementsByTagName('p')[1].textContent
    condiv.innerHTML = '<p>' + conName + '</p>';
    console.log(conName);
    countryElements[i].click();

    console.log(i);
    i++;
    setTimeout(function () {
        scrollbody[0].scrollTop += 30;
    }, 10000);
}, 9000);

var tickerframe = document.createElement('iframe');
tickerframe.id = 'tickerframe';
tickerframe.frameBorder = '0';
tickerframe.src = "https://expoze.dk/example.html";
tickerframe.width = window.innerWidth;
tickerframe.height = window.innerHeight;
tickerframe.style.position = 'absolute';
tickerframe.style.zIndex = '1000';
tickerframe.style.top = '0';
tickerframe.style.left = '0';
document.body.appendChild(tickerframe);
window.onresize = function () {
    let frame = document.getElementById('tickerframe');
    frame.height = window.innerHeight;
    frame.width = window.innerWidth;
}
