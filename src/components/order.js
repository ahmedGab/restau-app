import React, { Component } from 'react'
import {GetfromOrder,DeleteorderInApi,IncrementQuantyyInApi,DecrementQuantyyInApi} from '../apis/json-server'
import { connect } from 'react-redux'


class CardExampleExtraContent extends Component {
    state={q:this.props.el.quantity,
    p:0}
 price=()=>{
     this.setState({p:this.props.el.price*this.state.q})
 }
    updateValue = (val) => {
        this.setState({q: this.state.q+ val});
    }
    render(){
        const {el}=this.props

        return (
           
            <div class=" column">
     <div class="ui card">
<div class="content">
<div class="center aligned header">{el.title}</div>
<div class="center aligned description">
{el.price} Tnd
<div className="n">
<button onClick={()=>{this.props.inc(el.id,this.state.q-1);this.updateValue(-1)}}>-</button> 
<input  value={this.state.q} disabled />
<button onClick={()=>{this.props.inc(el.id,this.state.q+1);this.updateValue(+1)}}>+</button>
</div>
</div>
</div>
<div class="extra content">
<div class="center aligned author">
<button onClick={()=>this.props.del(el.id)} className="ui red button">Retrier </button>
        <input  onChange={this.price} value={this.state.p}/>

</div>
</div>
</div>
   </div>
                    )}}
const mapDispatchToProps = (dispatch) => ({
                        del:(id)=>dispatch(DeleteorderInApi(id)),
                        inc:(id,data)=>dispatch(IncrementQuantyyInApi(id,data)),
                        dec:(id,data)=>dispatch(DecrementQuantyyInApi(id,data)),
                
                
                     
                    
                    })

export default connect(null,mapDispatchToProps) (CardExampleExtraContent)