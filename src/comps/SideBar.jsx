import {  Stack  } from '@mui/material '
import { categories } from '../utils/constans'

const selectedCategory = 'New'

const SideBar = ({selectedCategory , setSelectedCategory}) => {
  return (
      <Stack
          direction='row'
          sx={{ overflowY: 'auto', height: { sx:'auto' , md:'95%'} , flexDirection:{md:'column'}}}
      >
          {categories.map(el => (
              <button className='category-btn'
                  onClick={()=> setSelectedCategory(el.name)}
                  style={{ background: el.name === selectedCategory && '#FC1503', color: 'white' }}
                  key={el.name}
              >
                  <span style={{ color: el.name === selectedCategory ? 'white' : 'red' , marginRight:'15px'}}>{el.icon}</span>
                  <span style={{opacity:el.name === selectedCategory ? '1':'0.8'}}>{el.name}</span>
              </button>
          ))}
      </Stack>
  )
}

export default SideBar