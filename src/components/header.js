import React from 'react';

import TopNav from './top-nav';
import InfoModal from './info-modal';

import './header.css';

class Header extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            what: false,

        }
    }
    
    render(){

        if (!this.state.what ){
            return <TopNav infoModel={()=>this.setState({what:true})}/>
        }

        if(this.state.what){
            return <InfoModal  gotIt={()=>this.setState({what:false})}/>
        }

     
    }
};

export default Header
