class Country {
    constructor(id:string, name_ch:string, name:string, area:number) {
        this.id = id
        this.name_ch = name_ch
        this.name = name
        this.area = area
    }  
    id: string;
    name_ch: string;
    name: string;
    area: number;
}

class Province {
    constructor(id:string, name_ch:string, name:string, area:number) {
        this.id = id
        this.name_ch = name_ch
        this.name = name
        this.area = area
    }  
    id: string;
    name_ch: string;
    name: string;
    area: number;
}

export const getCountries = (): Array<Country> => {
    var countryList: Country[] = [];
    countryList.push(
        new Country('1', '俄罗斯', 'Russia', 17234034),
        new Country('2', '加拿大', 'Canada', 9984670),
        new Country('3', '美国', 'United States', 9833520),
        new Country('4', '中国', 'China', 9596960),
        new Country('5', '巴西', 'Brazil', 8515770),
        new Country('6', '澳大利亚', 'Australia', 7692500),
        new Country('7', '印度', 'India', 3287263),
        new Country('8', '阿根廷', 'Argentina', 2796476),
        new Country('9', '哈萨克斯坦', 'Kazakhstan', 2724900),
        new Country('10', '阿尔及利亚', 'Algeria', 2381741)
    );
    return countryList;
};

export const getProvinces = (countryId: string): Array<Province> => {
    var provincesList: Province[] = [];
    provincesList.push(
        new Province('1', '新疆维吾尔自治区', 'Xinjiang', 1631585),
        new Province('2', '西藏自治区', 'Tibet', 1202189),
        new Province('3', '内蒙古自治区', 'Inner Mongolia', 1145499),
        new Province('4', '青海省', 'Qinghai', 696647),
        new Province('5', '四川省', 'Sichuan', 486116),
        new Province('6', '黑龙江省', 'Heilongjiang', 452538),
        new Province('7', '甘肃省', 'Gansu', 425889),
        new Province('8', '云南省', 'Yunnan', 383186),
        new Province('9', '广西壮族自治区', 'Guangxi', 237606),
        new Province('10', '湖南省', 'Hunan', 211836),
        new Province('11', '陕西省', 'Shaanxi', 205624),
        new Province('12', '吉林省', 'Jilin', 191202),
        new Province('13', '河北省', 'Hebei', 188545),
        new Province('14', '湖北省', 'Hubei', 185937),
        new Province('15', '广东省', 'Guangdong', 179656),
        new Province('16', '贵州省', 'Guizhou', 176099),
        new Province('17', '江西省', 'Jiangxi', 166936),
        new Province('18', '河南省', 'Henan', 165664),
        new Province('19', '山东省', 'Shandong', 157901),
        new Province('20', '山西省', 'Shanxi', 156698),
        new Province('21', '辽宁省', 'Liaoning', 148379),
        new Province('22', '安徽省', 'Anhui', 140140),
        new Province('23', '江苏省', 'Jiangsu', 106600),
        new Province('24', '浙江省', 'Zhejiang', 105506),
        new Province('25', '福建省', 'Fujian', 123951),
        new Province('26', '重庆市', 'Chongqing', 82374),
        new Province('27', '宁夏回族自治区', 'Ningxia', 51893),
        new Province('28', '海南省', 'Hainan', 35177),
        new Province('29', '北京市', 'Beijing', 16406),
        new Province('30', '天津市', 'Tianjin', 11917),
        new Province('31', '上海市', 'Shanghai', 8359)
    );
    return provincesList;
};