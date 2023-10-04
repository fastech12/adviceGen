const adviseHeader = document.querySelector('.advise__header');
const quote = document.querySelector('#quote');
const dice = document.querySelector('.dice');
const url = "https://api.adviceslip.com/advice";


async function getAdvice() {
    const res = await fetch(url);
    const {slip: {id, advice}} = await res.json();
    adviseHeader.innerText = `ADVISE #${id}`;
    quote.innerText = advice;
}

getAdvice();

dice.addEventListener('click', getAdvice);