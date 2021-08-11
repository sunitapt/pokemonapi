// import ListItems from './pokemonList';  

const people = [
  
  {
    name:'name',
    type: 'Grass, Poison',
    id: '#1',
    height: '7',
    weight: '69',
    imageUrl:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg',
  },
  {
    name: 'Bulbasaur',
    type: 'Grass, Poison',
    id: '#1',
    height: '7',
    weight: '69',
    imageUrl:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/4.svg',
  },
  {
    name: 'Bulbasaur',
    type: 'Grass, Poison',
    id: '#1',
    height: '7',
    weight: '69',
    imageUrl:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg',
  },
  {
    name: 'Bulbasaur',
    type: 'Grass, Poison',
    id: '#1',
    height: '7',
    weight: '69',
    imageUrl:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg',
  },
  {
    name: 'Bulbasaur',
    type: 'Grass, Poison',
    id: '#1',
    height: '7',
    weight: '69',
    imageUrl:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg',
  },


  // More people...
]

export default function Grid() {
  return (
    <div className="">
    <ul id="list" className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 p-12">
      {people.map((person) => (
        <li
          key={person.height}
          className="col-span-1 flex flex-col text-center bg-white rounded-lg shadow divide-y divide-gray-200 bg-yellow-50"
        >
          <div className="flex-1 flex flex-col p-8">
            <img className="w-40 h-40 flex-shrink-0  mx-auto rounded" src={person.imageUrl} alt="" />
            <h3 className="mt-6 text-gray-900 text-sm font-medium">{person.name}</h3>
            <dl className="mt-1 flex-grow flex flex-col justify-between">
              <dt className="sr-only">type</dt>
              <dd className="text-gray-500 text-sm">{person.type}</dd>
              <dt className="sr-only">id</dt>
              <dd className="mt-3">
                <span className="px-2 py-1 text-green-800 text-xs font-medium bg-green-100 rounded-full">
                  {person.id}
                </span>
              </dd>
            </dl>
          </div>
          <div>
            <div className="-mt-px flex divide-x divide-gray-200">
              <div className="w-0 flex-1 flex">
                  <span className="ml-3 relative -mr-px w-0 flex-1 inline-flex items-center justify-center py-4 text-sm text-gray-700 font-medium border border-transparent rounded-bl-lg hover:text-gray-500">
                  Height : {person.height}
                  </span>
              </div>
              <div className="-ml-px w-0 flex-1 flex">
                  <span className="ml-3 relative w-0 flex-1 inline-flex items-center justify-center py-4 text-sm text-gray-700 font-medium border border-transparent rounded-br-lg hover:text-gray-500">
                  Weight : {person.weight}
                  </span>
              </div>
            </div>
          </div>
        </li>
      ))}
    </ul>
    </div>
  )
}
