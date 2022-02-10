import React from "react";
import SideBar from "./components/SideBar";
import Blog from "./blog";
import Hero from "./components/Hero";
import Projets from "./Projets";
import Services from "./Services";

class App extends React.Component{

    render(){
        return (
            <>
                <SideBar />
                <Hero />
                <main>
                    <Projets />
                    <Services />
                    <Blog />
                </main>
            </>
                
        )
    }
}
export default App
