import Closet from "../../componenets/Closet/Closet";
import DashHeader from "../../componenets/DashHeader/DashHeader";
import '../Dashboard/Dashboard.scss'


export default function Dashboard() {
    return(
        <main className="main">
            <DashHeader />
            <Closet />
        </main>
    )
}