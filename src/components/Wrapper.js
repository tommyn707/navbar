import React, { useState } from 'react';
import NavBar from './Navbar';
import FormWrapper from './FormWrapper';

const Wrapper = () => {

    const [formState, setFormState] = useState("")
    return(
        <div>
            <NavBar person={formState} />
            <FormWrapper changeHandler={setFormState}/>

        </div>
    )
}
export default Wrapper;