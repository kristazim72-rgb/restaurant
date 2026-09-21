import "./styles.css";
import { loadHome } from './home.js';
import { loadMenu } from './menu.js';
import { loadAbout } from './about.js';


const content = document.querySelector('#content');
const homeBtn = document.querySelector('#home-btn');
const menuBtn = document.querySelector('#menu-btn');
const aboutBtn = document.querySelector('#about-btn');

function renderTab(tabLoader) {
  content.textContent = ''; // Clear previous tab elements
  content.appendChild(tabLoader()); 
}

// Add event listeners to each navigation button
homeBtn.addEventListener('click', () => renderTab(loadHome));
menuBtn.addEventListener('click', () => renderTab(loadMenu));
aboutBtn.addEventListener('click', () => renderTab(loadAbout));

// Loads initial homepage content when the application first loads
renderTab(loadHome);