class Animal {
    constructor(id:string, name:string, genus:string, family:string, binomialName:string, speed:number, picture:string, datasource:string) {
        this.id = id
        this.name = name
        this.genus = genus
        this.family = family
        this.binomialName = binomialName
        this.speed = speed
        this.picture = picture
        this.datasource = datasource 
    }  
    id: string;
    name: string;
    genus: string;
    family: string;
    binomialName: string;
    speed: number;
    picture: string;
    datasource: string;
}

export const getAnimals = (): Array<Animal> => {
    var animalList: Animal[] = [];
    animalList.push(
        new Animal('1', 'Cheetah猎豹', 'Acinonyx猎豹属', 'Felidae猫科',
            'Acinonyx jubatus', 120, '/images/animals/cheetah.jpeg', 'https://en.wikipedia.org/wiki/Fastest_animals'),
        new Animal('2', 'Pronghorn叉角羚', 'Antilocapra叉角羚属', 'Antilocapridae叉角羚科',
            'Antilocapra americana', 96, '/images/animals/pronghorn.jpeg', 'https://en.wikipedia.org/wiki/Fastest_animals'),
        new Animal('3', 'Tsessebe转角牛羚', 'Damaliscus转角牛羚属', 'Bovidae牛科',
            'Damaliscus lunatus', 90, '/images/animals/tsessebe.jpeg', 'https://en.wikipedia.org/wiki/Fastest_animals'),
        new Animal('4', 'Thomson\'s gazelle汤氏瞪羚', 'Eudorcas美羚属', 'Bovidae牛科',
            'Eudorcas thomsonii', 90, '/images/animals/thomsonsgazelle.jpeg', 'https://en.wikipedia.org/wiki/Fastest_animals'),
        new Animal('5', 'Horse马', 'Equus马属', 'Equidae马科',
            'Equus ferus caballus', 89, '/images/animals/horse.jpeg', 'https://en.wikipedia.org/wiki/Fastest_animals'),
        new Animal('6', 'Springbok跳羚', 'Antidorcas跳羚属', 'Bovidae牛科',
            'Antidorcas marsupialis', 88, '/images/animals/springbok.jpeg', 'https://en.wikipedia.org/wiki/Fastest_animals'),
        new Animal('7', 'Wildebeest角马', 'Connochaetes角马属', 'Bovidae牛科',
            'Antilope gnu', 81, '/images/animals/wildebeest.jpeg', 'https://en.wikipedia.org/wiki/Fastest_animals'),
        new Animal('8', 'Blackbuck印度黑羚', 'Antilope真羚属', 'Bovidae牛科',
            'Antilope cervicapra', 80, '/images/animals/blackbuck.jpeg', 'https://en.wikipedia.org/wiki/Fastest_animals'),
        new Animal('9', 'Grant\'s gazelle葛氏苍羚', 'Nanger苍羚属', 'Bovidae牛科',
            'Nanger granti', 80, '/images/animals/grantsgazelle.jpeg', 'https://en.wikipedia.org/wiki/Fastest_animals'),
        new Animal('10', 'Hartebeest狷羚', 'Alcelaphus狷羚属', 'Bovidae牛科',
            'Alcelaphus buselaphus', 80, '/images/animals/hartebeest.jpeg', 'https://en.wikipedia.org/wiki/Fastest_animals'),
        new Animal('11', 'Impala黑斑羚', 'Aepyceros高角羚属', 'Bovidae牛科',
            'Aepyceros melampus', 80, '/images/animals/impala.jpeg', 'https://en.wikipedia.org/wiki/Fastest_animals'),
        new Animal('12', 'Lion狮子', 'Panthera豹属', 'Felidae猫科',
            'Panthera leo', 80, '/images/animals/lion.jpeg', 'https://en.wikipedia.org/wiki/Fastest_animals'),
        new Animal('13', 'Hare野兔', 'Lepus兔属', 'Leporidae兔科',
            'Lepus timidus', 80, '/images/animals/hare.jpeg', 'https://en.wikipedia.org/wiki/Fastest_animals'),
        new Animal('14', 'African wild dog非洲野犬', 'Lycaon非洲野犬属', 'Canidae犬科',
            'Lycaon pictus', 71, '/images/animals/africanwilddog.jpeg', 'https://en.wikipedia.org/wiki/Fastest_animals'),
        new Animal('15', 'Red kangaroo红大袋鼠', 'Macropus大袋鼠属', 'Macropodidae袋鼠科',
            'Osphranter rufus', 71, '/images/animals/kangaroo.jpeg', 'https://en.wikipedia.org/wiki/Fastest_animals'),
        new Animal('16', 'Greyhound格雷伊猎犬', 'Canis犬属', 'Canidae犬科',
            'Canis lupus familiaris', 70, '/images/animals/greyhound.jpeg', 'https://en.wikipedia.org/wiki/Fastest_animals'),
        new Animal('17', 'Onager亚洲野驴', 'Equus马属', 'Equidae马科',
            'Equus hemionus', 70, '/images/animals/onager.jpeg', 'https://en.wikipedia.org/wiki/Fastest_animals'),
        new Animal('18', 'Plains zebra平原斑马', 'Equus马属', 'Equidae马科',
            'Equus quagga', 70, '/images/animals/zebra.jpeg', 'https://en.wikipedia.org/wiki/Fastest_animals'),
        new Animal('19', 'Eland伊兰羚羊', 'Taurotragus巨羚属', 'Bovidae牛科',
            'Taurotragus oryx', 70, '/images/animals/eland.jpeg', 'https://en.wikipedia.org/wiki/Fastest_animals'),
        new Animal('20', 'Coyote土狼', 'Canis犬属', 'Canidae犬科',
            'Canis latrans', 65, '/images/animals/coyote.jpeg', 'https://en.wikipedia.org/wiki/Fastest_animals'),
        new Animal('21', 'Tiger老虎', 'Panthera豹属', 'Felidae猫科',
            'Panthera tigris', 64, '/images/animals/tiger.jpeg', 'https://en.wikipedia.org/wiki/Fastest_animals'),
        new Animal('22', 'Spotted hyena斑鬣狗', 'Crocuta斑鬣狗属', 'Hyaenidae鬣狗科',
            'Crocuta crocuta', 60, '/images/animals/spottedhyena.jpeg', 'https://en.wikipedia.org/wiki/Fastest_animals'),

        );
        
    return animalList;
};