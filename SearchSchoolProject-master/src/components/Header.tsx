import { User } from "lucide-react";
import { Link } from "react-router-dom"
import Search from "./Search";

interface HeadProp {
    search_string?: (e: string) => void
}

const Header = ({ search_string }: HeadProp) => {

    return (
        <header className="h-16 p-4 bg-slate-500 flex justify-between items-center sticky top-0">
            <Link to={"/"}>Header Image</Link>
            <Search search_params={(e) => search_string && search_string(e)} />
            <Link to={"/admin"}>
                <User color="white" />
            </Link>
        </header>
    )
}

export default Header