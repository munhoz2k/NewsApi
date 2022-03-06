export default function delay(n: number){

    return new Promise(function(resolve){

        setTimeout(resolve,n*1000);

    });
    
}