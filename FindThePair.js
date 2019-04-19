function findPairForSum(numbers, target){
  var pair = []

  for(var i = 0; i < numbers.length; i++){
    var firstNum = numbers[i];
    var secondNum = target - firstNum;

    if(numbers.indexOf(secondNum, i + 1) !== -1){
      pair.push(firstNum);
      pair.push(secondNum);
      break;
    }
  }

  return pair;
}

function assertArrayEqual(actual, expected, testName){
  var isLengthEqual = true;
  var isContentEqual = true;

  if(actual.length !== expected.length){
    isLengthEqual = false;
  } else {
     for(var i = 0; i < actual.length; i++){
      if(actual[i] !== expected[i]){
        isContentEqual = false;
      }
    }
  }
  
  if(isLengthEqual && isContentEqual){
    console.log('passed [' + testName + ']');
  } else {
    console.log('failed [' + testName + '] expected: ' + expected + ', but actual: ' + actual);
  }
}

function testFindPairForSum(){
  actual = findPairForSum([2, 4, 4, 8], 8);
  expected = [4, 4];
  assertArrayEqual(actual, expected, '4 + 4 is equal to 8');
}

testFindPairForSum();
