// Code your solutions in this file
const  gifts = ["teddy bear", "drone", "doll"]

function wrapGifts(gifts) {
    for (let i = 0; i <gifts.length; i++) {
    console.log(`Wrapped ${gifts[i]} and added a bow!`);

}
return gifts;
}

wrapGifts(gifts) 

// create a new empty array to hold the messages




//iterate through the input array and, inside the loop, build out the 'thank you' 
//message for each name using string interpolation, then add that message to the 
//new array you created;
function writeCards(names, events) {
    const array = [];
    for (let i = 0 ; i < names.length; i++) {
        array.push(`Thank you, ${names[i]}, for the wonderful ${events} gift!`);
    }
    return array;
}

function countDown() {
    let countDown = 0; while (countDown < 11) {
        console.log(countDown++)
    }
}