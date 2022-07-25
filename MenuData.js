var MenuArr = new Array();

// 버거
var Menu = new Object();
Menu.PictureUrl = "Images\\Burger\\burger.png";
Menu.name = "1955버거";
Menu.price = "5500";
MenuArr.push(Menu);

Menu = new Object();
Menu.PictureUrl = "Images\\Burger\\BigMac.png";
Menu.name = "빅맥버거";
Menu.price = "6500";
MenuArr.push(Menu);

Menu = new Object();
Menu.PictureUrl = "Images\\Burger\\Bulgogi.png";
Menu.name = "불고기버거";
Menu.price = "4500";
MenuArr.push(Menu);

Menu = new Object();
Menu.PictureUrl = "Images\\Burger\\CrispyOriental.png";
Menu.name = "크리스피오리엔탈버거";
Menu.price = "5500";
MenuArr.push(Menu);

Menu = new Object();
Menu.PictureUrl = "Images\\Burger\\DoubleBulgogi.png";
Menu.name = "더블불고기버거";
Menu.price = "5500";
MenuArr.push(Menu);

Menu = new Object();
Menu.PictureUrl = "Images\\Burger\\GoldenPotato.png";
Menu.name = "골든포테이토버거";
Menu.price = "6500";
MenuArr.push(Menu);

Menu = new Object();
Menu.PictureUrl = "Images\\Burger\\MacSpicyShanghai.png";
Menu.name = "맥스파이시상하이버거";
Menu.price = "6500";
MenuArr.push(Menu);

Menu = new Object();
Menu.PictureUrl = "Images\\Burger\\QuaterPounder.png";
Menu.name = "쿼터파운더버거";
Menu.price = "6500";
MenuArr.push(Menu);

Menu = new Object();
Menu.PictureUrl = "Images\\Burger\\ShrimpBeef.png";
Menu.name = "슈비버거";
Menu.price = "6500";
MenuArr.push(Menu);

Menu = new Object();
Menu.PictureUrl = "Images\\Burger\\SupremeShrimp.png";
Menu.name = "슈슈버거";
Menu.price = "6500";
MenuArr.push(Menu);

// 디저트
Menu = new Object();
Menu.PictureUrl = "Images\\Dessert\\Chocolate.png";
Menu.name = "초코아이스크림";
Menu.price = "1500";
MenuArr.push(Menu);

Menu = new Object();
Menu.PictureUrl = "Images\\Dessert\\IceCream.png";
Menu.name = "아이스크림";
Menu.price = "1000";
MenuArr.push(Menu);

Menu = new Object();
Menu.PictureUrl = "Images\\Dessert\\Strawberry.png";
Menu.name = "딸기아이스크림";
Menu.price = "1500";
MenuArr.push(Menu);

Menu = new Object();
Menu.PictureUrl = "Images\\Dessert\\ChocoOreo.png";
Menu.name = "초코오레오맥플러리";
Menu.price = "2800";
MenuArr.push(Menu);

Menu = new Object();
Menu.PictureUrl = "Images\\Dessert\\HersheyPretzel.png";
Menu.name = "허쉬프레젤맥플러리";
Menu.price = "2800";
MenuArr.push(Menu);

Menu = new Object();
Menu.PictureUrl = "Images\\Dessert\\Oreo.png";
Menu.name = "오레오맥플러리";
Menu.price = "2800";
MenuArr.push(Menu);

Menu = new Object();
Menu.PictureUrl = "Images\\Dessert\\StrawberryOreo.png";
Menu.name = "딸기오레오맥플러리";
Menu.price = "2800";
MenuArr.push(Menu);

Menu = new Object();
Menu.PictureUrl = "Images\\Dessert\\VeryStrawberry.png";
Menu.name = "딸기맥플러리";
Menu.price = "2800";
MenuArr.push(Menu);

// 맥모닝
Menu = new Object();
Menu.PictureUrl = "Images\\McMuffin\\BaconEgg.png";
Menu.name = "베이컨에그맥머핀";
Menu.price = "3900";
MenuArr.push(Menu);

Menu = new Object();
Menu.PictureUrl = "Images\\McMuffin\\ChickenCheese.png";
Menu.name = "치킨치즈머핀";
Menu.price = "3900";
MenuArr.push(Menu);

Menu = new Object();
Menu.PictureUrl = "Images\\McMuffin\\Egg.png";
Menu.name = "에그머핀";
Menu.price = "3400";
MenuArr.push(Menu);

// 사이드
Menu = new Object();
Menu.PictureUrl = "Images\\Side\\CheeseStick.png";
Menu.name = "치즈스틱";
Menu.price = "1800";
MenuArr.push(Menu);

Menu = new Object();
Menu.PictureUrl = "Images\\Side\\ChickenTomatoSnack.png";
Menu.name = "치킨토마토스낵랩";
Menu.price = "2800";
MenuArr.push(Menu);

Menu = new Object();
Menu.PictureUrl = "Images\\Side\\Coleslaw.png";
Menu.name = "코울슬로";
Menu.price = "1800";
MenuArr.push(Menu);

Menu = new Object();
Menu.PictureUrl = "Images\\Side\\FrenchFries.png";
Menu.name = "감자튀김";
Menu.price = "2300";
MenuArr.push(Menu);

Menu = new Object();
Menu.PictureUrl = "Images\\Side\\HashBrown.png";
Menu.name = "해쉬브라운";
Menu.price = "1800";
MenuArr.push(Menu);

Menu = new Object();
Menu.PictureUrl = "Images\\Side\\McNuggets.png";
Menu.name = "맥너겟";
Menu.price = "2500";
MenuArr.push(Menu);

Menu = new Object();
Menu.PictureUrl = "Images\\Side\\McWings.png";
Menu.name = "맥윙";
Menu.price = "2800";
MenuArr.push(Menu);

Menu = new Object();
Menu.PictureUrl = "Images\\Side\\ShanghaiChickenSnack.png";
Menu.name = "상하이치킨스낵랩";
Menu.price = "2800";
MenuArr.push(Menu);

//console.log(MenuArr);

var jsonTmp = JSON.stringify(MenuArr);
console.log(jsonTmp);


