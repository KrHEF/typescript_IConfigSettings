export const COUNTRIES_MAP = {
    rus: 'Russia',
    usa: 'United states of America',
    est: 'Estonia',
};

export const LANGUAGES_MAP = {
    ru: 'Russian',
    en: 'English',
    'pt-br': 'Portuguese'
};

export const BROWSERS_MAP = {
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

export const OSES_MAP = {
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

const PLATFORMS_MAP = {
    desktop: "desktop",
    mobile: "mobile",
    tablet: "tablet",
    tv: "tv",
}

export type TCountry = keyof typeof COUNTRIES_MAP;
export type TLanguage = keyof typeof LANGUAGES_MAP;
export type TBrowser =  keyof typeof BROWSERS_MAP;
export type TOs =  keyof typeof OSES_MAP;
export type TPlatform = keyof typeof PLATFORMS_MAP;
export type TEnvironment = 'dev' | 'qa' | 'test' | 'prod';

export type ICountrySettings<T> = 
    & Partial<Record<TCountry, Partial<T>>> 
    & Partial<T>;

export type ILanguageSettings<T> =
    & Partial<Record<TLanguage, ICountrySettings<T>>>
    & Partial<Record<TCountry, Partial<T>>> 
    & Partial<T>;

export type IBrowserSettings<T> = 
    & Partial<Record<TBrowser, ILanguageSettings<T>>>
    & Partial<Record<TLanguage, ICountrySettings<T>>>
    & Partial<Record<TCountry, Partial<T>>> 
    & Partial<T>;

export type IOsSettings<T> = 
    & Partial<Record<TOs, IBrowserSettings<T>>>
    & Partial<Record<TBrowser, ILanguageSettings<T>>>
    & Partial<Record<TLanguage, ICountrySettings<T>>>
    & Partial<Record<TCountry, Partial<T>>> 
    & Partial<T>;

export type IPlatformSettings<T> =
    & Partial<Record<TPlatform, IOsSettings<T>>> 
    & Partial<Record<TOs, IBrowserSettings<T>>>
    & Partial<Record<TBrowser, ILanguageSettings<T>>>
    & Partial<Record<TLanguage, ICountrySettings<T>>>
    & Partial<Record<TCountry, Partial<T>>> 
    & Partial<T>;

export type IEnvironmentSettings<T> =
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
export type IConfigSettings<T> = IEnvironmentSettings<T>;

export interface ISettings {
    /** Environment */
    e: TEnvironment | TEnvironment[],
    /** Platform */
    p: TPlatform | TPlatform[],
    /** OS */
    o: TOs | TOs[],
    /** Browser */
    b: TBrowser | TBrowser[],
    /** Language */
    l: TLanguage | TLanguage[],
    /** Country */
    c: TCountry | TCountry[],
}
