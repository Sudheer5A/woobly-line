const path = document.querySelector("path");

let cordinates = {
  x: 0,
  y: 0,
};

let width = 0;
document.addEventListener("mouseout", (e) => {
  gsap.to(path, {
    ease: Elastic.easeOut.config(1, 0.3),
    attr: { d: "M250,0 Q250,250 250,500" },
  });
});
document.addEventListener("mousemove", (e) => {
  cordinates.x = e.clientX;
  cordinates.y = e.clientY;

  width = cordinates.x / window.innerWidth;

  updateCordinates(cordinates);
});

function updateCordinates(cordinates) {
  cordinates.x = width * 500;
  path.setAttribute("d", `M250,0 Q${cordinates.x},${cordinates.y} 250,500`);
}
