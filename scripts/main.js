var myImage = document.querySelector('img')

myImage.onclick = function(){
	var mySrc = myImage.getAttribute('src');
	if(mySrc === 'images/Allison01.jpg') {
		myImage.setAttribute ('src','images/Allison02.jpg');
		} else {
			myImage.setAttribute ('src','images/Allison01.jpg');
		}
}

var myHeading = document.querySelector('h1');

function setUserName() {
	var myName = prompt('Please enter your name.');
	localStorage.setItem('name', myName);
	myHeading.textContent = 'Hello ' + myName;
}


setUserName();
