import { Box,Card,CardContent, Typography } from '@mui/material'
import React ,{ useState }from 'react'
import Readingimg from './Readingimg.jpeg'
import MainMeterReading from './MeterReading/MainMeterReading'
import { SubMeterReading } from './MeterReading/SubMeterReading'
import { TextField } from '@mui/material'

const MeterReading=()=>{
    const[date,setDate]=useState(new Date());
    const[time,setTime]=useState(' ')
    return (
        <Box
         
        style={{
            backgroundImage : `url(${Readingimg})`,
            backgroundSize: "cover",
            display: 'flex',
        justifyContent: 'center',
        
        alignItems: 'center',      
            height: "98vh",
        }}
         
        >
            <Card sx={{
                background :'transparent',
               
              
            }}>
                <CardContent>
                    <Typography inline variant='h4' align="center">Meter Reading</Typography>
                    <Card sx={{background :'transparent',  display: 'flex',
    width :"600px", alignItems: 'Right',
    justifyContent: 'Right'}}>
                        <CardContent>
                            <TextField 
                                type="date"
                                value={date}
                                onChange={(e)=>{setDate(e.target.value)}}

                            /> <br></br><br></br>
                            <TextField
                                type="time"
                                value ={time}
                                onChange={(e)=>{setTime(e.target.value)}}
                            />
                        </CardContent>
                   </Card>
                   
                   <br></br><br></br>
                    <MainMeterReading 
                    time={time}
                    date={date}
                    /><br></br>
                    <SubMeterReading />
                </CardContent>
            </Card>
        </Box>
    )
}

export default MeterReading