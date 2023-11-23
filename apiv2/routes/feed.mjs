import express from 'express';
let router = express.Router()



// GET     /api/feed/:userId
router.get('/feed/:userId', (req, res, next) => {
    res.send(`<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8">
    </meta>
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    </meta>
    <title>Feed</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    </meta>
    <!-- font -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@700&display=swap" rel="stylesheet">
    <!-- icons -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.3/font/bootstrap-icons.css">
    </link>
    <!-- moment js -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.29.4/moment.min.js"></script>
    <style>
        * {
            font-family: "Poppins", monospace;
            font-weight: normal;
            /* font-weight: bold; */
        }
        
        html {
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 2em 1em;
        }
        
        body {
            background-color: #fff;
            color: #212121;
            display: flex;
            flex-direction: column;
            justify-content: right;
            align-items: center;
            row-gap: 2em;
            padding: 2em 1em;
            margin: 0em;
            max-width: 320px;
            border: 2px solid #212121;
            height: 750px;
        }
        
        p,
        h1,
        h2,
        h3,
        h4,
        h5,
        h6 {
            margin: 0em;
        }
        
        .center {
            width: 100%;
            text-align: center;
        }
        
        .icon {
            font-size: 400%;
        }
        
        a {
            color: #212121;
            text-decoration: none !important;
        }
        
        row {
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 0.5em;
            column-gap: 1em;
            width: 100%;
            flex-wrap: wrap;
            row-gap: 1em;
        }

        table {
            border: 1px solid #212121!important;
        }
        
        td {
            border-bottom: 1px solid #212121!important;
            border-right: 1px solid #212121!important;
            font-size: 0.65em!important;
            padding: 0.4em;
            text-align: left;
            border-collapse: collapse!important;
        }
        
        @media only screen and (max-width: 350px) {
            body {
                height: 800px;
            }
        }
    </style>
</head>

<body>
    <h1 class="center bi bi-rss icon"></h1>
    <h1 class="center">Feed Version 2.0</h1>
    <h3 class="center">This Is Feed Page</h3>
    <h3 class="center" id="date"></h3>
    <p class="center">Thanks For Visiting Regards! Muhammad Ahad&copy;</p>
    <table>
    <tr>
        <td>1</td>
        <td>Login V1</td>
        <td><a href="https://express-router-sts.onrender.com/api/v1/login"><i class="bi bi-arrow-up-right-square" /></a></td>
        <td>Login V2</td>
        <td><a href="https://express-router-sts.onrender.com/api/v2/login"><i class="bi bi-arrow-up-right-square" /></a></td>
    </tr>
    <tr>
        <td>2</td>
        <td>Signup V1</td>
        <td><a href="https://express-router-sts.onrender.com/api/v1/signup"><i class="bi bi-arrow-up-right-square" /></a></td>
        <td>Signup V2</td>
        <td><a href="https://express-router-sts.onrender.com/api/v2/signup"><i class="bi bi-arrow-up-right-square" /></a></td>
    </tr>
    <tr>
        <td>3</td>
        <td>Feed V1</td>
        <td><a href="https://express-router-sts.onrender.com/api/v1/feed/:userId"><i class="bi bi-arrow-up-right-square" /></a></td>
        <td>Feed V2</td>
        <td><a href="https://express-router-sts.onrender.com/api/v2/feed/:userId"><i class="bi bi-arrow-up-right-square" /></a></td>
    </tr>
    <tr>
        <td>4</td>
        <td>Post V1</td>
        <td><a href="https://express-router-sts.onrender.com/api/v1/post/:userId/:postId"><i class="bi bi-arrow-up-right-square" /></a></td>
        <td>Post V2</td>
        <td><a href="https://express-router-sts.onrender.com/api/v2/post/:userId/:postId"><i class="bi bi-arrow-up-right-square" /></a></td>
    </tr>
    <tr>
        <td>5</td>
        <td>Posts V1</td>
        <td><a href="https://express-router-sts.onrender.com/api/v1/posts/:userId"><i class="bi bi-arrow-up-right-square" /></a></td>
        <td>Posts V2</td>
        <td><a href="https://express-router-sts.onrender.com/api/v2/posts/:userId"><i class="bi bi-arrow-up-right-square" /></a></td>
    </tr>
    <tr>
        <td>6</td>
        <td>Comment V1</td>
        <td><a href="https://express-router-sts.onrender.com/api/v1/comment/:postId/:commentId"><i class="bi bi-arrow-up-right-square" /></a></td>
        <td>Comment V2</td>
        <td><a href="https://express-router-sts.onrender.com/api/v2/comment/:postId/:commentId"><i class="bi bi-arrow-up-right-square" /></a></td>
    </tr>
    <tr>
        <td>7</td>
        <td>Comments V1</td>
        <td><a href="https://express-router-sts.onrender.com/api/v1/comments/:postId"><i class="bi bi-arrow-up-right-square" /></a></td>
        <td>Comments V2</td>
        <td><a href="https://express-router-sts.onrender.com/api/v2/comments/:postId"><i class="bi bi-arrow-up-right-square" /></a></td>
    </tr>
</table>
<a class="center" href="https://cautious-pear-fawn.cyclic.app">Back To Home</a>
    <script>
        setInterval(() => {
            let currentTime = moment().format("dddd MMMM Do YYYY, h:mm:ss a");

            document.getElementById("date").innerText = currentTime;
        }, 1);
    </script>
</body>

</html>`)
})


export default router