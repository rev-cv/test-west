document.addEventListener("DOMContentLoaded", () => {
    const sect2 = document.querySelector("#section2");
    const points = sect2.querySelectorAll(".point > button");

    points.forEach((point) => {
        point.addEventListener("click", () => {
            const isActive = point.parentNode.classList.contains("active");
            points.forEach((p) => p.parentNode.classList.remove("active"));
            if (!isActive) point.parentNode.classList.add("active");
        });
    });

    sect2.addEventListener("click", (event) => {
        points.forEach((p) => {
            if (!p.parentNode.contains(event.target)) {
                p.parentNode.classList.remove("active");
            }
        });
    });
});
