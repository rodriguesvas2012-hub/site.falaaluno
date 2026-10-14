const EMAIL_DA_ESCOLA = "sugestoes@exemplo.com";
 
const mural = document.querySelector("div.mural");
 
function adicionarAviso(cor, categoria, titulo, texto, data) {
  mural.innerHTML += `
    <article class="aviso aviso-${cor}">
      <div class="aviso-etiquetas"><span class="etiqueta">${categoria}</span></div>
      <h3>${titulo}</h3>
      <p>${texto}</p>
      <p class="aviso-data">${data}</p>
    </article>
  `;
}
 
adicionarAviso("rosa", "Provas", "Semana de avaliações", "Confira o calendário com o professor de cada matéria e organize seus estudos com antecedência.", "Data a definir");
adicionarAviso("amarelo", "Eventos", "Feira de projetos da turma técnica", "Venha apresentar, ou conhecer, os sites e aplicativos criados pela turma de Desenvolvimento de Sistemas.", "Data a definir");
adicionarAviso("azul", "Geral", "Biblioteca aberta no intervalo", "Passe por lá para pegar um livro emprestado ou estudar em um lugar tranquilo.", "Todos os dias");
adicionarAviso("verde", "Técnico", "Entrega do projeto de lógica", "Teste o seu programa antes de entregar e combine o prazo final com o professor.", "Prazo a combinar");
 
const listaAulas = document.getElementById("aulas-lista");
 
function adicionarAula(dia, hora, titulo, descricao, local) {
  listaAulas.innerHTML += `
    <li>
      <div class="quando"><strong>${dia}</strong><span>${hora}</span></div>
      <div>
        <h3>${titulo}</h3>
        <p>${descricao}</p>
        <p class="onde">Onde: ${local}</p>
      </div>
    </li>
  `;
}
 
adicionarAula("Segunda", "13h30", "Reforço de Matemática", "Tire dúvidas de equações e funções e treine com exercícios.", "Local a confirmar");
adicionarAula("Terça", "13h30", "Monitoria de lógica de programação", "Pratique algoritmos e resolva desafios com a ajuda de colegas e professores.", "Laboratório de informática");
adicionarAula("Quarta", "13h30", "Redação e ENEM", "Estrutura do texto, repertório e treino de redação.", "Local a confirmar");
adicionarAula("Quinta", "13h30", "Inglês para tecnologia", "Vocabulário para entender tutoriais, documentações e mensagens de erro.", "Local a confirmar");
 
const form = document.getElementById("form-sugestao");
const resultado = document.getElementById("resultado");
const texto = document.getElementById("resultado-texto");
const botaoEmail = document.getElementById("btn-email");
const botaoCopiar = document.getElementById("btn-copiar");
const mensagem = document.getElementById("resultado-msg");
 
form.addEventListener("submit", function (evento) {
  evento.preventDefault(); // impede a página de recarregar
 
  const corpo =
    "Sugestão para o Fala Aluno\n\n" +
    "Tipo: " + form.tipo.value + "\n" +
    "Ideia: " + form.ideia.value + "\n" +
    "Por que seria legal: " + (form.motivo.value || "(não informado)") + "\n" +
    "Nome: " + (form.nome.value || "(não informado)") + "\n" +
    "Turma: " + (form.turma.value || "(não informado)");
 
  texto.value = corpo;
  botaoEmail.href = "mailto:" + EMAIL_DA_ESCOLA +
    "?subject=" + encodeURIComponent("Sugestão - Fala Aluno") +
    "&body=" + encodeURIComponent(corpo);
 
  mensagem.textContent = "";
  resultado.hidden = false; // mostra a área do resultado
});
 
botaoCopiar.addEventListener("click", function () {
  navigator.clipboard.writeText(texto.value);
  mensagem.textContent = "Texto copiado!";
});