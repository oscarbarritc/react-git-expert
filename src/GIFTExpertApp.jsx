import { useState } from "react";
import { AddCategory, GifGrid } from "./components";


export const GIFTExpertApp = () => {

    const [categories, setCategories] = useState([ 'One Punch' ]);
    const onAddCategory = (newCategory) => {

        if (categories.includes(newCategory) ) return;

        //categories.push(newCategory);
        setCategories([newCategory, ...categories]);
        //setCategories(cat => [...cat, 'Valorant']);
    }

  return (
    <>
        {/* Titulo */}
        
        <h1>GifExpertApp</h1>

        {/* Input */}

        <AddCategory 
            onNewCategory={ ( value ) => onAddCategory(value) }
            currentCategories = {categories}
        />

        {/* Listado de Gif */}
        
        { 
            categories.map( (category) =>(
                <GifGrid 
                    key={ category }
                    category={ category }
                />
            
            ) ) 
        }
        {/* Gif Item */}

    </>
  )
}



// NO HACER ESTO
    // if (true) {
    //     const [categories, setCategories] = useState([ 'One Punch', 'Dragon Ball' ]);
    // }