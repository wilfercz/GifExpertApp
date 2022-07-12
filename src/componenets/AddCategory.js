import React, { useState } from 'react';
import PropTypes from 'prop-types';

const AddCategory = ({Agregar}) => {

    const [TextValue, ChangeText] = useState('');

    const InputChange = (e) =>{
        ChangeText(e.target.value);
    }

    const TextSubmit = (e) =>{
        e.preventDefault();

        if( TextValue.trim().length > 2 ){
            Agregar(cats => [TextValue, ...cats]);
            ChangeText('');
        }
    
    }

    return ( 
        <form onSubmit={TextSubmit}>
            <input
                type="text"
                value={TextValue}
                onChange={ InputChange }
            ></input>
        </form>
     );
}

AddCategory.propTypes = {
    Agregar: PropTypes.func.isRequired
}
 
export default AddCategory;