import { useQuery } from '@tanstack/react-query'
import React, { useEffect } from 'react'
import { refreash } from '../services/auth-services'
import { useDispatch } from 'react-redux'
import { setUser, clearUser } from '../store/auth-slice'

const useAuthInit = () => {
  const dispatch = useDispatch()

  const { data, isLoading, isSuccess,isError} = useQuery({
    queryKey: ['authUser'],
    queryFn: () => refreash(),
    retry: false,
    staleTime:Infinity
  })

  useEffect(() => {
    if (isSuccess && data) {
      console.log('refresh success from /me', data)

      dispatch(setUser(data.data))
    }
    // if(isError){
    //   dispatch(clearUser())
    // }
    
  },[data,isSuccess,])

  return { isLoading }
}

export default useAuthInit