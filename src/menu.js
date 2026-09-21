// src/menu.js
export function loadMenu() {
  const container = document.createElement('div');
  container.classList.add('tab-content', 'menu-container');

  const heading = document.createElement('h2');
  heading.textContent = 'Our Menu';

  const item = document.createElement('div');
  item.innerHTML = '<h3>Continental Breakfasts</h3><p> UGX 25,000 – UGX 40,000. These typically include eggs, sausages, baked beans, toast, mushrooms, and tea or coffee.</p>';

  container.appendChild(heading);
  container.appendChild(item);

  return container;
}