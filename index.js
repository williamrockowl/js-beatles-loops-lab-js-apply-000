// add solution here
function theBeatlesPlay(musicians, instruments){
var ans = [];
for(let i = 0;i < musicians.length; i++){
  ans = [musicians[0] + " plays " + instruments[0], musicians[1] + " plays " + instruments[1],musicians[2] + " plays " + instruments[2],
  musicians[3] + " plays " + instruments[3]];
  return ans;
}
function johnLennonFacts(facts1){
  i = 0;
  const facts = [
  "He was the last Beatle to learn to drive",
  "He was never a vegetarian",
  "He was a choir boy and boy scout",
  "He hated the sound of his own voice" ];
  while(i < facts.lenth){
    facts.push(`${facts[i]}!!!`);
    i++;
 
  }
return facts
 
  
}