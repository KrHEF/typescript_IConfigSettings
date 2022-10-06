// Import stylesheets
import './style.css';

import {param} from './config';

// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `<h1>TypeScript Starter</h1>`;

console.log('param:', param);
// console.log('param:', JSON.stringify(param));    & Partial<Record<TCountry, Partial<T>>> 
// & Partial<T>;

// export type ILanguageSettings<T> =
// & Partial<Record<TLanguage, ICountrySettings<T>>>
// & Partial<Record<TCountry, Partial<T>>> 
// …    & Partial<T>;
