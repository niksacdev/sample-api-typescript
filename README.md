# Building Serverless API’s with TypeScript and Azure Function Proxies
> For more details on the architecture and step by step setup of the same, check out my blog here: (https://connectedstuff.io/2018/03/02/building-serverless-apis-with-typescript-and-azure-function-proxies-2/)

In this sample, we build a microservice that uses Azure Functions and other awesome Serverless technologies provided by Azure. We will cover the following features:
* Azure functions currently has support for TypeScript in preview and we will be using the current features available to develop a read/write REST API.
* We leverage the Azure Function Bindings to define Input and Output for our functions.
* We leverage [Azure Function Proxies](https://docs.microsoft.com/en-us/azure/azure-functions/functions-proxies) that provide a way to define consistent routing behaviour for our functions and API calls.

