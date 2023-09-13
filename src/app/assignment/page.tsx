// Components
import AssignmentContainer from "@/components/AssignmentContainer"
import AssignmentPopup from "@/components/AssignmentPopup"
export default function Assignment() {
    return (
        <div className="bg-[#a5b194] h-screen pt-8 p-26">
            <header className="text-center text-6xl font-bold">Upcoming Assignments</header>
            <AssignmentPopup />
            <AssignmentContainer />
            
        </div>
    )
}