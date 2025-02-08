/*
--------------------------------------Find the Student that will Replace the Chalk---------------------------------
There are n students in a class numbered from 0 to n - 1. 
The teacher will give each student a problem starting with the student number 0, then the student number 1,
and so on until the teacher reaches the student number n - 1. 
After that, the teacher will restart the process, starting with the student number 0 again.
You are given a 0-indexed integer array chalk and an integer k. 
There are initially k pieces of chalk. When the student number i is given a problem to solve, they will use chalk[i] pieces of chalk to solve that problem.
However, if the current number of chalk pieces is strictly less than chalk[i], then the student number i will be asked to replace the chalk.

Return the index of the student that will replace the chalk pieces.

Example 1:
Input: chalk = [5,1,5], k = 22
Output: 0
Explanation: The students go in turns as follows:
- Student number 0 uses 5 chalk, so k = 17.
- Student number 1 uses 1 chalk, so k = 16.
- Student number 2 uses 5 chalk, so k = 11.
- Student number 0 uses 5 chalk, so k = 6.
- Student number 1 uses 1 chalk, so k = 5.
- Student number 2 uses 5 chalk, so k = 0.
Student number 0 does not have enough chalk, so they will have to replace it.

Example 2:
Input: chalk = [3,4,1,2], k = 25
Output: 1
Explanation: The students go in turns as follows:
- Student number 0 uses 3 chalk so k = 22.
- Student number 1 uses 4 chalk so k = 18.
- Student number 2 uses 1 chalk so k = 17.
- Student number 3 uses 2 chalk so k = 15.
- Student number 0 uses 3 chalk so k = 12.
- Student number 1 uses 4 chalk so k = 8.
- Student number 2 uses 1 chalk so k = 7.
- Student number 3 uses 2 chalk so k = 5.
- Student number 0 uses 3 chalk so k = 2.
Student number 1 does not have enough chalk, so they will have to replace it.

Constraints:
-chalk.length == n
-1 <= n <= 105
-1 <= chalk[i] <= 105
-1 <= k <= 109

-------------------------------------------------My Solution--------------------------------------
Let's take a look on the situation:
There are n students in a class numbered from 0 to n - 1.
    :First information we have n students.

The teacher will give each student a problem starting with the student number 0, then the student number 1,
and so on until the teacher reaches the student number n - 1. 
After that, the teacher will restart the process, starting with the student number 0 again.
    :Simple example: suppose that the problem give to the student number 0 is P0, for the student number 1 is P1...and so on
    and at the last for the student n is Pn.

You are given a 0-indexed integer array chalk and an integer k. 
There are initially k pieces of chalk. When the student number i is given a problem to solve, they will use chalk[i] pieces of chalk to solve that problem.    
    :Here we have k pieces of chalk to distribute. a 0-indexed integer array chalk for example : chalk = [2,5,1,3]
    the student number i will use chalk[i] number of chalk to solve the problem Pi so he will consume chalk[i] number of chalk and initially we have k number of 
    chalk. 

I use this solution: 

let chalkReplacer = function ( chalk, k) {
    while(true){
        for(let i in chalk){
            if( chalk[i] <= k){
                k-=chalk[i]
            } else {
                return i 
            }
        }
    }
}

Here i distribute the chalk until the current number of chalk pieces is strictly less than chalk[i]. 
which is correct but a bad way to solve the problem cause if there a 10^5 number of student and 
10^9 of chalks, the loop will run more than 1billion times which is not good
here the time complexity is O(n*n) where n is the number of students

---------------------------------------------------Correct Approach----------------------------------------------------------------------

Approach
1. Recognizing the Cycle
The distribution of chalk forms a repeating cycle. If we have enough chalk for multiple complete cycles, we don't need to simulate each one individually. 
So we will use modular arithmetic to "fast-forward" through complete cycles.

2. Calculating Total Chalk per Cycle
By summing the chalk requirements of all students, we can find out how much chalk is needed for one complete cycle. 
This sum is important for our modular arithmetic approach.

3. Using Modular Arithmetic
Once we know the total chalk per cycle, we can use the modulus operator to find out how much chalk remains after all complete cycles. 
This remainder is what we'll focus on in our final calculation.

4. Simulating the Final (Partial) Cycle
With the remaining chalk after complete cycles, we simulate the distribution one last time to find the student who will run out.
*/

/**
 * @param {number []} chalk
 * @param { number } k
 * @return { number }
 */

let  chalkReplacer = function (chalk , k ){
    let sum = chalk.reduce((acc, ch) =>  acc + ch, 0)    
    console.log(sum)
    k = k%sum
    console.log(k)
    for( let v = 0; v< chalk.length ; v++){
        if( chalk[v] <= k){
            k=k - chalk[v]
            console.log(v)
        } else{
            return v
        }
    }
}
//Test case :
console.log(chalkReplacer([3,4,1,2] ,25))
