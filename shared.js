const backdrop = document.querySelector('.backdrop')
const modal = document.querySelector('.modal')
const modalNoBtn = document.querySelector('.modal__action--negative')
const selectPlanBtns = document.querySelectorAll('.Plan button')
const toggleBtn = document.querySelector('.toggle-button')
const mobileNav = document.querySelector('.mobile-nav')

for (var i = 0; i < selectPlanBtns.length; i++) {
    selectPlanBtns[i].addEventListener("click", function () {
        // modal.style.display = "block";
        // backdrop.style.display = "block";
        // modal.className = 'open'; // This will actually overwrite the complete class list
        modal.classList.add("open");
        backdrop.classList.add("open");
    });
}

backdrop.addEventListener("click", function () {
    // mobileNav.style.display = 'none';
    mobileNav.classList.remove("open");
    closeModal();
});

if (modalNoBtn) {
    modalNoBtn.addEventListener("click", closeModal);
}

function closeModal() {
    //   backdrop.style.display = "none";
    //   modal.style.display = "none";
    if (modal) {
        modal.classList.remove("open");
    }
    backdrop.classList.remove("open");
}

toggleBtn.addEventListener("click", function () {
    // mobileNav.style.display = 'block';
    // backdrop.style.display = 'block';
    mobileNav.classList.add("open");
    backdrop.classList.add("open");
});

