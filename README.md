# ExpressCalc-Daemon

This is the daemon/ backend a calculator. 

Directions:

Run ``npm install``

then ``node index.js``

The url of this application is ``http://localhost:3000``

You can use the following http GET params on the website to use the calculator. "first, condition, second"

The first and second values have to be numbers, the condition parameter has to be one of the following "add, subtract, multiply, divide"

Example Request:

http://localhost:3000?first=4&condition=multiply&second=4

Example Output:

{sum: 16}

This could also be used side by side with 
https://github.com/potato2171/sveltecalc-panel
View the instructions there to get it set up.
