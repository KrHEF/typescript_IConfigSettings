import * as Bowser from 'bowser';

import {
    merge as _merge,
    orderBy as _orderBy,
} from 'lodash';


import {param} from './config';
import { 
    IConfig,
    IConfigSetting,
    TBrowser,
    TCountry,
    TEnvironment,
    TLanguage,
    TNoCountry,
    TNoEnvironment,
    TNoLanguage,
    TNoPlatform,
    TOs,
    TNoOs,
    TPlatform,
    TNoBrowser,
    ISetting,
} from './config-settings';

export class ConfigService {

    protected static instance: ConfigService = null;

    protected parser: Bowser.Parser.Parser = Bowser.getParser(window.navigator.userAgent);

    protected constructor() {}

    public static create(): ConfigService {
        if (!this.instance) {
            this.instance = new ConfigService();
        }

        return this.instance;
    }

    public getConfig<T>(defaultParams: T, name: string): T {
        const result: T = {...defaultParams}; 
        const params: IConfig<T> = {...param} as IConfig<T>;
        
        _merge(result, params);

        if (!params.settings) { return result; }
        delete result['settings'];

        return _orderBy(params.settings, ['weight'], ['asc'])
        .filter((cs: IConfigSetting<T>): boolean => this.passFilter(cs.setting))
        .reduce((config: T, setting: IConfigSetting<T>): T => _merge(config, setting.config), result);
    }

    protected getEnv(): TEnvironment {
        return 'prod';
    }

    protected getPlatform(): TPlatform {
        return this.parser.getPlatformType(true) as TPlatform;
    }

    protected getOs(): TOs {
        return this.parser.getOSName(true) as TOs;
    }

    protected getBrowser(): TBrowser {
        return this.parser.getBrowserName(true) as TBrowser;
    }

    protected getLang(): TLanguage {
        return 'ru';
    }

    protected getCountry(): TCountry {
        return 'rus';
    }

    private passFilter<T>(setting: Partial<ISetting>): boolean {
        return (
            !setting.e || this.passFilterSetting<TEnvironment, TNoEnvironment>(setting.e, this.getEnv())
        ) && (
            !setting.p || this.passFilterSetting<TPlatform, TNoPlatform>(setting.p, this.getPlatform())
        ) && (
            !setting.o || this.passFilterSetting<TOs, TNoOs>(setting.o, this.getOs())
        ) && (
            !setting.b || this.passFilterSetting<TBrowser, TNoBrowser>(setting.b, this.getBrowser())
        ) && (
            !setting.l || this.passFilterSetting<TLanguage, TNoLanguage>(setting.l, this.getLang())
        ) && (
            !setting.c || this.passFilterSetting<TCountry, TNoCountry>(setting.c, this.getCountry())
        );
    }

    private passFilterSetting<T extends string, TNo extends `!${T}`>(
        setting: T | TNo | T[] | TNo[],
        value: T,
    ): boolean {
        const settings: T[] | TNo[] = Array.isArray(setting) 
        ? setting
        : [setting] as T[] | TNo[];

        return (settings[0]?.[0] !== '!')
        ? (settings as T[]).includes(value)
        : !(settings as TNo[]).includes(('!' + value) as TNo);
    }
}