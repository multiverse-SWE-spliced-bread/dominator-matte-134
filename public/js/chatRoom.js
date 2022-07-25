const btn = document.getElementById('send-btn')

btn.addEventListener('click', sendMsg)
function sendMsg () {
    const newP = document.createElement('p')
    let text = document.getElementsByName('message')[0].value
    newP.innerText = text
    const chat = document.getElementById('chat')
    chat.appendChild(newP)
    document.getElementsByName('message')[0].value = ""
}
