import notesdb from '../models/note';

const notes = notesdb;

export default {
  getAllNotes: (req, res) => {
    try {
      res.send({
        notes,
      });
    } catch (error) { res.send(error); }
  },
  getSingleNote: (req, res) => {
    try {
      const note = notes.find(n => n.id === parseInt(req.params.id, 10));
      if (!note) res.status(404).send('The note you are looking for is not available');
      res.send(note);
    } catch (error) { res.send(error); }
  },
  postNote: (req, res) => {
    try {
      if (!req.body.title || req.body.title.length < 3) {
        // 400 Bad request
        res.status(400).send('title is required and should be minimum of 3 characters');
        return;
      } else if (!req.body.content || req.body.content.length < 5) {
        res.status(400).send('content of the note should be miminum of 5 characters');
      }
      const note = {
        id: notes.length + 1,
        title: req.body.title,
        content: req.body.content,
      };
      notes.push(note);
      res.status(201).send({
        note,
        status: 'Note created successfully',
      });
    } catch (error) { res.send(error); }
  },
  updateNote: (req, res) => {
    try {
      const note = notes.find(n => n.id === parseInt(req.params.id, 10));
      if (!note) res.status(404).send('Note you are looking for is not available');

      if (!req.body.title || req.body.title.length < 3) {
        // 400 Bad request
        res.status(400).send('title is required and should be minimum of 3 characters');
        return;
      } else if (!req.body.content || req.body.content.length < 5) {
        res.status(400).send('content of the note should be miminum of 5 characters');
      }
      note.title = req.body.title;
      note.content = req.body.content;
      res.status(201).send({ note, status: 'Note updated successfully' });
    } catch (error) { res.send(error); }
  },
  deleteNote: (res, req) => {
    try {
      const note = notes.find(n => n.id === parseInt(req.params.id, 10));
      if (!note) res.status(404).send('Note you are looking for is not available');
      const index = notes.indexOf(note);
      notes.splice(index, 1);
      res.send({ notes, status: 'Note deleted successfully' });
    } catch (error) { res.send(error); }
  },
};
