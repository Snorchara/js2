function fibonacciStandart(num){
  var a = 1, b = 0, R;

  while (num >= 0){
    R = a;
    a = a + b;
    b = R;
    num--;
  }
  return b;
}

function fibonacciRecursive(num) {
  if (num <= 1) return 1;
  return fibonacciRecursive(num - 1) + fibonacciRecursive(num - 2);

}
 function fibonacciArrayRecursive (num) {
    if (num < 2) {
        return [1];   
    }
    if (num < 3) {
        return [1, 1];
    }

    var a =  fibonacciArrayRecursive(num - 1);
    a.push(a[num - 2] + a[num - 3]);
    return a;
}
function print(i,num)
{
   document.write( '[' + i +']:'+ ' ' +  num +'<br>');
}

let num= prompt('Enter the lenght of fibonacci');
let N=prompt('Choose 1(Standart),2(Recursive),3(Array) for different realizations of the algorythm');
switch (N) {
  case '1':
            document.write('<h1>Standart</h1>');
              for(var i=0;i<num;i++)
        {
          print(i+1,fibonacciStandart(i));
        }
    break;
   case '2':
             document.write('<h1>Recursive</h1>');
          for( i=0;i<num;i++)
        {
          print(i+1,fibonacciRecursive(i));
        }
    break;
     case '3':
              document.write('<h1>Array</h1>');
              print(num, fibonacciArrayRecursive(num));
    break;
  default:
          document.write('<h1>You entered wrong values</h1>');
}

