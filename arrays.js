var chocolateBars = ["snickers", "hundred grand", "kit kat","skittles"];//


function addElementToBeginningOfArray(array,element){
  return [element,...array];
}

function destructivelyAddElementToBeginningOfArray(array, element){
  array.unshift(element);
  return array ;
}

function addElementToEndOfArray(array, element){
  return [...array,element];
}

function destructivelyAddElementToEndOfArray(array, element){
  array.push(element);
    return array;
}

function accessElementInArray(array, index){
  return array[index];
}

function destructivelyRemoveElementFromBeginningOfArray(array){
  array.shift();
  array;
}

function removeElementFromBeginningOfArray(array, element){
  return array.slice(2);
}
function destructivelyRemoveElementFromEndOfArray(array,element){
  array.pop(element);
}

function removeElementFromEndOfArray(array, element){
  return array.slice(0, array.length - 1);
}


