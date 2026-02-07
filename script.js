const menuItems = [
  { name: "Truffle Pasta", desc: "Creamy truffle pasta with mushrooms", price: "$65", img: "cream.png" },
  { name: "Sea Urchin Risotto", desc: "Fresh sea urchin with saffron risotto", price: "$90", img: "fish.png" },
  { name: "Matcha Lava Cake", desc: "Green tea lava cake with whipped cream", price: "$35", img: "tea.png" },
];

const container = document.getElementById('menu-items');

menuItems.forEach(item => {
  const card = document.createElement('div');
  card.classList.add('menu-card');
  card.innerHTML = `
    <img src="${item.img}" alt="${item.name}">
    <h3>${item.name}</h3>
    <p>${item.desc}</p>
    <p class="price">${item.price}</p>
  `;
  container.appendChild(card);
});
