export const cantidadCaracteres = (input) =>{
    if(input.length >= 2 && input.length <= 30){
        return true
    }else{
        return false
    }
}

export const validarPrecio = (dato) =>{
        let patron = /^[0-9]{1,4}$/;
        if (patron.test(dato)){
            return true
        }else{
            return false
        }
}

export const hayCaracteres = (input) =>{
    if (input.length != 0){
        return true
    }else{
        return false
    }
}