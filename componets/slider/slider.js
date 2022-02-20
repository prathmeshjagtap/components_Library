const sliderinput = document.querySelector("#sliderinput");
const sliderOutput = document.querySelector("#sliderOutput");
sliderOutput.innerHTML = sliderinput.value;

sliderinput.oninput = () => {
	sliderOutput.innerHTML = sliderinput.value;
};
