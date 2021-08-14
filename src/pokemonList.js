import React from "react";
import Grid from "./grid";
class ListItems extends React.Component {
  
    constructor(props) {
      super(props);
      this.state = {
        error: null,
        isLoaded: false,
        arr :[],       
      };
    }
  
    componentDidMount() {
      for(let i=1;i<=151;i++)
      {
      const url = `https://pokeapi.co/api/v2/pokemon/${i}`;    

      fetch(url)
        .then(res => res.json())
        .then((result) => {
            console.log(result);          
            this.setState({
              isLoaded: true,
              arr :[...this.state.arr,{
              name: (result.name).toUpperCase(),
              type : "Type : " +result.types.map((type) => type.type.name).join(', '),
              id : "#"+result.id,
              height: result.height,
              weight: result.weight,
              imageURL: result.sprites.other.dream_world.front_default,  
            }],          
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
      const { error, isLoaded,arr } = this.state;
      if (error) {
        return <div>Error: {error.message}</div>;
      } else if (!isLoaded) {
        return <div>Loading...</div>;
      } else {
        return (   
          <div className="">
          <ul id="list" className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 p-12">
          {this.state.arr.map(a=>       
          <Grid name ={a.name} type={a.type} id= {a.id} height={a.height} weight={a.weight} imageURL={a.imageURL} />
          )}
          </ul>
          </div>
        );
      }
    }   
  }
export default ListItems;