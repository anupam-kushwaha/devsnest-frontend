/*
        Question.1
        Write a JavaScript function to check whether an `input` is an array or not
        Test Data :
        console.log(is_array('w3resource'));
        console.log(is_array([1, 2, 4, 0]));
        false
        True
*/

var is_array = function (input) {
    if (toString.call(input) == "[object Array]")
        return true;
    return false;
};
console.log(is_array('w3resource'));
console.log(is_array([1, 2, 4, 0]));


/**
 *  Question.2
    Write a JavaScript function to clone an array
    Test Data :
    console.log(array_Clone([1, 2, 4, 0]));
    console.log(array_Clone([1, 2, [4, 0]]));
    [1, 2, 4, 0]
    [1, 2, [4, 0]]         

 */

var array_Clone = function (arr) {
    return arr.slice(0);
};

console.log(array_Clone([1, 2, 4, 0]));
console.log(array_Clone([1, 2, [4, 0]]));


/*
 Q.3 Write a JavaScript function to get the first element of an array. Passing a parameter 'n' will return the first 'n' elements of the array.
 Test Data :
 console.log(first([7, 9, 0, -2]));
 console.log(first([],3));
 console.log(first([7, 9, 0, -2],3));
 console.log(first([7, 9, 0, -2],6));
 console.log(first([7, 9, 0, -2],-3));
 Expected Output :
 7
 []
 [7, 9, 0]
 [7, 9, 0, -2]
 []
 */

var first = function (array, n) {
    if (array == null)
        return void 0;
    if (n == null)
        return array[0];
    if (n < 0)
        return [];
    return array.slice(0, n);
};

console.log(first([7, 9, 0, -2]));
console.log(first([], 3));
console.log(first([7, 9, 0, -2], 3));
console.log(first([7, 9, 0, -2], 6));
console.log(first([7, 9, 0, -2], -3));



/**
 *
        Q.4 Write a simple JavaScript program to join all elements of the following array into a string.
        Sample array : myColor = ["Red", "Green", "White", "Black"];
        Expected Output :
        "Red,Green,White,Black"
        "Red,Green,White,Black"
        "Red+Green+White+Black"
*/

myColor = ["Red", "Green", "White", "Black"];
console.log(myColor.toString());
console.log(myColor.join());
console.log(myColor.join('+'));



/**
 * Q.5 Write a JavaScript program to find the most frequent item of an array
 * Sample array : var arr1=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
 * Sample Output : a ( 5 times )
 */

var array = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
var freq = 0;
var max_till_now = 0;
var item;

for (var i = 0; i < array.length; i++) {
    for (var j = 0; j < array.length; j++) {
        if (array[i] == array[j]) {
            freq++;
        }
        if (max_till_now < freq) {
            max_till_now = freq;
            item = array[i];
        }
    }
    freq = 0;
}

console.log(item + " ( "+ max_till_now + " ) ");
