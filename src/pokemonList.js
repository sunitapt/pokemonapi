import React from "react";
import Grid from "./grid";
class ListItems extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        error: null,
        isLoaded: false,
        name: "",
        type :"",
        id :"",
        height:"",
        weight:"",
        imageURL:"",
      };
    }
  
    componentDidMount() {
      for(let i=1;i<=15;i++)
      {
      const url = `https://pokeapi.co/api/v2/pokemon/${i}`;    

      fetch(url)
        .then(res => res.json())
        .then((result) => {
            console.log(result);          
            this.setState({
              isLoaded: true,
              name: result.name,
              type : result.types.map((type) => type.type.name).join(', '),
              id : "#"+result.id,
              height: result.height,
              weight: result.weight,
              imageURL: result.sprites.other.dream_world.front_default,              
            });
          },
          (error) => {
            this.setState({
              isLoaded: true,
              error
            });
          }
        )
      }
    }

    render() {
      const { error, isLoaded, name,type,id,imageURL,height,weight } = this.state;
      if (error) {
        return <div>Error: {error.message}</div>;
      } else if (!isLoaded) {
        return <div>Loading...</div>;
      } else {
        return (          
          <Grid name ={name} type={type} id= {id} height={height} weight={weight} imageURL={imageURL} />
        );
      }
    }   
  }
export default ListItems;