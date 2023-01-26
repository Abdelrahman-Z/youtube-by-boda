import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Box } from '@mui/material'
import Videos from './Videos'
import ChannelCard from './ChannelCard'
import { useNewVideosQuery } from '../redux/services/youtubeApi'

const ChannelDetail = () => {
  const { id } = useParams()
  const { data } = useNewVideosQuery(`channels?part=snippet&id=${id}`)
  const { data:videosData } = useNewVideosQuery(`search?channelId=${id}&part=snippet&order=date`)
  return (
    <Box minHeight='95vh'>
      <div style={{
        background: 'linear-gradient(90deg, rgba(0,238,247,1) 0%, rgba(206,3,184,1) 100%, rgba(0,212,255,1) 100%)',
        zIndex: 10,
        height:'300px'
      }} />
      <ChannelCard channelDetail={data?.items[0]} marginTop='-110px' />
      <Box display='flex' p='2'>
        <Box sx={{ mr: { sm: '100px' } }}/>
        <Videos videos={videosData?.items}/>
        
      </Box>
    </Box>
    
  )
}

export default ChannelDetail