#include <iostream>
#include <vector>
#include<algorithm>
using namespace std;

/*
-------------------------------------2022. Convert 1D Array Into 2D Array----------------------------------------
You are given a 0-indexed 1-dimensional (1D) integer array original, and two integers, m and n.
You are tasked with creating a 2-dimensional (2D) array with  m rows and n columns using all the elements from original.
The elements from indices 0 to n - 1 (inclusive) of original should form the first row of the constructed 2D array,
the elements from indices n to 2 * n - 1 (inclusive) should form the second row of the constructed 2D array, and so on.
Return an m x n 2D array constructed according to the above procedure, or an empty 2D array if it is impossible.

Example 1:
Input: original = [1,2,3,4], m = 2, n = 2
Output: [[1,2],[3,4]]
Explanation: The constructed 2D array should contain 2 rows and 2 columns.
The first group of n=2 elements in original, [1,2], becomes the first row in the constructed 2D array.
The second group of n=2 elements in original, [3,4], becomes the second row in the constructed 2D array.

Example 2:
Input: original = [1,2,3], m = 1, n = 3
Output: [[1,2,3]]
Explanation: The constructed 2D array should contain 1 row and 3 columns.
Put all three elements in original into the first row of the constructed 2D array.

Example 3:
Input: original = [1,2], m = 1, n = 1
Output: []
Explanation: There are 2 elements in original.
It is impossible to fit 2 elements in a 1x1 2D array, so return an empty 2D array.

Constraints:
- 1 <= original.length <= 5 * 104
- 1 <= original[i] <= 105  
- 1 <= m, n <= 4 * 104
-----------------------------------Good Luck--------------------------------------------------
*/

class solution{

    public :
        vector<vector<int>> construct2DArray(vector<int>& orig, int row, int col){
            //First get the parameters  m is the number of row, n the number of column and original the 1D array:
            int m=row, n = col;
            vector<int> original = orig;
            //The nomber for the contraints
            int con= 10*10*10*10;
            //The final 2D array that we are gonna return
            vector<vector<int>> finalArray;
            //y is the accumelator that help us to get the correct value from the original array
            //x will help us to get the last value of y and increment it such that we can move to n from n-1  in the next loop.
            int  y=0,x=0;
            //contraits. here we will assume that m times n should be same with the number of elements in the original array
            if ( (m*n == original.size()) && (1<= original.size()<= 5*con ) && (m>=1) && (n<=4*con) ){
                //when the contraits are done, we'll loop on the rows by using m cause the final array should have m row(s).
                for(int i = 0 ; i<m; i++){
                    //create an intermediate array for the row number i or (i+1) if you count from 1 .
                    vector<int> array;
                    //loop to fill the raw assume that each rows should have n element(s) 
                    for(int j = 0 ; j< n; j++){
                    //Check the contrains again on the original array note that (i+j) should be less than the number of element(s) in
                    //original array  otherwise we'll can try to access a non-existent element who is not correct.     
                        if( (1<= original[j] <= 10*con ) && (j+i < original.size()) ){
                            //Warning : don't confuse n the number of column and n the index. In this comment n is the index of original 
                            //array not the n in the for loop
                            //Important : here we use j and x to get the correct element from orignal array
                            //cause we fill like : from the index 0 to index n-1 for the first raws for the second 
                            //raws from index n to 2*n -1 and so on. so here x is n after the first loop , 2*n-1 after the second loop and so on
                            y=j+x;
                            //fill the intermediate array
                            array.push_back(original[y]);
                        }
                        else{
                            vector<vector<int>> result;
                            return result;
                        }
                        
                    }
                    //fill the final array with the intermediate array.
                    finalArray.push_back(array);
                    //get the last index + 1 in x. so in the next loop we can easilly get the correct element from original array. 
                    x=y+1;
                }
            }else{
                return finalArray;
            }
            return finalArray;
        }
};
//A function to print a 2D array in the console. We will use it to test our program
void print2DVector(vector<vector<int>>& v ) {
        vector<vector<int>> vec = v ;

        cout<<"[";
        for(int i=0 ; i < vec.size(); i ++){
            cout<<"[ ";
            vector<int> vec2 = vec[i];
            for(int j=0 ; j<vec2.size(); j++){

                if( j+1 != vec2.size()){
                    cout<<vec2[j]<<" , ";
                } else{
                    cout<<vec2[j]<<" ";
                }
            }
            cout<<"]";
        }
        cout<<"]";
        cout<<endl;
}


int main(){
    //Test case 1
    vector<int> arr({1,2,3,4}) ;
    solution test1;

    vector<vector<int>> case1 = test1.construct2DArray(arr,2,2);
    cout<< "Test case 1: "<<endl;
    print2DVector(case1);
    
    //Test case 2
    vector<int> arr1({1,2,3});
    vector<vector<int>> case2 = test1.construct2DArray(arr1,1,3);
    cout<< "Test case 2: "<<endl;
    print2DVector(case2);

    return 0;
}
