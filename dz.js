document.querySelector('form').addEventListener('submit', (event)=>{
    event.preventDefault()
    const email=document.getElementById('email').value
    const error=document.getElementById('container')
    const regex=/\w+@+\w+\.+\w+/
    
        if (regex.test(email)){
            alert('Регистрация прошла успешно')
            error.innerText=''
        }
        else{
            error.innerText='Некорректный формат почты'
            error.style.color='red'
        }
})

const border=document.getElementById('border')
border.style.border='1px solid black'
border.style.height='230px'
border.style.width='300px'
border.style.marginTop='20vh'
border.style.marginLeft='40vw'
