interface SearchProp {
    search_params?: (e: string) => void
}

const Search = ({ search_params }: SearchProp) => {



    return (
        <input type="text" placeholder="search" className="px-2 py-1" onChange={(e) => search_params && search_params(e.target.value)} />
    )
}

export default Search