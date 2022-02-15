import React from 'react';

class SearchBar extends React.Component{
    constructor(props){
        super(props);
        this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
    }

    handleFilterTextChange(e){
        this.props.onFilterTextChange(e.target.value)
    }

render(){
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
                            value={this.props.filterText} 
                            onChange={this.handleFilterTextChange}
                        />
                    </form>                  
                </div>
            </header>
        </>
        )
    }   
}

export default SearchBar;