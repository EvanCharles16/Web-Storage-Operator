const addItemInHTML = (value) => {

    if (value == null) {
        return;
    }

    const daftarList = document.getElementsByClassName("daftar-list")
    const li = document.createElement("li")
    const content = document.createTextNode(value)

    daftarList[0].appendChild(li)
    li.appendChild(content)
}

const addItem = () => {
    const itemInput = document.getElementsByName("itemInput")
    let itemInputValue = itemInput[0].value

    addItemInHTML(itemInputValue)
    let itemArray = localStorage.getItem("item");


    if ( itemArray == null ) {
        //jika itemArray adalah string atau null maka kita bikin array baru dengan key 0 dengan value 
        //itemInputValue
        itemArray = [itemInputValue]
    } else {
        //jika itemArray adalah bukan string atau null maka kemungkinan dia adalah array
        //jadi kita tambahkan dengan menggunakan method "push"
        itemArray = JSON.parse(itemArray)
        itemArray.push(itemInputValue)
    }
    // debugger;
    // localStorage.setItem("item", itemArray);

    //merubah array ke string supaya bisa disimpan di local storage
    const itemArrayStringify = JSON.stringify(itemArray);
    localStorage.setItem("item", itemArrayStringify);
}

const runNow = () => {
    const item = localStorage.getItem("item")

    addItemInHTML(item)
}

runNow();