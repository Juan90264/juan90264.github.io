$(document).ready(function() {
    const translations = {
        pt: {
            DIVMENUPAGECODE: "Códigos",
            DIVMENUPAGELICENSE: "Licença",
            DIVBANNER: "Portfólio",
            DIVBANNERP: "*Repositório de códigos<br>*Códigos funcionais estáticos<br>*Códigos em GNU, reutilize!",
            DIVBANNERBUTTON: "Deslize para acessar os códigos",
            DIVCODEH1: "Repositório de códigos:",
            DIVCODEP1: "Os códigos que estão na lista de tabela abaixo, estão sob a licença GNU, e podem ser reutilizados para qualquer fim,<br> desde que seja citado o autor e a licença em questão, que está disponível em arquivo, junto com do código.",
            DIVCODEP2: "LEGENDA:<br>Com caixa verde - Ele está disponível sob a licença GNU, e pode ser testada e utilizada aqui<br>Com caixa amarela - Ele está disponível sob a licença GNU, mas não pode ser testada aqui<br>Com caixa vermelha - Ele está ainda em desenvolvimento",
            DIVCODEMAIS: 'Para encontrar mais códigos, acesse a página "Códigos"',
            DIVCODECOLUMNVERDE: "Verde",
            DIVCODECOLUMNAMARELO: "Amarelo",
            DIVCODECOLUMNVERMELHO: "Vermelho",
            DIVLICENSEPAGE: "Licença",
            DIVLICENSELEGENDA: "Todos os códigos disponíveis e utilizados no site estão licenciados sob a GNU General Public License v3.0 (GPL-3.0).<br>Isso significa que você tem liberdade para usar, copiar, modificar e distribuir o conteúdo, desde que preserve a mesma licença e respeite os termos estabelecidos.<br><br><b>Resumo da Licença:</b><br>Você pode usar o conteúdo para qualquer propósito.<br>Você pode modificar e distribuir versões derivadas.<br>Você deve disponibilizar o código-fonte (se aplicável) das modificações sob a mesma licença GPL-3.0.<br>Você deve incluir uma cópia desta licença sempre que redistribuir o conteúdo.<br><br><b>Texto completo da licença:</b><br><a href='https://www.gnu.org/licenses/gpl-3.0.htm'>GNU General Public License v3.0 (em inglês)</a>",
            DIVLICENSELEGENDA2: "<b>Fontes usadas no site:</b><br>Montserrat: Licenciada sob a SIL Open Font License 1.1.<br><b>Texto completo da licença:</b> <a href='https://openfontlicense.org/open-font-license-official-text/'>https://openfontlicense.org/open-font-license-official-text/</a> (em inglês)"
        },
        en: {
            DIVMENUPAGECODE: "Codes",
            DIVMENUPAGELICENSE: "License",
            DIVBANNER: "Portfolio",
            DIVBANNERP: "*Code repository<br>*Static functional codes<br>*Codes in GNU, reuse!",
            DIVBANNERBUTTON: "Swipe to access codes",
            DIVCODEH1: "Code repository:",
            DIVCODEP1: "The codes listed in the table below are under the GNU license and can be reused for any purpose,<br> as long as the author and the license in question are cited, which is available in the file, together with the code.",
            DIVCODEP2: "LEGEND:<br>With green box - It is available under the GNU license, and can be tested and used here<br>With yellow box - It is available under the GNU license, but cannot be tested here<br>With red box - It is still under development",
            DIVCODEMAIS: 'To find more codes, visit the "Codes" page',
            DIVCODECOLUMNVERDE: "Green",
            DIVCODECOLUMNAMARELO: "Yellow",
            DIVCODECOLUMNVERMELHO: "Red",
            DIVLICENSEPAGE: "License",
            DIVLICENSELEGENDA: "All codes available and used on the site are licensed under the GNU General Public License v3.0 (GPL-3.0).<br>This means that you are free to use, copy, modify and distribute the content, as long as you preserve the same license and respect the established terms.<br><br><b>License Summary:</b><br>You can use the content for any purpose.<br>You can modify and distribute derivative versions.<br>You must make available the source code (if applicable) of the modifications under the same GPL-3.0 license.<br>You must include a copy of this license whenever you redistribute the content.<br><br><b>Full text of license:</b><br><a href='https://www.gnu.org/licenses/gpl-3.0.htm'>GNU General Public License v3.0</a>",
            DIVLICENSELEGENDA2: "<b>Fonts used on the site:</b><br>Montserrat: Licensed under the SIL Open Font License 1.1.<br><b>Full text of the license:</b> <a href='https://openfontlicense.org/open-font-license-official-text/'>https://openfontlicense.org/open-font-license-official-text/</a>"
        }
    };

    function setLanguage(lang) {
        $('.DIV-MENU- > ul > li:nth-child(1) > a').html(translations[lang].DIVMENUPAGECODE);
        $('.DIV-MENU- > ul > li:nth-child(2) > a').html(translations[lang].DIVMENUPAGELICENSE);
        $('.DIV-MENU-MOBILE- > div > ul > li:nth-child(1) > a').html(translations[lang].DIVMENUPAGECODE);
        $('.DIV-MENU-MOBILE- > div > ul > li:nth-child(2) > a').html(translations[lang].DIVMENUPAGELICENSE);

        //// Início
        $('.DIV-BANNER > h1').html(translations[lang].DIVBANNER);
        $('.DIV-BANNER > p').html(translations[lang].DIVBANNERP);
        $('.DIV-BANNER-BUTTON').html(translations[lang].DIVBANNERBUTTON);
        $('.DIV-CODE > h1').html(translations[lang].DIVCODEH1);
        $('.DIV-CODE > p:nth-child(2)').html(translations[lang].DIVCODEP1);
        $('.DIV-CODE > p:nth-child(4)').html(translations[lang].DIVCODEP2);
        $('.DIV-CODE-MAIS').html(translations[lang].DIVCODEMAIS);
        $('.DIV-CODE-COLUMN-VERDE').html(translations[lang].DIVCODECOLUMNVERDE);
        $('.DIV-CODE-COLUMN-AMARELO').html(translations[lang].DIVCODECOLUMNAMARELO);
        $('.DIV-CODE-COLUMN-VERMELHO').html(translations[lang].DIVCODECOLUMNVERMELHO);

        //// Códigos
        $('.DIV-CODE-PAGE- > h1').html(translations[lang].DIVCODEH1);
        $('.DIV-CODE-PAGE-LEGENDA > p:nth-child(1)').html(translations[lang].DIVCODEP1);
        $('.DIV-CODE-PAGE-LEGENDA > p:nth-child(3)').html(translations[lang].DIVCODEP2);

        //// Licença
        $('.DIV-LICENSE-PAGE- > h1').html(translations[lang].DIVLICENSEPAGE);
        $('.DIV-LICENSE-LEGENDA > p:nth-child(1)').html(translations[lang].DIVLICENSELEGENDA);
        $('.DIV-LICENSE-LEGENDA > p:nth-child(3n)').html(translations[lang].DIVLICENSELEGENDA2);
    }

    // Evento para trocar idioma quando mudar o select
    $('#language-select').on('change', function() {
        var lang = $(this).val();
        setLanguage(lang);
        localStorage.setItem('preferredLanguage', lang); // Salva no localStorage
    });

    // Define o idioma inicial
    var savedLang = localStorage.getItem('preferredLanguage') || 'en';
    $('#language-select').val(savedLang);
    setLanguage(savedLang);
});
