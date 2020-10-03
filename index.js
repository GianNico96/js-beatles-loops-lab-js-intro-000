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
