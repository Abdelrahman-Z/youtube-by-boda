import React from 'react'
import { Link, useParams } from 'react-router-dom'
import ReactPlayer from 'react-player'
import { Box, Typography, Stack } from '@mui/material'
import { CheckCircle } from '@mui/icons-material'
import Videos from './Videos'
import { useNewVideosQuery } from '../redux/services/youtubeApi'
const VideoDeatails = () => {
  const { id } = useParams()
  const { data } = useNewVideosQuery(`videos?part=snippet,statistics&id=${id}`)
  const {data:videos} = useNewVideosQuery(`search?part=snippet&relatedToVideoId=${id}&type=video`)
  console.log(videos)
  // const { snippet: { title, channelId, channelTitle }, statistics: { viewCount, likeCount } };
  return (
    <Box minHeight='95vh'>
      <Stack direction={{ xs: 'column', md: 'row' }}>
        <Box flex={1}>
          <Box sx={{ width: '100%', position: 'sticky', top: '86px' }}>
            <ReactPlayer url={`https://www.youtube.com/watch?v=${id}`}
              className='react-player'
              controls
            />
            <Typography color='#fff' variant='h5' fontWeight='bold' p={2}>
              {data?.items[0]?.snippet.title}
            </Typography>
            <Stack direction='row' justifyContent='space-between' sx={{ color: '#fff' }} py={1} px={2}>
              <Link to={`/channel/${data?.items[0]?.snippet?.channelId}`}>
                <Typography variant={{sm:'subtitle1' , md:'h6'}} fontWeight='bold' color='#fff'>
                  {data?.items[0]?.snippet?.channelTitle}
                  <CheckCircle sx={{fontSize:'12px' , color:'gray' , ml:'5px'}} />
                </Typography>
              </Link>
              <Stack>
                <Typography variant='body1' sx={{ opacity: 0.7 }}>
                  {parseInt(data?.items[0]?.statistics?.viewCount)} views
                </Typography>
                <Typography variant='body1' sx={{ opacity: 0.7 }}>
                  {parseInt(data?.items[0]?.statistics?.likeCount)} Likes
                </Typography>
              </Stack>
            </Stack>
          </Box>
        </Box>
        <Box px={2} py={{md:1 , xs:5}} justifyContent='center' alignItems='center'>
          <Videos videos={videos?.items} direction ='column'/>
        </Box>
      </Stack>
    </Box>
  )
}

export default VideoDeatails