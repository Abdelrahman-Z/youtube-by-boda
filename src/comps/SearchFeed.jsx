import { useParams } from 'react-router-dom'
import { Box } from '@mui/material '
import { Typography } from '@mui/material'
import Videos from './Videos'
import { useNewVideosQuery } from '../redux/services/youtubeApi'

const SearchFeed = () => {
  const {searchTerm} = useParams()
  const { data } = useNewVideosQuery(`search?part=snippet&q=${searchTerm}`)
  return (
    <Box p={2} sx={{ overflowY : 'auto' , height:'90vh' , flex:2 }}>
        <Typography variant='h4' fontWeight='bold' mb={2} sx={{color:"white"}}>
        search resault for: <span style={{ color: '#f31503' }}>{ searchTerm}</span> videos
        </Typography>
        <Videos videos={data?.items} />
      </Box>
  )
}

export default SearchFeed