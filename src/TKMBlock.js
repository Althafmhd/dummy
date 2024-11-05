import React from 'react'
import {useState} from 'react'
import { Container,Box ,Typography,TextField,Button } from '@mui/material'
const TKMBlock=()=>{
    const [TKMMainValue,SetTKMMainValue]=useState('');
   const [TKMSubValue,SetTKMsubValue]=useState('');

   const opmainhandchange=(event)=>{
        SetTKMMainValue(event.target.value);
   }

   const opsubhandchange=(event)=>{
        SetTKMsubValue(event.target.value);
    }
    const OPMain=(event)=>{
        event.preventDefault()
        console.log(TKMMainValue)
    }
    const OPSub=(event)=>{
        event.preventDefault()
        console.log(TKMSubValue)
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
                        <Typography>TKMBlockMainMeter</Typography>
                        
                        <TextField
                            margin="normal"
                            required
                            color="success"
                            id="OPReadingValue"
                            label="ReadingValue"
                            name="OPReadingValue"
                            value={TKMMainValue}
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
                            value={TKMSubValue}
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

export default TKMBlock 