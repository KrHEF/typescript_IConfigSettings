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

type TCountry = keyof typeof COUNTRIES_MAP;
type TLanguage = keyof typeof LANGUAGES_MAP;
type TBrowser = keyof typeof BROWSERS_MAP;
type TOs = keyof typeof OSES_MAP;
type TPlatform = keyof typeof PLATFORM_MAP;
type TEnvironment = 'dev' | 'qa' | 'test' | 'prod';

interface ICountrySettings<T> {
  country?: Partial<Record<TCountry, Partial<T>>>;
}

interface ILanguageSettings<T> extends ICountrySettings<T> {
  lang?: Partial<Record<TLanguage, ICountrySettings<T> & Partial<T>>>;
}

interface IBrowserSettings<T> extends ILanguageSettings<T> {
  browser?: Partial<Record<TBrowser, ILanguageSettings<T> & Partial<T>>>;
}

interface IOsSettings<T> extends IBrowserSettings<T> {
  os?: Partial<Record<TOs, IBrowserSettings<T> & Partial<T>>>;
}

interface IPlatformSettings<T> extends IOsSettings<T> {
  platfotm?: Partial<Record<TPlatform, IOsSettings<T> & Partial<T>>>;
}

interface IEnvironmentSettings<T> extends IPlatformSettings<T> {
  env?: Partial<Record<TEnvironment, IPlatformSettings<T> & Partial<T>>>;
}

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
type IConfigSettings<T> = IEnvironmentSettings<T> & Partial<T>;

interface IParams {
  param1: number;
  param2: string;
  param3: boolean;
}

const param1: ICountrySettings<IParams> = {
  country: {
    rus: {
      param1: 1,
    },
  },
};
const param2: ILanguageSettings<IParams> = {
  country: {
    rus: {
      param1: 1,
    },
  },
  lang: {
    en: {
      param1: 2,
      country: {
        rus: {
          param1: 3,
        },
      },
    },
  },
};
const param3: IBrowserSettings<IParams> = {
  browser: {
    android: {
      param3: false,
      lang: {
        en: {
          param3: true,
          country: {
            rus: {
              param3: false,
            },
          },
        },
      },
      country: {
        rus: {
          param3: true,
        },
      },
    },
  },
};
const param4: IOsSettings<IParams> = {
  os: {
    Linux: {
      param1: 2,
      browser: {
        chrome: {
          param1: 3,
          lang: {
            ru: {
              param1: 4,
              country: {
                rus: {
                  param1: 5,
                },
              },
            },
          },
        },
      },
    },
  },
  browser: {
    android: {
      param1: 6,
    },
  },
  lang: {
    ru: {
      param1: 7,
    },
  },
};

const params: IConfigSettings<IParams> = {
  param1: 0,
  env: {
    prod: {
      param1: 1,
      platfotm: {
        desktop: {
          param1: 2,
          os: {
            Windows: {
              param1: 3,
              browser: {
                chrome: {
                  param1: 4,
                  lang: {
                    ru: {
                      param1: 5,
                      country: {
                        rus: {
                          param1: 6,
                        },
                      },
                    },
                  },
                },
              },
            },
          },
        },
      },
    },
  },
  platfotm: {
    desktop: {
      param1: 7,
      os: {
        Windows: {
          param1: 8,
          browser: {
            chrome: {
              param1: 9,
              lang: {
                ru: {
                  param1: 10,
                  country: {
                    rus: {
                      param1: 11,
                    },
                  },
                },
              },
            },
          },
        },
      },
    },
  },
  os: {
    Windows: {
      param1: 12,
      browser: {
        chrome: {
          param1: 13,
          lang: {
            ru: {
              param1: 14,
              country: {
                rus: {
                  param1: 15,
                },
              },
            },
          },
        },
      },
    },
  },
  browser: {
    chrome: {
      param1: 16,
      lang: {
        ru: {
          param1: 17,
          country: {
            rus: {
              param1: 18,
            },
          },
        },
      },
    },
  },
  lang: {
    ru: {
      param1: 19,
      country: {
        rus: {
          param1: 20,
        },
      },
    },
  },
  country: {
    rus: {
      param1: 21,
    },
  },
};

/**
 * Минусы:
 * - Сложная структура для чтения настроек (все настройки в куче при выборе, особенно в начале)
 * - Нужно учитывать вес настроек, (можно сделать как для CSS, чем выше сложенность, тем больше вес)
 * - Не хватает настроек кроме и для нескольких языков
 */
