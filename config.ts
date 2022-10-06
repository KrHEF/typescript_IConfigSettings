import {
    isEqual as _isEqual,
} from 'lodash';

import {
    IConfig,
    IConfigSettings,
    IConfigSetting, 
    ISetting,
    TEnvironment,
    TNoEnvironment,
    TPlatform,
    TNoPlatform,
    TOs,
    TNoOs,
    TBrowser,
    TNoBrowser,
    TLanguage,
    TNoLanguage,
    TCountry,
    TNoCountry,
    ENVIRONMENT_MAP,
    PLATFORMS_MAP,
    OSES_MAP,
    BROWSERS_MAP,
    LANGUAGES_MAP,
    COUNTRIES_MAP,
} from "./config-settings";
// import { 
//     get,
//     setConfig,
//     addConfig,
// } from './config-settings/operators';

interface IParams {
    param1: number;
    param2: string;
    param3: boolean;
}

export const param: IConfig<IParams> = {
    
}

// export const param: IConfigSettings<IParams> = getConfig(
//     setConfig({param1: 0}),
//     addConfig({}, {param1: 1}),
//     addConfig({e: ['prod', 'test']}, {param1: 2}),
//     addConfig({e: 'prod', p: 'mobile'}, {param1: 3}),
// );

// const param1: ICountrySettings<IParams> = {
//     param1: 1,
//     rus: {
//         param1: 2,
//     },
// };
// const param11: IConfigSettings<IParams> = getConfig(
//     setConfig({param1: 1}),
//     addConfig({c: 'rus'}, {param1: 2}),
// );
// console.log('param1 isEqual param11:', _isEqual(param1, param11));

// const param2: ILanguageSettings<IParams> = {
//     param2: '1',
//     en: {
//         param2: '3',
//         rus: {
//             param2: '4',
//         },
//     },
// };
// const param22: ILanguageSettings<IParams> = getConfig(
//     setConfig({param2: '1'}),
//     addConfig({l: 'en'}, {param2: '3'}),
//     addConfig({l: 'en', c: 'rus'}, {param2: '4'}),
// );
// console.log('param2 isEqual param22:', _isEqual(param2, param22));

// const param3: IBrowserSettings<IParams> = {
//     param3: true,
//     android: {
//         param3: false,
//         en: {
//             param3: true,
//             rus: {
//                 param3: false,
//             },
//         },
//     }
// };
// const param33: IBrowserSettings<IParams> = getConfig(
//     setConfig({param3: true}),
//     addConfig({b: 'android'}, {param3: false}),
//     addConfig({b: 'android', l: 'en'}, {param3: true}),
//     addConfig({b: 'android', l: 'en', c: 'rus'}, {param3: false}),
// );
// console.log('param3 isEqual param33:', _isEqual(param3, param33));

// const param4: IOsSettings<IParams> = {
//     param1: 1,
//     Linux: {
//         param1: 2,
//         chrome: {
//             param1: 3,
//             ru: {
//                 param1: 4,
//                 rus: {
//                     param1: 5,
//                 },
//             },
//         },
//     },
// };
// const param44: IConfigSettings<IParams> = getConfig(
//     setConfig({param1: 1}),
//     addConfig({o: 'Linux'}, {param1: 2}),
//     addConfig({o: 'Linux', b: 'chrome'}, {param1: 3}),
//     addConfig({o: 'Linux', b: 'chrome', l: 'ru'}, {param1: 4}),
//     addConfig({o: 'Linux', b: 'chrome', l: 'ru', c: 'rus'}, {param1: 5}),
// );
// console.log('param4 isEqual param44:', _isEqual(param4, param44));

// const param5: IConfigSettings<IParams> = {
//     param1: 0,
//     prod: {
//         param1: 1,
//         desktop: {
//             param1: 2,
//             Windows: {
//                 param1: 3, 
//                 chrome: {
//                     param1: 4, 
//                     ru: {
//                         param1: 5,
//                         rus: {
//                             param1: 6,
//                         },
//                     },
//                 },
//             },
//         },
//     },
//     desktop: {
//         param1: 7,
//         Windows: {
//             param1: 8, 
//             chrome: {
//                 param1: 9, 
//                 ru: {
//                     param1: 10,
//                     rus: {
//                         param1: 11,
//                     },
//                 },
//             },
//         },
//     },
//     Windows: {
//         param1: 12, 
//         chrome: {
//             param1: 13, 
//             ru: {
//                 param1: 14,
//                 rus: {
//                     param1: 15,
//                 },
//             },
//         },
//     },
//     chrome: {
//         param1: 16, 
//         ru: {
//             param1: 17,
//             rus: {
//                 param1: 18,
//             },
//         },
//     },
//     ru: {
//         param1: 19,
//         rus: {
//             param1: 20,
//         },
//     },
//     rus: {
//         param1: 21,
//     },
// };
// const param55: IConfigSettings<IParams> = getConfig(
//     setConfig({param1: 0}),
//     addConfig({e: 'prod', }, {param1: 1}),
//     addConfig({e: 'prod', p: 'desktop'}, {param1: 2}),
//     addConfig({e: 'prod', p: 'desktop', o: 'Windows'}, {param1: 3}),
//     addConfig({e: 'prod', p: 'desktop', o: 'Windows', b: 'chrome'}, {param1: 4}),
//     addConfig({e: 'prod', p: 'desktop', o: 'Windows', b: 'chrome', l: 'ru'}, {param1: 5}),
//     addConfig({e: 'prod', p: 'desktop', o: 'Windows', b: 'chrome', l: 'ru', c: 'rus'}, {param1: 6}),

//     addConfig({p: 'desktop'}, {param1: 7}),
//     addConfig({p: 'desktop', o: 'Windows'}, {param1: 8}),
//     addConfig({p: 'desktop', o: 'Windows', b: 'chrome'}, {param1: 9}),
//     addConfig({p: 'desktop', o: 'Windows', b: 'chrome', l: 'ru'}, {param1: 10}),
//     addConfig({p: 'desktop', o: 'Windows', b: 'chrome', l: 'ru', c: 'rus'}, {param1: 11}),

//     addConfig({o: 'Windows'}, {param1: 12}),
//     addConfig({o: 'Windows', b: 'chrome'}, {param1: 13}),
//     addConfig({o: 'Windows', b: 'chrome', l: 'ru'}, {param1: 14}),
//     addConfig({o: 'Windows', b: 'chrome', l: 'ru', c: 'rus'}, {param1: 15}),

//     addConfig({b: 'chrome'}, {param1: 16}),
//     addConfig({b: 'chrome', l: 'ru'}, {param1: 17}),
//     addConfig({b: 'chrome', l: 'ru', c: 'rus'}, {param1: 18}),

//     addConfig({l: 'ru'}, {param1: 19}),
//     addConfig({l: 'ru', c: 'rus'}, {param1: 20}),

//     addConfig({c: 'rus'}, {param1: 21}),
// );
// console.log('param5 isEqual param55:', _isEqual(param5, param55));

// /**
//  * Минусы:
//  * - Сложная структура для чтения настроек (все настройки в куче при выборе, особенно в начале)
//  * - Нужно учитывать вес настроек, (можно сделать как для CSS, чем выше сложенность, тем больше вес)
//  * - Не хватает настроек кроме и для нескольких языков 
//  */
