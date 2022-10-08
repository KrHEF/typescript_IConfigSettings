import {ConfigService} from './config.service';

interface IParams {
    param1: number;
    param2: string;
    param3: boolean;
}

const configService: ConfigService = ConfigService.create();

const param: IParams =  configService.getConfig<IParams>(
    {param1: 0, param2: '', param3: false},
    'paramNamr',
);
console.log('param:', param);
