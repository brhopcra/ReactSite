module.exports = async function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');
    
    let isPrime = (a,i = 2) => a <= i ? true : (a % i !== 0 && isPrime(a,i+1))
    
    context.res = {
        body: new Array(100).fill(0).map((a,b) => b).filter((a) => isPrime(a))
    }
};
