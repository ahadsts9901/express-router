import express from 'express';
let router = express.Router()

// GET     /api/v1/comment/:postId/:commentId
router.get('/comment/:postId/:commentId', (req, res, next) => {
    console.log('this is signup!', new Date());
    res.send('get comment v1');
})
// GET     /api/v1/comments/:postId
router.get('/comments/:postId', (req, res, next) => {
    console.log('this is signup!', new Date());
    res.send('get comments v1');
})
// PUT     /api/v1/comment/:postId/:commentId
router.put('/comment/:postId/:commentId', (req, res, next) => {
    console.log('this is signup!', new Date());
    res.send('put comment v1');
})
// DELETE  /api/v1/comment/:postId/:commentId
router.delete('/comment/:postId/:commentId', (req, res, next) => {
    console.log('this is signup!', new Date());
    res.send('delete comment v1');
})

export default router