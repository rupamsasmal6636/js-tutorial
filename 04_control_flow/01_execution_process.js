/*
++++++++++++++++++++++++++++++ Java Script Execution context ++++++++++++++++++++++++++++++++++

1. Global Execution Context => it will contains inside -> 'this'   [Note: in browser the value of this is -> window]
2. Function/Functional Execution Context

Apart from these two main EC there one is another EC, that is-> 
Eval Execution Context 

JS code run in 2 pharase ->
1. Memory Creation Phrase / Creation Phrase [Memory allocation for the variables declared in the code]
2. Execution Phrase

Let's understand with an example:
*/
let var1=5;
let var2=10;
function addtwo(num1, num2) {
    let res=num1+num2;
    return res;
}
let res1= addtwo(var1,var2)
let res2= addtwo(6,8)

/*
1. Global Execution  -> this
        |
        |
        V
2. Memory Phrase:
 ________________________
| var1-> undefined       |
| var2-> undefined       |
| addTwo -> defination   |
| res1 -> undefined      |
| res2 -> undefined      |
|________________________|
        |
        |
        V
3. Execution Phrase:
 _____________
| var1-> 5    |          __________________________
| var2-> 10   |         | New Variable environment |
| addTwo() --------->   |           +              |  <---- After Execution Delete
| res1 -> 15  |         |     Execution Thread     |
| res2 -> 14  |         |__________________________|
|_____________|                     |
                                    |
                -----------------------------------------
                |                                       |
            Memory Phrase                           Execution Phrase
         ____________________                       ______________
        | num1 -> undefined  |                     | num1 -> 5    |
        | num2 -> undefined  |                     | num2 -> 10   |
        | total -> undefined |                     | total -> 15  |
        |____________________|                     |______________|
*/
