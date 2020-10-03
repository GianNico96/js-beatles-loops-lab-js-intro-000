// add solution here
const  singers  =  [ "John Lennon" ,  "Ringo Starr" ,  "Paul McCartney" ,  "George Harrison" ];
const instruments = [ "guitarra" ,  "batería" ,  "piano" ,  "bajo" ]

var theBeatlesPlay = (musicians,instruments) => {
  let action = [];
  for (var i = 0; i < musicians.length; i++) {
     action.push(musicians[i]+ " plays " +instruments[i]);
  }
  return action;
}

const facts = [
  "He was the last Beatle to learn to drive",
  "He was never a vegetarian",
  "He was a choir boy and boy scout",
  "He hated the sound of his own voice"
];

var johnLennonFacts = (fact) =>{
  var arrayEmpty = [];
  var arrayFact = fact.length;
  var i = 0;

  while (arrayFact > 0) {
     arrayEmpty.push(fact[i]+ "!!!");
     i++;
     arrayFact--;
  }
  return arrayEmpty;
}

var iLoveTheBeatles = (number) => {
  var arrayEmpty = [];
  number++;

  if (number === 18 || number === 8) {
    return "I love the Beatles!"
  }
  
  var i =0;
  do {

    arrayEmpty.push("I love the Beatles!");
    i++;

  } while (i < 15)

  return arrayEmpty;
}
