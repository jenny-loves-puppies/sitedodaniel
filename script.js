const links = [
  { titulo: "Jogo de Matemática - Soma e Subtração", url: "https://www.escolagames.com.br/jogos/soma-subtracao", tags: ["matemática", "soma", "subtração"] },
  { titulo: "Jogo de Ciências - Corpo Humano", url: "https://www.smartkids.com.br/jogos/corpo-humano", tags: ["ciências", "corpo humano"] },
  { titulo: "Jogo de Geografia - Capitais", url: "https://www.todamateria.com.br/jogo-de-capitais-do-brasil/", tags: ["geografia", "capitais"] },
  { titulo: "Jogo de Inglês - Vocabulário Básico", url: "https://www.educacaoetransformacao.com.br/jogos-de-ingles/", tags: ["inglês", "vocabulário"] },
  // Adicione mais links aqui
];

const searchInput = document.getElementById("searchInput");
const resultsList = document.getElementById("results");

searchInput.addEventListener("input", () => {
  const query = searchInput.value.toLowerCase();
  resultsList.innerHTML = "";

  const filtered = links.filter(link =>
    link.titulo.toLowerCase().includes(query) ||
    link.tags.some(tag => tag.includes(query))
  );

  if (filtered.length === 0) {
    resultsList.innerHTML = "<li>Nenhum resultado encontrado.</li>";
    return;
  }

  filtered.forEach(link => {
    const li = document.createElement("li");
    li.innerHTML = `<a href="${link.url}" target="_blank">${link.titulo}</a>`;
    resultsList.appendChild(li);
  });
});
