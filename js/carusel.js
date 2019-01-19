
function shiftList(list) {
	list.style.marginLeft = "-82.5vw";
}

function transpositionItemsGroup(list) {
	var itemsGroup = list.children[0];
	list.appendChild(itemsGroup);
}

function makeCarusel() {
	var list = document.getElementById('carusel-list');
	shiftList(list);
	transpositionItemsGroup(list);
}

setInterval(makeCarusel, 3000);