const project = document.querySelector("#project");

fetch("./public/assets/works.json")
    .then((response) => response.json())
    .then((data) => {
        for (let item of data) {
            const bloc = `
    <div class="max-w-sm rounded-md overflow-hidden bg-white">
          <a href="${item.link}" alt="${item.name}" target="_blank">
            <img class="w-full mb-8" src="${item.image}" alt="${item.name}">
          </a>
          <div class="px-6 mb-5">
            <h3 class="text-black font-bold text-xl selection:text-yellow">${item.name}</h3>
            <p class="text-black text-base selection:text-yellow">${item.description}</p>
          </div>
          <div class="px-6 py-4">
            <a class="bg-blue hover:bg-yellow text-white font-medium py-2 px-4 rounded transition-all ease-in-out" href="${item.link}" target="_blank">Visit the project</a>
          </div>
      </div>
    `;
            project.insertAdjacentHTML("beforeend", bloc);
        }
    });

const cursor = document.getElementById("cursor");
const cursorsmall = document.getElementById("cursorsmall");
console.log(cursor);
window.addEventListener("mousemove", function (e) {
    cursor.style.left = e.clientX + "px";
    cursor.style.top = e.clientY + "px";
    cursorsmall.style.left = e.clientX + "px";
    cursorsmall.style.top = e.clientY + "px";
});
