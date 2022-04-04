// You will write a card counting function. It will receive a card parameter,
// which can be a number or a string, and increment or decrement the global
// count variable according to the card's value (see table). The function
// will then return a string with the current count and the string Bet 
// if the count is positive, or Hold if the count is zero or negative. 
// The current count and the player's decision (Bet or Hold) should be 
// separated by a single space.

// Count            Change	Cards
//     +1	          2, 3, 4, 5, 6
//      0	          7, 8, 9
//     -1	          10, 'J', 'Q', 'K', 'A'

// Example Outputs: -3 Hold or 5 Bet

let count = 0;

function cc(card) {
if (card == 2 || card == 3 || card == 4 || card == 5 || card == 6){
  count = count + 1;
}
else if (card == 7 || card == 8 || card == 9){
  count = count;
}
else if (card == 10 || card == 'J' ||  card == 'Q' ||  card == 'K' || card == 'A'  ){
  count = count - 1;
}

if(count > 0){
  return count + " Bet";
} else{
  return count + " Hold";
}
  
}

cc(2); cc(3); cc(7); cc('K'); cc('A');