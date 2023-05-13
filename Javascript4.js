// find the square root
const number = prompt('Enter the number: ');

const result = Math.sqrt(number);
console.log(`The square root of ${number} is ${result}`);

   
   /////find the minimum  and minimum number

   let array = [28, 45, 69, 20, 15, 7, 98]; 
       let min = array[0], max = array[0]; 
       for (let i = 1; i < array.length; i++) { 
          if (array[i] > max) 
             max = array[i]; 
          if (array[i] < min) 
             min = array[i]; 
        } 
/////count the total number of negitive elements in array
int i = 0, count = 0;
		int[] count_NegArr = {-40, 15, -4, 11, -8, -13, 22, 16, -11, -99, 55, 18, -60};
		
		while(i < count_NegArr.length) 
		{
			if(count_NegArr[i] < 0) {
				count++;
			}
			i++;
		}
		console.log("The Total Number of Negative Array Items = " + count);
        //copy elements from onearray to other
  
arr1 = [1, 2, 3, 4, 5];    
arr2 = [None] * len(arr1);    
for i in range(0, len(arr1)):  
    arr2[i] = arr1[i];    
print("Elements of original array: ");  
for i in range(0, len(arr1)):  
   print(arr1[i]),  
   
print();    
print("Elements of new array: ");  
for i in range(0, len(arr2)):  
   print(arr2[i]), 
	
    //sum of even numbers
    let i, sum = 0;  
    for (i = 2; i <= n; i+=2) {  
        sum += i;  
    }  
    return sum;  
let n = prompt("Enter any number: ");  
console.log("Sum of all even numbers from 1 to " + n + " is: " + fun(n)); 

///count the total number of elements in array
const myArray = ['a', 'b', 'c', 'c', 'b', 'd'];

const elementCounts = {};

myArray.forEach(element => {
  elementCounts[element] = (elementCounts[element] || 0) + 1;
});

console.log(elementCounts);