import React, { useState } from 'react';
import AddCategory from './componenets/AddCategory';
import GifGrid from './componenets/GifGrid';


const GifExpertApp = () => {

    const [categories, addCategories] = useState(['Dragon Ball']);

    return ( 
        <>
            <h2>GifExpertApp</h2>

                <AddCategory Agregar={addCategories} />

            <hr></hr>

            <ol>
                {
                    categories.map( (categoria) => {
                        return <GifGrid key={categoria} category = {categoria}/>
                    })
                }
            </ol>

        </>
     );
}
 
export default GifExpertApp;