// https://market.mashape.com/montanaflynn/spellcheck

const inputText = document.getElementById("input-text");
const send = document.getElementById("send");
send.addEventListener("click", validateMe);

let divElement = document.createElement('div');
document.body.appendChild(divElement);
let divElement1 = document.createElement('div');
document.body.appendChild(divElement1);

function validateMe(e) {
    e.preventDefault();
    let inputValue = inputText.value;
    if (inputValue) {
        let xhr = new XMLHttpRequest();
        let xhrString = "https://montanaflynn-spellcheck.p.mashape.com/check/?text=" + inputValue;
        console.log("xhrString: " + xhrString);
        xhr.open('GET', xhrString, true);
        xhr.setRequestHeader('X-Mashape-Key', 'Xy3JYWN3cxmshuy14itxBUqutrZYp1RFuhWjsnGOWyDuqMPv9W');
        xhr.setRequestHeader('Accept', 'application/json');
        console.log("xhr.readyState: " + xhr);
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4) {
                let receivedData = JSON.parse(xhr.responseText);
                console.log("receivedData" + receivedData);
                divElement.innerText = 'suggestion: - ' + receivedData.suggestion;
                if (receivedData.corrections[inputValue] !== undefined) {
                    divElement1.innerText = 'corrections: - ' + receivedData.corrections[inputValue];
                }
            }
        };
        xhr.send();
    }
}
