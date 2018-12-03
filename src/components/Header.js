import React from 'react';

const Header =  ({tagline,age})=> (
        <header className='top'>
                <h1>Catch 
                <span className='ofThe'>
                    <span className='of'>of</span>
                    <span className='the'>the</span>
                </span> 
                Day</h1>
                <h3 className = 'tagline'>
                    <span>{tagline}{age}</span>
                    {/* When want to use valuble inside the js you can use '{}'*/}
                    {/* "this" is the current components*/}
                </h3>
        </header>
);


// class Header extends React.Component{
//     render(){
//         return(
//             <header classNa me='top'>
//                 <h1>Catch 
//                 <span className='ofThe'>
//                     <span className='of'>of</span>
//                     <span className='the'>the</span>
//                 </span> 
//                 Day</h1>
//                 <h3 className = 'tagline'>
//                     <span>{this.props.tagline}</span>
//                     {/* When want to use valuble inside the js you can use '{}'*/}
//                     {/* "this" is the current components*/}
//                 </h3>
//             </header>
            
        
//         )
//     }
// }

export default Header;