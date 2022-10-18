const project = document.querySelector("#project");

fetch("assets/works.json")
  .then((response) => response.json())
  .then((data) => {
    for (let item of data) {
      const bloc = `
    <div class="max-w-sm rounded overflow-hidden bg-white">
          <a href="${item.link}" alt="${item.name}" target="_blank">
            <img class="w-full mb-8" src="${item.image}" alt="${item.name}">
          </a>
          <div class="px-6 mb-5">
            <h3 class="text-black] font-bold text-xl">${item.name}</h3>
            <p class="text-black text-base">${item.description}</p>
          </div>
          <div class="px-6 py-4">
            <a class="bg-[#056CF2] hover:bg-black text-white font-medium py-2 px-4 rounded transition-all ease-in-out" href="${item.link}" target="_blank">Visit the project</a>
          </div>
      </div>
    `;
      project.insertAdjacentHTML("beforeend", bloc);
    }
  });
