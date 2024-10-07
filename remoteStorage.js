function onloadFunc() {
    console.log("test");
    loadData("/name"); // to Log a element we have give a path and to Log a object will be without a path loadData(""); 
}


const BASE_URL = "https://remotestorage-300dd-default-rtdb.europe-west1.firebasedatabase.app/";

async function loadData(path="") {
   let response = await fetch(BASE_URL+ path + ".json");
   let responseToJson = await response.json();
   console.log(responseToJson);
   
}