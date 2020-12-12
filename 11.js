//Task1
//Создайте функцию-конструктор houseBuilder, которая позволяет создавать объект дачного дома с параметрами 
//ширины длины и количества этажей. Создайте два объекта firstHouse и secondHouse на основании этой функции 
//конструктора. (Длина, ширина, количество этажей - числовой тип данных, значения придумайте сами). 

function HouseBuilder(height, width, floors) {
    this.height = height;
    this.width = width;
    this.floors = floors;
}

let firstHouse = new HouseBuilder(3, 50, 1);
let secondHouse = new HouseBuilder(5, 25, 2);


//Task2
//Создайте метод calcArea который будет возвращать суммарную площадь всех этажей дома. Данный метод занести в 
//прототип конструктора. Вызвать данный метод на каждом созданном объекте и результат записать в поле totalArea 
//каждого объекта.
      
HouseBuilder.prototype.calcArea = function() {
    this.totalArea = this.height * this.width * this.floors;
    return this.totalArea;
}

firstHouse.totalArea = firstHouse.calcArea();
secondHouse.totalArea = secondHouse.calcArea();


//Task3
//Данна функция function askArea(result, resolve, reject) {
//  				let area = result();
// 				if area >= "120") resolve();
//				else reject();
//			}
//Добавьте в прототип конструктора houseBuilder метод для проверки того что выполнен план по площади 
//checkAreaSuccessfully, которая выполняет alert("План по стройке выполнен"). Добавьте также метод для проверки 
//того что не выполнен план по площади checkAreaFail, которая выполняет alert("План по стройке не выполнен выполнен"). 
//Попробуйте вызвать:
//		askArea(firstHouse.calcArea, firstHouse.checkAreaSuccessfully, firstHouse.checkAreaFail)
//		askArea(secondHouse.calcArea, secondHouse.checkAreaSuccessfully, secondHouse.checkAreaFail)
//	Будет ли такой код работать корректно? Если нет то используйте известные вам механизмы привязки чтобы решить эту задачу. 
     
function askArea(result, resolve, reject) {
    let area = result();
     	if (area >= "120") resolve();
    	else reject();
}

HouseBuilder.prototype.checkAreaSuccessfully = function() {
    alert('План по стройке выполнен');
}
HouseBuilder.prototype.checkAreaFail = function() {
    alert('План по стройке не выполнен');
}

//for firstHouse
askArea(firstHouse.calcArea.bind(firstHouse), firstHouse.checkAreaSuccessfully.bind(firstHouse), firstHouse.checkAreaFail.bind(firstHouse))

//for secondHouse
askArea(secondHouse.calcArea.bind(secondHouse), secondHouse.checkAreaSuccessfully.bind(secondHouse), secondHouse.checkAreaFail.bind(secondHouse))