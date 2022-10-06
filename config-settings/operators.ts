import {
    keys as _keys,
} from 'lodash';

import {
    IConfig,
    IConfigSetting, 
    ISetting,
} from './types';

export function add<T>(
    config: Partial<T>,
    setting: Partial<ISetting>,
    weight?: number,
): IConfigSetting<T> {
    const result: IConfigSetting<T> = {
        config,
        setting,
        weight,
    };

    result.weight ??= _keys(setting).length;

    return result;
}

export function set<T>(
    config: Partial<T>,
): Partial<T> {
    return config;
}

export function get<T>(
    config: Partial<T>,
    ...settings: IConfigSetting<T>[]
): IConfig<T> {
    if (!settings.length) { return {...config}; }

    const result: IConfig<T> = {...config};
    result.settings = settings;
    return result;
}
