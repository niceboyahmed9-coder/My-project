import react from 'react'
import Exp from './Exp'

function Profile(props) {
    return (
    <>
        <h2> I am {props.stack} developer </h2>
        <Exp years={props.years} name={props.name} />
    </>
    ) 
} 

export default Profile;