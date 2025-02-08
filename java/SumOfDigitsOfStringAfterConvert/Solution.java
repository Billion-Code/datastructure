/*
-------------------------------------Sum of Digits of String After Convert-----------------------------
You are given a string s consisting of lowercase English letters, and an integer k.
First, convert s into an integer by replacing each letter with its position in the alphabet (i.e., replace 'a' with 1, 'b' with 2, ..., 'z' with 26). 
Then, transform the integer by replacing it with the sum of its digits. Repeat the transform operation k times in total.

For example, if s = "zbax" and k = 2, then the resulting integer would be 8 by the following operations:
-Convert: "zbax" ➝ "(26)(2)(1)(24)" ➝ "262124" ➝ 262124
-Transform #1: 262124 ➝ 2 + 6 + 2 + 1 + 2 + 4 ➝ 17
-Transform #2: 17 ➝ 1 + 7 ➝ 8

*/

class Solution {
    public int getLucky(String s, int k) {
        long N=0;
        int ans=0;
        int len = 0;
        String nStr="";

        for(int i=0; i<s.length(); i++){
            char c = s.charAt(i);
            int ascii = (int)c - 96; 
            nStr += ascii;
            len = nStr.length();
            N = Long.parseLong(nStr);
        }
        System.out.println(N);
        while(k>0){
            ans=0;
            for(int i = 0 ; i <len; i++){
                long  n = 0;
                double d = i + 1;
                int t =(int )(Math.pow(10.0, (d)));

                n=n + N%t;
                System.out.println("First value: " + n);
                
                t =(int )(Math.pow(10.0, (d-1.0)));
                n = n - (N%t);

                n/=(t);
                System.out.println("Second value: " + n);

                ans += n ;
            }
            N= ans;
            //System.out.println(ans);
            len = (N + "").length();
            k--;
        }
        
        //System.out.println(ans);
        return ans;
    }
    public static void main(String[] args){
        Solution S1 = new Solution();

        S1.getLucky("leetcode", 2);
    }
}