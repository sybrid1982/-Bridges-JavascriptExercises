function numberGame() {
  var number = prompt('Enter a number!');
  var newNumber = numberAdder(number);
  console.log(newNumber);
  var outputDOM = document.querySelector('#output > p');
  outputDOM.textContent = newNumber;
  outputDOM.style.display = 'block';
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

  var outputDOM = document.querySelector('#output > p');
  outputDOM.style.display = 'none';

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
    outputDOM.textContent = finalString;
    outputDOM.style.display = 'block';
  }
}

function nameExciter() {
  var outputDOM = document.querySelector('#output > p');
  var name = prompt('What is your name?');
  var play = prompt('Would you like to print your name?');
  var exclamations = '';
  while(play==='yes') {
    var output = 'Hello.  My name is ' + name + exclamations;
    console.log(output)
    outputDOM.style.display = 'block';
    outputDOM.textContent = output;
    exclamations += '!';
    play = prompt('Would you like to play again?');
  }
}

function mealPrompter() {
  var timeOfDay = prompt('What time of day is it?');
  var mealType, meal;
  var outputDOM = document.querySelector('#output > p');

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
  var output;
  if(mealType !== ''){
    output = ('Since it is ' + timeOfDay + ' you should be eating ' + mealType + '. We suggest ' + meal + '.');
  } else {
    output = ("We don't know what time of day " + timeOfDay + ' is.');
  }

  console.log(output);
  outputDOM.style.display = 'block';
  outputDOM.textContent = output;
}
