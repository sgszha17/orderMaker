import React from 'react';
import {formatPrice} from '../helpers';

class Fish extends React.Component{
    render(){
        const {image, name, price, desc, status}= this.props.details;
        // const name = this.props.details.name;
        return(
            <li className='menu-fish'>
                <img src={image} alt={name}/>
                <h3 className='fiah-name'>
                    {name}
                    <span className='price'>{formatPrice(price)}</span>
                </h3>
                <p>{desc}</p>
                {/* <p> {this.props.Fish}</p> */}
                <button>Add to Cart</button>
            </li>
        )
    }
}

export default Fish;