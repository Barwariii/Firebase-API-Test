function onloadFunc() {
    console.log("test");
    loadData("/name"); // to Log a element we have give a path and to Log a object will be without a path loadData(""); 
    // postData("/user2/", {"Name": "Paul", "E-Mail": "paul123@blabla.com"});
    // putData("/users/user3", {"Name": "Kristina", "E-Mail": "Kristina123@blabla.com", "passwort": "123456"});
    // deleteData("/name2");
}


const BASE_URL = "https://remotestorage-300dd-default-rtdb.europe-west1.firebasedatabase.app/";


async function loadData(path="") {
   let response = await fetch(BASE_URL+ path + ".json");
   return responseToJson = await response.json(); // um damit weiter arbeiten
//    let responseToJson = await response.json();
//    console.log(responseToJson);
}


async function postData(path="", data={}) {
    let response = await fetch(BASE_URL + path + ".json",{
        method: "POST",
        header: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data)
    });
    return responseToJson = await response.json();
}


async function putData(path="", data={}) {
    let response = await fetch(BASE_URL + path + ".json",{
        method: "PUT",
        header: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data)
    });
    return responseToJson = await response.json();
}


async function deleteData(path="") {
    let response = await fetch(BASE_URL + path + ".json", {
        method: "DELETE",
    });
    return responseToJson = await response.json();
}