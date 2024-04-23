document.addEventListener('DOMContentLoaded', function() {
    let textField = document.getElementById('text-field');
    let buttons = document.querySelectorAll('.button-num');

    let currentInput = '';

    buttons.forEach(button => {
        button.addEventListener('click', function() {
            let value = this.querySelector('span').textContent;

            switch (value) {
                case 'C':
                    currentInput = '';
                    break;
                case '<':
                    currentInput = currentInput.slice(0, -1);
                    break;
                case '=':
                    try {
                        currentInput = eval(currentInput);
                    } catch (error) {
                        currentInput = 'Error';
                    }
                    break;
                default:
                    currentInput += value;
                    break;
            }

            textField.value = currentInput;
        });
    });
});
