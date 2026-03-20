// script.js - Pequenas funcionalidades para o currículo do Gustavo

document.addEventListener('DOMContentLoaded', function() {
    
    // 1. EFEITO DE DIGITAÇÃO NO TÍTULO (OPCIONAL)
    const titulo = document.querySelector('h1');
    const textoOriginal = titulo.textContent;
    
    // Só executa o efeito se for a primeira vez (evita repetir)
    if (!sessionStorage.getItem('animacaoExecutada')) {
        titulo.textContent = '';
        let i = 0;
        
        function digitar() {
            if (i < textoOriginal.length) {
                titulo.textContent += textoOriginal.charAt(i);
                i++;
                setTimeout(digitar, 100);
            } else {
                // Quando terminar de digitar, adiciona um efeito de brilho
                titulo.style.textShadow = '0 0 10px #b8860b, 2px 2px 0 #0a1c2c';
                sessionStorage.setItem('animacaoExecutada', 'true');
            }
        }
        
        digitar();
    }

    // 2. MENSAGEM DE BOAS-VINDAS NO CONSOLE (para quem inspecionar)
    console.log('=================================');
    console.log('CURRÍCULO DE GUSTAVO MORAIS');
    console.log('Futuro Policial - Força e Honra!');
    console.log('=================================');
    
    // 3. ADICIONAR ANO ATUAL AUTOMATICAMENTE (se precisar)
    // Exemplo: se quiser colocar o ano automático em algum lugar
    // const anoElement = document.getElementById('ano-atual');
    // if (anoElement) {
    //     anoElement.textContent = new Date().getFullYear();
    // }
    
    // 4. ALERTA DE CLIQUE NO DISTINTIVO
    const badge = document.querySelector('.badge');
    if (badge) {
        badge.addEventListener('click', function() {
            alert('👮‍♂️ Gustavo Morais - Pronto para servir e proteger! 👮‍♂️');
            
            // Efeito extra: mudar cor de fundo temporariamente
            document.body.style.transition = 'background 1s';
            document.body.style.background = '#b8860b';
            setTimeout(() => {
                document.body.style.background = 'linear-gradient(45deg, #0a1a2a 0%, #1e3a5f 100%)';
            }, 500);
        });
    }
    
    // 5. VALIDAÇÃO SIMPLES (exemplo: avisar se faltar idade)
    const verificarIdade = () => {
        const dadosPessoais = document.querySelector('.dados li:first-child')?.textContent || '';
        if (dadosPessoais.includes('[SUA IDADE]')) {
            console.warn('⚠️ Lembre-se de preencher sua idade no currículo!');
        }
    };
    verificarIdade();
    
    // 6. BOTÃO OCULTO (tecla de atalho - apertar 'P' para homenagem)
    document.addEventListener('keydown', function(e) {
        if (e.key === 'p' || e.key === 'P') {
            alert('🎯 PM: Profissão Missão! Parabéns pela escolha, Gustavo! 🎯');
            
            // Pequena animação nas estrelas (se houver)
            const skills = document.querySelectorAll('.skill-tag');
            skills.forEach((skill, index) => {
                setTimeout(() => {
                    skill.style.backgroundColor = '#b8860b';
                    skill.style.color = '#0a1c2c';
                    skill.style.transform = 'scale(1.1)';
                    setTimeout(() => {
                        skill.style.backgroundColor = '';
                        skill.style.color = '';
                        skill.style.transform = '';
                    }, 200);
                }, index * 100);
            });
        }
    });
    
    // 7. MENSAGEM DE BOAS-VINDAS NA PÁGINA
    console.log('✅ Currículo carregado com sucesso!');
    console.log('💪 Sucesso na sua jornada, futuro policial!');
});