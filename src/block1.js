document.addEventListener("DOMContentLoaded", () => {
    const sect1 = document.querySelector("#section1");

    const btnNext = sect1.querySelectorAll(".btn-next-path");
    const btnBack = sect1.querySelectorAll(".btn-back-path");

    const targetNorth = sect1.querySelector(".about-path .path-north");
    const targetSouth = sect1.querySelector(".about-path .path-south");
    const targetWest = sect1.querySelector(".about-path .path-west");
    const targetEast = sect1.querySelector(".about-path .path-east");
    const targets = [targetNorth, targetSouth, targetWest, targetEast];

    const pathWest = sect1.querySelectorAll(".path-west");
    const pathEast = sect1.querySelectorAll(".path-east");
    const pathNorth = sect1.querySelectorAll(".path-north");
    const pathSouth = sect1.querySelectorAll(".path-south");

    const allPaths = [...pathWest, ...pathEast, ...pathNorth, ...pathSouth];
    const pathOrder = [pathNorth, pathSouth, pathWest, pathEast];

    const title = sect1.querySelector("h1");
    const titles = ["North Shore", "South Shore", "West Shore", "East Shore"];
    let currentPathIndex = 0;

    function updatePathVisibility() {
        allPaths.forEach((path, index) => {
            path.classList.remove("active");
        });
        pathOrder[currentPathIndex].forEach((path) => {
            path.classList.add("active");
        });
        title.textContent = titles[currentPathIndex];
    }

    btnNext.forEach((btn) => {
        btn.addEventListener("click", () => {
            currentPathIndex = (currentPathIndex + 1) % pathOrder.length;
            updatePathVisibility();
        });
    });

    btnBack.forEach((btn) => {
        btn.addEventListener("click", () => {
            currentPathIndex =
                (currentPathIndex - 1 + pathOrder.length) % pathOrder.length;
            updatePathVisibility();
        });
    });

    targets.forEach((target, index) => {
        target.addEventListener("click", () => {
            currentPathIndex = index;
            updatePathVisibility();
        });
    });

    // Инициализация видимости при загрузке страницы
    updatePathVisibility();
});
