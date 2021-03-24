const express = require('express');
const router = express.Router();
const postsCtrl = require('../controllers/posts');

/* GET all posts listing. */
router.get('/', postsCtrl.getPosts);

// create a new post
router.post('/create', postsCtrl.createPost);

//delete one post

router.delete('/:id/remove', postsCtrl.deletePost);

// Like a post

router.post('/:id/like', postsCtrl.likePost);

module.exports = router;
