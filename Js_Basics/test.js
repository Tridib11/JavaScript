//console.log("Hello World");
"use strict";
let x=1.256;;

console.log(x);
/*
The "use strict"; directive is used in JavaScript to enable a strict mode that catches common coding mistakes and prevents the use of certain error-prone features. It's typically placed at the top of a script or a function. Here are some key points about using strict mode:

When to Use:

Global Scope: If you include "use strict"; at the beginning of a script, it applies strict mode to the entire script.
Function Scope: You can also use strict mode within a specific function, and it will only affect that function.
Where to Use:

In Script: To apply strict mode to the entire script, include "use strict"; at the top of your JavaScript file.
In Function: To apply strict mode only within a specific function, include "use strict"; at the top of the function.
Why Use Strict Mode:

Error Prevention: Strict mode helps catch common coding errors and prevents the use of certain error-prone features. For example, it makes assignments that would otherwise silently fail to throw an error.
Security Improvements: It disallows the use of with statements and prevents certain actions that can be security risks.
Future Compatibility: Some features are deprecated in ECMAScript 5 and later versions, and strict mode helps you identify and fix them.
*/
