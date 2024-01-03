const container = document.querySelector(".container");

for (let i = 0; i < 16; i++) {
	for (let j = 0; j < 16; j++) {
		const pixel = document.createElement("div");

		pixel.setAttribute("class", "pixel");
		pixel.setAttribute("id", "pixel" + i + j);
		pixel.style.height = 100 / 16 + "vh";
		pixel.style.width = 100 / 16 + "vw";

		pixel.addEventListener("mouseover", (e) => {
			e.target.style.background = "black";
		});

		container.appendChild(pixel);
	}
}
