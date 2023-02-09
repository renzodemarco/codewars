//Make a program that filters a list of strings and returns a list with only your friends name in it.

//If a name has exactly 4 letters in it, you can be sure that it has to be a friend of yours! Otherwise, you can be sure he's not...

//Note: keep the original order of the names in the output.

//My Solution: 

function myFriends1(friends) {
    return friends.filter(n => n.length === 4)
} 


//Alternative Solution:

function myFriends2 (friends) {
    let myFriends = []
    for (i = 0; i < friends.length; i++) {
        if (friends[i].length === 4) {
        myFriends.push(friends[i])
        }
    }
    return myFriends;
}