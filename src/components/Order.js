import React from 'react';
import {formatPrice} from "../helpers";

class Order extends React.Component{
    renderOrder = (key)=>{
        const fish = this.props.fishes[key]
        const count = this.props.order[key];
        const isAvailable = fish.status === 'available'
        if(!isAvailable){
            return <li key={key}> Sorry {fish ? fish.name : 'fish'} is no longer available</li>
        }else{
        return <li key={key}>
                {count} lbs {fish.name}
                {formatPrice(count*fish.price)}
            </li>
        }
    }
    render(){
        const orderID = Object.keys(this.props.order);
        const total = orderID.reduce((prevtotal,key)=>{
            const fish = this.props.fishes[key]
            const count = this.props.order[key];
            const isAvailable = fish && fish.status ==='available';
            if(isAvailable){
                return prevtotal + (count * fish.price);
            }
            return prevtotal;

        },0); // loop
        return(
            <div className='order-wrap'>
                <h2>Your Order</h2>
                <ul className='order'>
                    {orderID.map(this.renderOrder)}
                </ul>
                
                Total: <strong className='total'>{formatPrice(total)}</strong>
            </div>
        )
    }
}

export default Order;