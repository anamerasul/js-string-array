const numbers=[6,4,7,1,3,9,2,5];

const sortedNumbers=numbers.sort();

console.log(sortedNumbers);

const friends=['kabil','josim','razzak','anwor','dipjol','badsha'];

const sortedFriends=friends.sort();

console.log(sortedFriends);

const reversedFriends=friends.reverse();

console.log(reversedFriends);


//nurbers sorting fun

// numbes sort

const bigNumbers=[66,58,81,92,9,6,37,13,2];

const sortedBigNumbers=bigNumbers.sort(
        function(a,b){
                return a - b;
        }
);

console.log(sortedBigNumbers)