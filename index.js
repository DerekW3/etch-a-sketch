const container = document.querySelector(".container");

for (let i = 0; i < 16; i++) {
	for (let j = 0; j < 16; j++) {
		const pixel = document.createElement("div");
		pixel.setAttribute("class", "pixel");
		pixel.style.height = 100 / 16 + "vh";
		pixel.style.width = 100 / 16 + "vw";
		container.appendChild(pixel);
	}
}
