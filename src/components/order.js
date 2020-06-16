import React, { Component } from 'react'
import {GetfromOrder,DeleteorderInApi,IncrementQuantyyInApi,DecrementQuantyyInApi,editAdd} from '../apis/json-server'
import {totalOrders} from "../actions/index"
import { connect } from 'react-redux'
import { fireEvent } from '@testing-library/react'

let s=0
class CardExampleExtraContent extends Component {
   
    state={q:this.props.el.quantity,
    p:0,
    id:this.props.el.id,
    pr:this.props.el.price
  
}

    updateValue = (val) => {
        this.setState({q: this.state.q+ val});
    }
    deletevalue=(id)=>{
this.props.el.filter(el=>el.id !=id)
    }
    render(){
     
      this.props.totals(this.props.orders.map(el=>el.price*el.quantity).reduce((accumulator, currentValue) => accumulator + currentValue))
       // const c=a.reduce(a,b=>a+b)
     
    
        const {el}=this.props
        console.log(el.num)

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
<button onClick={()=>{this.props.del(el.id);this.props.editA(el.num,false);}} className="ui red button">Retrier </button> <br /> <br/>
  <input className="prix" value={this.state.pr *this.state.q+  "Tnd"} disabled/>    

</div>
</div>
</div>
   </div>
                    )}}
const mapDispatchToProps = (dispatch) => ({
    
                        del:(id)=>dispatch(DeleteorderInApi(id)),
                        inc:(id,data)=>dispatch(IncrementQuantyyInApi(id,data)),
                        dec:(id,data)=>dispatch(DecrementQuantyyInApi(id,data)),
                        editA:(id,data) =>dispatch(editAdd(id,data)),
                        totals:(data)=>dispatch(totalOrders(data))
                
                     
                    
                    })
                    const mapStateToProps=(state)=>({
                        orders:state.orders   ,
                     })

export default connect(mapStateToProps,mapDispatchToProps) (CardExampleExtraContent)