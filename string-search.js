const products=['Dell hardcore i29 200GB laptop','iPhone 1Tg camera flashlight phone',' Dell yellow Laptop with black camera','1X59 Lenevo commercial yoga laptop',
'Lg supernova laptop','HTC low price phone','Dell purple color Phone with Laptop'];


const Searching='Dell';

// indexof

const output=[];

for(const product of products){
        if(product.toLowerCase().indexOf(Searching.toLowerCase()) !=-1){
                output.push(product);
        }
}

// console.log(output);

for(const product of products){
        if(product.toLowerCase().includes(Searching.toLowerCase())){
                // output.push(product);
        }
}

// console.log(output)

// start with
for(const product of products){
        if(product.toLowerCase().startsWith(Searching.toLowerCase())){
                // output.push(product);
        }
}


console.log(output)
