for (let i = 2; i <= 100; i++) {
    const newDiv = document.createElement('div')
    let id = 'block-' + i
    newDiv.setAttribute("id", id)
    newDiv.setAttribute('class', 'red-block')
    document.getElementById('blocks').appendChild(newDiv)
}

const blocks = document.getElementById('blocks')

blocks.addEventListener('mouseover', deleteBlock) 
function deleteBlock () {
    
}