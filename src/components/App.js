import React from 'react';
import Header from './Header';
import Order from './Order';
import Inventory from './Inventory';

class App extends React.Component{
    render(){
        return(
            <div className='catch-of-the-day'>
                <div className='menu'>
                    <Header age='33' tagline = "FRESH SEAFOOD MARKET"  />
                
                </div>
                
                <Order />
                <Inventory />
            </div> 
        )
    }
}

export default App;