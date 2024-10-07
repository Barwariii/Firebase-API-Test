function onloadFunc() {
    console.log("test");
    loadData();
}


const BASE_URL = "https://remotestorage-300dd-default-rtdb.europe-west1.firebasedatabase.app/";

async function loadData() {
   let response = await fetch(BASE_URL + ".json");
   let responseToJson = await response.json();
   console.log(responseToJson);
   
}