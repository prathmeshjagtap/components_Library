let darkMode = localStorage.getItem("darkMode");
const darkmodebtn = document.querySelector(".dark__mode");

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
