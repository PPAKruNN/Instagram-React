import Stories from "./stories";
import Posts from "./posts"
import Sidebar from "./sidebar";

export default function Body()
{
    return (
        <div className="corpo">
            <div className="esquerda">
                <Stories></Stories> 
                <Posts></Posts>
            </div>
            <Sidebar></Sidebar>
        </div>
    )
}