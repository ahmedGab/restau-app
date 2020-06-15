import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getFoodsFromApi,getpersonFromApi } from '../apis/json-server'

import Card from './card-guest'


class Home extends Component {
  
    componentDidMount() {
        this.props.get();
        this.props.getusers()

    }
   
    
    render() {
        console.log(this.props.users)
        console.log(this.props.foods)
        const {foods,users}=this.props;
        
        return (
            <div>
                <div className="menu">
                <img src="https://colorlib.com/preview/theme/luigis/images/heading_logo.png"/>
                 <h1>Notre menu

</h1>   
</div>

                {/*
                <input onChange={this.handleChangetitle} type="text" name="title" />
                <button onClick={this.ajouter}  >+</button>
                */}
                
<div class="ui grid t">
    {foods.map(el =><div class="four wide column"><Card key={el.id} el={el} /> </div> )}
                </div>
            </div>
        );
    }
}



const mapStateToProps = (state) =>( {
        foods: state.foods,
        users:state.users
    
})


const mapDispatchToProps = (dispatch) => ({
    get: () => dispatch(getFoodsFromApi()),
    getusers:()=>dispatch(getpersonFromApi())

})

export default connect(mapStateToProps, mapDispatchToProps)(Home);