// Import stylesheets
import './style.css';

import {ConfigService} from './config.service';
// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `<h1>TypeScript Starter</h1>`;

interface IParams {
    param1: number;
    param2: string;
    param3: boolean;
}

const configService: ConfigService = ConfigService.create(); 
const param: IParams =  configService.getConfig<IParams>(
    {param1: 0, param2: '', param3: false},
    'param',
);
console.log('param:', param);
// console.log('param:', JSON.stringify(param));    & Partial<Record<TCountry, Partial<T>>> 
// & Partial<T>;

// export type ILanguageSettings<T> =
// & Partial<Record<TLanguage, ICountrySettings<T>>>
// & Partial<Record<TCountry, Partial<T>>> 
// …    & Partial<T>;
