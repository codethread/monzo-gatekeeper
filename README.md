# monzo-gatekeeper

This is a small express REST api gatekeeper to interact with the public monzo api.
The main call of interest is `transactions` which can accept variables such as date ranges and levels of detail.

The goal of this app is to create a number of api's to get more granular details about monzo transactions, in particular weekly target spending.

# Structure

app
|
-- api
-- requests
-- resolvers

On starting the app will pass any get requests through to the object within `api.js`.
Any requests that do not match an object key will return a `${path} does not exist`.

The requests are stored within the requests folder, and the means of resolving that call are stored with 'resolvers'.




