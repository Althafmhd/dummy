import { TextField,Select ,Button ,Card, MenuItem } from '@mui/material'
import React from 'react'
import {useState,useEffect} from 'react'
import { listdata } from '../services/OPBlockService'
export  const SubMeterReading=()=>{
    const [meters,metername]=useState([])
    useEffect(()=>{
        listdata().then((response)=>{
            metername(response.data)
        }).catch((error)=>{
            console.error(error)
        })
    })
    const [smetername,setSmetername]=useState('');
    const[rValue,setrValue]=useState('');
    
    return (
        <Card sx={{
            background :"transparent",
            display: 'flex',
            justifyContent: 'center',
            
            alignItems: 'center',      
        }}>
            <form>
                <h3>SubMeterReading</h3><br></br>
                <TextField select sx={{width : 500}} label ="MainMeterName">
                    {
                        meters.map((meter)=>(
                            <MenuItem key={meter.id} value={meter.metername}>{meter.metername}</MenuItem>
                        ))
                    }
                </TextField><br></br><br></br>
                <TextField select sx={{width :500}} label ="SubMeterName">
                    {
                        meters.map((meter)=>(
                            <MenuItem key={meter.id} value={meter.metername}>{meter.metername}</MenuItem>
                        ))
                    }
                </TextField><br></br><br></br>
                <TextField type="number" sx={{width : 500}} label ="ReadingValue"/><br></br><br></br>
                <Button sx={{width :500}}>Enter</Button>
            </form>
        </Card>
        
    )
}
