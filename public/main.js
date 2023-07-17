setInterval(() => {
    let currentTime = moment().format("dddd MMMM Do YYYY, h:mm:ss a");

    document.getElementById("date").innerText = currentTime;
}, 1);