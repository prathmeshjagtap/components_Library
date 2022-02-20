let darkMode = localStorage.getItem("darkMode");
const darkmodebtn = document.querySelector(".dark__mode");
const snackBar = document.querySelector(".snackbar");
const btnOpensnackBar = document.querySelector("#btn__open__snackBar");
const snackBarClose = document.querySelector(".snackBar__close");

const enableDarkMode = () => {
	document.body.classList.add("dark-mode");
	localStorage.setItem("darkMode", "enabled");
};
const disableDarkMode = () => {
	document.body.classList.remove("dark-mode");
	localStorage.setItem("darkMode", null);
};

if (darkMode === "enabled") {
	enableDarkMode();
}

darkmodebtn.addEventListener("click", () => {
	darkMode = localStorage.getItem("darkMode");
	darkMode !== "enabled" ? enableDarkMode() : disableDarkMode();
});

btnOpensnackBar.addEventListener("click", () => {
	snackBar.style.display = "block";
});
snackBarClose.addEventListener("click", () => {
	snackBar.style.display = "none";
});
