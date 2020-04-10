var condiv = document.createElement('div');
condiv.id = 'condiv';
condiv.style.zindex = '1000';
condiv.style.width = '50%';
condiv.style.height = '100px';
condiv.style.position = 'absolute';
condiv.style.top = '40%';
condiv.style.left = '15%';
condiv.style.fontSize = '40px';
condiv.style.color = '#ffffff';

condiv.style.textAlign = 'center';
condiv.innerHTML = '<p>Test</p>';
document.body.appendChild(condiv);

var countryElements = document.getElementById('ember33').getElementsByClassName('feature-list-item');
var scrollbody = document.getElementById('ember34').getElementsByClassName('widget-body');
var i = 0;
setInterval(function () {
    if (i == countryElements.length - 1) {
        i = 0;
        scrollbody[0].scrollTop = 0;
    }

    var conName = countryElements[i].getElementsByTagName('span')[2].textContent;
    condiv.innerHTML = '<p>' + conName + '</p>';
    console.log(conName);
    countryElements[i].click();

    console.log(i);
    i++;
    setTimeout(function () {
        scrollbody[0].scrollTop += 30;
    }, 10000);
}, 9000);