const etchASketch = document.querySelector(".etch-a-sketch");
const resolution = document.querySelector("#resolution");
const rainbow = document.querySelector("#rainbow");

for (let i = 0; i < 16; i++) {
	for (let j = 0; j < 16; j++) {
		const pixel = document.createElement("div");

		pixel.setAttribute("class", "pixel");
		pixel.setAttribute("id", "pixel" + i + j);
		pixel.style.height = 50 / 16 + "vh";
		pixel.style.width = 50 / 16 + "vh";

		pixel.addEventListener("mouseover", (e) => {
			e.target.style.background = "black";
		});

		etchASketch.appendChild(pixel);
	}
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
