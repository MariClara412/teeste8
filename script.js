

    // Abre uma nova aba e insere o conteúdo HTML
    const newTab = window.open();
    newTab.document.open();
    newTab.document.write(newTabContent);
    newTab.document.close();
});

// script.js
function validarFormulario() {
    const nomeResponsavel = document.getElementById("nomeResponsavel").value;
    const nomeCrianca = document.getElementById("nomeCrianca").value;
    const email = document.getElementById("email").value;
    const senha = document.getElementById("senha").value;
    const confirmarSenha = document.getElementById("confirmarSenha").value;
    const mensagem = document.getElementById("mensagem");

    // Limpa a mensagem de erro
    mensagem.textContent = "";

    // Verifica se todos os campos estão preenchidos
    if (nomeResponsavel === "" || nomeCrianca === "" || email === "" || senha === "" || confirmarSenha === "") {
        mensagem.textContent = "Por favor, preencha todos os campos.";
        return;
    }

    // Verifica se as senhas coincidem
    if (senha !== confirmarSenha) {
        mensagem.textContent = "As senhas não coincidem.";
        return;
    }

    // Verifica se a senha tem pelo menos 6 caracteres
    if (senha.length < 6) {
        mensagem.textContent = "A senha deve ter pelo menos 6 caracteres.";
        return;
    }

    // Simulação de envio com mensagem de sucesso
    mensagem.textContent = "Cadastro realizado com sucesso!";
    mensagem.style.color = "green";
}





function checkAnswer(element, isCorrect) {
    const feedback = document.getElementById("feedback");

    if (isCorrect) {
        feedback.textContent = "Parabéns! Você acertou!";
        feedback.className = "feedback correct";
    } else {
        feedback.textContent = "Ops! Essa não é a resposta certa.";
        feedback.className = "feedback incorrect";
    }

    feedback.style.display = "block";

    // Adiciona borda verde/vermelha à alternativa escolhida
    document.querySelectorAll(".option").forEach(option => {
        option.style.pointerEvents = "none"; // Impede novas escolhas
    });
    element.style.borderColor = isCorrect ? "green" : "red";
}



  

// Função para marcar a missão como feita
function completarMissao(missaoId) {
    // Salva a missão como completada no localStorage
    localStorage.setItem(missaoId, 'completa');
    
    // Atualiza as estrelas (todas as estrelas ficam cheias)
    const estrelas = document.querySelector(`#${missaoId}-estrelas`).children;
    for (let i = 0; i < estrelas.length; i++) {
        estrelas[i].classList.add('cheia');
    }
}

// Função para carregar o progresso ao carregar a página
window.onload = function() {
    // Para cada missão, verifica se está completada e atualiza as estrelas
    const missoes = ['missao-1', 'missao-2', 'missao-3'];
    
    missoes.forEach(missaoId => {
        const progresso = localStorage.getItem(missaoId);
        
        if (progresso === 'completa') {
            // Marca as estrelas da missão como cheias
            const estrelas = document.querySelector(`#${missaoId}-estrelas`).children;
            for (let i = 0; i < estrelas.length; i++) {
                estrelas[i].classList.add('cheia');
            }
        }
    });
};





window.onload = function() {
    const missoes = ['missao-1', 'missao-2', 'missao-3'];
    
    missoes.forEach(missaoId => {
        const progresso = localStorage.getItem(missaoId);
        
        if (progresso === 'completa') {
            // Marca as estrelas da missão como cheias
            const estrelas = document.querySelector(`#${missaoId}-estrelas`).children;
            for (let i = 0; i < estrelas.length; i++) {
                estrelas[i].classList.add('cheia');
            }
        }
    });
};




let btnMenu = document.getElementById('btn-menu');
let menu = document.getElementById('menu-mobile');
let overlay = document.getElementById('overlay-menu');
let btnFecharMenu = document.querySelector('.btn-fechar-menu'); // Seleciona o botão de fechar

// Abre o menu quando o botão de menu é clicado
btnMenu.addEventListener('click', () => {
    menu.classList.add('abrir-menu');
    overlay.style.display = 'block'; // Mostra o overlay
});

// Fecha o menu quando o botão de fechar (X) é clicado
btnFecharMenu.addEventListener('click', () => {
    menu.classList.remove('abrir-menu');
    overlay.style.display = 'none'; // Esconde o overlay
});

// Fecha o menu ao clicar no overlay
overlay.addEventListener('click', () => {
    menu.classList.remove('abrir-menu');
    overlay.style.display = 'none'; // Esconde o overlay
});
