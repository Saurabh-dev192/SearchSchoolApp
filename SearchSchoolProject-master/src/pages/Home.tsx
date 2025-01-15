import { useState } from "react"
import Header from "../components/Header"
import SchoolList from "../components/SchoolList"

const Home = () => {

    const [search, setSearch] = useState("");

    return (
        <>
            <Header search_string={(e) => setSearch(e)} />
            <SchoolList search={search} />
        </>
    )
}

export default Home