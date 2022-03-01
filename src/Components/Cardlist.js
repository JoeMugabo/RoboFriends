import React from "react";
import Card from './Card'

const Cardlist = ( {Robos} ) => {
    return (
      <div> 
          { Robos.map ((user, i) => {
              return (
                <Card key={i} id= {Robos[i].id} 
                name= {Robos[i].name} 
                email= {Robos[i].email} />
              )
          }) }
      </div>
      
    )
}

export default Cardlist