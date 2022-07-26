var keyword = localStorage.getItem("text");

/////////////////////////////////* json에서 메뉴 데이터 가져오기 *//////////////////////////////////////

var SearchedMenu = new Array();     //추출된 메뉴가 들어갈 배열

var MenuData = new Array();  
var MenuData_Name = new Array();     //json에서 가져온 메뉴 이름 배열
var MenuData_URL = new Array();      //json에서 가져온 메뉴 그림 배열
var MenuData_Price = new Array();    //json에서 가져온 메뉴 가격 배열

MenuData = JSON.parse(jsonTmp);      //JSON형태로 저장된 메뉴데이터를 자바스크립트로 다시 파싱

for(i=0; i<MenuData.length; i++){
    MenuData_Name[i] = MenuData[i].name;
    MenuData_URL[i] = MenuData[i].PictureUrl;
    MenuData_Price[i] = MenuData[i].price;
}

//////////////////////////////////*키워드가 포함된 메뉴 탐색*/////////////////////////////////////////////

function search(){
  
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

///////////////////////////////*탐색한 메뉴 윈도우에 출력 *///////////////////////////////////////////////

window.onload = function(){
    
    search();

    //키워드 안내 문구 출력
    var tmp = document.getElementById('key');
    tmp.innerText = keyword;

    //메뉴 출력
    for(j=0; j<SearchedMenu.length; j++){
        var winDiv = document.createElement('div');
        winDiv.className = "picDiv";
        
        var winPic = document.createElement('img');
        winPic.src = MenuData_URL[SearchedMenu[j].num];
        winPic.className = "pic";
        
        winDiv.append(winPic);
        console.log(winDiv);
        
        document.body.append(winDiv);    
   
    }
}



