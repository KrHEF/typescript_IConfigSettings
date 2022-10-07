import {
    isEqual as _isEqual,
} from 'lodash';

import {
    IConfig,
} from "./config-settings";
import { 
    get,
    set,
    add,
} from './config-settings/operators';

interface IParams {
    param1: number;
    param2: string;
    param3: boolean;
}

const param0: IConfig<IParams> = {
    param1: 0,
    param2: '0',
    param3: false,
    settings: [
        {
            config: {param1: 1},
            setting: {},
            weight: 0,
        },
        {
            config: {param1: 2},
            setting: {e: ['prod', 'test']},
            weight: 1,
        },
        {
            config: {param1: 3},
            setting: {e: 'prod', p: 'mobile'},
            weight: 2,
        },
        {
            config: {param3: true},
            setting: {p: '!mobile'},
            weight: 1,
        }
    ]
};
const param00: IConfig<IParams> = get(
    set<IParams>({param1: 0, param2: '0', param3: false}),
    add<IParams>({param1: 1}, {}),
    add<IParams>({param1: 2}, {e: ['prod', 'test']}),
    add<IParams>({param1: 3}, {e: 'prod', p: 'mobile'}),
    add<IParams>({param3: true}, {p: '!mobile'}),
);
console.log('param0 isEqual param00:', _isEqual(param0, param00));


const param1: IConfig<IParams> = {
    param1: 1,
    settings: [{
        config: {param1: 2},
        setting: {c: 'rus'},
        weight: 2,
    }],
};
const param11: IConfig<IParams> = get(
    {param1: 1},
    add({param1: 2}, {c: 'rus'}, 2),
);
console.log('param1 isEqual param11:', _isEqual(param1, param11));

const param2: IConfig<IParams> = {
    param2: '1',
    settings: [{
        config: {param2: '3'},
        setting: {l: 'en'},
        weight: 1,
    },{
        config: {param2: '4'},
        setting: {l: 'en', c: 'rus'},
        weight: 2,
    }],
};
const param22: IConfig<IParams> = get(
    set({param2: '1'}),
    add({param2: '3'}, {l: 'en'}),
    add({param2: '4'}, {l: 'en', c: 'rus'}),
);
console.log('param2 isEqual param22:', _isEqual(param2, param22));

const param3: IConfig<IParams> = {
    param3: true,
    settings: [{
        config: {param3: false},
        setting: {b: 'android'},
        weight: 1,
    },{
        config: {param3: true},
        setting: {b: 'android', l: 'en'},
        weight: 2,
    },{
        config: {param3: false},
        setting: {b: 'android', l: 'en', c: 'rus'},
        weight: 3,
    }],
};
const param33: IConfig<IParams> = get(
    set({param3: true}),
    add({param3: false}, {b: 'android'}),
    add({param3: true}, {b: 'android', l: 'en'}),
    add({param3: false}, {b: 'android', l: 'en', c: 'rus'}),
);
console.log('param3 isEqual param33:', _isEqual(param3, param33));

export const param: IConfig<IParams> = get<IParams>(
    set<IParams>({param1: 0}),
    add<IParams>({param1: 1}, {e: 'prod', }, ),
    add<IParams>({param1: 2}, {e: 'prod', p: 'desktop'}, ),
    add<IParams>({param1: 3}, {e: 'prod', p: 'desktop', o: 'windows'}, ),
    add<IParams>({param1: 4}, {e: 'prod', p: 'desktop', o: 'windows', b: 'chrome'}, ),
    add<IParams>({param1: 5}, {e: 'prod', p: 'desktop', o: 'windows', b: 'chrome', l: 'ru'}, ),
    add<IParams>({param1: 6}, {e: 'prod', p: 'desktop', o: 'linux', b: 'chrome', l: 'ru', c: 'rus'}, ),

    add<IParams>({param1: 7}, {p: 'desktop'}, ),
    add<IParams>({param1: 8}, {p: 'desktop', o: 'windows'}, ),
    add<IParams>({param1: 9}, {p: 'desktop', o: 'windows', b: 'chrome'}, ),
    add<IParams>({param1: 10}, {p: 'desktop', o: 'windows', b: 'chrome', l: 'ru'}, ),
    add<IParams>({param1: 11}, {p: 'desktop', o: 'windows', b: 'chrome', l: 'ru', c: 'rus'}, ),

    add<IParams>({param1: 12}, {o: 'windows'}, ),
    add<IParams>({param1: 13}, {o: 'windows', b: 'chrome'}, ),
    add<IParams>({param1: 14}, {o: 'windows', b: 'chrome', l: 'ru'}, ),
    add<IParams>({param1: 15}, {o: 'windows', b: 'chrome', l: 'ru', c: 'rus'}, ),

    add<IParams>({param1: 16}, {b: 'chrome'}, ),
    add<IParams>({param1: 17}, {b: 'chrome', l: 'ru'}, ),
    add<IParams>({param1: 18}, {b: 'chrome', l: 'ru', c: 'rus'}, ),

    add<IParams>({param1: 19}, {l: 'ru'}, ),
    add<IParams>({param1: 20}, {l: 'ru', c: 'rus'}, ),

    add<IParams>({param1: 21}, {c: 'rus'}, ),
);



/**
 * Плюсы:
 * - Простая структура для чтения настроек
 * - Есть настройки кроме и для нескольких значений (массив)
 * 
 * Минусы:
 * - Нужно учитывать вес настроек, (как для CSS, чем выше вложенность, тем больше вес; также можно самому задавать вес)
 * -  
 */
