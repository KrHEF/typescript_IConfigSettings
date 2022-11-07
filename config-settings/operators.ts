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
    setting: ISetting,
    weight?: number,
): IConfigSetting<T> {
    return {
        config,
        setting,
        weight: weight ?? _keys(setting).length,
    };
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
    const result: IConfig<T> = {...config};

    if (!settings.length) { return result; }

    result.settings = settings;

    return result;
}
