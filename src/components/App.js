import React from 'react';
import Header from './Header';
import Order from './Order';
import Inventory from './Inventory';
import sampleFishes from "../sample-fishes";
import Fish from "./Fish";

class App extends React.Component{
    state={
        fishes:{},
        order:{}
    }//the state variable is always in the component,
    addFish = fish =>{
        //How to update the state?
        //1. make a copy of the current
        const fishes = { ...this.state.fishes};

        //2. add the new fish to that fishes
        fishes[`fish${Date.now()}`]=fish
        
        //3. set the new object to state
        this.setState({fishes})
    };
    loadSampleFishes = () =>{
        this.setState({fishes: sampleFishes})
        // alert('loading sample'); 
    }
    render(){
        return(
            <div className='catch-of-the-day'>
                <div className='menu'>
                    <Header age='33' tagline = "FRESH SEAFOOD MARKET"  />
                    <ul className='fishes'>
                    {/* we need loop the fish */}
                        {Object.keys(this.state.fishes).map(key => 
                        <Fish key = {key} details = {this.state.fishes[key]}/>)}
                    </ul>
                </div>
                
                <Order />
                <Inventory 
                // add call a function from one component to another
                    addFish = {this.addFish} 
                    loadSampleFishes={this.loadSampleFishes} />
            </div> 
        )
    }
}

export default App;