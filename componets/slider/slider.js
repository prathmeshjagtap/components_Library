var sliderinput = document.querySelector("#sliderinput");
var sliderOutput = document.querySelector("#sliderOutput");
sliderOutput.innerHTML = sliderinput.value;

sliderinput.oninput = () => {
	sliderOutput.innerHTML = sliderinput.value;
};
