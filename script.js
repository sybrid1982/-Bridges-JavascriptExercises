function numberGame() {
  var number = prompt('Enter a number!');
  console.log(numberAdder(number));
}

function numberAdder(number) {
  var result = 0;
  for(var i = 1; i <= number; i++)
  {
    result += i;
  }
  return result;
}

function stringBuilder() {
  var keepGoing;
  var finalString = '';
  keepGoing = prompt('Do you want to play?');

  if(keepGoing==='yes'){
    do {
        var newWord = prompt('Enter a word');
        if(finalString === '') {
          finalString = newWord
        } else {
          finalString += (' ' + newWord);
        }
        keepGoing = prompt('Do you want to play again?');
    }
    while(keepGoing==='yes')
    console.log(finalString);
  }
}

function nameExciter() {
  var name = prompt('What is your name?');
  var play = prompt('Would you like to print your name?');
  var exclamations = '';
  while(play==='yes') {
    console.log('Hello.  My name is ' + name + exclamations);
    exclamations += '!';
    play = prompt('Would you like to play again?');
  }
}

function mealPrompter() {
  var timeOfDay = prompt('What time of day is it?');
  var mealType, meal;
  switch(timeOfDay){
    case 'morning':
      mealType = 'breakfast';
      meal = 'eggs and toast';
      break;
    case 'noon':
      mealType = 'lunch';
      meal = 'a salad';
      break;
    case 'evening':
      mealType = 'dinner';
      meal = 'chicken and rice';
      break;
    default:
      mealType = '';
      meal = '';
      break;
  }
  if(mealType !== ''){
    console.log('Since it is ' + timeOfDay + ' you should be eating ' + mealType + '. We suggest ' + meal + '.');
  } else {
    console.log("We don't know what time of day " + timeOfDay + ' is.');
  }
}
