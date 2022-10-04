// Import stylesheets
import './style.css';
import { BROWSER_MAP, OS_MAP, PLATFORMS_MAP } from 'bowser';
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
  parser.getPlatformType()
);

const COUNTRIES_MAP = {
  rus: 'Russia',
  usa: 'United states of America',
  est: 'Estonia',
};

const LANGUAGES_MAP = {
  ru: 'Russian',
  en: 'English',
  'pt-br': 'Portuguese',
};

const BROWSERS_MAP = {
  amazon_silk: 'Amazon Silk',
  android: 'Android Browser',
  bada: 'Bada',
  blackberry: 'BlackBerry',
  chrome: 'Chrome',
  chromium: 'Chromium',
  edge: 'Microsoft Edge',
  electron: 'Electron',
  epiphany: 'Epiphany',
  firefox: 'Firefox',
  focus: 'Focus',
  generic: 'Generic',
  google_search: 'Google Search',
  googlebot: 'Googlebot',
  ie: 'Internet Explorer',
  k_meleon: 'K-Meleon',
  maxthon: 'Maxthon',
  mz: 'MZ Browser',
  naver: 'NAVER Whale Browser',
  opera: 'Opera',
  opera_coast: 'Opera Coast',
  phantomjs: 'PhantomJS',
  puffin: 'Puffin',
  qq: 'QQ Browser',
  qqlite: 'QQ Browser Lite',
  qupzilla: 'QupZilla',
  safari: 'Safari',
  sailfish: 'Sailfish',
  samsung_internet: 'Samsung Internet for Android',
  seamonkey: 'SeaMonkey',
  sleipnir: 'Sleipnir',
  swing: 'Swing',
  tizen: 'Tizen',
  uc: 'UC Browser',
  vivaldi: 'Vivaldi',
  webos: 'WebOS Browser',
  wechat: 'WeChat',
  yandex: 'Yandex Browser',
};

const OSES_MAP = {
  Android: 'Android',
  Bada: 'Bada',
  BlackBerry: 'BlackBerry',
  ChromeOS: 'Chrome OS',
  Linux: 'Linux',
  MacOS: 'macOS',
  PlayStation4: 'PlayStation 4',
  Roku: 'Roku',
  Tizen: 'Tizen',
  WebOS: 'WebOS',
  Windows: 'Windows',
  WindowsPhone: 'Windows Phone',
  iOS: 'iOS',
};

const PLATFORM_MAP = {
  desktop: 'desktop',
  mobile: 'mobile',
  tablet: 'tablet',
  tv: 'tv',
};

type TCountry = `country_${keyof typeof COUNTRIES_MAP}`;
type TLanguage = `lang_${keyof typeof LANGUAGES_MAP}`;
type TBrowser = `browser_${keyof typeof BROWSERS_MAP}`;
type TOs = `os_${Lowercase<keyof typeof OSES_MAP>}`;
type TPlatform = `platform_${keyof typeof PLATFORM_MAP}`;
type TEnvironment = `env_${'dev' | 'qa' | 'test' | 'prod'}`;

type ICountrySettings<T> = Partial<Record<TCountry, Partial<T>>> & Partial<T>;

type ILanguageSettings<T> = Partial<Record<TLanguage, ICountrySettings<T>>> &
  Partial<Record<TCountry, Partial<T>>> &
  Partial<T>;

type IBrowserSettings<T> = Partial<Record<TBrowser, ILanguageSettings<T>>> &
  Partial<Record<TLanguage, ICountrySettings<T>>> &
  Partial<Record<TCountry, Partial<T>>> &
  Partial<T>;

type IOsSettings<T> = Partial<Record<TOs, IBrowserSettings<T>>> &
  Partial<Record<TBrowser, ILanguageSettings<T>>> &
  Partial<Record<TLanguage, ICountrySettings<T>>> &
  Partial<Record<TCountry, Partial<T>>> &
  Partial<T>;

type IPlatformSettings<T> = Partial<Record<TPlatform, IOsSettings<T>>> &
  Partial<Record<TOs, IBrowserSettings<T>>> &
  Partial<Record<TBrowser, ILanguageSettings<T>>> &
  Partial<Record<TLanguage, ICountrySettings<T>>> &
  Partial<Record<TCountry, Partial<T>>> &
  Partial<T>;

type IEnvironmentSettings<T> = Partial<
  Record<TEnvironment, IPlatformSettings<T>>
> &
  Partial<Record<TPlatform, IOsSettings<T>>> &
  Partial<Record<TOs, IBrowserSettings<T>>> &
  Partial<Record<TBrowser, ILanguageSettings<T>>> &
  Partial<Record<TLanguage, ICountrySettings<T>>> &
  Partial<Record<TCountry, Partial<T>>> &
  Partial<T>;

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
  country_rus: {
    param1: 2,
  },
};
const param2: ILanguageSettings<IParams> = {
  param2: '1',
  lang_en: {
    param2: '3',
    country_rus: {
      param2: '4',
    },
  },
};
const param3: IBrowserSettings<IParams> = {
  param3: true,
  browser_android: {
    param3: false,
    lang_en: {
      param3: true,
      country_rus: {
        param3: false,
      },
    },
  },
};
const param4: IOsSettings<IParams> = {
  param1: 1,
  os_linux: {
    param1: 2,
    browser_chrome: {
      param1: 3,
      lang_ru: {
        param1: 4,
        country_rus: {
          param1: 5,
        },
      },
    },
  },
};

const params: IConfigSettings<IParams> = {
  param1: 0,
  env_prod: {
    param1: 1,
    platform_desktop: {
      param1: 2,
      os_windows: {
        param1: 3,
        browser_chrome: {
          param1: 4,
          lang_ru: {
            param1: 5,
            country_rus: {
              param1: 6,
            },
          },
        },
      },
    },
  },
  platform_desktop: {
    param1: 2,
    os_windows: {
      param1: 3,
      browser_chrome: {
        param1: 4,
        lang_ru: {
          param1: 5,
          country_rus: {
            param1: 6,
          },
        },
      },
    },
  },
  os_windows: {
    param1: 3,
    browser_chrome: {
      param1: 4,
      lang_ru: {
        param1: 5,
        country_rus: {
          param1: 6,
        },
      },
    },
  },
  browser_chrome: {
    param1: 4,
    lang_ru: {
      param1: 5,
      country_rus: {
        param1: 6,
      },
    },
  },
  lang_ru: {
    param1: 5,
    country_rus: {
      param1: 6,
    },
  },
  country_rus: {
    param1: 6,
  },
};

/**
 * Минусы:
 * - Сложная структура для чтения настроек (все настройки в куче при выборе, особенно в начале)
 * - Нужно учитывать вес настроек, (можно сделать как для CSS, чем выше сложенность, тем больше вес)
 * - Не хватает настроек кроме и для нескольких языков
 */
