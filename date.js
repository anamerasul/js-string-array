const myfavDate= new Date('1971-12-16');

console.log(myfavDate);

const AnotherDate= new Date(1971,2,26,11,50,40,80);
console.log(AnotherDate);

// moment js

if(myfavDate.getTime()<AnotherDate.getTime()){
        console.log('fav is')
}