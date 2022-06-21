const sumAll = function(numOne, numTwo) {
    let theSum = 0;
    if(numOne<0 || numTwo<0 || !Number.isInteger(numOne) || !Number.isInteger(numTwo)){
        return "ERROR";
    }
    // if the first number is lower than the second
    else if(numOne<numTwo){
        theSum = numOne;
        //console.log("The sum at the start of the if is : " + theSum);
        //loop through using numOne and add together
        for(let i=numOne; i<numTwo; i++){
            theSum = theSum + i + 1;
            //console.log("The sum after the for loop iteration " + i + " is " + theSum);
        }
    }else if(numTwo<numOne){
        theSum = numTwo;
        // loop through using numTwo and add together
        for(let i=numTwo; i<numOne; i++){
            theSum = theSum + i + 1;
        }
    }else if(numTwo===numOne){
        theSum = numTwo + numOne;
        
    }else{
        return "ERROR";
    }
    return theSum;
};

// Do not edit below this line
module.exports = sumAll;
