import express from 'express';
let router = express.Router()



router.get('/login', (req, res, next) => {
    // console.log('this is login!', new Date());
    res.send('this is login v2' + new Date());
})
router.get('/signup', (req, res, next) => {
    // console.log('this is signup!', new Date());
    res.send('this is signup v2' + new Date());
})


export default router