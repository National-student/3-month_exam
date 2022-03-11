var sampleText = "JavaScript is a must-know programming language for a modern developer";

var array1 = sampleText.split(' ');
var array2 = sampleText.split('');

function modifyText(text) {

    var newArray = '';
    var newArray2 = '';
    var newArray3 = text.split(' ');

        for (var i = text.length - 1; i >= 0; i--) {
            newArray2 += text[i]; 
        }
        
        for (var j = newArray3.length - 1; j >= 0; j--) {
            
            newArray += newArray3[j] + ' ';


        }
        
        return [newArray, newArray2]
        
    }

  var newR = modifyText(sampleText);

console.log(newR[0]);
console.log(newR[1]);
