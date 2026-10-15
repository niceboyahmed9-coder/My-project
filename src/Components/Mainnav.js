import react from 'react';
import { Link , Outlet } from 'react-router-dom';

function Mainnav(){  

    return(
    <>

        <Link to="/home">Home</Link> &nbsp;
        <Link to="/about">About</Link> &nbsp;
        <Link to="/contact">Contact</Link> &nbsp;

        <Outlet/>

        </>
    )
}

export default Mainnav;