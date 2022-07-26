//////////////////////////////////////////*키워드 데이터 가져오기*//////////////////////////////////////


/////////////////////////////////* json에서 메뉴 데이터 가져오기 *//////////////////////////////////////

var SearchedMenu = new Array();     //추출된 메뉴가 들어갈 배열

var MenuData = new Array();  
var MenuData_Name = new Array();   //json에서 가져온 메뉴 이름 배열
var MenuData_URL = new Array();      //json에서 가져온 메뉴 그림 배열
var MenuData_Price = new Array();    //json에서 가져온 메뉴 가격 배열

MenuData = JSON.parse(jsonTmp);         //JSON형태로 저장된 메뉴데이터를 자바스크립트로 다시 파싱

for(i=0; i<MenuData.length; i++){
    MenuData_Name[i] = MenuData[i].name;
    MenuData_URL[i] = MenuData[i].PictureUrl;
    MenuData_Price[i] = MenuData[i].price;
}
//console.log(MenuData_Name);
//console.log(MenuData_Price);
//console.log(MenuData_URL);


//////////////////////////////////*키워드가 포함된 메뉴 탐색*/////////////////////////////////////////////
var keyword;

function search(){
  keyword = JSON.parse(word);
 // keyword = texts;
  
  var TmpObj;
  for(k=0; k < MenuData_Name.length; k++){
      TmpObj = new Object();
      var str = MenuData_Name[k];
      if(str.indexOf(keyword) >= 0){
          TmpObj.searched = str;
          TmpObj.num = k;
          SearchedMenu.push(TmpObj);
      }
  }
}
//console.log(SearchedMenu);


///////////////////////////////*탐색한 메뉴 윈도우에 출력 *///////////////////////////////////////////////

window.onload = function(){
    
    search();

    //키워드 안내 문구 출력
    var tmp = document.getElementById('key');
    //console.log(tmp);
    tmp.innerText = keyword;

    //메뉴 출력
    for(j=0; j<SearchedMenu.length; j++){
        var winDiv = document.createElement('div');
        winDiv.className = "picDiv";
        
        var winPic = document.createElement('img');
        winPic.src = MenuData_URL[SearchedMenu[j].num];
        winPic.className = "pic";

      //  winDom.append(winPic);
      //  console.log(winDom);
        
        winDiv.append(winPic);
        console.log(winDiv);
        
        document.body.append(winDiv);    
   
    }

}




/*최장공통부분수열 알고리즘 */
//Subsequence
/*
const string1 = string[0];
const string2 = string[1];
const s1 = string1.length;
const s2 = string2.length;

const dp = Array.from(new Array(s1 + 1), () => new Array(s2 + 1));
for (let i = 0; i <= s1; i++) {
  dp[i][0] = 0;
}
for (let j = 0; j <= s2; j++) {
  dp[0][j] = 0;
}

for (let i = 1; i <= s1; i++) {
  for (let j = 1; j <= s2; j++) {
    if (string1.charAt(i - 1) === string2.charAt(j - 1)) {
      dp[i][j] = dp[i - 1][j - 1] + 1;
    } else {
      dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
    }
  }
}
console.log(dp[s1][s2]);
*/

//SubString
/*
let answer = 0;

let LCS = new Array(s.length+1);
for(let i=0; i<LCS.length; i++){
  LCS[i] = new Array(t.length+1).fill(0);
}

for(let i=1; i<=s.length; i++){
  for(let j=1; j<=t.length; j++){
    if(s[i-1]===t[j-1])
      LCS[i][j] = LCS[i-1][j-1] + 1;
    else
      LCS[i][j] = 0;

    if(LCS[i][j] > answer)
      answer = LCS[i][j];
  }  
}

console.log(answer);
 */


