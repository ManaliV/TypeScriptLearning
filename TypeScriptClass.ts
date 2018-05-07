class Employee
{
	private bonus:number;
	constructor(private empNo:string, private name:string, private salary:number)
	{
		this.bonus = salary * 0.1;		
		
	}
	getName()
	{
		return this.name;
	}
	
	setName(namearg:string)
	{
		this.name = namearg
	}
	
	getDetails()
	{
		return "Name is ${this.name} and number is ${this.empNo}";
		
	}	
	
}

var emp = new Employee("E101", "ABC", 1000);
//emp.name= "Manali";

console.log(emp.getDetails());
emp.setName("Manali");

interface IShape{
  area(): number;
}

class Square implements IShape{
  constructor(private length: number){}
 
  getLength(){
    return this.length;
  }
 
  area(){
    return this.length * this.length;
  }
}
 
class Rectangle implements IShape{
  constructor(private length: number, private breadth: number){}
     
  area(): number{
    return this.length * this.breadth;
  }
}
var square: IShape = new Square(10);
var rectangle: IShape = new Rectangle(10, 20);
console.log(square.area());
console.log(rectangle.area());

var squareObj = square as Square;
console.log(squareObj.getLength());
