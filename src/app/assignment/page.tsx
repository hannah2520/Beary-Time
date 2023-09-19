// Components
import AssignmentContainer from "@/components/AssignmentContainer"
import AssignmentPopup from "@/components/AssignmentPopup"

export default function Assignment() {
    return (
        <div>
            <header className="text-center text-6xl font-bold bg-[#a5b194] p-10">Upcoming Assignments</header>
            <AssignmentPopup />
            <AssignmentContainer />
            
        </div>
    )
}