let myButton = document.querySelector(".put-finger");		
		let square = document.querySelector(".my-heart");
		
		myButton.addEventListener('mouseover', changeClass);

		function changeClass (){
		   myButton.style.visibility="hidden";
		   square.classList.add("my-heart-two");
		}