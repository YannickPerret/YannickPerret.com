import React, {useState} from 'react';
import { useDispatch } from 'react-redux';
import { getAllPosts, getPostBySearch } from '../../redux/reducer/BlogReducer';



const SearchBar = () =>{

    const [filterData, setFilterData] = useState("")

    const dispatch = useDispatch()

    const handleFilterChange = (_search) =>{
        setFilterData(_search)

        if(_search.length < 1){
            dispatch(getAllPosts())
        }
        else{
            dispatch(getPostBySearch(_search))
        }
    }

    return (
        <>
            <header className="content__header" >
                <h2>Listes des articles du blog</h2>
                <div>
                    <form onSubmit={(e => e.preventDefault())}>
                        <label>Rechercher un article </label>
                        <input 
                            type="text" 
                            placeholder="Je recherche..." 
                            value={filterData} 
                            onChange={(e => handleFilterChange(e.target.value))}
                        />
                    </form>                  
                </div>
            </header>
        </>
    )  
}

export default SearchBar;