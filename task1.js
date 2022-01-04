const numbers = [1, 3, 5, 4, 5, 7];
checkArray(numbers)
 

 function checkArray(numbers){
    let result = [];
    for (let i=0; i < numbers.length-2; i++){
    
        console.log(numbers[i], numbers[i+1],  numbers[i+2]);
      
        if ((numbers[i] > numbers[i+1] && numbers[i+1] < numbers[i+2]) || (numbers[i] < numbers[i+1] && numbers[i+1] > numbers[i+2])){
            result.push(1)
        }
        else {
            result.push(0)
        }
    }
    console.log(result)
 }