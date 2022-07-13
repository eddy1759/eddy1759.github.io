const id = (id) => {
    return document.getElementById(id);
}

const quoteDisplay = id("display"),
btn = id("btn"),
quoteCounter = id("counter");


async function getQuote() {
    const response = await fetch("https://api.quotable.io/random");
    const result = await response.json();
    return result;
};

count = 0;

getQuote().then((result) => {
    quoteDisplay.innerHTML = result.content
})
.then(() => {
    count += 1;
    quoteCounter.innerHTML = count;
}).catch(status => {
    quoteDisplay.innerHTML = "An error occurred...."
})

btn.addEventListener("click", (e) => {
    getQuote()
    .then((result)=> {
        quoteDisplay.innerHTML = result.content
    })
    .then(() => {
        count += 1;
        quoteCounter.innerHTML = count;
    }).catch(status => {
        quoteDisplay.innerHTML = "An error occurred...."
    })
})