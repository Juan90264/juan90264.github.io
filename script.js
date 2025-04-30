const scriptsInfo = [
    { key: "loadTextSite", status: "Verde", link: "#", linkPage: "codes/loadTextSite.html", languageUsed: "Javascript"  },
    { key: "MonitorPerformance", status: "Amarelo", link: "#", linkPage: "", languageUsed: "Javascript"  },
    { key: "formValidator", status: "Verde", link: "#", linkPage: "#", languageUsed: "Javascript"  },
    { key: "imageSlider", status: "Verde", link: "#", linkPage: "", languageUsed: "Javascript"  },
    { key: "apiFetcher", status: "Verde", link: "#", linkPage: "", languageUsed: "Javascript"  },
    { key: "clickCounter", status: "Verde", link: "#", linkPage: "", languageUsed: "Javascript"  },
    { key: "darkModeSwitcher", status: "Verde", link: "#", linkPage: "", languageUsed: "Javascript"  },
    { key: "passwordGenerator", status: "Verde", link: "#", linkPage: "", languageUsed: "Javascript"  },
];

const translations = {
    pt: {
        loadTextSite: { name: "loadTextSite", author: "Juan90264", description: "Carrega um texto de um site, e exibe na página.<br>Para garantir o carregamento de dados externos, utilizamos um proxy baseado no projeto open-source AllOrigins (<a href='https://github.com/gnuns/allorigins'>https://github.com/gnuns/allorigins</a>)."  },
        MonitorPerformance: { name: "MonitorPerformance", author: "Juan90264 (autor da derivação da biblioteca); Google Chrome Team (autor da biblioteca)", description: "Carrega um popup na página, que parece informações com as métricas de desempenho como: LCP (tempo até o maior conteúdo visível ser renderizado), FID (tempo até a primeira interação do usuário) e CLS (mudança inesperada no layout).<br>Que utiliza a biblioteca 'web-vitals' está licenciada sob a Apache License 2.0, desenvolvida pela equipe do Google Chrome. Você pode obter uma cópia da licença em: <a href='http://www.apache.org/licenses/LICENSE-2.0'>http://www.apache.org/licenses/LICENSE-2.0</a><br><br>Para utilizar o script, carregue o código-fonte do script de javascript personalizado, como Custom Style Script (<a href='https://chromewebstore.google.com/detail/custom-style-script/ecjfaoeopefafjpdgnfcjnhinpbldjij'>https://chromewebstore.google.com/detail/custom-style-script/ecjfaoeopefafjpdgnfcjnhinpbldjij</a>), e configure o site que deseja que funcione o script."  },
        formValidator: { name: "Validador de Formulário", author: "", description: "Valida entradas de formulário em tempo real."  },
        imageSlider: { name: "Slider de Imagens", author: "", description: "Cria um carrossel de imagens automático."  },
        apiFetcher: { name: "API Fetcher", author: "", description: "Busca dados de uma API REST."  },
        clickCounter: { name: "Contador de Cliques", author: "", description: "Conta quantas vezes um botão foi clicado."  },
        darkModeSwitcher: { name: "Alternador de Tema Escuro", author: "", description: "Alterna entre tema claro e escuro."  },
        passwordGenerator: { name: "Gerador de Senhas", author: "", description: "Gera senhas aleatórias seguras."  }
    },
    en: {
        loadTextSite: { name: "loadTextSite", author: "Juan90264", description: "Loads text from a website, and displays it on the page.<br>To ensure the loading of external data, we use a proxy based on the open-source AllOrigins project (<a href='https://github.com/gnuns/allorigins'>https://github.com/gnuns/allorigins</a>)."  },
        MonitorPerformance: { name: "MonitorPerformance", author: "Juan90264 (library derivation author); Google Chrome Team (library author)", description: "Loads a popup on the page, which appears to display information about performance metrics such as: LCP (time until largest visible content is rendered), FID (time until first user interaction) and CLS (unexpected layout change).<br>Using the 'web-vitals' library, it is licensed under the Apache License 2.0, developed by the Google Chrome team.<br>You can obtain a copy of the license at: <a href='http://www.apache.org/licenses/LICENSE-2.0'>http://www.apache.org/licenses/LICENSE-2.0</a><br><br>To use the script, load the source code of your custom javascript script, such as Custom Style Script (<a href='https://chromewebstore.google.com/detail/custom-style-script/ecjfaoeopefafjpdgnfcjnhinpbldjij'>https://chromewebstore.google.com/detail/custom-style-script/ecjfaoeopefafjpdgnfcjnhinpbldjij</a>), and configure the site where you want the script to run."  },
        formValidator: { name: "Form Validator", author: "", description: "Validates form inputs in real time."  },
        imageSlider: { name: "Image Slider", author: "", description: "Creates an automatic image carousel."  },
        apiFetcher: { name: "API Fetcher", author: "", description: "Fetches data from a REST API." },
        clickCounter: { name: "Click Counter", author: "", description: "Counts how many times a button was clicked." },
        darkModeSwitcher: { name: "Dark Mode Switcher", author: "", description: "Switches between light and dark themes." },
        passwordGenerator: { name: "Password Generator", author: "", description: "Generates secure random passwords." }
    }
};


