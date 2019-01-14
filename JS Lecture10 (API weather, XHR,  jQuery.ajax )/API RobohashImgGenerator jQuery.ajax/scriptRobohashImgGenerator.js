// https://market.mashape.com/blaazetech/robohash-image-generator

const inputText = document.getElementById('input-text');
const send = document.getElementById('send');
send.addEventListener('click', createRequest);

let imgElement = document.createElement('img');
document.body.appendChild(imgElement);

function createRequest(e) {
    e.preventDefault();
    let inputValue = inputText.value;
    if (inputValue) {
        $.ajax({
            url: 'https://robohash.p.mashape.com/index.php?text=' + inputValue,
            method: 'GET',
            headers: {
                'X-Mashape-Key': 'Yq1LgSV9jmmshqPJhUcGwBnpTA9cp1teUo7jsnZFizwVPDpTZ0',
                'Accept': 'application/json'
            },
        }).done(createImgUrl);

        function createImgUrl(data) {
            let value = data.replace('{"imageUrl":"', '');
            value = value.replace('"}', '');
            imgElement.setAttribute('src', value);
        }
    }
}
