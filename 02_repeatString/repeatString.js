const repeatString = function(theString, num) {
    let theNewString = "";
    if(num<0){
        return "ERROR";
    }else{
        for(let i=0; i<num; i++){
            theNewString = theNewString + theString;
        }
        console.log(theNewString);
        
        return theNewString;
    }
    
};

// Do not edit below this line
module.exports = repeatString;
