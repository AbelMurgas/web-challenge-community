import Game from "./Game";
import React from 'react';

export default class GamesGroup extends React.Component{
      
  constructor(props) {
    super(props);
    this.active = ""
  }
  
  render (){

    const groupsElement = this.props.dataGames.map(game  =>{
      if (game.id === 1){
        this.active = "active"
      }
      return <Game key={game.id}
        {...game} 
      />
    })
    return(
      <div className= {`carousel-item ${this.active}`}>
        <div className='container row justify-content-center gx-5'>
          {groupsElement}
        </div>
      </div>
    );
  }
  
}