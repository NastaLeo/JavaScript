//Task1
//Создайте класс House, которая позволяет создавать объект здания с параметрами длины(length), ширины(width) и 
//количество этажей(floors). Добавьте ему статический метод sortBuyFloors который можно будет использовать для 
//сортировки зданий по возрастанию их высоты. 

class House {
    constructor(length, width, floors) {
        this.length = length;
        this.width = width;
        this.floors = floors;
    }

    static sortBuyFloors(house1, house2) {
        return house1.floors - house2.floors;
    }
}

let houses = [
    new House(50, 25, 5),
    new House(35, 25, 3),
    new House(20, 10, 4),
]

houses.sort(House.sortBuyFloors);

//Task2
//На основании класса House создайте класс Skyscraper (небоскреб, по сути реализуйте через наследование). 
//Данный класс кроме свойств length, width и floors должен предоставлять дополнительное свойство offices
//(количество выделенных в офисе задний, можете задать их любым на ваше усмотрение); Добавьте свойство fullArea 
//который будет соответствовать суммарной площади всех этажей вашего небоскреба. Данное свойсвто создать через get/set. 
//При этом если площадь небоскреба увеличиась - то это значит что сверху построили еще этажи а длина и ширина 
//не поменялись, площадь может быть только увеличена. Опишите в get как будет осуществляться подсчет площади и 
//вывод этой площадь, а в set определите как будет определяться новое количесвто этажей. 

class Skyscraper extends House {
    constructor(length, width, floors, offices) {
        super(length, width, floors);
        this.offices = offices;
    }

    get fullArea() {
        return (this.length * this.width * this.floors);
    }
    set fullArea(value) {
        if (value <= (this.length * this.width * this.floors)) {
            alert('Площадь может только увеличиваться');
            return;
        }
        this.floors = Math.round(value / (this.length * this.width));
    }
}


//Task3
//Создайте три внебоскреба firstSkyscraper, secondSkyscraper и thirdSkyscraper. Выведите площадь каждого из них 
//используя get fullArea. Попробуйте задать кому-нибудь из них большую площаь чем первоначальная. Выведите теперь 
//новое количество этажей изменненного внебоскреба. Убедитесь что количество этажей поменялось а длина и ширина - нет.
//Если это так - то логика внутри set fullArea реализована правильно. 
let firstSkyscraper = new Skyscraper(70, 30, 5, 10);
firstSkyscraper.fullArea;
firstSkyscraper.fullArea = 9000;
firstSkyscraper.fullArea = 12000;
firstSkyscraper.floors;

let secondSkyscraper = new Skyscraper(50, 40, 6, 12);
secondSkyscraper.fullArea;
let thirdSkyscraper = new Skyscraper(100, 60, 3, 15);
thirdSkyscraper.fullArea;

//Task4
//Оберните firstSkyscraper, secondSkyscraper и thirdSkyscraper в массив skyscrapers и отсортируйте его 
//по возрастанию высоты небоскребов, используя статический метод класса-родителя sortBuyFloors.

let arraySkyscraper = [firstSkyscraper, secondSkyscraper, thirdSkyscraper];
arraySkyscraper.sort(Skyscraper.sortBuyFloors);
	 