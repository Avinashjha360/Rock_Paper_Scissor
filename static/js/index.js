document.querySelectorAll('.key button')[0].addEventListener("click",event1);
function event1(){
    randomNumber1=3;
            var value1="./static/images/player2_3.png";
            console.log(value1);
            var dice=document.querySelectorAll('img')[1].setAttribute("src",value1);

            var randomNumber2=Math.floor(Math.random()*3)+1;
            var value2="./static/images/player1_"+randomNumber2+".png";
            console.log(value2);
            var dice=document.querySelectorAll('img')[0].setAttribute("src",value2);

            if (randomNumber1==randomNumber2) {
                result.innerHTML="Match Draw!";
           }
           else if(randomNumber1=='1'&&randomNumber2=='2')
           {
            result.innerHTML="You Win!";
            Y_score++;
           } 
            else if(randomNumber1=='1'&&randomNumber2=='3'){
                result.innerHTML="Computer Win!";
                C_score++;
            }
            else if(randomNumber1=='2'&&randomNumber2=='1')
            {
                result.innerHTML="Computer Win!";
                C_score++;
            }
            else if(randomNumber1=='2'&&randomNumber2=='3')
            {
                result.innerHTML="You Win!";
                Y_score++;
            }
            else if(randomNumber1=='3'&&randomNumber2=='1')
            {
                result.innerHTML="You Win!";
                Y_score++;
            }
            else if(randomNumber1=='3'&&randomNumber2=='2')
            {
                result.innerHTML="Computer Win!";
                C_score++;
            }
            score[0].innerHTML=C_score;
            console.log(score[0].innerHTML);
            score[1].innerHTML=Y_score;
            console.log(score[1].innerHTML)
   
}
document.querySelectorAll('.key button')[1].addEventListener("click",event2);
function event2(){
    randomNumber1=2;
            var value1="./static/images/player2_2.png";
            console.log(value1);
            var dice=document.querySelectorAll('img')[1].setAttribute("src",value1);

            var randomNumber2=Math.floor(Math.random()*3)+1;
            var value2="./static/images/player1_"+randomNumber2+".png";
            console.log(value2);
            var dice=document.querySelectorAll('img')[0].setAttribute("src",value2);
            if (randomNumber1==randomNumber2) {
                result.innerHTML="Match Draw!";
           }
           else if(randomNumber1=='1'&&randomNumber2=='2')
           {
            result.innerHTML="You Win!";
            Y_score++;
           } 
            else if(randomNumber1=='1'&&randomNumber2=='3'){
                result.innerHTML="Computer Win!";
                C_score++;
            }
            else if(randomNumber1=='2'&&randomNumber2=='1')
            {
                result.innerHTML="Computer Win!";
                C_score++;
            }
            else if(randomNumber1=='2'&&randomNumber2=='3')
            {
                result.innerHTML="You Win!";
                Y_score++;
            }
            else if(randomNumber1=='3'&&randomNumber2=='1')
            {
                result.innerHTML="You Win!";
                Y_score++;
            }
            else if(randomNumber1=='3'&&randomNumber2=='2')
            {
                result.innerHTML="Computer Win!";
                C_score++;
            }
            score[0].innerHTML=C_score;
            console.log(score[0].innerHTML);
            score[1].innerHTML=Y_score;
            console.log(score[1].innerHTML);
}
document.querySelectorAll('.key button')[2].addEventListener("click",event3);
function event3(){
    var randomNumber2=Math.floor(Math.random()*3)+1;
    var value2="./static/images/player1_"+randomNumber2+".png";
    var dice=document.querySelectorAll('img')[0].setAttribute("src",value2);

    randomNumber1=1;
    var value1="./static/images/player2_1.png";
    var dice=document.querySelectorAll('img')[1].setAttribute("src",value1);

    if (randomNumber1==randomNumber2) {
        result.innerHTML="Match Draw!";
   }
   else if(randomNumber1=='1'&&randomNumber2=='2')
   {
    result.innerHTML="You Win!";
    Y_score++;
   } 
    else if(randomNumber1=='1'&&randomNumber2=='3'){
        result.innerHTML="Computer Win!";
        C_score++;
    }
    else if(randomNumber1=='2'&&randomNumber2=='1')
    {
        result.innerHTML="Computer Win!";
        C_score++;
    }
    else if(randomNumber1=='2'&&randomNumber2=='3')
    {
        result.innerHTML="You Win!";
        Y_score++;
    }
    else if(randomNumber1=='3'&&randomNumber2=='1')
    {
        result.innerHTML="You Win!";
        Y_score++;
    }
    else if(randomNumber1=='3'&&randomNumber2=='2')
    {
        result.innerHTML="Computer Win!";
        C_score++;
    }
    score[0].innerHTML=C_score;
    console.log(score[0].innerHTML);
    score[1].innerHTML=Y_score;
    console.log(score[1].innerHTML)
}



