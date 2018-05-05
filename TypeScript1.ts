var num:number;
var num2 = 10;
function add(val1:number, val2:number):number
{
 return val1 + val2;  
}
var result = add(10, 20);

type myType = number|string;
function add2(val1:myType, val2:myType):myType
{
  if(typeof val1 === 'number' && typeof val2 === 'number')
  {
   return val1 + val2;   
  }
  if(type of val1 === 'string' && type of val2 === 'string')
  {
   return val1 + val2;   
  }
 
  return null;
  
 
}

var result2 = add2("test1", 'test2");
