
import React from 'react'
import { Box,Card,CardContent,Typography ,TextField} from '@mui/material'
import meter2 from './meter2.jpg'
import AddMainMeter from '../../fath/src/EBModule/AddMeter/AddMainMeter'
import AddSubMeter from '../../fath/src/EBModule/AddMeter/AddSubMeter'
import { useState } from 'react'

const Add=()=>{
    const [date,setDate]=useState('')
    const [time,setTime]=useState('')

    return(
        
        <Card sx={{ background :"transparent", maxHeight: "1000" , display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    }}>
            <CardContent sx={{justifyContent: 'center',alignItems: 'center'}}>
                <Typography>AddMeter</Typography>
                
                
                <AddMainMeter 
                date={date}
                time={time}
                />
                <AddSubMeter 
                  date={date}
                  time={time}
                />
            </CardContent>
        </Card>
 
    )
}

export default Add