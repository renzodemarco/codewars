//Make a program that filters a list of strings and returns a list with only your friends name in it.

//If a name has exactly 4 letters in it, you can be sure that it has to be a friend of yours! Otherwise, you can be sure he's not...

//Note: keep the original order of the names in the output.

//My Solution: 

const myFriends1 = (friends) => {
    return friends.filter(n => n.length === 4)
} 


//Alternative:

const myFriends2 = (friends) =>{
    let myFriends = []
    for (i = 0; i < friends.length; i++) {
        if (friends[i].length == 4) {
        myFriends.push(friends[i])
        }
    }
    return myFriends;
}

let friends = ["Renzo", "Ryan", "Raul", "Diego", "Tomas", "Amor"];

console.log(myFriends1(friends));

console.log(myFriends2(friends));