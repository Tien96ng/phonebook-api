const express = require("express");
const app =  express();


const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server running on port: ${PORT}`);
});

const persons = [
  {
    id: 1,
    name: "Arto Hellas",
    number: "12345"
  },
  {
    id: 2,
    name: "Monty Ellis",
    number: "23443"
  },
  {
    id: 3,
    name: "Bart Jane",
    number: "40402"
  },
  {
    id: 4,
    name: "Ben Ripper",
    number: "02842"
  },
  {
    id: 5,
    name: "Daniel Sheeesh",
    number: "38272"
  }
];


app.use(express.json());

app.get("/api/persons", (request, response) => {
  response.json(persons);
});
