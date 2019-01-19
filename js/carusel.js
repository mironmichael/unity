var list = document.getElementById('carusel-list');

function shiftList(list) {
	list.style.marginLeft = "-82.5vw";
}

function transpositionItem(list) {
	var item = list.childNodes[0];
	list.appendChild(item);
}

function makeCarusel() {
	shiftList(list);
	transpositionItem(list);
	transpositionItem(list);
	transpositionItem(list);
}

setInterval(makeCarusel, 3000);