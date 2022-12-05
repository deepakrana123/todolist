import React from 'react';

// lifecycle method in react , first lifecycle method is componentDidMount , componentWillUnmount,componentDidUpdate
// componentDidmount will return after the componentDidmount



class Click extends React.Component {

    state={
        name:0
}

handleCLick(){
    this.setState((state)=>({name:state.name+1}))
}
    // componentDidMount(){
    //     console.log("componentDidMount, calls")
    // }

   render(){
    return(
        
            <>
            <button onClick={this.handleCLick.bind(this)}>Counter</button>
            Hii
         {/*  */}
             </>
    )
   }

    
}

export default Click