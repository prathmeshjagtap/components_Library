const snackBar = document.querySelector(".snackbar");
const btnOpensnackBar = document.querySelector("#btn__open__snackBar");
const snackBarClose = document.querySelector(".snackBar__close");

btnOpensnackBar.addEventListener("click", () => {
	snackBar.style.display = "block";
});
snackBarClose.addEventListener("click", () => {
	snackBar.style.display = "none";
});
