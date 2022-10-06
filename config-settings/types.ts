export const ENVIRONMENT_MAP = {
    dev: 'Develop',
    qa: 'QA ',
    test: 'Test',
    prod: 'Production',
}

export const PLATFORMS_MAP = {
    desktop: "desktop",
    mobile: "mobile",
    tablet: "tablet",
    tv: "tv",
}

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

export const LANGUAGES_MAP = {
    ru: 'Russian',
    en: 'English',
    'pt-br': 'Portuguese'
};

export const COUNTRIES_MAP = {
    rus: 'Russia',
    usa: 'United states of America',
    est: 'Estonia',
};

export type TEnvironment = keyof typeof ENVIRONMENT_MAP;
export type TPlatform = keyof typeof PLATFORMS_MAP;
export type TOs =  Lowercase<keyof typeof OSES_MAP>;
export type TBrowser =  keyof typeof BROWSERS_MAP;
export type TLanguage = keyof typeof LANGUAGES_MAP;
export type TCountry = keyof typeof COUNTRIES_MAP;

export type TNoEnvironment = `!${TEnvironment}`;
export type TNoPlatform = `!${TPlatform}`;
export type TNoOs = `!${TOs}`;
export type TNoBrowser = `!${TBrowser}`;
export type TNoLanguage = `!${TLanguage}`;
export type TNoCountry = `!${TCountry}`;

export type IConfig<T> = 
    & Partial<T>
    & IConfigSettings<T>;

export interface IConfigSettings<T> {
    settings?: IConfigSetting<T>[];
}

export interface IConfigSetting<T> {
    config: Partial<T>;
    setting: Partial<ISetting>;
    weight: number;
}

export interface ISetting {
    /** Environment */
    e: TEnvironment | TEnvironment[] | TNoEnvironment | TNoEnvironment[];
    /** Platform */
    p: TPlatform | TPlatform[] | TNoPlatform | TNoPlatform[];
    /** OS */
    o: TOs | TOs[] | TNoOs | TNoOs[];
    /** Browser */
    b: TBrowser | TBrowser[] | TNoBrowser | TNoBrowser[];
    /** Language */
    l: TLanguage | TLanguage[] | TNoLanguage | TNoLanguage[];
    /** Country */
    c: TCountry | TCountry[] | TNoCountry | TNoCountry[];
}
