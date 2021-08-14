// import React,{useEffect, useState} from 'react'; 

// const people = [  
//   {
//     name:'name',
//     type: 'Grass, Poison',
//     id: '#1',
//     height: '7',
//     weight: '69',
//     imageUrl:
//       'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg',
//   },
//   {
//     name: 'Bulbasaur',
//     type: 'Grass, Poison',
//     id: '#1',
//     height: '8',
//     weight: '69',
//     imageUrl:
//       'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/4.svg',
//   },
//   {
//     name: 'Bulbasaur',
//     type: 'Grass, Poison',
//     id: '#1',
//     height: '9',
//     weight: '69',
//     imageUrl:
//       'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg',
//   },
//   {
//     name: 'Bulbasaur',
//     type: 'Grass, Poison',
//     id: '#1',
//     height: '10',
//     weight: '69',
//     imageUrl:
//       'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg',
//   },
//   {
//     name: 'Bulbasaur',
//     type: 'Grass, Poison',
//     id: '#1',
//     height: '11',
//     weight: '69',
//     imageUrl:
//       'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg',
//   },


//   // More people...
// ]

export default function Grid(props) {
  // const [name,setName] = useState();
  // const [type,setType] = useState();
  // const [id,setId] = useState();
  // const [height,setHeight] = useState();
  // const [weight,setWeight] = useState();
  // const [imageURL,setimageURL] = useState();

  // useEffect(() => {
  //   fetchData();
  //   // console.log(res)
  // });
  // 
  // const fetchData = ()=>{
  //   for(let i=1;i<151;i++)
  //   {
  //     const url = `https://pokeapi.co/api/v2/pokemon/${i}`;    
  //     fetch(url)
  //       .then(res => res.json())
  //       .then((result)=>{
  //         console.log(result);
  //         setName(result.name);
  //         setType(result.types[0].type.name +" "+ result.types[1].type.name);
  //         setId(result.id);
  //         setHeight(result.height);
  //         setWeight(result.weight);
  //         setimageURL(result.sprites.other.dream_world.front_default);
  //       })
  //     }
  // }
  // console.log(props);
return (    
    <div className="">
    <ul id="list" className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 p-12">
      {/* {people.map((person) => ( */}
        <li key= {props.id}
          className="col-span-1 flex flex-col text-cente rounded-lg shadow divide-y divide-gray-200 bg-yellow-50"
        >
          <div className="flex-1 flex flex-col p-8">
            <img className="w-40 h-40 flex-shrink-0  mx-auto rounded" src={props.imageURL} alt="" />
            <h3 className="mt-6 text-gray-900 text-sm font-medium">{props.name}</h3>
            <dl className="mt-1 flex-grow flex flex-col justify-between">
              <dt className="sr-only">type</dt>
              <dd className="text-gray-500 text-sm">{props.type }</dd>
              <dt className="sr-only">id</dt>
              <dd className="mt-3">
                <span className="px-2 py-1 text-green-800 text-xs font-medium bg-green-100 rounded-full">
                  {props.id}
                </span>
              </dd>
            </dl>
          </div>
          <div>
            <div className="-mt-px flex divide-x divide-gray-200">
              <div className="w-0 flex-1 flex">
                  <span className="ml-3 relative -mr-px w-0 flex-1 inline-flex items-center justify-center py-4 text-sm text-gray-700 font-medium border border-transparent rounded-bl-lg hover:text-gray-500">
                  Height : {props.height}
                  </span>
              </div>
              <div className="-ml-px w-0 flex-1 flex">
                  <span className="ml-3 relative w-0 flex-1 inline-flex items-center justify-center py-4 text-sm text-gray-700 font-medium border border-transparent rounded-br-lg hover:text-gray-500">
                  Weight : {props.weight}
                  </span>
              </div>
            </div>
          </div>
        </li>
      {/* // )) */}
      {/* } */}
    </ul>
    </div>
  )
  
}
