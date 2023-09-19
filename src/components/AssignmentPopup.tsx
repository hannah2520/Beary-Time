import "./styles.css"

// Next
import Image from "next/image"

// Icons
import CancelIcon from "@public/x.jpg"

export default function AssignmentContainer() {
  const rectStyles = "p-5 m-5 rounded-lg shadow-md"
  const inputStyles = `${rectStyles} bg-neutral-200 outline-none shadow-neutral-400`

  return (
    <div className="aspect-square bg-white w-96 fixed top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] flex flex-col p-8 rounded-2xl drop-shadow-md">
      <button className="cancel-button">
        <Image src={CancelIcon} alt="Cancel Icon" width={30} height={30} />
      </button>
      <input className={inputStyles} placeholder="Assignment Name"></input>
      <input
        className={inputStyles}
        placeholder="Assignment Information"
      ></input>
      <input className={inputStyles} placeholder="Due Date and Time"></input>
      <button className={`${rectStyles} bg-[#a5b194] shadow-[#737d63] hover:brightness-95`}>
        Submit
      </button>
    </div>
  )
}
