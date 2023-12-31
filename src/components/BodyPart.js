import React from 'react'
import{Stack, Typography} from '@mui/material'
import Icon from '../assets/icons/gym.png'

const BodyPart = ({item,setBodyPart,bodyPart}) => {
  return (
       <Stack type='button' alignItems='center' 
       justifyContent='center' className='bodyPart-Card' sx={{

         borderTop: bodyPart === item ? '4px solid #ff2625' : '',
           backgroundColor:'#fff' ,  borderBottomleftRadius:'20px',width:'270px',
              height:'280px',cursor:'pointer',gap:'47px'
       }}
       onClick={() => {setBodyPart(item);
     window.scroll({top:1800, behavior:'smooth', left:100}) 
    }}
       
        
        > 
      
        <img src={Icon} alt='dumbell' style={{
            width:'40px', height:'40px'
        }} />

        <Typography fontSize='24px' fontweight='bold' color='#3A1212'
         textTransform='capitalize' > 
            {item}
        </Typography>

       </Stack>
  )
}

export default BodyPart