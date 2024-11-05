import { TextField,Button, Typography} from '@mui/material'
import { Box,Container } from '@mui/system'
import React from 'react'
import {useState} from 'react'
const OPBlock=()=>{
   
   const [OPMainValue,SetOpMainValue]=useState('');
   const [OPSubValue,SetOpsubValue]=useState('');

   const opmainhandchange=(event)=>{
        SetOpMainValue(event.target.value);
   }

   const opsubhandchange=(event)=>{
        SetOpsubValue(event.target.value);
    }
    const OPMain=(event)=>{
        event.preventDefault()
        console.log(OPMainValue)
    }
    const OPSub=(event)=>{
        event.preventDefault()
        console.log(OPSubValue)
    }
    
    return (

        <Container>
            
                <Box 
                
                    sx={{
                    display:'flex',
                    flexDirection: 'column',
                
                    width:600,
                    height: 600,
                    borderRadius: 1,
                    border: 'solid  black'
                }}>
                    <form onSubmit={OPMain}>
                        <Typography>OPBlockMainMeter</Typography>
                        
                        <TextField
                            margin="normal"
                            required
                            color="success"
                            id="OPReadingValue"
                            label="ReadingValue"
                            name="OPReadingValue"
                            value={OPMainValue}
                            onChange={opmainhandchange}
                            autoFocus
                            variant="outlined"
                            type="number"
                            
                        /><br></br>
                        <Button type="submit">add</Button>
                           
                    </form>

                    <form onSubmit={OPSub}>
                        <Typography>OPBlockSubMeter</Typography>
                        
                        <TextField
                            margin="normal"
                            required
                            color="success"
                            id="OPReadingValue"
                            label="ReadingValue"
                            name="OPReadingValue"
                            value={OPSubValue}
                            onChange={opsubhandchange}
                            autoFocus
                            variant="outlined"
                            type="number"
                            
                        /><br></br>
                        <Button type="submit">add</Button>
                          
                    </form>
                    
                
                </Box>
            
        </Container>
      
        
    )
}

export default OPBlock