const circles = document.querySelectorAll('.circle');
const modal = document.getElementById('modal');
const modalImg = document.getElementById('modal-img');
const modalName = document.getElementById('modal-name');

circles.forEach(circle => {
    circle.addEventListener('click', () => {
        const img = circle.dataset.img;
        const name = circle.dataset.name;

        // Меняем кружок на фото
        circle.style.backgroundImage = `url(${img})`;

        // Имя под кружком в две строки
        const nameBlock = circle.parentElement.querySelector('.member-name');
        nameBlock.innerHTML = name.replace(" ", "<br>");

        // Модалка
        modalImg.src = img;
        modalName.innerHTML = name.replace(" ", "<br>");
        modal.style.display = "flex";
    });
});

modal.addEventListener('click', () => {
    modal.style.display = "none";
});
