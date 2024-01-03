const etchASketch = document.querySelector(".etch-a-sketch");
const resolution = document.querySelector("#resolution");
const rainbow = document.querySelector("#rainbow");
const black = document.querySelector("#black");

let color = "black";
etchASketch.addEventListener("mouseover", (e) => {
	e.target.style.background = "black";
});

for (let i = 0; i < 16; i++) {
	for (let j = 0; j < 16; j++) {
		const pixel = document.createElement("div");

		pixel.setAttribute("class", "pixel");
		pixel.setAttribute("id", "pixel" + i + j);
		pixel.style.height = 50 / 16 + "vh";
		pixel.style.width = 50 / 16 + "vh";

		etchASketch.appendChild(pixel);
	}
}

function getRandomColor() {
	var letters = "0123456789ABCDEF";
	var color = "#";
	for (var i = 0; i < 6; i++) {
		color += letters[Math.floor(Math.random() * 16)];
	}
	return color;
}

function setBlack(e) {
	e.target.style.background = black;
}

function setRandomColor(e) {
	e.target.style.background = getRandomColor();
}

resolution.addEventListener("click", () => {
	let num = +prompt("What pixel resolution would you like?", "");
	while (num > 100) {
		num = +prompt("Please pick a number less than 100!", "");
	}

	while (etchASketch.lastElementChild) {
		const child = etchASketch.lastElementChild;
		etchASketch.removeChild(child);
		child.remove();
	}

	for (let i = 0; i < num; i++) {
		for (let j = 0; j < num; j++) {
			const pixel = document.createElement("div");

			pixel.setAttribute("class", "pixel");
			pixel.setAttribute("id", "pixel" + i + j);
			pixel.style.height = 50 / num + "vh";
			pixel.style.width = 50 / num + "vh";

			pixel.addEventListener("mouseover", (e) => {
				e.target.style.background = "black";
			});

			etchASketch.appendChild(pixel);
		}
	}
});

rainbow.addEventListener("click", () => {
	if (color === "rainbow") {
		return;
	} else {
		color = "rainbow";
		etchASketch.removeEventListener("mouseover", setBlack);
		etchASketch.addEventListener("mouseover", setRandomColor);
	}
});

black.addEventListener("click", () => {
	if (color === "black") {
		return;
	} else {
		color = "black";
		etchASketch.removeEventListener("mouseover", setRandomColor);
		etchASketch.addEventListener("mouseover", setBlack);
	}
});
