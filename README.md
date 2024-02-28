1.  What is Function Statement ?
A.  A normal function that we create using Naming convention. & By this we can do the Hoisting.
      For Ex  -  function xyz(){
                            console.log("Function Statement");
                       }

2.  What is Function Expression ?
A.  When we assign a function into a variable that is Function Expression. & We can not do Hoisting by this becz it acts like variable.
      For Ex - var a = function(){
                            console.log("Function Expression");
                    }

3.  What is Anonymous Function ?
A.  A Function without the name is known as Anonymous Function. & It is used in a place where function are treated as value.
      For Ex - function(){
                     }

4.  What is Named Function Expression ?
A.  A function with a name is known as Named Function Expression.
      For Ex - var a = function xyx(){
                            console.log("Names Function Expression");
                     }

5.  Difference b/w Parameters and Arguments ?
A.  When we creating a function  & put some variabels in this ( ) that is our Parameters.
       For Ex - function ab( param1, param2 ){
                              console.log("
                      }
       & When we call this function & pass a variabel in this ( ) that is our Arguments
       For Ex - ab( 4, 5 );

6.  What is First Class Function Or First class citizens?
A.   The Ability of use function as value,
*     Can be passed as an Argument,
*     Can be executed inside a closured function &
*     Can be taken as return form.
       For Ex - var b = function(param){
                             return function xyz(){
                                     console.log(" F C F ");
                             }
                     } 

7. Function are heart of JS. They are called first class citizens or first class functions because they have the ability to be stored in the variables, passed as parameters and arguments. They can also be returned in the function.


---------------------------------------------------------------------------------------------------------------------------------------------------------------------------


There are two types of task queues in javascript.

**Callback Task queue(CTQ)**

The Callback Queue, also known as the Task Queue, is where asynchronous tasks such as event handlers, setTimeout callbacks, and I/O operations are queued for execution. These tasks are typically non-promise related.

**Micro Task queue(MTQ)**

The Micro Task Queue is a special queue that holds micro-tasks, which are small, short-lived tasks. Promises, mutation observations, and other similar asynchronous operations enqueue their callbacks into the Micro Task Queue.

**Priority and Execution Order:**

When the event loop runs, it first processes tasks from the Micro Task Queue before moving on to tasks in the Callback Queue.

This means that micro-tasks, like promises and mutation observations, are given priority over regular callback tasks. Even if both queues have tasks waiting, the event loop will always finish processing all micro-tasks before it starts working on tasks from the Callback Queue.

**Understanding Task Starvation:**

**Now, imagine this: if micro tasks keep popping up without allowing other tasks a chance to run, what happens next? Well, in this scenario, the Callback Queue won’t get an opportunity to execute its tasks. This situation is what we call the starvation of tasks in the Callback Queue.**

---------------------------------------------------------------------------------------------------------------------------------------------------------------------------

** How javascript workes**

To execute a javascript code it needs a javascript runtime environment.
Inside the javascript runtime environment we can see a javascript engint, APIs, call stack, memory heap, micro task queue, callback queue and so on..
Inside the js engine the code moves with three different phases i.e parse, compilation and execuation.
In the parsing phase it will assign tokens to each of the variable name, identifiers  and so on. i.e. var a = 10 then it will assign  token to var, token to a, etc. Then it will generate a abstract syntex tree**(AST)**.
In the compalation phase the **AST** will interpetter the code and moves to the execuation phase mean while the compallier will try to optimise the code as much as it can then it ll move the code to the execuation phase.
In the execuation phase memory heap will help to assign the memory and then after it will move the code to the call stack.

---------------------------------------------------------------------------------------------------------------------------------------------------------------------------
