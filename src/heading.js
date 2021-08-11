/* This example requires Tailwind CSS v2.0+ */
import { MailIcon } from '@heroicons/react/solid'

const profile = {
  name: 'POKEMON',
  email: 'sunitapatil5111@gmail.com',
  avatar:
    'https://images.unsplash.com/photo-1566577134665-2c674085abf7?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjN8fHBva2Vtb258ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60',
  backgroundImage:
    'https://images.unsplash.com/photo-1627856608109-9cd57d12966c?ixid=MnwxMjA3fDB8MHxzZWFyY2h8ODJ8fHBva2Vtb258ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60',

}

export default function Heading() {
  return (
    <div>
      <div>
        <img className="h-32 w-full object-cover lg:h-48" src={profile.backgroundImage} alt="" />
      </div>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="-mt-12 sm:-mt-16 sm:flex sm:items-end sm:space-x-5">
          <div className="flex">
            <img className="h-24 w-24 rounded-full ring-4 ring-white sm:h-32 sm:w-32" src={profile.avatar} alt="" />
          </div>
          <div className="mt-6 sm:flex-1 sm:min-w-0 sm:flex sm:items-center sm:justify-end sm:space-x-6 sm:pb-1">
            <div className="sm:hidden md:block mt-6 min-w-0 flex-1">
              <h1 className="text-2xl font-bold text-gray-900 truncate ">{profile.name}</h1>
            </div>
          </div>
          <div className="mt-6 flex flex-col justify-stretch space-y-3 sm:flex-row sm:space-y-0 sm:space-x-4">
                <a
                  href={`mailto:${profile.email}`}
                  className=" inline-flex items-center py-4 text-sm text-gray-700 font-medium border border-transparent rounded-bl-lg hover:text-gray-500"
                >
                  <MailIcon className="w-5 h-5 text-black-400" aria-hidden="true" />
                  <span className="ml-3">Email-Author</span>
                </a>
              </div>
        </div>
        <div className="hidden sm:block md:hidden mt-6 min-w-0 flex-1">
          <h1 className="text-2xl font-bold text-gray-900 truncate">{profile.name}</h1>
        </div>
      </div>
    </div>
  )
}
