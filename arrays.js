var chocolateBars = new Array("snickers", "hundred grand", "kitkat", "skittles")



function addElementToBeginningOfArray(array, element){
  array.unshift(element)
  return array
}

function addElementToBeginningOfArray(array, element){
  array = [element, ...array]
  return array
}

function destructivelyAddElementToBeginningOfArray(array, element){
  array.unshift(element)
  return array
}

function addElementToEndOfArray(array, element){
  array = [...array, element]
  return array
}

function destructivelyAddElementToEndOfArray(array, element){
  array.shift(element)
  return array
}