const arrayofquotes=[

    {
        author:'shakespeare',
        quote:'Cowards die many times before their deaths The valiant never taste of death but once.'
    },
    {
        author:'shakespeare',
        quote:'Men at some time are masters of their fates.'
    },
    {
        author:'shakespeare',
        quote:'love looks not in the eyes,but with the mind'
    },
    {
        author:'shakespeare',
        quote:'all the world a stage'
    },
    {
        author:'shakespeare',
        quote:'spread love everywhere you go'
    }
];
function generatequote(){
    console.log(arrayofquotes.length )
const random = Number.parseInt(Math.random()*arrayofquotes.length);
document.querySelector('#quoteoutput').innerText=`${arrayofquotes[random].quote}`;
document.querySelector('#authoroutput').innerText=`--${arrayofquotes[random].author}`;
}