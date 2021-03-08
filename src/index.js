import './styles.css';
import cardTemplates from './templates/templates.hbs';
import menuCards from './menu.json';
import './theme.js';

const menuTemplatesCards = document.querySelector('.js-menu');
const menuMarkup = cardTemplates(menuCards);

menuTemplatesCards.insertAdjacentHTML('beforeend', menuMarkup);