//// Cria as colunas com os scripts salvos
let currentLanguage = localStorage.getItem('preferredLanguage') || 'en';

var statusBox;
function loadScripts(limit) {
        $('.DIV-CODE-').empty();
        const scriptsToLoad = scriptsInfo.slice(0, limit);

        scriptsToLoad.forEach(script => {
            const translation = translations[currentLanguage][script.key];

            if (script.status == "Verde") {
               statusBox = '<div class="DIV-CODE-COLUMN-VERDE">Verde</div>';
            } else if (script.status == "Amarelo") {
               statusBox = '<div class="DIV-CODE-COLUMN-AMARELO">Amarelo</div>';
            } else {
               statusBox = '<div class="DIV-CODE-COLUMN-VERMELHO">Vermelho</div>';
            }

            //// Informações sobre os códigos
            var description;
            var author;
            var linkCode;
            var linkCodeText;
            var linkCodeGitHub;
            var pageTest;
            var languageUsed;
            var unavailable;
            var license;
            if (currentLanguage == "pt") {
               description = "DESCRIÇÃO:";
               author = "AUTOR:";
               linkCode = "LINK DO CÓDIGO:";
               linkCodeText = "ACESSE AQUI";
               linkCodeGitHub = "no GitHub";
               pageTest = "PÁGINA PARA TESTAR:";
               languageUsed = "LINGUAGEM USADA:";
               unavailable = "Indisponível";
               license = "LICENÇA:";
            } else if (currentLanguage == "en") {
               description = "DESCRIPTION:";
               author = "AUTHOR:";
               linkCode = "CODE LINK:";
               linkCodeText = "ACCESS HERE";
               linkCodeGitHub = "on GitHub";
               pageTest = "PAGE TO TEST:";
               languageUsed = "LANGUAGE USED:";
               unavailable = "Unavailable";
               license = "LICENSE:";
            }

            var linkPage;
            if (script.linkPage == "") {
               linkPage = unavailable;
            } else {
               linkPage = '<a href="' + script.linkPage + '">' + linkCodeText + '</a>';
            }
            $('.DIV-CODE-').append(`
                <div class="DIV-CODE-COLUMN-">
                   <hr>
                   <div>
                      <h1>${translation.name}</h1>
                      ${statusBox}
                   </div><br>
                   <p>${description} ${translation.description}<br><br>
${author} ${translation.author}<br><br>
${linkCode} <a href="${script.link}">${linkCodeText}</a> (${linkCodeGitHub})<br><br>
${pageTest} ${linkPage}<br><br>
${languageUsed} ${script.languageUsed}<br><br>
${license} GNU General Public License v3.0 (GPL-3.0)</p>
                </div>
            `);
        });
        $('.DIV-CODE-').append('<div class="DIV-CODE-MAIS">Para encontrar mais códigos, acesse a página "Códigos"</div>');
}

