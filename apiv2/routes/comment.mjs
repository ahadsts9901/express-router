import express from 'express';
let router = express.Router()

// GET     /api/v2/comment/:postId/:commentId
router.get('/comment/:postId/:commentId', (req, res, next) => {
    // console.log('this is signup!', new Date());
    res.send('get comment v2');
})
// GET     /api/v2/comments/:postId
router.get('/comments/:postId', (req, res, next) => {
    // console.log('this is signup!', new Date());
    res.send('get comments v2');
})
// PUT     /api/v2/comment/:postId/:commentId
router.put('/comment/:postId/:commentId', (req, res, next) => {
    // console.log('this is signup!', new Date());
    res.send('put comment v2');
})
// DELETE  /api/v2/comment/:postId/:commentId
router.delete('/comment/:postId/:commentId', (req, res, next) => {
    // console.log('this is signup!', new Date());
    res.send('delete comment v2');
})

export default router