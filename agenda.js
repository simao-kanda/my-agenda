// Array para armazenar eventos
let eventos = [];

// Função para agendar um evento
document.getElementById('agendamentoForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio do formulário

    // Captura os valores dos campos
    const nome = document.getElementById('nome').value;
    const evento = document.getElementById('evento').value;
    const data = document.getElementById('data').value;

    // Adiciona o evento ao array
    eventos.push({ nome, evento, data });

    // Exibe mensagem de sucesso
    document.getElementById('mensagem').innerText = `Evento agendado com sucesso: ${evento} em ${data}.`;

    // Limpa o formulário
    document.getElementById('agendamentoForm').reset();
});

// Função para cadastrar um novo evento
document.getElementById('cadastrarForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio do formulário

    // Captura os valores dos campos
    const eventoNome = document.getElementById('eventoNome').value;
    const eventoData = document.getElementById('eventoData').value;

    // Adiciona o evento ao array
    eventos.push({ nome: 'Evento Cadastrado', evento: eventoNome, data: eventoData });

    // Exibe mensagem de sucesso
    document.getElementById('mensagemCadastro').innerText = `Evento cadastrado com sucesso: ${eventoNome} em ${eventoData}.`;

    // Limpa o formulário
    document.getElementById('cadastrarForm').reset();
});