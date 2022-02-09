const darkmodebtn = document.querySelector(".dark__mode");

const darkmode = () => {
	var element = document.body;
	element.classList.toggle("dark-mode");
};

darkmodebtn.addEventListener("click", darkmode);
