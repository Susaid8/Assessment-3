const thisButton = document.querySelectorAll('#buttons')

for(let i = 0;i<thisButton.length;i++){
    thisButton[i].addEventListener('click', (e)=> {
        alert(`My favorite ${e.target.id} is ${e.target.value}`)
    })
}

let buttons = document.querySelector('thisbutton')
buttons = [...buttons.children]
console.log(buttons)

buttons.forEach(e => e.addEventListener('click', () => {
    switch(e.id) {
        case 'color':
            alert('Black')
            break;
        case 'place':
            alert('Bali')
            break;
        default:
            alert('Praying')
    }
}))