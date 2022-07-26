let p = null;
let texts;

function mic(){
    window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

   let recognition = new SpeechRecognition();
   recognition.interimResults = true;
   recognition.lang = 'ko-KR';

   let makeNewTextContent = function() {
     p = document.createElement('p');
     p.className = "bridge";
     document.querySelector('.words').appendChild(p);
   };

   recognition.start();

   recognition.onstart = function() {
     makeNewTextContent();
   };

   recognition.onend = function() {
     recognition.start();
   };

   recognition.onresult = function(e) {
     texts = Array.from(e.results).map(results => results[0].transcript).join("");
     texts.replace(/느낌표|강조|뿅/gi, '❗️');
  
     p.textContent = texts;
     localStorage.setItem("text", texts);
   };
}

function check(){
    var flag = confirm(texts+" 이(가) 맞습니까?");
    console.log(texts);

    if(flag){
     window.open("Key_.html", "_self");
    }
}


