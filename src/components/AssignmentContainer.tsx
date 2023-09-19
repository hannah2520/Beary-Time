import bear1 from "../../public/bear1.png"
import bear2 from "../../public/bear2.png"
import bear3 from "../../public/bear3.png"
import bear4 from "../../public/bear4.png"
import bear5 from "../../public/bear5.png"
import bear6 from "../../public/bear6.png"

import Image from "next/image";
export default function AssignmentContainer() {
    return <div className=" bg-[#a5b194] p-7 grid gap-3 grid-cols-3 grid-rows-3">
       <Image src={bear6} alt="bear6"/>
        <Image src={bear5} alt="bear5"/>
        <Image src={bear4} alt="bear4"/>
        <Image src={bear3} alt="bear3"/>
        <Image src={bear2} alt="bear2"/>
        <Image src={bear1} alt="bear1"/>

    </div>
}