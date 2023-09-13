import "./styles.css"
import Image from 'next/image'

export default function AssignmentContainer() {
 
    return (
    // <div className="aspect-square bg-white w-96 fixed top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]">
    <div className="bigbox">
        <button className="cancel-button"><Image src="../../public/x.jpg" alt="cancel" width={10} height={10}/></button>
        <input placeholder="Assignment Name"></input>
        <input placeholder="Assignment Information"></input>
        <input placeholder="Due Date and Time"></input> 
        <button className="submit-button">Submit</button>
    </div>
    // </div>
    )
    
}