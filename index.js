function writeCards(names){
    const party = []
    for (let i=0; i < names.length; i++){
        party.push(`Thank you, ${names[i]}, for the wonderful surprise gift!`)
    }
    return party;
}

function countDown(number){
    for (let i=number; i >= 0; i--){
        console.log(i);
    }
}