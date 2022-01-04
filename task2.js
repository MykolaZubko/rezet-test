const array = [
    [1, 2, 3, 2, 7],
    [4, 5, 6, 8, 1],
    [7, 8, 9, 4, 5]
]

checkArray(array);

function checkArray(array){
    let arrayForCheck = [];
    let result = [];
    const numberOfSquares = array[0].length - 2;
    let squaresCounter = 0;

    while(squaresCounter < numberOfSquares){
        for(let i = 0; i < array.length; i++){
        
            array[i].slice(squaresCounter, 3 + squaresCounter).map(elem => {
                arrayForCheck.push(elem);
            })
    
        }

        for(let i = 1; i <= 9; i++){
            if (arrayForCheck.indexOf(i) === -1){
                result.push(false);
                break;
            }
        }
       

        if(result.length !== squaresCounter + 1){
            result.push(true);
        }

        arrayForCheck = [];
        squaresCounter++;
    }
    console.log(result)

    
}

