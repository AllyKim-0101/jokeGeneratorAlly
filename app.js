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


//await 
//run remaining code once iCanJoke is finished
const addNewJoke = async () => {
    const jokeString = await iCanJoke();
    const newLi = document.createElement(('LI'));
    newLi.append(jokeString);
    jokes.append(newLi);
}

//fetch with Async await

const iCanJoke = () => {

    //accept means : I want jSON from API 
    try {
        const response = fetch("https://icanhazdadjoke.com/", {
            headers: {
                'Accept': 'application/json'
            }
        });
        const parsedData = response.then(param => param.json());
        return parsedData.then(json => json.joke);

    } catch (err) {
        console.log("Ooppps! No jokes available at the moment! Contact Ally :)", err)
    }
}

button.addEventListener('click', addNewJoke);


