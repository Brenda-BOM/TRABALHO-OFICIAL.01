// Lista simples de receitas
const receitas=[
{
 id:1,
 nome:"feijoada",
 imagem: "https://cdn.casaeculinaria.com/wp-content/uploads/2023/03/06144125/Feijoada.jpg",
 ingredientes:[ "500 g de feijão-preto","300 g de carne-seca", "200 g de linguiça calabresa","200 g de bacon", "2 folhas de louro","1 cebola picada", "3 dentes de alho", "Sal e pimenta a gosto"],
preparo: [
  "Deixe o feijão de molho por aproximadamente 8 horas.",
  "Dessalgue as carnes, quando necessário.",
  "Cozinhe o feijão com as folhas de louro.",
  "Acrescente as carnes picadas.",
  "Refogue a cebola e o alho e adicione à panela.",
  "Cozinhe até o feijão e as carnes ficarem macios.",
  "Sirva com arroz, couve refogada e farofa."
]
},
{
 id: 2,
 nome:"Moqueca de peixe",
 imagem:"https://www.mariareceita.com.br/wp-content/uploads/2026/01/Moqueca-de-Peixe-Facil.jpg",
 ingredientes: [
  "500 g de peixe em postas",
  "1 tomate picado",
  "1 cebola em rodelas",
  "1 pimentão em rodelas",
  "200 ml de leite de coco",
  "2 colheres de azeite de dendê",
  "Suco de 1 limão",
  "Coentro, sal e pimenta a gosto"
],
preparo: [
  "Tempere o peixe com limão, sal e pimenta.",
  "Faça camadas de cebola, tomate e pimentão em uma panela.",
  "Coloque as postas de peixe por cima.",
  "Acrescente o leite de coco e o azeite de dendê.",
  "Tampe e cozinhe em fogo baixo por cerca de 20 minutos.",
  "Finalize com coentro.",
  "Sirva com arroz branco."
]
},
{
id:3,
nome:"Pão de queijo mineiro",
imagem:"https://static.itdg.com.br/images/1200-630/dfc5a3f918dc30f32747b44cd3a18712/pao-de-queijo-facil-e-delicioso-3-.jpg",
ingredientes: [
  "500 g de polvilho azedo",
  "250 ml de leite",
  "100 ml de óleo",
  "2 ovos",
  "200 g de queijo meia-cura ralado",
  "1 colher de chá de sal"
],

preparo: [
  "Ferva o leite com o óleo e o sal.",
  "Despeje a mistura sobre o polvilho e mexa.",
  "Espere esfriar um pouco.",
  "Acrescente os ovos e o queijo ralado.",
  "Misture até formar uma massa homogênea.",
  "Faça pequenas bolinhas.",
  "Asse em forno preaquecido a 180 °C por aproximadamente 25 minutos."
]
},
{
  id:4,
  nome:"Pudim de leite condensado",
  imagem:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrdUcD-7To9Ga6EHe71QH5__1Hgx8EL00s--TUHo-i1w&s=10",
  ingredientes: [
  "1 lata de leite condensado",
  "2 medidas da lata de leite",
  "3 ovos",
  "1 xícara de açúcar",
  "1/2 xícara de água"
],

preparo: [
  "Derreta o açúcar em uma panela até formar um caramelo.",
  "Acrescente a água cuidadosamente e mexa até dissolver.",
  "Espalhe a calda em uma forma de pudim.",
  "Bata o leite condensado, o leite e os ovos no liquidificador.",
  "Despeje a mistura na forma.",
  "Asse em banho-maria a 180 °C por aproximadamente 1 hora e 20 minutos.",
  "Espere esfriar, leve à geladeira por pelo menos 4 horas e desenforme."
]
}
];

const grid = document.getElementById("recipeGrid");
const modal = document.getElementById("recipeModal");
const closeModal = document.getElementById("closeModal");
const searchInput = document.getElementById("searchInput");

// Função para exibir os cards na tela
function mostrarReceitas(lista) {
  grid.innerHTML = lista.map(r => `
    <div class="card" onclick="abrirDetalhes(${r.id})">
      <img src="${r.imagem}" alt="${r.nome}">
      <h3>${r.nome}</h3>
    </div>
  `).join("");
}

// Função para abrir o modal com as informações da receita
function abrirDetalhes(id) {
  const r = receitas.find(item => item.id === id);
  
  document.getElementById("modalImg").src = r.imagem;
  document.getElementById("modalTitle").textContent = r.nome;
  
  document.getElementById("modalIngredients").innerHTML = r.ingredientes.map(i => `<li>${i}</li>`).join("");
  document.getElementById("modalInstructions").innerHTML = r.preparo.map(p => `<li>${p}</li>`).join("");
  
  modal.classList.add("active");
}

// Fechar modal
closeModal.addEventListener("click", () => {
  modal.classList.remove("active");
});

// Barra de pesquisa simples
searchInput.addEventListener("input", (e) => {
  const texto = e.target.value.toLowerCase();
  const filtradas = receitas.filter(r => r.nome.toLowerCase().includes(texto));
  mostrarReceitas(filtradas);
});

// Inicializa a página mostrando todas as receitas
mostrarReceitas(receitas);