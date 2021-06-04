const express = require("express");
const app =  express();

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server running on port: ${PORT}`);
});

let persons = [
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

// GET All
app.get("/api/persons", (req, res) => {
  res.json(persons);
});

// Send Text
app.get("/info", (req, res) => {
  res.send(`
    <p> Phonebook has info for ${persons.length} people </p>
    <p> ${new Date()}</p>
  `)
});

// GET id
app.get("/api/persons/:id", (req, res) => {
  const id = Number(req.params.id);
  const person = persons.find(p => p.id === id);

  person ? res.json(person) : res.status(404).end();
});

// DELETE id
app.delete("/api/persons/:id", (req, res) => {
  const id = Number(req.params.id);
  const personToDelete = persons.find(p => p.id === id);
  persons = persons.filter(p => p.id != id);

  if(personToDelete) {

    return res.status(204).json({
      delete: true,
      personToDelete
    });
  } else {
    res.status(404).end();
  }
});

// Generate ID for POST
const generateId = (number) => {
  let findId = true;
  let id = Math.floor(Math.random() * number);
  while(findId) {
    let person = persons.find(p => p.id === id);
    if(!person) {
      findId = false;
    } else {
      id = Math.floor(Math.random() * number);
    }
  }
  
  return id;
}

// POST
app.post("/api/persons", (req, res) => {
  const body = req.body;
  if(!body.name || !body.number) {
    res.status(400).json({
      error: "Incorrect values, missing name or number"
    });
  }

  persons.forEach(p => {
    if(p.name === body.name) {
      res.status(400).json({
        error: "Name already taken"
      });
    }

    if(p.number === body.number) {
      res.status(400).json({
        error: "Number already taken"
      });
    }
  })

  const person = {
    id: generateId(1000),
    name: body.name,
    number: body.number,
  }
  
  persons = persons.concat(person);

  res.status(204).json({
    added: true,
    person
  });

  console.log(person);

});

