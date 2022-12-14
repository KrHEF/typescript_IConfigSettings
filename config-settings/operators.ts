import {
    merge as _merge,
} from 'lodash';

import { 
    IConfigSettings,
    ISettings,
    TEnvironment,
    TPlatform,
    TOs,
    TBrowser,
    TLanguage,
    TCountry,
} from './types';

function createSetting<T>(
    config: IConfigSettings<T>,
    settingName: TEnvironment | TPlatform | TOs | TBrowser | TLanguage | TCountry,
): IConfigSettings<T> {
    if (settingName) {
        config[settingName] = {},
        config = config[settingName];
    }

    return config;
}

export function addConfig<T>(
    settings: Partial<ISettings>,
    config: T,
): IConfigSettings<T> {
    const result: IConfigSettings<T> = {};

    let currentConfig: IConfigSettings<T> = result;
    let currentConfigs: IConfigSettings<T>[] = [];

    if (Array.isArray(settings.e)) {
        if (currentConfigs.length) {
            
        } else {
            currentConfigs.push(...settings.e.map((e: TEnvironment) => {
                return createSetting({}, e);
            }));
        }
    } else {
        currentConfig = createSetting(currentConfig, settings.e);
    }

    currentConfig = createSetting(currentConfig, settings.p);
    currentConfig = createSetting(currentConfig, settings.o);
    currentConfig = createSetting(currentConfig, settings.b);
    currentConfig = createSetting(currentConfig, settings.l);
    currentConfig = createSetting(currentConfig, settings.c);
    _merge(currentConfig, config);

    return result;
}

export function setConfig<T>(
    config: T,
): IConfigSettings<T> {
    return config;
}

export function getConfig<T>(
    ...args: IConfigSettings<T>[]
): IConfigSettings<T> {
    return args.reduce((result, arg: IConfigSettings<T>) => {
        return _merge(result, arg);
    }, {});
}
