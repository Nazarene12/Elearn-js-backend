import React from 'react'
import { useQuery } from 'react-query'
import { category_list } from '../../EndPoints/Request'
import { UseSelector } from 'react-redux'
export default function Category() {

    const authenticated = useSelector((state) => state.auth)
    const { isLoading, data, isError, error } = useQuery("category_list", () => {
        return category_list()
      })

  return (
    <div className='w-full'>

        {data && (
            
            <table className="min-w-full leading-normal">
                {console.log(data)}
                <thead>
                    <tr>
                        <th
                            className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                            Name
                        </th>
                        <th
                            className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                            Status
                        </th>
                        <th
                            className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                            Edit
                        </th>
                        <th
                            className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                            Delete
                        </th>
                        
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                            <div className="flex items-center">
                                <div className="flex-shrink-0 w-10 h-10">
                                    <img className="w-full h-full rounded-full"
                                        src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&w=160&h=160&q=80"
                                        alt="" />
                                </div>
                                    <div className="ml-3">
                                        <p className="text-gray-900 whitespace-no-wrap">
                                            Vera Carpenter
                                        </p>
                                    </div>
                                </div>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                            <p className="text-gray-900 whitespace-no-wrap">Admin</p>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                            <p className="text-gray-900 whitespace-no-wrap">
                                Jan 21, 2020
                            </p>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                            <p className="text-gray-900 whitespace-no-wrap">
                                43
                            </p>
                        </td>
                    
                    </tr>
                
                </tbody>
            </table>

        

        )}
        
    </div>
  )
}
