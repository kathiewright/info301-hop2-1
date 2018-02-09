/* 
Project:  Hands-On Project 2-1
Author:
Date:
Purpose:  
*/

var celsius = " degrees, Celsius"

    function convert() {
         var degF = document.getElementById("fValue").value;
         var degC = (degF - 32) * (5 / 9);
         document.getElementById("cValue").innerHTML = degC.toFixed(2) + celsius;
      }

      //this code calls the function using an addEventListener
      document.getElementById("button").addEventListener("click", convert, false);

