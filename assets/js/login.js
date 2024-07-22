


const showHiddenPass = (inputPass, inputIcon) => { 
    const input = document.getElementById(inputPass),
            iconEye = document.getElementById(inputIcon)

    iconEye.addEventListener('click', () => {
        //cambiar contrasena a texto

        if(input.type === 'password') {

            input.type = 'text'

            iconEye.classList.add('ri-eye-line')
            
iconEye.classList.remove('ri-eye-off-line')


        }else{
            
            input.type = 'password'

            iconEye.classList.remove('ri-eye-line')

             iconEye.classList.add('ri-eye-off-line')
        }

    })
}


showHiddenPass('paw','input-icon')