// //==================Exercise #1 ==========//
// /*Write a function that takes in the string and the list of dog names, loops through 
// the list and checks that the current name is in the string passed in. The output should be:
// "Matched dog_name" if name is in the string, if no matches are present console.log "No Matches"
// */
let dog_string = "Hello Max, my name is Dog, and I have purple eyes!"
let dog_names = ["Max","HAS","PuRple","dog"]

function findWords(list, string){
    for(i = 0; i < list.length; i++){
        if (string.search(list[i]) > -1){
            return `Matched ${list[i]}`
        } else {
            return 'No Matches'
        }
    }
}

// Call method here with parameters
console.log(findWords(dog_names, dog_string))


// //============Exercise #2 ============//
// /*Write a fucntion that takes in an array and removes every even index with a splice,
// and replaces it with the string "even index" */

// Given arr == ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]

function replaceEvens(arr){
    for(i = 0; i < arr.length; i++){
        if (i % 2 == 0){
            arr[i] = 'even index'
        }
    }
    return arr
}
var given_arr = ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]
console.log(replaceEvens(given_arr))
// //Expected output
// //Given arr == ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]
// //Output arr == ["even index","Baseball","even index","Goku","even index","Rodger"]