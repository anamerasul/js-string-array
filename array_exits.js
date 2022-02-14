function megaFriend(friends){

        if(Array.isArray(friends)== false){
                return 'please provide an arry'
        }
        let mega=friends[0];
        for(const friend of friends){
                if(friend.length >mega.length){
                        mega=friend
                }
        }

        return mega;
}


const friends=['kutub','lion','shamol','sabbir'];

const myBuddy=megaFriend(1234);
console.log(myBuddy);


if(friends.indexOf('fox')!=-1){
        console.log('exista')
}

else{
        console.log('doesnt exits')
}

if(friends.includes('lion')){
        console.log('exitsss')
}


// concat//


const first=[1,3,5];
const second=[4,6,8,9,11];

const combined =first.concat(second);
console.log(combined)
