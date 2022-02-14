function addNumbers(num1,num2){
        // console.log(arguments[0])
        // arguments.push(45);
        let result=0;
        for(const num of arguments){
                // console.log(num)
                result=result+num
        }

        // const result = num1+num2;
        return result;
}

const sum =addNumbers(13,23,60,234,100,300);

console.log(sum);


function getFullName(firstName,lastName){
        // const fullName=firstName+" "+lastName;
        // return fullName;
        let fullName='';
        for (const part of arguments ){
                fullName=fullName+part+ " ";
        }

        return fullName;

}

const name=getFullName('omok','sonket','bin','hanif','songket', 'bin', 'tumuk',"songket");

console.log(name);