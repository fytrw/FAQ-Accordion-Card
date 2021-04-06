

const toggleInfo = (e) => {
    const pAnswer = e.closest('li').querySelector('.answer');
    const arrow = e.querySelector('.arrow');
    const h3 = e.querySelector('h3');
    pAnswer.classList.toggle('show');
    arrow.classList.toggle('animate');
    h3.classList.toggle('bold');
}