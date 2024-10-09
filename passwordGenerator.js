document.addEventListener('DOMContentLoaded', () => {
    window.generatePasswords = function() {
        const numPasswords = parseInt(document.getElementById('numPasswords').value);
        const passwordLength = parseInt(document.getElementById('passwordLength').value);
        const allowDuplicates = document.getElementById('allowDuplicates').checked;
        const charTypes = getSelectedCharTypes();

        if (charTypes.length === 0) {
            showAlert(translations[currentLanguage]['selectCharType']);
            return;
        }

        const allChars = getCharSet(charTypes);
        const maxPossiblePasswords = Math.pow(allChars.length, passwordLength);

        if (!allowDuplicates && numPasswords > maxPossiblePasswords) {
            showAlert(translations[currentLanguage]['maxPossiblePasswords'] + maxPossiblePasswords + translations[currentLanguage]['passwords']);
            return;
        }

        const passwords = new Set();

        while (passwords.size < numPasswords) {
            const password = generatePassword(passwordLength, allChars);
            if (!allowDuplicates) {
                passwords.add(password);
            } else {
                passwords.add(password);
            }
        }

        displayPasswords([...passwords]);
    }

    function getSelectedCharTypes() {
        const buttons = document.querySelectorAll('.char-type-btn');
        const selectedTypes = [];
        buttons.forEach(button => {
            if (button.classList.contains('active')) {
                selectedTypes.push(button.getAttribute('data-type'));
            }
        });
        return selectedTypes;
    }

    function getCharSet(charTypes) {
        const charSets = {
            '1': 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
            '2': 'abcdefghijklmnopqrstuvwxyz',
            '3': '0123456789',
            '4': '!@#$%^&*()_+[]{}|;:,.<>?'
        };
        let allChars = '';
        charTypes.forEach(type => {
            allChars += charSets[type];
        });
        return allChars;
    }

    function generatePassword(length, charSet) {
        let password = '';
        for (let i = 0; i < length; i++) {
            const randomIndex = Math.floor(Math.random() * charSet.length);
            password += charSet[randomIndex];
        }
        return password;
    }

    function displayPasswords(passwords) {
        const output = document.getElementById('passwordsOutput');
        output.value = passwords.join('\n');
        document.querySelector('h2[data-translation="generatedPasswordsTitle"]').innerText = translations[currentLanguage]['generatedPasswordsTitle'].replace('0', passwords.length);
    }

    window.copyToClipboard = function() {
        const output = document.getElementById('passwordsOutput');
        output.select();
        document.execCommand('copy');
        showAlert(translations[currentLanguage]['copyToClipboard']);
    }

    window.exportToFile = function(format) {
        const output = document.getElementById('passwordsOutput').value;
        const blob = new Blob([output], { type: format === 'txt' ? 'text/plain' : 'text/csv' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `passwords.${format}`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    }

    function showAlert(message) {
        const alertBox = document.createElement('div');
        alertBox.style.position = 'fixed';
        alertBox.style.top = '50%';
        alertBox.style.left = '50%';
        alertBox.style.transform = 'translate(-50%, -50%)';
        alertBox.style.backgroundColor = '#fff';
        alertBox.style.border = '1px solid #ccc';
        alertBox.style.padding = '20px';
        alertBox.style.boxShadow = '0 0 10px rgba(0, 0, 0, 0.1)';
        alertBox.style.zIndex = '1000';
        alertBox.innerText = message;

        const closeButton = document.createElement('button');
        closeButton.innerText = '×'; // 使用 "X" 符号
        closeButton.style.position = 'absolute';
        closeButton.style.top = '5px';
        closeButton.style.right = '5px';
        closeButton.style.padding = '5px 10px';
        closeButton.style.backgroundColor = '#007bff';
        closeButton.style.color = '#fff';
        closeButton.style.border = 'none';
        closeButton.style.cursor = 'pointer';
        closeButton.addEventListener('click', () => {
            document.body.removeChild(alertBox);
        });

        alertBox.appendChild(closeButton);
        document.body.appendChild(alertBox);
    }
});