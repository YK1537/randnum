document.addEventListener('DOMContentLoaded', () => {
    const translations = {
        cn: {
            title: "密码生成器",
            numPasswords: "请输入要生成的密码数量:",
            passwordLength: "请选择每个密码的长度[8到32个字符之间]:",
            charTypes: "请选择要包含的字符类型:",
            charTypeUpper: "大写字母",
            charTypeLower: "小写字母",
            charTypeNumber: "数字",
            charTypeSpecial: "特殊字符",
            allowDuplicates: "允许密码重复",
            generateBtn: "生成密码",
            generatedPasswordsTitle: "已生成0个密码",
            copyBtn: "复制密码",
            exportTxtBtn: "导出为TXT",
            exportCsvBtn: "导出为CSV",
            selectCharType: "请至少选择一种字符类型！",
            maxPossiblePasswords: "无法生成这么多唯一密码。按条件最多能生成",
            passwords: "个密码",
            copyToClipboard: "密码已复制到剪贴板！"
        },
        en: {
            title: "Password Generator",
            numPasswords: "Enter the number of passwords to generate:",
            passwordLength: "Select the length of each password (between 8 and 32 characters):",
            charTypes: "Select the character types to include:",
            charTypeUpper: "Uppercase Letters",
            charTypeLower: "Lowercase Letters",
            charTypeNumber: "Numbers",
            charTypeSpecial: "Special Characters",
            allowDuplicates: "Allow duplicate passwords",
            generateBtn: "Generate Passwords",
            generatedPasswordsTitle: "Generated 0 passwords",
            copyBtn: "Copy Passwords",
            exportTxtBtn: "Export as TXT",
            exportCsvBtn: "Export as CSV",
            selectCharType: "Please select at least one character type!",
            maxPossiblePasswords: "Cannot generate that many unique passwords. The maximum possible is ",
            passwords: " passwords",
            copyToClipboard: "Passwords copied to clipboard!"
        }
    };

    let currentLanguage = 'cn';

    window.toggleLanguage = function() {
        const languageToggle = document.getElementById('language-toggle');
        currentLanguage = languageToggle.value;
        translatePage();
    }

    function translatePage() {
        const elements = document.querySelectorAll('[data-translation]');
        elements.forEach(element => {
            const key = element.getAttribute('data-translation');
            if (translations[currentLanguage][key]) {
                element.innerText = translations[currentLanguage][key];
            }
        });

        // 翻译 logo 文本
        document.getElementById('logo-text-cn').innerText = currentLanguage === 'cn' ? '随机数' : 'randnum';
        document.getElementById('logo-text-en').innerText = currentLanguage === 'cn' ? 'randnum' : '随机数';
    }

    // Initial translation
    translatePage();

    // 将 translations 对象和 currentLanguage 变量附加到 window 对象上，使其在全局作用域中可用
    window.translations = translations;
    window.currentLanguage = currentLanguage;
});