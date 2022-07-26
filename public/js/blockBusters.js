for (let i = 2; i <= 100; i++) {
    const newDiv = document.createElement('div')
    let id = 'block-' + i
    newDiv.setAttribute("id", id)
    newDiv.setAttribute('class', 'red-block')
    document.getElementById('blocks').appendChild(newDiv)
}

const blocks = document.getElementsByClassName('red-block')

for (const block of blocks) {
    block.addEventListener('mouseover', deleteBlock) 
}
function deleteBlock (e) {
        const block = e.target
        block.remove();
}