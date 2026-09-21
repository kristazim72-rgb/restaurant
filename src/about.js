// src/about.js
export function loadAbout() {
  const container = document.createElement('div');
  container.classList.add('tab-content', 'about-container');

  const heading = document.createElement('h2');
  heading.textContent = 'About Us';

  const info = document.createElement('p');
  info.textContent = `Welcome to Blooms, where breakfast is always in season. 
                      Open 24/7, we believe the perfect morning 
                      shouldn't depend on the clock. Whether you're fueling up at 
                      sunrise or winding down at 3:00 AM, we're serving up artisanal pancakes, 
                      fresh-pressed juices, and locally roasted coffee. 
                      Don't worry about the time—our doors are always open.`;

  container.appendChild(heading);
  container.appendChild(info);

  return container;
}