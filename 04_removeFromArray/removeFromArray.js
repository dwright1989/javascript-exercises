

const removeFromArray = function(...arg) {
    // set the array 
    let arr = arg[0];
    // create a new array to be returned after manipulated
    let newArr = [];

    // loop through each array item
    arr.forEach((item) => {
        if(!arg.includes(item)){
            newArr.push(item);
        }

    }

    );

    
    return newArr;
};

// Do not edit below this line
module.exports = removeFromArray;
