//let container = document.querySelector('.container')
//let newPara = document.createElement('p')
//container.appendChild(newPara)
//container.innerHTML = newPara//
//newPara.innerHTML = `My name is john Doe`//
///let newHead = document.createElement('h1')
//container.appendChild(newHead)
//newHead.innerHTML = `introduction`
//newHead.classList.add('heading')
//console.log(newPara);


function addBox(){
    let newBox = document.createElement('div')
    document.querySelector('.container').appendChild(newBox)
    newBox.classList.add('box')
}
