import { Collection } from "documentdb-typescript";

export async function run(context: any, req: any) {
    context.log("Entering GET operation for the Vehicle API.");
    // get the vehicle id from url
    const id: number = req.params.id;

    // get cosmos db details and collection
    const url = process.env.COSMOS_DB_HOSTURL;
    const key = process.env.COSMOS_DB_KEY;
    const coll = await new Collection(process.env.COSMOS_DB_COLLECTION_NAME, process.env.COSMOS_DB_NAME, url, key).openOrCreateDatabaseAsync();

    if (id !== 0) {
        // invoke type to get id information from cosmos
        const allDocs = await coll.queryDocuments(
            {
                query: "select * from vehicle v where v.id = @id",
                parameters: [{name: "@id", value: id }]
            },
            {enableCrossPartitionQuery: true, maxItemCount: 10}).toArray();

            //  build the response
            context.res = {
                body: allDocs
                };
    } else {
                context.res = {
                    status: 400,
                    body: `$"No records found for the id: {id}"`
                };
    }

    // context.done();
}