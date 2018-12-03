import React from 'react';

class AddFishForm extends React.Component{

    createFish=(event)=>{
        // 1. stop the form submitting
         event.preventDefault()
         console.log("make a fish ")

         //put all the value out
    };

    render(){
        return(
           <form className="fish-edit" onSubmit={this.createFish}>
                <input name = "name" type = "text" placeholder = "Name" />
                <input name = "price" type = "text" placeholder = "Price"/>
                <select name = "status" type = "text" placeholder = "Status">
                    <option value = "available">Fresh!</option>
                    <option value = "unavailable">Sold out!</option>
                </select>
                <textarea name = "desc" type = "text" placeholder = "Desc"></textarea>
                <input name = "image" type = "text" placeholder = "Image"/>
                <button type="submit">+ Add Fish</button>
           </form>
        );
    }
}

export default AddFishForm;