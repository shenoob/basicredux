import React from 'react';
import {connect} from "react-redux";

import {fetchUser} from "../actions/UserAction";


export class App extends React.Component{

    componentDidMount(){
        this.props.zemiMe();
    }






    render(){
        return(
             <div>
                 <h2> Hello World</h2>
             </div>
        )
    }
}

const mapStateToProps =(state) => {
    return {
        user:state.userReducer.user
    }

}
const mapDispatchToProps =(dispatch) => {
    return {
        zemiMe:() =>{
            dispatch(fetchUser());
        }
    }

}
App=connect(mapStateToProps,mapDispatchToProps)(App);