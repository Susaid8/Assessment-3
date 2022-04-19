const thisButton = document.getElementsByClassName('this-button')

for(let i = 0;i<thisButton.length;i++){
    thisButton[i].addEventListener('click', (e)=> {
        alert(`My favorite ${e.target.id} is ${e.target.value}`)
       
    })
}

