import React from 'react';

export default class Game extends React.Component{
 constructor(props) { 
  super(props);
}
calculateDiscount(descuento, precio){
    return ( precio-descuento/100*precio).toFixed(2);
}
 render(){

  return (
   <div className="game text-light-grey col">
        <div className="card back-color">
            <img src={this.props.img} className="card-img-top" alt=""/>
            <div className="card-body d-flex flex-column justify-content-between ">
                <div>
                    <div className="card-title text-grey h6">{this.props.category}</div>
                    <div className="card-text mb-2 title">{this.props.title}</div>
                    <div className='d-flex align-items-center'>
                     {this.props.discount && <div className='btn btn-primary me-2 btn-sm'>-{this.props.discount}%</div> }
                     {this.props.discount && <div className='me-2 text-grey line-through'>${this.props.price}</div> }
                     <div>${(this.props.discount) ? this.calculateDiscount(this.props.discount, this.props.price) : this.props.price}</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
 }
}