import "./styles.css"

// Next
import Image from "next/image"

// Icons
import CancelIcon from "@public/x.jpg"

export default function AssignmentContainer() {
  return (
    // <div className="aspect-square bg-white w-96 fixed top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]">
    <div className="bigbox">
      <button className="cancel-button">
        <Image src={CancelIcon} alt="Cancel Icon" width={30} height={30} />
      </button>
      <input placeholder="Assignment Name"></input>
      <input placeholder="Assignment Information"></input>
      <input placeholder="Due Date and Time"></input>
      <button className="submit-button">Submit</button>
    </div>
    // </div>
  )
}
