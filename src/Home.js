import React from 'react';
import Blog from "./blog";
import Hero from "./components/Hero";
import Projets from "./Projets";
import Services from "./Services";

class Home extends React.Component {

    render(){
        return (
            <>
                <Hero />
                <main>
                    <Projets />
                    <Services />
                    <Blog />
               </main>

               

            </>
        );
    }
};

export default Home;