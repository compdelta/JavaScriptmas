/*
DESCRIPTION:
In this challenge a casino has asked you to make an online dice that works just like 
it wold in real life. Using the pre-made dice face that represents ‘one’, make the 
faces for ‘two’, ‘three’, ‘four’, ‘five’ and ‘six’. Now when the users clicks the 
dice on the screen the dice is expected to show one of the faces randomly.

event listeners, Math.random()

*/

// Write your code here 👇
document.getElementById("dice").addEventListener("click", function() {
    let result = Math.floor(Math.random() * 6) + 1
    
    if (result == 1) {
        document.getElementById("upper-left").style.backgroundColor = "#EFE5DC";
        document.getElementById("upper-right").style.backgroundColor = "#EFE5DC";
        document.getElementById("mid-left").style.backgroundColor = "#EFE5DC";
        document.getElementById("centre").style.backgroundColor = "black";
        document.getElementById("mid-right").style.backgroundColor = "#EFE5DC";
        document.getElementById("lower-left").style.backgroundColor = "#EFE5DC";
        document.getElementById("lower-right").style.backgroundColor = "#EFE5DC";
    }
    
        if (result == 2) {
        document.getElementById("upper-left").style.backgroundColor = "#EFE5DC";
        document.getElementById("upper-right").style.backgroundColor = "black";
        document.getElementById("mid-left").style.backgroundColor = "#EFE5DC";
        document.getElementById("centre").style.backgroundColor = "#EFE5DC";
        document.getElementById("mid-right").style.backgroundColor = "#EFE5DC";
        document.getElementById("lower-left").style.backgroundColor = "black";
        document.getElementById("lower-right").style.backgroundColor = "#EFE5DC";
    }
    
            if (result == 3) {
        document.getElementById("upper-left").style.backgroundColor = "#EFE5DC";
        document.getElementById("upper-right").style.backgroundColor = "black";
        document.getElementById("mid-left").style.backgroundColor = "#EFE5DC";
        document.getElementById("centre").style.backgroundColor = "black";
        document.getElementById("mid-right").style.backgroundColor = "#EFE5DC";
        document.getElementById("lower-left").style.backgroundColor = "black";
        document.getElementById("lower-right").style.backgroundColor = "#EFE5DC";
    }
    
                if (result == 4) {
        document.getElementById("upper-left").style.backgroundColor = "black";
        document.getElementById("upper-right").style.backgroundColor = "black";
        document.getElementById("mid-left").style.backgroundColor = "#EFE5DC";
        document.getElementById("centre").style.backgroundColor = "#EFE5DC";
        document.getElementById("mid-right").style.backgroundColor = "#EFE5DC";
        document.getElementById("lower-left").style.backgroundColor = "black";
        document.getElementById("lower-right").style.backgroundColor = "black";
    }
    
                    if (result == 5) {
        document.getElementById("upper-left").style.backgroundColor = "black";
        document.getElementById("upper-right").style.backgroundColor = "black";
        document.getElementById("mid-left").style.backgroundColor = "#EFE5DC";
        document.getElementById("centre").style.backgroundColor = "black";
        document.getElementById("mid-right").style.backgroundColor = "#EFE5DC";
        document.getElementById("lower-left").style.backgroundColor = "black";
        document.getElementById("lower-right").style.backgroundColor = "black";
    }
    
                    if (result == 6) {
        document.getElementById("upper-left").style.backgroundColor = "black";
        document.getElementById("upper-right").style.backgroundColor = "black";
        document.getElementById("mid-left").style.backgroundColor = "black";
        document.getElementById("centre").style.backgroundColor = "#EFE5DC";
        document.getElementById("mid-right").style.backgroundColor = "black";
        document.getElementById("lower-left").style.backgroundColor = "black";
        document.getElementById("lower-right").style.backgroundColor = "black";
    }
});


/*

DETAILED INSTRUCTIONS
1. pick out the neccesary elements from the HTML
2. Create other 5 dice faces in CSS
3. use eventlisteners on the appropriate div
4. Display dice faces randomly on click

STRETCH GOALS:
- Can you show the number you rolled as a integer along-side the dice face?
- Can you improve the overall design?
*/