function loadScripts2(limit) {
        $('.DIV-CODE-LIST').empty();
        const scriptsToLoad = scriptsInfo.slice(0, limit);

        scriptsToLoad.forEach(script => {
            const translation = translations[currentLanguage][script.key];

            if (script.status == "Verde") {
               statusBox = '<div class="DIV-CODE-COLUMN-VERDE">Verde</div>';
            } else if (script.status == "Amarelo") {
               statusBox = '<div class="DIV-CODE-COLUMN-AMARELO">Amarelo</div>';
            } else {
               statusBox = '<div class="DIV-CODE-COLUMN-VERMELHO">Vermelho</div>';
            }

            //// Informações sobre os códigos
            var description;
            var author;
            var linkCode;
            var linkCodeText;
            var linkCodeGitHub;
            var pageTest;
            var languageUsed;
            var unavailable;
            var license;
            if (currentLanguage == "pt") {
               description = "DESCRIÇÃO:";
               author = "AUTOR:";
               linkCode = "LINK DO CÓDIGO:";
               linkCodeText = "ACESSE AQUI";
               linkCodeGitHub = "no GitHub";
               pageTest = "PÁGINA PARA TESTAR:";
               languageUsed = "LINGUAGEM USADA:";
               unavailable = "Indisponível";
               license = "LICENÇA:";
            } else if (currentLanguage == "en") {
               description = "DESCRIPTION:";
               author = "AUTHOR:";
               linkCode = "CODE LINK:";
               linkCodeText = "ACCESS HERE";
               linkCodeGitHub = "on GitHub";
               pageTest = "PAGE TO TEST:";
               languageUsed = "LANGUAGE USED:";
               unavailable = "Unavailable";
               license = "LICENSE:";
            }

            var linkPage;
            if (script.linkPage == "") {
               linkPage = unavailable;
            } else {
               linkPage = '<a href="' + script.linkPage + '">' + linkCodeText + '</a>';
            }
            $('.DIV-CODE-LIST').append(`
                <div class="DIV-CODE-COLUMN-">
                   <hr>
                   <div>
                      <h1>${translation.name}</h1>
                      ${statusBox}
                   </div><br>
                   <p>${description} ${translation.description}<br><br>
${author} ${translation.author}<br><br>
${linkCode} <a href="${script.link}">${linkCodeText}</a> (${linkCodeGitHub})<br><br>
${pageTest} ${linkPage}<br><br>
${languageUsed} ${script.languageUsed}<br><br>
${license} GNU General Public License v3.0 (GPL-3.0)</p>
                </div>
            `);
        });
}

$(document).ready(function() {

    function loadAll() {
        loadScripts(3);
        loadScripts2(6);
    }

    function setupLanguageSelect(selector) {
        $(selector).off('change').on('change', function() {
            currentLanguage = $(this).val();
            localStorage.setItem('preferredLanguage', currentLanguage);
            console.log("Funcionou");
        });
    }

    function moveLanguageSelect() {
        if ($(window).width() <= 958) {
            // Modo Mobile: move para dentro do menu mobile
            if (!$('#language-select').parent().hasClass('DIV-MENU-MOBILE-')) {
                $('.DIV-MENU-MOBILE- > div > ul').append($('#DIV-MENU-IDIOMAS'));
                $('#DIV-MENU-IDIOMAS').removeClass("DIV-MENU-IDIOMAS");
                $('#DIV-MENU-IDIOMAS').addClass("DIV-MENU-MOBILE-IDIOMAS");
            }
        } else {
            // Modo Desktop: move para o topo
            if (!$('#DIV-MENU-IDIOMAS').parent().hasClass('DIV-MENU')) {
                $('.DIV-MENU').append($('#DIV-MENU-IDIOMAS'));
                $('#DIV-MENU-IDIOMAS').removeClass("DIV-MENU-MOBILE-IDIOMAS");
                $('#DIV-MENU-IDIOMAS').addClass("DIV-MENU-IDIOMAS");
                $('.DIV-MENU-MOBILE-').hide();
            }
        }
    }

    $('#language-select').val(currentLanguage);

    $('#language-select').on('change', function() {
        currentLanguage = $(this).val();
        localStorage.setItem('preferredLanguage', currentLanguage);
        loadAll();
    });

    // Primeira carga
    loadAll();
    moveLanguageSelect();

    // Botão de menu mobile
    $('.DIV-MENU-MOBILE-BUTTON').click(function() {
        $('.DIV-MENU-MOBILE-').slideToggle();
    });

    // Redimensionamento
    $(window).resize(function() {
        moveLanguageSelect();
    });
});
