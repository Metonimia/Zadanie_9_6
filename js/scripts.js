var button = document.getElementById('addElem');
var list = document.getElementById('list');

button.addEventListener('click', function() {
	var number = document.getElementsByTagName('li').length;
	var element = document.createElement('li');
	element.innerHTML = 'item ' + number;
	list.appendChild(element);
});