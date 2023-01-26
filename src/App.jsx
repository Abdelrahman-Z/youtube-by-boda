import {Box} from '@mui/material'
import { Route, Routes } from 'react-router-dom'
import NavBar from './comps/NavBar'
import Feed from './comps/Feed'
import VideoDeatails from './comps/VideoDeatails'
import ChannelDetail from './comps/ChannelDetail'
import SearchFeed from './comps/SearchFeed'
function App() {

  return (
    <Box sx={{backgroundColor:'#000'}}>
      <NavBar/>
      <Routes>
        <Route path='/' exact element={ <Feed/>} />
        <Route path='/video/:id'  element={ <VideoDeatails/>} />
        <Route path='/channel/:id'  element={ <ChannelDetail/>} />
        <Route path='/search/:searchTerm'  element={ <SearchFeed/>} />
      </Routes>
    </Box>
  )
}

export default App
