// axios.get('https://api.cryptonator.com/api/ticker/btc-usd')
//     .then(res => {
//         console.log(res.data.ticker.price)
//     })
//     .catch(err => {
//         consosle.log("Error!", err)
//     })

// const CurrentBitPrice = async () => {
//     try {
//         const response = await axios.get('https://api.cryptonator.com/api/ticker/btc-usd');
//         console.log(response.data.ticker.price)
//     } catch (error) {
//         console.log("Error!!", error)
//     }
// }


const jokes = document.querySelector('#jokes');
const button = document.querySelector('button');

const addNewJoke = async () => {
    const jokeString = await iCanJoke();
    const newLi = document.createElement(('LI'));
    newLi.append(jokeString);
    jokes.append(newLi);
}

const iCanJoke = async () => {

    try {
        const config = { headers: { Accept: "application/json" } };
        const res = await axios.get("https://icanhazdadjoke.com/", config);
        return res.data.joke

    } catch (err) {
        alert("Ooppps! No jokes available at the moment! Contact Ally :)", err)
    }
}

button.addEventListener('click', addNewJoke);


