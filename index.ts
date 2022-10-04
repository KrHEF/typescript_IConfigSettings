// Import stylesheets
import './style.css';

import {param} from './index4';

// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `<h1>TypeScript Starter</h1>`;

console.log('param:', param);
console.log('param:', JSON.stringify(param));