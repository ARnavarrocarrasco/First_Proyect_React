import { useState } from "react"
import { AddCategory } from "./components/AddCategory"
import { GifGrid } from "./components/GifGrid"

export const GiftExpertApp = () => {
    
    

    const [categories, setCategories] = useState(["One Punch Man"])
    
    const onAddCategory = (newCategory) => {
        if (categories.includes(newCategory)) {
            alert('El texto ya existe en la lista')
            return;
        } 
        setCategories([newCategory, ...categories])
    }

    return (
    <>
        <h1>Gift Expert</h1>
        <AddCategory onNewCategory = {onAddCategory} />
    
        {
            categories.map((category) => (
                <GifGrid 
                    key={category}
                    category={category}
                />
            ))
        }


    </>
  )
}


