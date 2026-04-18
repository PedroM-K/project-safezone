const quizData = {
    basic: [
        {
            question: "Qual das opções abaixo é o melhor exemplo de uma senha segura?",
            options: [
                "Sua data de nascimento (ex: 15041980)",
                "O nome do seu animal de estimação",
                "Uma frase com números e símbolos (ex: M3uC@chorroBidu!)",
                "123456"
            ],
            correct: 2,
            explanation: "Senhas longas, que misturam letras maiúsculas, minúsculas, números e símbolos são muito mais difíceis de serem descobertas por criminosos."
        },
        {
            question: "Você recebe um e-mail urgente dizendo que sua conta bancária será bloqueada se você não clicar em um link. O que você faz?",
            options: [
                "Clico no link rapidamente para não ter a conta bloqueada.",
                "Respondo o e-mail perguntando se é verdade.",
                "Ignoro, ligo para o número oficial do banco ou abro o aplicativo oficial para verificar.",
                "Encaminho para todos os meus contatos para avisar."
            ],
            correct: 2,
            explanation: "Bancos não pedem senhas nem enviam links com ameaças de bloqueio por e-mail ou SMS. Isso é conhecido como Phishing (pescaria de dados)."
        },
        {
            question: "Ao baixar um novo aplicativo no celular, onde você deve procurar por ele?",
            options: [
                "Em links enviados pelo WhatsApp por desconhecidos.",
                "Apenas nas lojas oficiais (Google Play Store ou Apple App Store).",
                "Em qualquer site que aparecer no Google.",
                "Em propagandas nas redes sociais."
            ],
            correct: 1,
            explanation: "As lojas oficiais possuem sistemas de segurança que verificam os aplicativos, diminuindo muito o risco de baixar vírus."
        },
        {
            question: "Como saber se uma notícia chocante no WhatsApp é verdadeira?",
            options: [
                "Se tiver uma foto, é porque é verdade.",
                "Pesquisando o mesmo assunto no Google e em sites de jornais conhecidos.",
                "Se um amigo de confiança enviou, com certeza é verdade.",
                "Lendo apenas o título da mensagem."
            ],
            correct: 1,
            explanation: "Muitas 'Fake News' usam fotos fora de contexto. Sempre pesquise em portais de notícias confiáveis antes de acreditar e compartilhar."
        },
        {
            question: "Quem pode ver suas fotos em uma rede social configurada como 'Pública'?",
            options: [
                "Apenas minha família.",
                "Apenas meus amigos adicionados.",
                "Qualquer pessoa na internet, mesmo quem eu não conheço.",
                "Apenas pessoas da minha cidade."
            ],
            correct: 2,
            explanation: "Perfis públicos permitem que qualquer pessoa no mundo veja, salve e compartilhe suas fotos. Use configurações de privacidade para restringir ao seu círculo."
        }
    ],
    intermediate: [
        {
            question: "O que é autenticação de dois fatores (2FA)?",
            options: [
                "Usar duas senhas iguais em sites diferentes.",
                "Uma camada extra de segurança que pede um código no celular além da senha.",
                "Um antivírus que escaneia o computador duas vezes.",
                "Dividir sua senha com uma pessoa de confiança."
            ],
            correct: 1,
            explanation: "O 2FA exige algo que você sabe (senha) e algo que você tem (celular), dificultando invasões mesmo se descobrirem sua senha."
        },
        {
            question: "Ao usar um Wi-Fi público (café, aeroporto), qual é a atitude mais segura?",
            options: [
                "Acessar o aplicativo do banco e pagar contas.",
                "Fazer compras usando cartão de crédito.",
                "Evitar acessar contas importantes ou usar uma VPN.",
                "Deixar o Wi-Fi sempre conectado automaticamente."
            ],
            correct: 2,
            explanation: "Redes públicas podem ser facilmente interceptadas por hackers. Evite transações financeiras ou use uma VPN para criptografar seus dados."
        },
        {
            question: "O cadeado fechado ao lado do endereço de um site (HTTPS) significa que:",
            options: [
                "O site é 100% livre de vírus.",
                "A comunicação entre você e o site é criptografada.",
                "A loja online é confiável e não vai te enganar.",
                "O site pertence ao governo."
            ],
            correct: 1,
            explanation: "O cadeado (HTTPS) apenas garante que os dados enviados não podem ser lidos no caminho, mas sites falsos de golpistas também podem usar HTTPS."
        },
        {
            question: "O que é Engenharia Social no contexto da segurança digital?",
            options: [
                "Criar programas de computador complexos.",
                "Uma técnica de manipulação psicológica para fazer você entregar informações confidenciais.",
                "Uma rede social para engenheiros.",
                "O processo de criar senhas criptografadas."
            ],
            correct: 1,
            explanation: "Golpistas usam urgência, medo ou curiosidade para enganar você, muitas vezes sem precisar de nenhuma ferramenta técnica avançada."
        },
        {
            question: "Qual o risco de responder a quizzes de redes sociais tipo 'Qual princesa da Disney você é?'",
            options: [
                "Nenhum, é apenas diversão.",
                "Eles podem dar acesso a seus dados pessoais e lista de amigos para empresas desconhecidas.",
                "Seu computador vai pegar vírus imediatamente.",
                "Sua internet ficará mais lenta."
            ],
            correct: 1,
            explanation: "Muitos desses testes pedem permissão para acessar seu perfil e coletam dados pessoais para vendê-los ou criar perfis para golpes."
        }
    ],
    advanced: [
        {
            question: "O que um Gerenciador de Senhas faz?",
            options: [
                "Ele apaga senhas antigas da internet.",
                "Gera, armazena e preenche senhas únicas e complexas para cada site de forma criptografada.",
                "Ele descobre senhas de outras pessoas.",
                "Ele impede que hackers usem seu Wi-Fi."
            ],
            correct: 1,
            explanation: "Com um gerenciador (como Bitwarden ou 1Password), você só precisa lembrar de uma senha mestre. O aplicativo cuida de gerar e guardar senhas fortes para tudo."
        },
        {
            question: "O que é um ataque de 'Ransomware'?",
            options: [
                "Um software que exibe propagandas irritantes no navegador.",
                "Um tipo de vírus que rouba sua senha do banco.",
                "Um malware que criptografa seus arquivos e exige um resgate (geralmente em criptomoeda) para liberá-los.",
                "Uma técnica para derrubar servidores de jogos."
            ],
            correct: 2,
            explanation: "O Ransomware 'sequestra' seus dados. A melhor defesa é ter backups regulares offline e não abrir anexos suspeitos."
        },
        {
            question: "Qual das seguintes permissões de aplicativo em um celular deve levantar MAIOR suspeita para um app de calculadora?",
            options: [
                "Acesso à vibração do aparelho.",
                "Acesso à tela em tela cheia.",
                "Acesso aos seus contatos, SMS e microfone.",
                "Acesso ao histórico da calculadora."
            ],
            correct: 2,
            explanation: "Sempre verifique as permissões. Um aplicativo não deve exigir acesso a funções (como microfone ou contatos) que não são necessárias para o seu funcionamento básico."
        },
        {
            question: "Como o 'Spear Phishing' difere do 'Phishing' comum?",
            options: [
                "É enviado por SMS em vez de e-mail.",
                "É um ataque altamente direcionado e personalizado, usando informações específicas sobre você ou sua empresa.",
                "Usa vírus mais avançados.",
                "Apenas afeta computadores Mac."
            ],
            correct: 1,
            explanation: "No Spear Phishing, o criminoso pesquisa a vítima antes (ex: sabe seu nome, cargo e nome do chefe) para tornar o e-mail falso extremamente convincente."
        },
        {
            question: "Sobre os cookies de terceiros (third-party cookies), qual a afirmação correta?",
            options: [
                "Eles são arquivos maliciosos (vírus) e devem ser excluídos com antivírus.",
                "Eles rastreiam seu comportamento através de múltiplos sites para criar um perfil de anúncios direcionados.",
                "Eles são necessários para manter você logado em um site.",
                "Eles aceleram o carregamento de vídeos na internet."
            ],
            correct: 1,
            explanation: "Cookies de terceiros são usados por redes de anúncios para saber o que você acessou em diferentes sites. Bloqueá-los melhora a privacidade."
        }
    ]
};
