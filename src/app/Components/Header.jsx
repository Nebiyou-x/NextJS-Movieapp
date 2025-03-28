import Menus from "@/components/Menu.jsx";
import { AiFillHome } from "react-icons/ai";
import { BsFillInfoCircleFill } from "react-icons/bs";

function Header(){
    return(
        <div className="flex justify-between items-center p-3 max-w-6xl mx-auto">

       <div className="flex gap-4">
        <Menus title="home" address="/" Icon={AiFillHome}/>
        <Menus title="about" address="/about" Icon={BsFillInfoCircleFill}/>

       </div>

       <div className="flex gap-1 items-center">
        <span className="text-2xl font-bold bg-amber-500 py-1 px-2 rounded-lg">IMDB</span>
        <span className="text-xl hidden sm-inline">Clone</span>

       </div>


        </div>
    )
}


export default Header;
