const anthem = 'Amar Sonar Bangla Ami Tumay valobasi';
// split
const words=anthem.split(' ');
const withoutA=anthem.split('a');
console.log(words);

console.log(withoutA);

// slice
const smallSlice=anthem.slice(0,21) 

console.log(smallSlice);


// substr

const anotherPart=anthem.substr(11,6);

console.log(anotherPart);

const anotherPartAnother=anthem.substring(11,17);

console.log(anotherPartAnother);

// concat

const first='amader';
const second='city';

// const fullString=first+second;
const fullString=first.concat(' ').concat(second).concat(' abc');

console.log(fullString)


//

const Words2=['alim','badhon','camerom','david']

// const AllJoin=Words2.join('');
// const AllJoin=Words2.join(' ');
// const AllJoin=Words2.join(', ');
const AllJoin=Words2.join('/ ');

console.log(AllJoin)
