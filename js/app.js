const app = {
    // Estado da aplicação
    state: {
        currentScreen: 'home',
        currentLevel: null,
        questions: [],
        currentQuestionIndex: 0,
        score: 0,
        isHighContrast: false,
        answered: false
    },

    // Elementos do DOM
    elements: {
        screens: document.querySelectorAll('.screen'),
        contrastBtn: document.getElementById('contrast-toggle'),
        progressBar: document.getElementById('progress-bar'),
        questionCounter: document.getElementById('question-counter'),
        questionText: document.getElementById('question-text'),
        optionsContainer: document.getElementById('options-container'),
        feedbackContainer: document.getElementById('feedback-container'),
        feedbackIcon: document.getElementById('feedback-icon'),
        feedbackTitle: document.getElementById('feedback-title'),
        feedbackExplanation: document.getElementById('feedback-explanation'),
        nextBtn: document.getElementById('next-btn'),
        scoreDisplay: document.getElementById('score-display'),
        totalDisplay: document.getElementById('total-display'),
        recommendationsList: document.getElementById('recommendations-list')
    },

    // Inicialização
    init() {
        this.bindEvents();
        
        // Verifica preferência salva do usuário para alto contraste
        const savedContrast = localStorage.getItem('highContrast');
        if (savedContrast === 'true') {
            this.toggleHighContrast();
        }
    },

    // Eventos
    bindEvents() {
        this.elements.contrastBtn.addEventListener('click', () => this.toggleHighContrast());
    },

    // Navegação entre telas
    navigate(screenId) {
        this.elements.screens.forEach(screen => screen.classList.remove('active'));
        document.getElementById(`screen-${screenId}`).classList.add('active');
        this.state.currentScreen = screenId;
        window.scrollTo(0, 0);
    },

    // Alto Contraste
    toggleHighContrast() {
        this.state.isHighContrast = !this.state.isHighContrast;
        document.body.classList.toggle('high-contrast');
        localStorage.setItem('highContrast', this.state.isHighContrast);
    },

    // Iniciar Quiz
    startQuiz(level) {
        this.state.currentLevel = level;
        this.state.questions = [...quizData[level]];
        this.state.currentQuestionIndex = 0;
        this.state.score = 0;
        
        this.navigate('quiz');
        this.renderQuestion();
    },

    // Renderizar Pergunta Atual
    renderQuestion() {
        const question = this.state.questions[this.state.currentQuestionIndex];
        this.state.answered = false;

        // Atualizar Header do Quiz
        const total = this.state.questions.length;
        const current = this.state.currentQuestionIndex + 1;
        this.elements.questionCounter.textContent = `${current}/${total}`;
        this.elements.progressBar.style.width = `${((current - 1) / total) * 100}%`;

        // Esconder feedback anterior
        this.elements.feedbackContainer.className = 'feedback-container hidden';
        
        // Renderizar Texto e Opções
        this.elements.questionText.textContent = question.question;
        this.elements.optionsContainer.innerHTML = '';

        question.options.forEach((optionText, index) => {
            const button = document.createElement('button');
            button.className = 'option-btn';
            button.textContent = optionText;
            button.onclick = () => this.checkAnswer(index, button);
            this.elements.optionsContainer.appendChild(button);
        });
    },

    // Verificar Resposta
    checkAnswer(selectedIndex, selectedButton) {
        if (this.state.answered) return; // Evita duplo clique
        this.state.answered = true;

        const question = this.state.questions[this.state.currentQuestionIndex];
        const isCorrect = selectedIndex === question.correct;
        const buttons = this.elements.optionsContainer.querySelectorAll('.option-btn');

        // Desabilitar todos os botões e marcar cores
        buttons.forEach((btn, index) => {
            btn.disabled = true;
            if (index === question.correct) {
                btn.classList.add('correct');
            } else if (index === selectedIndex && !isCorrect) {
                btn.classList.add('wrong');
            }
        });

        if (isCorrect) {
            this.state.score++;
            this.showFeedback(true, question.explanation);
        } else {
            this.showFeedback(false, question.explanation);
        }

        // Atualizar barra de progresso (incluindo a pergunta atual respondida)
        const total = this.state.questions.length;
        const current = this.state.currentQuestionIndex + 1;
        this.elements.progressBar.style.width = `${(current / total) * 100}%`;
    },

    // Exibir Caixa de Feedback
    showFeedback(isCorrect, explanation) {
        const container = this.elements.feedbackContainer;
        container.className = `feedback-container ${isCorrect ? 'success' : 'error'}`;
        
        this.elements.feedbackIcon.innerHTML = isCorrect 
            ? '<i class="fa-solid fa-circle-check" style="font-size: 2rem;"></i>' 
            : '<i class="fa-solid fa-circle-xmark" style="font-size: 2rem;"></i>';
            
        this.elements.feedbackTitle.textContent = isCorrect ? 'Correto!' : 'Ops, não foi dessa vez.';
        this.elements.feedbackExplanation.textContent = explanation;

        // Se for a última pergunta, mudar texto do botão "Próximo"
        if (this.state.currentQuestionIndex === this.state.questions.length - 1) {
            this.elements.nextBtn.textContent = "Ver Resultados";
        } else {
            this.elements.nextBtn.textContent = "Próxima Pergunta";
        }
    },

    // Próxima Pergunta ou Resultados
    nextQuestion() {
        if (this.state.currentQuestionIndex < this.state.questions.length - 1) {
            this.state.currentQuestionIndex++;
            this.renderQuestion();
        } else {
            this.showResults();
        }
    },

    // Tela de Resultados
    showResults() {
        this.navigate('results');
        
        const total = this.state.questions.length;
        this.elements.scoreDisplay.textContent = this.state.score;
        this.elements.totalDisplay.textContent = total;

        // Gerar recomendações dinâmicas
        const percentage = (this.state.score / total) * 100;
        this.elements.recommendationsList.innerHTML = '';
        
        let tips = [];

        if (percentage === 100) {
            tips.push("Excelente! Você tem ótimos hábitos de segurança digital.");
            tips.push("Compartilhe seus conhecimentos com amigos e familiares.");
        } else if (percentage >= 60) {
            tips.push("Muito bom! Mas sempre há espaço para melhorar.");
            tips.push("Sempre desconfie de ofertas boas demais e links estranhos.");
        } else {
            tips.push("Cuidado! Sua segurança online precisa de mais atenção.");
            tips.push("Evite usar senhas simples e não clique em links de origens desconhecidas.");
            tips.push("Recomendamos refazer o quiz para fixar as explicações.");
        }

        // Adiciona dica geral baseada no nível
        if (this.state.currentLevel === 'basic') {
            tips.push("Dica Extra: Anote suas senhas em um caderno guardado em casa, nunca no bloco de notas do celular sem proteção.");
        } else if (this.state.currentLevel === 'intermediate') {
            tips.push("Dica Extra: Ative a Autenticação de Dois Fatores (2FA) no seu WhatsApp e E-mail hoje mesmo.");
        } else {
            tips.push("Dica Extra: Explore o uso de um Gerenciador de Senhas (como Bitwarden) e configure alertas de logins suspeitos.");
        }

        tips.forEach(tip => {
            const li = document.createElement('li');
            li.textContent = tip;
            this.elements.recommendationsList.appendChild(li);
        });
    },

    // Reiniciar
    retryQuiz() {
        this.startQuiz(this.state.currentLevel);
    }
};

// Iniciar a aplicação quando o DOM estiver pronto
document.addEventListener('DOMContentLoaded', () => {
    app.init();
});
