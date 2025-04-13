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