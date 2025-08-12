const inputElement = document.getElementById("inputID");
const generateBtn = document.getElementById("generateBtn");
const itemList = document.getElementById("item_list");

const webWorkers = new Worker('worker.js');

generateBtn.onclick = () => {
    webWorkers.postMessage(inputElement.value);
}

webWorkers.onmessage = (event) => {
    console.log(event);
    event.data?.forEach((item) => {
        const li = document.createElement("li");
        li.textContent = item;
        itemList.append(li);
    })
}
