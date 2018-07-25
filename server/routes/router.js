import express from 'express';
import notesController from '../controllers/notesController';

const router = express.Router();

router.get('notes', notesController.getAllNotes);
router.get('/notes/:id', notesController.getSingleNote);
router.post('/notes', notesController.postNote);
router.put('/notes/:id', notesController.updateNote);
router.delete('/notes/:id', notesController.deleteNote);

router.all('*', (req, res) => {
  res.status(404).json({
    status: 'Request invalid, specified route does not exist',
  });
});

export default router;
