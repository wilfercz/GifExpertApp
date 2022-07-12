import React from 'react';
import useFetchGifs from '../hooks/useFetchGifs';
import GifGridItem from './GifGridItem';

const GifGrid = ({category}) => {

    const {Imgs, loading} = useFetchGifs(category);

    return (
        <>
             <h3 className='animate__animated animate__fadeIn'>{category}</h3>

            {loading && <p className='animate__animated animate__flash'>Cargando...</p>}
             
             <div className='card-grid'>   
                {
                    Imgs.map( (img) => {
                        return <GifGridItem 
                            key={img.id}
                            title={img.title}
                            url={img.url}
                        />
                    })
                } 
            </div>
        </>
     );
}
 
export default GifGrid;