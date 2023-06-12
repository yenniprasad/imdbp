import Link from "next/link";
import MenuItem from "./MenuItem"
import {AiFillHome} from "react-icons/ai";
import {BsFillInfoCircleFill} from "react-icons/bs";
import DarkModeSwitch from "./DarkModeSwitch";

const Header = () => {
  return (
    <div className="flex justify-between items-center mx-2 max-w-6xl sm:mx-auto py-6">
        <div className="flex my-4">
            <MenuItem title="HOME" link="/" Icon={AiFillHome}/>
            <MenuItem title="ABOUT" link="/about" Icon={BsFillInfoCircleFill}/>
        </div>
        <div className="flex items-center space-x-5">
            <DarkModeSwitch />
            <Link href="/">
                <h2 className="text-2xl">
                    <span className="font-bold bg-amber-500 py-1 px-2 rounded-lg mr-1">IMDB</span>
                    <span className="text-xl hidden sm:inline">Clone</span>
                </h2>    
            </Link> 
        </div>

    </div>
  )
}

export default Header