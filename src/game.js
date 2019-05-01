export class Game {

    run() {
        let useLouisNumber;
        let lastHole;
        alert("Get ready, Stewie!");
        startTheDamnCountdown();
        var points = 0;
        var timeLeft = 25;
        var alreadyUsed = 0;
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
 
             document.getElementById('lois' + picNumber).src = ('img/bloodyLois.png');
         
             setTimeout(function(){
                document.getElementById('lois' + picNumber).src = ('img/Lois.png');
             }, 1000);
        };
 
         function startTheDamnCountdown(){
            var gameEnd = setInterval(function(){
                 document.getElementById('timeLeft').innerHTML = timeLeft ;
                 popTheHead();
                 if (timeLeft  == 0){
                     clearInterval(gameEnd);
                     alert("GAME OVER! You killed Louis " + points + " times.");
                 }
                 else {
                     timeLeft --;
                 }
             },1000);
         }

        function randomLouis() {
            const useLouisNumber = Math.floor(Math.random() * (7 - 1) + 1);
        
            if(useLouisNumber === alreadyUsed) {
                return randomLouis();
            }
        
            alreadyUsed = useLouisNumber;
            return useLouisNumber;
        }

        function popTheHead() {
            const loisNumber = randomLouis();
                             
            document.getElementById('lois' + loisNumber).style.display = "block";
            setTimeout(() => {
               document.getElementById('lois' + loisNumber).style.display = "none";
            }, 950);

        }

    }
    stop() {

    }

 }