module.exports = async function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');

    context.res = {
        body: ["Jarod", "Hannah", "Kevin", "Mitch", "chris", "Joe", "Mitali", "Annaji", 1, 2, 3, 4]
    }
};
