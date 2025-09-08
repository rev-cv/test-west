import "./reset.css";
import "./main.css";

import "./block1.scss";
import "./block1.js";

import "./block2.scss";
import "./block2.js";

import "./block3.scss";
import "./block4.scss";

document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll("section");
    let currentSectionIndex = 0;
    let isScrolling = false;

    // Функция для прокрутки к определенной секции
    function scrollToSection(index) {
        if (index >= 0 && index < sections.length) {
            isScrolling = true;
            sections[index].scrollIntoView({ behavior: "smooth" });

            // Отключаем isScrolling после завершения анимации
            setTimeout(() => {
                isScrolling = false;
            }, 1000); // Должно быть больше, чем scroll-behavior: smooth

            currentSectionIndex = index;
        }
    }

    // Обработчик события прокрутки колесиком
    window.addEventListener("wheel", (event) => {
        if (isScrolling) return; // Игнорируем, если уже идет прокрутка

        if (event.deltaY > 0) {
            // Прокрутка вниз
            scrollToSection(currentSectionIndex + 1);
        } else {
            // Прокрутка вверх
            scrollToSection(currentSectionIndex - 1);
        }
    });

    // Обработчик для навигации с помощью клавиш-стрелок
    document.addEventListener("keydown", (event) => {
        if (isScrolling) return;

        if (event.key === "ArrowDown") {
            scrollToSection(currentSectionIndex + 1);
        } else if (event.key === "ArrowUp") {
            scrollToSection(currentSectionIndex - 1);
        }
    });
});
