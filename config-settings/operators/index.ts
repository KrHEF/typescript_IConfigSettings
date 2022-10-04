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
} from '../index';

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
    currentConfig = createSetting(currentConfig, settings.env);
    currentConfig = createSetting(currentConfig, settings.platform);
    currentConfig = createSetting(currentConfig, settings.os);
    currentConfig = createSetting(currentConfig, settings.browser);
    currentConfig = createSetting(currentConfig, settings.lang);
    currentConfig = createSetting(currentConfig, settings.country);
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
