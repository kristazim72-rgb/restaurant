// src/home.js
export function loadHome() {
  const container = document.createElement('div');
  container.classList.add('tab-content', 'home-container');

  const headline = document.createElement('h1');
  headline.textContent = ` Welcome to Bloom's Restaurant`;

  const description = document.createElement('p');
  description.textContent = 'We serve the finest dishes made with fresh, locally sourced ingredients.';

  container.appendChild(headline);
  container.appendChild(description);

  return container;
}