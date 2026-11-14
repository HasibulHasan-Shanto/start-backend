import express from 'express';

const app = express()
const PORT = process.env.PORT || 5000

app.get('/', (req, res) => {
    res.send('Hello world from express js')
})
app.get('/about', (req, res) => {
    res.send('This is about from express js')
})
app.get('/contact', (req, res) => {
    res.send('Here is first contact page from express js')
})
app.get('/dashboard', (req, res) => {
    res.send('This first dashboard from express js')
})
const users = [
    {
        id: 1,
        name: "John Smith",
        email: "john@example.com",
        age: 25,
        city: "New York"
    },
    {
        id: 2,
        name: "Emma Wilson",
        email: "emma@example.com",
        age: 22,
        city: "London"
    },
    {
        id: 3,
        name: "Michael Brown",
        email: "michael@example.com",
        age: 30,
        city: "Toronto"
    },
    {
        id: 4,
        name: "Sophia Davis",
        email: "sophia@example.com",
        age: 27,
        city: "Sydney"
    },
    {
        id: 5,
        name: "James Miller",
        email: "james@example.com",
        age: 24,
        city: "Dhaka"
    },
    {
        id: 6,
        name: "Olivia Taylor",
        email: "olivia@example.com",
        age: 29,
        city: "Paris"
    },
    {
        id: 7,
        name: "William Anderson",
        email: "william@example.com",
        age: 26,
        city: "Berlin"
    },
    {
        id: 8,
        name: "Ava Thomas",
        email: "ava@example.com",
        age: 21,
        city: "Dubai"
    },
    {
        id: 9,
        name: "Benjamin Martin",
        email: "benjamin@example.com",
        age: 32,
        city: "Tokyo"
    },
    {
        id: 10,
        name: "Isabella Garcia",
        email: "isabella@example.com",
        age: 23,
        city: "Singapore"
    }
];
app.get('/users', (req, res) => {
    res.send(users)
})
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})