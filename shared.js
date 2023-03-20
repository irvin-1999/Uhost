const backdrop = document.querySelector('.backdrop')
const modal = document.querySelector('.modal')
const selectPlanBtns = document.querySelectorAll('.Plan button')

for (var i = 0; i < selectPlanBtns.length; i++) {
    selectPlanBtns[i].addEventListener('click', () => {
        modal.style.display = 'block';
        backdrop.style.display = 'block';
    })
}