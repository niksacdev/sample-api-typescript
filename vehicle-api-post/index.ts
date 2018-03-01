export function run(context: any, req: any): void {
    context.log("HTTP trigger for POST operation.");
    let err;
    let json;
    if (req.body !== undefined) {
        json = JSON.stringify(req.body);
    } else {
        err = {
            status: 400,
            body: "Please pass the Vehicle data in the request body"
        };
    }
    context.done(err, json);
}