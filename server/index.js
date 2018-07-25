// import test from './test';

// test('Production is still working');


// module.exports = {
//     add: (a,b) =>{
//         return a + b;
//     },
//     multiply: (a,b) => {
//         return a * b;
//     },
//     subtract: (a,b) => {
//         return a - b;
//     } 
// };




const express = require('express');
const bodyParser = require('body-parser');
const app = express();

//parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true}));

//parse requests of content-type - application/json
app.use(bodyParser.json());

const notes = [
    {
        id:1,
        title: "Note 1",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi imperdiet porta magna consectetur tristique. Suspendisse sit amet erat at libero faucibus fermentum. Nullam et massa et augue bibendum consectetur at eu tellus. Pellentesque eleifend eu ligula sit amet vehicula. Praesent est turpis, viverra non elementum ut, ullamcorper at urna. Vivamus enim dui, pulvinar id tristique ut, lobortis vitae augue. Nullam interdum tristique ligula, vel faucibus nulla sagittis sed. Suspendisse sed posuere ipsum. Integer viverra arcu at metus viverra egestas. Integer mollis porta semper. Lorem ipsum dolor sit am"

    },
    {
        id:2,
        title:"Note 2",
        content:"consectetur adipiscing elit. In at elementum lorem. In nec diam nec mauris ullamcorper blandit. Vestibulum vel ipsum arcu. Integer nibh justo, hendrerit et nisi at, commodo ultrices mauris. Cras non elit interdum, ultrices est eu, ullamcorper mi."
    }
]

app.get('/',(req,res) =>{
    res.send('Hello World!!!');
});

app.get('/api/notes',(req,res) => {
    res.send(notes);
});

app.post('/api/notes',(req,res) => {
    if (!req.body.title || req.body.title.length < 3){
        // 400 Bad request
        res.status(400).send('title is required and should be minimum of 3 characters');
        return;
    }
    const note = {
        id: notes.length + 1,
        title: req.body.title,
        content: req.body.content,
    };

    notes.push(note);
    res.send(note);
});

app.put('/api/notes/:id',(req,res) => {
    const note = notes.find(n => n.id === parseInt(req.params.id));
    if(!note) res.status(404).send('The note you are looking for is not available');

    if (!req.body.title || req.body.title.length < 3){
        // 400 Bad request
        res.status(400).send('title is required and should be minimum of 3 characters');
        return;
    }

    note.title = req.body.title;
    note.content = req.body.content;
    // res.send(note);
    res.send(notes);
})

app.delete('/api/notes/:id', (req,res) =>{
    const note = notes.find(n => n.id === parseInt(req.params.id));
    if(!note) res.status(404).send('The note you are looking for is not available');

    const index = notes.indexOf(note);
    notes.splice(index,1);

    res.send(note);
})

app.get('/api/notes/:id', (req,res) => {
    const note = notes.find(n => n.id === parseInt(req.params.id));
    if(!note) res.status(404).send('The note you are looking for is not available');
    res.send(note);
});

const port = process.env.PORT || 3000;
app.listen(3000, () => console.log(`Listening on port ${port}...`));