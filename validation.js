document.addEventListener('DOMContentLoaded', () => {
    window.validateInput = function(input) {
        const value = parseInt(input.value);
        if (isNaN(value) || value <= 0) {
            input.style.borderColor = 'red';
        } else {
            input.style.borderColor = ''; // 恢复默认边框颜色
        }
    }

    window.updateLengthDisplay = function() {
        const lengthDisplay = document.getElementById('lengthDisplay');
        const passwordLength = document.getElementById('passwordLength').value;
        lengthDisplay.innerText = passwordLength;
    }
});