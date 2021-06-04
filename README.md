# Phonebook API
#### Used Node, Express, and Nodeman to run a mock server with mock data with RESTful routes.

---

## How To:
1. Clone or Download the zip version of this repo: https://github.com/Tien96ng/phonebook-api
2. Open repo within your code editor.
3. Open the terminal within the repo's directory and run the following: `npm install`
4. Afterwards run the following command to start the local server: `npm run start`
5. Your API should be running on http://localhost:3001/api/persons

----

## Api Endpoints
> Base URL: `https://localhost:3001`

#### HTTP Request Structure
```
GET /api/{component}
POST /api/{component}
GET /api/{component}/{id}
PUT /api/{component}/{id}
DELETE /api/{component}/{id}
```

#### Example Query
```
https://localhost:3001/api/persons/1
```

#### Sample JSON Response
```
{
  id: 1,
  name: "Arto Hellas",
  number: "12345"
}
```
