import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const YoutubeApi = createApi({
    reducerPath: 'youtube-api',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://youtube-v31.p.rapidapi.com',
        prepareHeaders: (headers)=> {
            headers.set( "X-RapidAPI-Key", '90612f05f5msh5d0dce1e8416814p11a20fjsne8c0c9488f45')
            headers.set( 'X-RapidAPI-Host', 'youtube-v31.p.rapidapi.com')
            return headers
        }
    }),
    endpoints: (builder) => ({
        newVideos:builder.query({query: (url)=> `${url}&maxResults=50`})
    })
})



export const {useNewVideosQuery} = YoutubeApi
