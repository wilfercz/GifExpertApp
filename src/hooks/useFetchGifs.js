import { useEffect, useState } from "react"
import { getGifs } from "../helpers/getGifs";

const useFetchGifs = (category) => {
    
    const [Estado, CambiarEstado] = useState({
        Imgs: [],
        loading: true
    });

    useEffect( ()=>{
        getGifs(category)
            .then(imgs => {
                    CambiarEstado({
                        Imgs: imgs,
                        loading: false
                    });
            });
    }, [category]); 

    return Estado;
}

export default useFetchGifs
