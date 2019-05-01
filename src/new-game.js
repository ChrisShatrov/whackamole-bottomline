export class NewGame {
    start() {
       alert("Get ready, Stewie!");
       startTheDamnCountdown();
       var points = 0;
       var timeLeft= 25;

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

            // document.getElementById('lois' + picNumber).src = ('img/bloodyLois.png');
        
            // setTimeout(function(){
            //    document.getElementById('lois' + picNumber).src = ('img/Lois.png');
            // }, 1000);
       };

        function startTheDamnCountdown(){
            var gameEnd = setInterval(function(){
                document.getElementById('timeLeft').innerHTML = timeLeft;
                if (timeLeft == 0){
                    clearInterval(gameEnd);
                    alert("GAME OVER! You killed Louis " + points + " times.");
                }
                else {
                    timeLeft--;
                }
            },1000);
        }

    }
 }