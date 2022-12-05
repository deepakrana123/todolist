import React from 'react';


// lifecycle method in react , first lifecycle method is componentDidMount , componentWillUnmount,componentDidUpdate
// componentDidmount will return after the componentDidmount



class Counter extends React.Component {

    // state={
    //     name:this.state
    // }
    componentDidMount(){
        console.log("componentDidMount, calls")
    }
    shouldComponentUpdate(){
        
    }
    componentDidUpdate(prevProps, prevState){
        // console.log("component updated")
        if(prevProps.number !== this.props.number){
            console.log("component did  update")
        }
    }

    componentWillUnmount(){
        console.log("component will unmount")
    }

   render(){
    return(
        <div>{this.props.number}</div>
    )
   }

    
}

export default Counter