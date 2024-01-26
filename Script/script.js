let LastPickup = 0;

function allowDrop(ev) {
    ev.preventDefault();
}

function drag(NewIndexToLoad) {
    LastPickup = NewIndexToLoad;
}

function drop() {
    window.location.href = 'index' + LastPickup + '.html';
}