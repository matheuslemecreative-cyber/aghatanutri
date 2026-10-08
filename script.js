document.addEventListener('DOMContentLoaded', () => {
  // 1. Menu Mobile Toggle
  const menuToggle = document.getElementById('menuToggle');
  const navbar = document.getElementById('navbar');

  menuToggle.addEventListener('click', () => {
    navbar.classList.toggle('active');
  });

  // Fechar menu mobile ao clicar em algum link
  const navLinks = document.querySelectorAll('.navbar a');
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      navbar.classList.remove('active');
    });
  });

  // 2. Envio do Formulário direto para o WhatsApp
  const formAgendamento = document.getElementById('formAgendamento');

  formAgendamento.addEventListener('submit', (e) => {
    e.preventDefault();

    // Capturar valores
    const nome = document.getElementById('nome').value;
    const whatsapp = document.getElementById('whatsapp').value;
    const tipo = document.getElementById('tipo').value;
    const mensagem = document.getElementById('mensagem').value;

    // Número da nutricionista (Adicione o DDD + número real)
    const numeroNutri = "5514999999999"; 

    // Monta a mensagem formatada
    let texto = `Olá, Nutri Ágatha! Gostaria de agendar uma consulta.%0A%0A`;
    texto += `*Nome:* ${encodeURIComponent(nome)}%0A`;
    texto += `*Telefone:* ${encodeURIComponent(whatsapp)}%0A`;
    texto += `*Modalidade:* ${encodeURIComponent(tipo)}%0A`;
    
    if (mensagem.trim() !== '') {
      texto += `*Observações:* ${encodeURIComponent(mensagem)}`;
    }

    // Link da API do WhatsApp
    const urlWhatsApp = `https://wa.me/${numeroNutri}?text=${texto}`;

    // Abre no WhatsApp do usuário
    window.open(urlWhatsApp, '_blank');
  });
});