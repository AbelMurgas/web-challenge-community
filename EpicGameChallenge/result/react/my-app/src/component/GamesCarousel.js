import CarouselHeader from "./CarouselHeader";
import GamesGroup from "./GamesGroup";
import React from 'react';
import GAMES from "./GamesData";

export default class GamesCarousel extends React.Component{

  state = {
    innerWidth: window.innerWidth
  }

  componentDidMount() {
      window.addEventListener("resize", this.resize.bind(this))
      this.resize()
  }

  resize() {
      this.setState({innerWidth: window.innerWidth})
  }

  createGroup(amountGroup, data) { 
    //[[1,2,3,4], [5,6,7,8], [9]]
    var groups = [];
    var group = [];
    for(let i=0; i<data.length; i = i+amountGroup){
      for(let j=i; j<(i+amountGroup); j++){
        if (j >= data.length){
          break;
        }
        group.push(data[j]);
      }
      groups.push(group)
      group = [];
    }
    return groups;
  };
  
  render(){
    var amountGroup;
    var breakPoint = 800;
    if (this.state.innerWidth > 1400){
      amountGroup = 5;
    } else if (this.state.innerWidth > 1000){
      amountGroup = 4
    } else if (this.state.innerWidth > 770) {
      amountGroup = 3
    } else if (this.state.innerWidth > 500){
      amountGroup = 2
    } else {
      amountGroup = 1
    }
    var groups = this.createGroup(amountGroup,GAMES);
    const groupsElement = groups.map((data, key) =>{
      
      return <GamesGroup key={key+1} dataGames = {[...data]}
      />
    })
    
    
    return (
      <div className='container'>
        <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
        <CarouselHeader />
        <div className="carousel-inner">
          {groupsElement}
        </div>
        </div>
      </div>
    );
  }
  
}