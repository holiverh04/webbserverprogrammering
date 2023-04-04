let sökKnapp = document.querySelector('.sökBtn');
let stängKnapp = document.querySelector('.stängBtn');
let sökBox = document.querySelector('.searchBox');
let navigation = document.querySelector('.navigation');
let menyKnapp = document.querySelector('.menyKnapp');
let header = document.querySelector('header');

sökKnapp.onclick = function(){
	sökBox.classList.add('active');
	stängKnapp.classList.add('active');
	sökKnapp.classList.add('active');
	menyKnapp.classList.add('hide');
	
}
stängKnapp.onclick = function(){
	sökBox.classList.remove('active');
	stängKnapp.classList.remove('active');
	sökKnapp.classList.remove('active');
	menyKnapp.classList.remove('hide');
	header.classList.remove('open');
}
menyKnapp.onclick = function(){
	header.classList.toggle('open');
	sökBox.classList.remove('active');
	stängKnapp.classList.remove('active');
	sökKnapp.classList.remove('active');
}

