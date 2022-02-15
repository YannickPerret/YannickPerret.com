import React from "react";
import { getAllData, getDataFromSearch } from './API/db.js'
import SubMenu from "./components/SubMenu.js";
import SearchBar from "./components/SearchBar.js";
import PostList from "./components/PostList.js";


class Blog extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            posts: [],
            selectedPost : 0,
            filterText : '',
            numPostShow: 10,
          };
          this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
      }
      //GET DATA

    getData(){
        getAllData().then(data => {
            if(data !== undefined){
                this.setState({posts : data})
            }
        })
    }

    getDataFromSearch = (searchText) =>{
        if (searchText.length > 0){

            getDataFromSearch(searchText).then(data =>{
                this.setState({posts : data})
            })
        }
        else
        {
            this.getData()
        }
    }

    //ON CHANGE
    handleFilterTextChange(filterText) {
        this.setState({
          filterText: filterText
        });

        this.getDataFromSearch(filterText)
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
                    

               <SearchBar onFilterTextChange={this.handleFilterTextChange}/>

                    {this.state.posts.sort((a, b) => a.dateCreated - b.dateCreated).map((element, index) => {
                        return(<PostList posts={element} key={index}/> )
                    })}
                </section>

                <SubMenu />
           </>
            
        )
    }
}
export default Blog