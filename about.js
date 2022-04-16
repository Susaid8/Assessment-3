console.log("Hello World");



function handleSubmit(evt) {
	evt.preventDefault();
	alert("Guess What? Your Form Went Through Successfully")
	
}


let form = document.querySelector('form#contact');

form.addEventListener('submit', handleSubmit);

document.querySelector('img').addEventListener('mouseover', () => {
	alert('The Cat Is Precious Isnt He? But So Are You')
})