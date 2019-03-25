const express = require('express');
const router  = express.Router();

const Book = require('../models/book.js');

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

// router.get('/books', (req, res, next) => {
//   res.render('books');
// });

router.get('/books/add', (req, res, next) => {
  res.render("book-add");
});


router.get('/books', (req, res, next) => {
  Book.find()
    .then(books => {
      // console.log('Retrieved books from DB:', allTheBooksFromDB);
      res.render('books', { books: allTheBooksFromDB });
    })
    .catch(error => {
      console.log('Error while getting the books from the DB: ', error);
    })
});

// router.get('/books/:bookId', (req, res, next) => {
//   Book.findOne({'_id': req.params.bookId})
//     .then(theBook => {
//       res.render('book-details', { book: theBook });
//     })
//     .catch(error => {
//       console.log('Error while retrieving book details: ', error);
//     })
// });


router.get('/books/:bookId', (req, res, next) => {
  Book.findById(req.params.bookId)
    .then(theBook => {
      res.render('book-details', { book: theBook });
    })
    .catch(error => {
      console.log('Error while retrieving book details: ', error);
    })
});



module.exports = router;
