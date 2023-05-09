const radioButtons = document.querySelectorAll('input[type="radio"]');
const totalElement = document.querySelector('#total');

let total = 0;
let previousValues = {};

class UI {
    alerta(msg) {
        const divAlert = document.createElement('DIV');
        divAlert.classList.add( 'alert', 'alert-info', 'fs-5','text-center','mt-4');
        divAlert.textContent = msg;
        divAlert.classList.add( 'alert-ok');
        totalElement.appendChild(divAlert);


    }
}

const ui = new UI();

radioButtons.forEach(radioButton => {
    radioButton.addEventListener('change', () => {
        const value = parseInt(radioButton.value);
        const group = radioButton.getAttribute('name');


        if (previousValues[group]) {
            total -= previousValues[group];
        }

        if (radioButton.checked) {

            total += value;
            previousValues[group] = value;
            radioButton.parentElement.classList.add('card-selected');

            const otherButtons = document.querySelectorAll(`input[type="radio"][name="${group}"]:not(:checked)`);
            otherButtons.forEach(button => {
                button.parentElement.classList.remove('card-selected');
            });

        } else {
            previousValues[group] = 0;
        }

        totalElement.textContent = total;

        if (document.querySelector('#g1r1').checked && document.querySelector('#g2r1').checked && document.querySelector('#g3r1').checked) {
            ui.alerta(`It's a good start.`);
        }
        if (document.querySelector('#g1r2').checked && document.querySelector('#g2r2').checked && document.querySelector('#g3r2').checked) {
            ui.alerta('The most chosen plan.');
        }

        if (document.querySelector('#g1r3').checked && document.querySelector('#g2r3').checked && document.querySelector('#g3r3').checked) {
            ui.alerta('The Full plan combo is a game-changer that will supercharge your business growth.');

        }
    });
});

