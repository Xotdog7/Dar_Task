/**
colorPatternTimes(["Blue"]) ➞ 2
colorPatternTimes(["Red", "Yellow", "Green", "Blue"]) ➞ 11
colorPatternTimes(["Blue", "Blue", "Blue", "Red", "Red", "Red"]) ➞ 13
*/

function colorPatternTimes(arr) {

    const pattern2 = arr.length * 2;
    let count = 0
    arr.forEach(function (item, index, array) {
        if (item != array[index + 1] && array[index + 1] != undefined) {
            return count++;
        }
    }
    )


    return count + pattern2;
}

console.log(colorPatternTimes(["Blue", "Blue", "Red", "Red", "Blue", "Red", "Green"]));
console.log(colorPatternTimes(["Blue", "Blue", "Blue", "Red", "Red", "Red"]) );
console.log(colorPatternTimes(["Red", "Yellow", "Green", "Blue"]));
console.log(colorPatternTimes(["Blue"]));
