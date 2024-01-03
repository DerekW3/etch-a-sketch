const etchASketch = document.querySelector(".etch-a-sketch");

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
