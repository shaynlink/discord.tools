// 
if (window.isSecureContext && 'serviceWorker' in navigator) {
    navigator.serviceWorker.register('/offline-worker.js')
};

let dff = false;
let addBtn;

document.addEventListener('DOMContentLoaded', () => {

    // Get all "navbar-burger" elements
    const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

    // Check if there are any navbar burgers
    if ($navbarBurgers.length > 0) {

        // Add a click event on each of them
        $navbarBurgers.forEach(el => {
            el.addEventListener('click', () => {

                // Get the target from the "data-target" attribute
                const target = el.dataset.target;
                const $target = document.getElementById(target);

                // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
                el.classList.toggle('is-active');
                $target.classList.toggle('is-active');
            });
        });
    };
    addBtn = document.querySelector('.add-button');

    if (dff) addBtn.style.display = 'block';
});

let deferredPrompt;

function d () {
    const addBtn = document.querySelector('.add-button');
    addBtn.style.display = 'block';

    const click = () => {
        // Show the prompt
        deferredPrompt.prompt();
        // Wait for the user to respond to the prompt
        deferredPrompt.userChoice.then((choiceResult) => {
            if (choiceResult.outcome === 'accepted') {
              console.log('User accepted the A2HS prompt');
            } else {
              console.log('User dismissed the A2HS prompt');
            };
            deferredPrompt = null;
        });

        addBtn.removeEventListener('click', click);
    };

    addBtn.addEventListener('click', click);
};

window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault();

    deferredPrompt = e;

    d();
});