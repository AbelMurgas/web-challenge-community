import React from 'react';

export default class Product extends React.Component{
 constructor(props){
  super(props);
 }

 render(){
  return (
   <div class="col-12 col-md-6">
        <div class="card text-center shadow-sm">
            <img src={this.props.img} class="card-img-top" alt=""/>
            <div class="card-body d-flex flex-column justify-content-between ">
                <div>
                    <div className="card-title h5">{this.props.title}</div>
                    <div className="card-text p mb-4">{this.props.info}</div>
                </div>
                {this.props.btnInfo && <div><a href="#" className='btn btn-warning mb-3'>{this.props.btnInfo}</a></div> }
            </div>
        </div>
    </div>
  );
 }
}