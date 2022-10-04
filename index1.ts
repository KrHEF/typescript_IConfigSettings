// Import stylesheets
import './style.css';
import {
    BROWSER_MAP,
    OS_MAP,
    PLATFORMS_MAP,
} from 'bowser';
import * as Bowser from 'bowser';

// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `<h1>TypeScript Starter</h1>`;

console.log(BROWSER_MAP);
console.log(OS_MAP);
console.log(PLATFORMS_MAP);

const browser = Bowser.parse(navigator.userAgent);
const parser = Bowser.getParser(navigator.userAgent);

console.log(browser);
console.log(parser);

console.log(
    parser.getBrowserName(),
    parser.getBrowserVersion(),
    parser.getPlatformType(), 
);

const COUNTRIES_MAP = {
    rus: 'Russia',
    usa: 'United states of America',
    est: 'Estonia',
};

const LANGUAGES_MAP = {
    ru: 'Russian',
    en: 'English',
    'pt-br': 'Portuguese'
};

const BROWSERS_MAP = {
    amazon_silk: "Amazon Silk",
    android: "Android Browser",
    bada: "Bada",
    blackberry: "BlackBerry",
    chrome: "Chrome",
    chromium: "Chromium",
    edge: "Microsoft Edge",
    electron: "Electron",
    epiphany: "Epiphany",
    firefox: "Firefox",
    focus: "Focus",
    generic: "Generic",
    google_search: "Google Search",
    googlebot: "Googlebot",
    ie: "Internet Explorer",
    k_meleon: "K-Meleon",
    maxthon: "Maxthon",
    mz: "MZ Browser",
    naver: "NAVER Whale Browser",
    opera: "Opera",
    opera_coast: "Opera Coast",
    phantomjs: "PhantomJS",
    puffin: "Puffin",
    qq: "QQ Browser",
    qqlite: "QQ Browser Lite",
    qupzilla: "QupZilla",
    safari: "Safari",
    sailfish: "Sailfish",
    samsung_internet: "Samsung Internet for Android",
    seamonkey: "SeaMonkey",
    sleipnir: "Sleipnir",
    swing: "Swing",
    tizen: "Tizen",
    uc: "UC Browser",
    vivaldi: "Vivaldi",
    webos: "WebOS Browser",
    wechat: "WeChat",
    yandex: "Yandex Browser"    ,
};

const OSES_MAP = {
    Android: "Android",
    Bada: "Bada",
    BlackBerry: "BlackBerry",
    ChromeOS: "Chrome OS",
    Linux: "Linux",
    MacOS: "macOS",
    PlayStation4: "PlayStation 4",
    Roku: "Roku",
    Tizen: "Tizen",
    WebOS: "WebOS",
    Windows: "Windows",
    WindowsPhone: "Windows Phone",
    iOS: "iOS",
};

const PLATFORM_MAP = {
    desktop: "desktop",
    mobile: "mobile",
    tablet: "tablet",
    tv: "tv",
}

type TCountry = keyof typeof COUNTRIES_MAP;
type TLanguage = keyof typeof LANGUAGES_MAP;
type TBrowser =  keyof typeof BROWSERS_MAP;
type TOs =  keyof typeof OSES_MAP;
type TPlatform = keyof typeof PLATFORM_MAP;
type TEnvironment = 'dev' | 'qa' | 'test' | 'prod';

type ICountrySettings<T> = 
    & Partial<Record<TCountry, Partial<T>>> 
    & Partial<T>;

type ILanguageSettings<T> =
    & Partial<Record<TLanguage, ICountrySettings<T>>>
    & Partial<Record<TCountry, Partial<T>>> 
    & Partial<T>;

type IBrowserSettings<T> = 
    & Partial<Record<TBrowser, ILanguageSettings<T>>>
    & Partial<Record<TLanguage, ICountrySettings<T>>>
    & Partial<Record<TCountry, Partial<T>>> 
    & Partial<T>;

type IOsSettings<T> = 
    & Partial<Record<TOs, IBrowserSettings<T>>>
    & Partial<Record<TBrowser, ILanguageSettings<T>>>
    & Partial<Record<TLanguage, ICountrySettings<T>>>
    & Partial<Record<TCountry, Partial<T>>> 
    & Partial<T>;

type IPlatformSettings<T> =
    & Partial<Record<TPlatform, IOsSettings<T>>> 
    & Partial<Record<TOs, IBrowserSettings<T>>>
    & Partial<Record<TBrowser, ILanguageSettings<T>>>
    & Partial<Record<TLanguage, ICountrySettings<T>>>
    & Partial<Record<TCountry, Partial<T>>> 
    & Partial<T>;

type IEnvironmentSettings<T> =
    & Partial<Record<TEnvironment, IPlatformSettings<T>>>     
    & Partial<Record<TPlatform, IOsSettings<T>>> 
    & Partial<Record<TOs, IBrowserSettings<T>>>
    & Partial<Record<TBrowser, ILanguageSettings<T>>>
    & Partial<Record<TLanguage, ICountrySettings<T>>>
    & Partial<Record<TCountry, Partial<T>>> 
    & Partial<T>;

/**
 * Вложенность:\
 * ├ Environment\
 * ├ Platform\
 * ├ Os\
 * ├ Browser\
 * ├ Language\
 * ├ Country\
 * └ Params
 */
type IConfigSettings<T> = IEnvironmentSettings<T>;

interface IParams {
    param1: number;
    param2: string;
    param3: boolean;
}

const param1: ICountrySettings<IParams> = {
    param1: 1,
    rus: {
        param1: 2,
    },
};
const param2: ILanguageSettings<IParams> = {
    param2: '1',
    en: {
        param2: '3',
        rus: {
            param2: '4',
        },
    },
};
const param3: IBrowserSettings<IParams> = {
    param3: true,
    android: {
        param3: false,
        en: {
            param3: true,
            rus: {
                param3: false,
            },
        },
    }
};
const param4: IOsSettings<IParams> = {
    param1: 1,
    Linux: {
        param1: 2,
        chrome: {
            param1: 3,
            ru: {
                param1: 4,
                rus: {
                    param1: 5,
                },
            },
        },
    },
}

const params: IConfigSettings<IParams> = {
    param1: 0,
    prod: {
        param1: 1,
        desktop: {
            param1: 2,
            Windows: {
                param1: 3, 
                chrome: {
                    param1: 4, 
                    ru: {
                        param1: 5,
                        rus: {
                            param1: 6,
                        },
                    },
                },
            },
        },
    },
    desktop: {
        param1: 7,
        Windows: {
            param1: 8, 
            chrome: {
                param1: 9, 
                ru: {
                    param1: 10,
                    rus: {
                        param1: 11,
                    },
                },
            },
        },
    },
    Windows: {
        param1: 12, 
        chrome: {
            param1: 13, 
            ru: {
                param1: 14,
                rus: {
                    param1: 15,
                },
            },
        },
    },
    chrome: {
        param1: 16, 
        ru: {
            param1: 17,
            rus: {
                param1: 18,
            },
        },
    },
    ru: {
        param1: 19,
        rus: {
            param1: 20,
        },
    },
    rus: {
        param1: 21,
    },
}


/**
 * Минусы:
 * - Сложная структура для чтения настроек (все настройки в куче при выборе, особенно в начале)
 * - Нужно учитывать вес настроек, (можно сделать как для CSS, чем выше сложенность, тем больше вес)
 * - Не хватает настроек кроме и для нескольких языков 
 */