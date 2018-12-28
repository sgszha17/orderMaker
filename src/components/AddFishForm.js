import React from 'react';

class AddFishForm extends React.Component{

    nameRef = React.createRef()
    priceRef = React.createRef()
    statusRef = React.createRef()
    descRef = React.createRef()
    imageRef = React.createRef()

    createFish=(event)=>{
        // 1. stop the form submitting
         event.preventDefault()
         
         const fish = {
            name : this.nameRef.current.value,
            price : parseFloat(this.priceRef.current.value), //convert String to number
            status : this.statusRef.current.value,
            desc : this.descRef.current.value,
            image : this.imageRef.current.value
         }
        //  console.log(fish)  
         this.props.addFish(fish)
         //put all the value out

         //refresh the form
          event.currentTarget.reset()
    };

    render(){
        return(
           <form className="fish-edit" onSubmit={this.createFish}>
                <input name = "name" ref={this.nameRef} type = "text" placeholder = "Name" />
                <input name = "price" ref = {this.priceRef} type = "text" placeholder = "Price"/>
                <select name = "status" ref = {this.statusRef} type = "text" placeholder = "Status">
                    <option value = "available">Fresh!</option>
                    <option value = "unavailable">Sold out!</option>
                </select>
                <textarea name = "desc" ref = {this.descRef} type = "text" placeholder = "Desc"></textarea>
                <input name = "image" ref = {this.imageRef} type = "text" placeholder = "Image"/>
                <button type="submit">+ Add Fish</button>
           </form>
        );
    }
}

export default AddFishForm;