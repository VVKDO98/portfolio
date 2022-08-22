const project = document.querySelector("#project");

fetch("assets/works.json")
  .then((response) => response.json())
  .then((data) => {
    for (let item of data) {
      const bloc = `
    <div class="max-w-sm my-[10px] lg:my-[0px] lg:mx-[10px] bg-gray-800 rounded-lg shadow-md ">
        <a href="${item.link}" target="_blank"><img class="rounded-t-lg" src="${item.image}" alt="" /></a>
        <div class="p-5">
            <a href="${item.link}" target="_blank"><h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">${item.name}</h5></a>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">${item.description}</p>
            <a href=" ${item.linkrepo}" target="_blank" class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 rounded-lg hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Go to repo <svg aria-hidden="true" class="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
            </a>
        </div>
    </div>
    `;
      project.insertAdjacentHTML("beforeend", bloc);
    }
  });
