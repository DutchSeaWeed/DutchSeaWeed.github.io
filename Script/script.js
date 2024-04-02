let testNumber = 10;
let LastPickup = 0;

//sessionStorage.setItem('language', 'english');

function allowDrop(ev)
{
    ev.preventDefault();
}

function drag(NewIndexToLoad)
{
    LastPickup = NewIndexToLoad;
}

function drop()
{
    window.location.href = 'index' + LastPickup + '.html';
}

function languageToDutch()
{
    sessionStorage.setItem('language', 'dutch');
    let currentLanguage = sessionStorage.getItem('language');

    var x = document.getElementsByClassName("en-text");
    var i;
    for (i = 0; i < x.length; i++)
    {
        x[i].style.display = 'none';
    }

    var x = document.getElementsByClassName("nl-text");
    var i;
    for (i = 0; i < x.length; i++)
    {
        x[i].style.display = 'block';
    }
}

function languageToEnglish()
{
    sessionStorage.setItem('language', 'english');
    let currentLanguage = sessionStorage.getItem('language');

    var x = document.getElementsByClassName("nl-text");
    var i;
    for (i = 0; i < x.length; i++)
    {
        x[i].style.display = 'none';
    }

    var x = document.getElementsByClassName("en-text");
    var i;
    for (i = 0; i < x.length; i++)
    {
        x[i].style.display = 'block';
    }
}

window.onload = function()
{
    let currentLanguage = sessionStorage.getItem('language');

    let cartidge1 = document.getElementById('drag1');
    let cartidge2 = document.getElementById('drag2');
    let cartidge3 = document.getElementById('drag3');
    let cartidge4 = document.getElementById('drag4');
    let cartidge5 = document.getElementById('drag5');

    if (currentLanguage === 'dutch')
    {
        var x = document.getElementsByClassName("en-text");
        var i;
        for (i = 0; i < x.length; i++) {
            x[i].style.display = 'none';
        }

        var x = document.getElementsByClassName("nl-text");
        var i;
        for (i = 0; i < x.length; i++) {
            x[i].style.display = 'block';
        }
    }
    else
    {
        var x = document.getElementsByClassName("nl-text");
        var i;
        for (i = 0; i < x.length; i++) {
            x[i].style.display = 'none';
        }

        var x = document.getElementsByClassName("en-text");
        var i;
        for (i = 0; i < x.length; i++) {
            x[i].style.display = 'block';
        }
    }
}

