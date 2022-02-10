import React from "react";
import Articles from "./components/Articles.js";
import Cards from "./components/Cards.js";
import { getAllData, getAPIDataFromSearch } from './API/db.js'
import SubMenu from "./components/SubMenu.js";

/* 
Articles : 
image => varchar => image du billet
imageTitle => varchar => alt de l'image
title => Text => titre du billet
timeRead => int => la durée de lecture du billet
description => text => Un une explication du contenu
content => TEXT => le contenu du billet
date => timestamp => la date de création du billet
dateUpdate => timeStamp => la date de modidication du billet
slug => varchar => l'url formaté
tag => int => la catégorie du billet
*/
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
            <form>
                <label>Rechercher un article </label>
                <input 
                    type="text" 
                    placeholder="Je recherche..." 
                    value={this.props.filterText} 
                    onChange={this.handleFilterTextChange}
                    onSubmit={(e => e.defaultPrevented())}
                />
            </form>
        )
    }
}


class Blog extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            posts: [],
            selectedPost : 0,
            filterText : '',
            numPostShow: 10
          };
          this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
      }
      //GET DATA

    getData(){
        getAllData().then(data => {
            this.setState({posts : data})
        })
    }

    getDataFromSearch = (sentence) =>{
        console.log(sentence.length)
        if(sentence.length > 0){
            getAPIDataFromSearch(sentence).then(data =>{
                this.setState({posts : data})
            })
        }else
        {
            this.getData()
        }
    }

    //ON CHANGE
    handleFilterTextChange(filterText) {
        this.setState({
          filterText: filterText
        });
      }

    changeSelectedItem = (id) =>{
        this.setState({selectedPost : id, filterText : ""})
    }
    

    //ON COMPNENT

    componentDidMount(){
        this.getData();
    }

    render(){
        return(
            <>
            <section className="content" id="blog">
                {this.state.selectedPost === 0 ?
                <header className="content__header" >
                    <h2>Listes des articles du blog</h2>
                    <div>
                        <SearchBar
                            filterText={this.state.filterText}
                            onFilterTextChange={this.handleFilterTextChange}
                            />                   
                    </div>
                </header>: null}

                {this.state.selectedPost === 0 ?
                this.state.posts.map((element, index) => {
                    if(element.title.includes(this.state.filterText)){
                        return(
                            <Cards 
                                item={element}
                                key={index}
                                index={index}
                                onChangeElement={this.changeSelectedItem}
                            />
                        )
                    }
                })
                :<div>
                    {this.state.posts.filter(item => item.id === this.state.selectedPost).map((element) =>{
                        return(
                            <Articles 
                            key={element.id}
                            item={element}
                            onChangeSelectedItem={this.changeSelectedItem}
                        />
                        )
                    })}
                </div>}
            </section>

            <SubMenu />
           </>
            
        )
    }
}
export default Blog