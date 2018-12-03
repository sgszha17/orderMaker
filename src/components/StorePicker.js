import React from 'react';
// we also can import another from helper functions
import {getFunName} from '../helpers'

class StorePicker extends React.Component{

    myInput = React.createRef();

    //although this is refer to the StorePicker, it is undefined in this function
    //This is because of binding in react.
    //React has built-in method such as render() and others. 
    //This can be used in built-in method.
    //So, we can use constructor to binding all of our methods.
    // constructor(){
    //     super()
    //     this.goToStore = this.goToStore.bind(this)
    // }

    // goToStore(event){
        

    //     event.preventDefault();
    //     //1. stop the form from submitting
    //     console.log('Going to Store')
    //     //2. get the text from that input 
    //     console.log(this.myInput)
    //     //3. change the page to /store/whather - they -entered
    // }

    /**
     * ===============================================================
     * this part is aim to get the enter value and change the pages 
     * ===============================================================
     * */

    // we can also going to set a proporties. 
    //And the proporty will bind to the instance:
    goToStore = (event) =>{
        event.preventDefault();

        //1. stop the form from submitting
        console.log('Going to Store')
        //2. get the text from that input 
        const storeName = this.myInput.current.value
        //3. change the page to /store/whatever - they -entered
        //here we don't need to refresh the page, just route and push
        this.props.history.push(`/store/${storeName}`)
    }

/**
     * ===============================================================
     * this part is aim to render the form allow users enter and submit
     * ===============================================================
     * */

    //Need at least one method call render
    //render is what HTML put on the browser
    render(){
        // a root html tag with childern is available
        return (
        <form className = "store-selector" onSubmit={this.goToStore}>
         {/*This is the html comment */}
                    <h2>Please Enter A Store</h2>
                    <input type='text' required placeholder='Store Name' ref={this.myInput} defaultValue={getFunName()}/>
                    {/* Using getfunName we can get the name randomly */}
                    <button type='submit' >Visit store -></button>
                    {/* in react, we use the html in line function as usual such as 'onClick'*/}
        </form>)
        
        // but parallel root tags is not available there is a solution is use <React.Fragment>
        /**
         * <React.Fragment>
         *  <p>hellp</p>
         *  <form className = "store-selector">
                    <h2>Please Enter A Store</h2>
                </form>
         * </React.Fragment>
            import {Fragment} from react make the tag simple: <Fragment>
         */


        // there is another way to create a element like: React.createElement('p',{className: 'hey'},'Heyyooooo');
        // but we recommend use HTML method directly
    }

}

export default StorePicker;