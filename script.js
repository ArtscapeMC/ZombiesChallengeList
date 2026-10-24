// Запускаем анимацию после загрузки документа.
window.addEventListener("DOMContentLoaded", () => {
    requestAnimationFrame(() => {
        document.body.classList.add("is-loaded");
    });
});