var C_score=0;
var Y_score=0;
var result=document.querySelector('h1');
var score=document.querySelectorAll('.scorecard');
var button=document.querySelectorAll('.key button')[0].value;
console.log(button)
window.addEventListener("keydown",function(event){
    if (event.defaultPrevented) {
        return;
    }
    switch (event.key) {
        case "c":
            var randomNumber2=Math.floor(Math.random()*3)+1;
            var value2="./static/images/player1_"+randomNumber2+".png";
            var dice=document.querySelectorAll('img')[0].setAttribute("src",value2);

            randomNumber1=1;
            var value1="./static/images/player2_1.png";
            var dice=document.querySelectorAll('img')[1].setAttribute("src",value1);

            if (randomNumber1==randomNumber2) {
                result.innerHTML="Match Draw!";
           }
           else if(randomNumber1=='1'&&randomNumber2=='2')
           {
            result.innerHTML="You Win!";
            Y_score++;
           } 
            else if(randomNumber1=='1'&&randomNumber2=='3'){
                result.innerHTML="Computer Win!";
                C_score++;
            }
            else if(randomNumber1=='2'&&randomNumber2=='1')
            {
                result.innerHTML="Computer Win!";
                C_score++;
            }
            else if(randomNumber1=='2'&&randomNumber2=='3')
            {
                result.innerHTML="You Win!";
                Y_score++;
            }
            else if(randomNumber1=='3'&&randomNumber2=='1')
            {
                result.innerHTML="You Win!";
                Y_score++;
            }
            else if(randomNumber1=='3'&&randomNumber2=='2')
            {
                result.innerHTML="Computer Win!";
                C_score++;
            }
            score[0].innerHTML=C_score;
            console.log(score[0].innerHTML);
            score[1].innerHTML=Y_score;
            console.log(score[1].innerHTML)
            break;
        case "p":
            randomNumber1=2;
            var value1="./static/images/player2_2.png";
            console.log(value1);
            var dice=document.querySelectorAll('img')[1].setAttribute("src",value1);

            var randomNumber2=Math.floor(Math.random()*3)+1;
            var value2="./static/images/player1_"+randomNumber2+".png";
            console.log(value2);
            var dice=document.querySelectorAll('img')[0].setAttribute("src",value2);
            if (randomNumber1==randomNumber2) {
                result.innerHTML="Match Draw!";
           }
           else if(randomNumber1=='1'&&randomNumber2=='2')
           {
            result.innerHTML="You Win!";
            Y_score++;
           } 
            else if(randomNumber1=='1'&&randomNumber2=='3'){
                result.innerHTML="Computer Win!";
                C_score++;
            }
            else if(randomNumber1=='2'&&randomNumber2=='1')
            {
                result.innerHTML="Computer Win!";
                C_score++;
            }
            else if(randomNumber1=='2'&&randomNumber2=='3')
            {
                result.innerHTML="You Win!";
                Y_score++;
            }
            else if(randomNumber1=='3'&&randomNumber2=='1')
            {
                result.innerHTML="You Win!";
                Y_score++;
            }
            else if(randomNumber1=='3'&&randomNumber2=='2')
            {
                result.innerHTML="Computer Win!";
                C_score++;
            }
            score[0].innerHTML=C_score;
            console.log(score[0].innerHTML);
            score[1].innerHTML=Y_score;
            console.log(score[1].innerHTML);
            break;
        case "r":
            randomNumber1=3;
            var value1="./static/images/player2_3.png";
            console.log(value1);
            var dice=document.querySelectorAll('img')[1].setAttribute("src",value1);

            var randomNumber2=Math.floor(Math.random()*3)+1;
            var value2="./static/images/player1_"+randomNumber2+".png";
            console.log(value2);
            var dice=document.querySelectorAll('img')[0].setAttribute("src",value2);

            if (randomNumber1==randomNumber2) {
                result.innerHTML="Match Draw!";
           }
           else if(randomNumber1=='1'&&randomNumber2=='2')
           {
            result.innerHTML="You Win!";
            Y_score++;
           } 
            else if(randomNumber1=='1'&&randomNumber2=='3'){
                result.innerHTML="Computer Win!";
                C_score++;
            }
            else if(randomNumber1=='2'&&randomNumber2=='1')
            {
                result.innerHTML="Computer Win!";
                C_score++;
            }
            else if(randomNumber1=='2'&&randomNumber2=='3')
            {
                result.innerHTML="You Win!";
                Y_score++;
            }
            else if(randomNumber1=='3'&&randomNumber2=='1')
            {
                result.innerHTML="You Win!";
                Y_score++;
            }
            else if(randomNumber1=='3'&&randomNumber2=='2')
            {
                result.innerHTML="Computer Win!";
                C_score++;
            }
            score[0].innerHTML=C_score;
            console.log(score[0].innerHTML);
            score[1].innerHTML=Y_score;
            console.log(score[1].innerHTML)
            break;
        default:
            break;
    }
})


