export class Game {

    run(startOrNot) {
        var timeLeft = 0;
        var gameEnd = true;
        var points = 0;

        window.clearTimeout();
        if(startOrNot === false) {
            clearTimeout(window.timeOut);
            clearTimeout(window.timeOut2);
            document.getElementById('startNewGameButton').style.display = "block";
            document.getElementById('stopGameButton').style.display = "none";
            document.getElementById('timeLeft').innerHTML = 0;
        }
        else {
            alert("Get ready, Stewie!");
            startTheDamnCountdown();
            timeLeft = 25;
            var alreadyUsed = 0;
            gameEnd = false;
            document.getElementById('points').innerHTML = 0;
            document.getElementById('startNewGameButton').style.display = "none";
            document.getElementById('stopGameButton').style.display = "block";
            document.getElementById('inactive-game-container').style.display = "none";
            document.getElementById('active-game-container').style.display = "block";
     
            const loisPic1 = document.getElementById('lois1');
            loisPic1.addEventListener('click', function() { killedLois(1); }, false);
            const loisPic2 = document.getElementById('lois2');
            loisPic2.addEventListener('click', function() { killedLois(2); }, false);
            const loisPic3 = document.getElementById('lois3');
            loisPic3.addEventListener('click', function() { killedLois(3); }, false);
            const loisPic4 = document.getElementById('lois4');
            loisPic4.addEventListener('click', function() { killedLois(4); }, false);
            const loisPic5 = document.getElementById('lois5');
            loisPic5.addEventListener('click', function() { killedLois(5); }, false);
            const loisPic6 = document.getElementById('lois6');
            loisPic6.addEventListener('click', function() { killedLois(6); }, false);
       
            function killedLois(picNumber) {
                 points+=1;
    
                 document.getElementById('points').innerHTML = points;
                 // displays bloody Lois for a second
                 document.getElementById('lois' + picNumber).src = ('img/bloodyLois.png');
             
                 setTimeout(function(){
                    document.getElementById('lois' + picNumber).src = ('img/Lois.png');
                 }, 800);
                 // adding this here as well, which makes it harder because it makes the process faster
                 // popTheHead();
            };

             // Setting timeout to 25 seconds
             function startTheDamnCountdown() {
                gameEnd = false;
                popTheHead();
                window.timeOut = setTimeout(() => gameEnd = true, 25000);
              }

            // Generating a random Lois number between 1 and 6
            function randomLois() {
                const useLouisNumber = Math.floor(Math.random() * (7 - 1) + 1);
            
                // Making sure prev. number is not used
                if(useLouisNumber === alreadyUsed) {
                    return randomLois();
                }
            
                alreadyUsed = useLouisNumber;
                return useLouisNumber;
            }
        
            // popping her head and displaying it for a sec each time
            function popTheHead() {
                const loisNumber = randomLois();
                                 
                document.getElementById('lois' + loisNumber).style.display = "block";

                window.timeOut2 = setTimeout(() => {
                   document.getElementById('lois' + loisNumber).style.display = "none";
                    if (timeLeft  === 0 && gameEnd === true ){
                        document.getElementById('startNewGameButton').style.display = "block";
                        document.getElementById('stopGameButton').style.display = "none";
                        alert("GAME OVER! You killed Louis " + points + " times.");
                    }
                    else {
                        timeLeft --;
                        document.getElementById('timeLeft').innerHTML = timeLeft;
                        popTheHead();
                    }
                }, 1000);
    
            }
        }

    }

 }