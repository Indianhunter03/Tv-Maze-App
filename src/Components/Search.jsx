import React, { useState } from 'react'
import Actor from './Actors';
import Show from './Show';


const Search = () => {

    const [actor, setActor] = useState(false);
    const [show, setShow] = useState(false);

    const setActorFilter = () => {
        setShow(false);
        setActor(true);
    }

    const setShowFilter = () => {
        setActor(false);
        setShow(true);
       
    }
    
    return (
        <>
            <section className="mt-7" style={{ marginTop:'20px',padding:'20px',backgroundImage:`url("https://images5.alphacoders.com/403/thumb-1920-403408.jpg")`,backgroundRepeat:'no-repeat',width:'300px',opacity:'80%',marginLeft:'10px',color:'white',borderRadius:'25px'}}>
                {/* <div className="container">
                    <div className="row mt-5">
                        <div className="col-md-3"> */}
                        <h6>Choose your Category</h6>

                            <input type="radio" name="movie" onChange={() => setActorFilter()} /> <strong> BY ACTOR </strong>
                            <input type="radio" name="movie" onChange={() => setShowFilter()} className="ms-4" /> <strong> BY SHOWS </strong>
                        {/* </div>
                    </div>
                </div> */}
            </section>
            {actor ? <Actor /> : ""}
            {show ? <Show /> : ""}
        </>
    )
}

export default Search