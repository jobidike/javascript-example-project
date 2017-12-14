// Make h1 in header have different text
var logo = document.querySelector('header h1');
logo.innerHTML = 'Something New';

			// OR  document.querySelector('headerh1').innerHTML = 'Something New';

// Make nav ul li elements get larger when you hover over them
var listItems = document.querySelectorAll('nav ul li');
for (var i=0; i < listItems.length; i++) {
	listItems[i].addEventListener('mouseover', function() {
		this.style.fontSize = '200%';
	})
	listItems[i].addEventListener('mouseout', function() {
		this.style.fontSize = '100%';
	});
}
// Add another element to the main element
	var main = document.querySelector('main');
	var newParagraph = document.createElement('p');

	main.appendChild(newParagraph);
	newParagraph.innerText = 'What up';
	newParagraph.style.backgroundColor = 'orange';

// Dynamically change the color of the background on the footer when the user hovers over it
var footer = document.querySelector('footer');
hoverChangeCssProp(footer,'backgroundColor','purple','initial');

// Change the font size of the paragraphs in the main element when the user clicks them
var paragraphs = document.querySelectorAll('main p');
for (var i=0; i<paragraphs.length;i++) {
	paragraphs[i].addEventListener('click', function() {
		if (this.style.fontSize !== '40px') {
			this.style.fontSize = '40px';
		} else {
			this.style.fontSize = '16px';
		}
		
	});
}

// Change the text in the footer when the user clicks it
footer.addEventListener('click',function() {
	document.querySelector('footer p').innerText = 'Something else';
});

// Remove the h1 element in the header
logo.remove();

// Put something in the place of the h1 in the header
var header = document.querySelector('header'),
h2 = document.createElement('h2');

header.prepend(h2);
h2.innerText = 'Logo again';
header.style.flexDirection = 'row-reverse';

// Change the text in one of the paragraph tags in the main element
var paragraphs = document.querySelectorAll('main p');
paragraphs[1].innerHTML = 'This is <span>NEW</span>content in my paragraph.';

// Change the size of the header element to 200px using grid syntax
var container = document.querySelector('container');
header.addEventListener('click', function() {
	container.style.gridTemplateRows = '200px auto 125px';
});

	
function hoverChangeCssProp(element, value1, value2) {
	element.addEventListener('mouseover', function() {
		this.style[cssProp] = value1;
	})
	element.addEventListener('mouseout', function() {
		this.style[cssProp] = value2;
	});
};