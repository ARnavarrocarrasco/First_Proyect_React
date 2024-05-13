import { useState } from "react";


export const AddCategory = ({onNewCategory}) => {
    
    const [inputValue, setInputValue] = useState('')

    //funció para manejar el cambio del input
    const handleInputChange = ({target}) => {
        setInputValue(target.value)
    }

    //función para manejar el envío del formulario
    const handleSubmit = (evento) => {
        evento.preventDefault(); //Evitar que el formulario recargue la página
        const newInput = inputValue.trim();
        
        
        
        if(newInput.length <= 1) return;
        onNewCategory(newInput)
        setInputValue("");
    }   

    return (
        <form onSubmit={(evento) => handleSubmit(evento)}>
            <input 
                type="text" 
                value={inputValue}
                onChange={handleInputChange}
                
                placeholder="Bucar Gifs"
            />
        </form>
        
    )
}
