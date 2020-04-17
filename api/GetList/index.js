module.exports = async function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');

    context.res = {
        body: new Array(200).fill(0).map((a,b) => b)
    }
};
