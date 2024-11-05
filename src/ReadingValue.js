import { TableCell, TableContainer, Box,TableHead, TableRow ,Card, TableBody, TextField ,Button, Select, MenuItem } from '@mui/material'
import React from 'react'
import { listdata ,getlistdata,AddSreadingvalue , getSreadingvalue} from '../services/OPBlockService'
import { useState,useEffect } from 'react'
const ReadingValue=({time,date})=>{
    
    const [meter,setMeter]=useState([])
    const [mmetername,setMmetername]=useState('')
    const [smeter,setSubmeter]=useState([])
    const [filtermeter,setFiltermeter]=useState([])
    const [smetername,setSmeter]=useState('')
    const [rsvalue ,setrValue]=useState('')
    const [readingMeter,setReadingmeter]=useState([])
    const [yReading,setYreading]=useState([])
    const [filterReading,setFilreading]=useState([])
    const [trsvalue,setTrsvalue]=useState('')
    const [yrsvalue,setYrsvalue]=useState('')
    useEffect(()=>{
        listdata().then((response)=>{
            setMeter(response.data)
        }).catch((error)=>{
            console.error(error)
        })
        getSreadingvalue().then((response)=>{
            setYreading(response.data)
        }).catch((error)=>{
            console.error(error)
        })
    })
    const meterNameChange=(e)=>{
        const slectmetername=e.target.value
        setMmetername(slectmetername)
        
        getlistdata().then(response =>{
            setFiltermeter(response.data)
            //console.log(response.data)
            const filtered=response.data.filter(item => item.mmetername.trim() === slectmetername.trim())
            setSubmeter(filtered)
           
        }).catch(error =>{
            console.error(error)
        })
    }
   /* const handleInputChange = ( meterId,rsvalue) => {
        setrValue(prevState => ({
            ...prevState,
            [meterId] :rsvalue // Associate the input value with the meterId
        }));
    };*/

    const handleSubmitrvalue=  (event)=>{
        event.preventDefault()
    
     

       /* const sreading={
            time: time.trim(),
            date: date,
            mmetername: mmetername.trim(),
            smetername: smetername.map(meter => ({
              
                smetername: meter.smetername.trim() // Include any other properties you need
            })),
            rsvalue: Object.keys(rsvalue).map(key => ({
               
                reading: String(rsvalue[key])
             })),
           // smetername:JSON.stringify(smetername)smetername , // Convert array to JSON string
            // rsvalue: JSON.stringify(rsvalue) rsvalue
        } */
         /*   const readings = smetername.map(meter => {
                const readingValue = rsvalue[meter.id] || ''; // Use an empty string if no value is provided
                return {
                    smetername: meter.smetername.trim(),
                    reading: String(readingValue),
                };
            });
        
            const sreading = {
                time: time.trim(),
                date: date,
                mmetername: mmetername.trim(),
                readings: readings, // Store combined readings
            };*/
        const filtered=yReading.filter(item => item.smetername && smetername && item.smetername.trim() === smetername.trim());
      
        filtered.forEach(reading =>{
            const a=(rsvalue - reading.rsvalue );
            const b=reading.trsvalue;
            console.log(a);
            setTrsvalue(a);
            console.log(b);
            setYrsvalue(b);
        })
       
       const sreading={time,date,mmetername,smetername,rsvalue,trsvalue,yrsvalue}

       AddSreadingvalue(sreading).then(response =>{
           //console.log(response.data)
        })
       

        setReadingmeter(prevState => [...prevState, sreading])
       // console.log(readingMeter)
      
    }
     
    return (
        <Box>
           {/* <Card sx={{background : 'transparent'  ,height:"700px"}}>
            <Select sx={{width:200}} value ={mmetername} onChange={meterNameChange}>
                {
                    meter.map((meters)=>(
                        <MenuItem key={meters.id} value={meters.metername}>{meters.metername}</MenuItem>
                    ))
                }
            </Select>
            <TableContainer>
                <TableHead>

                    <TableRow >
                        
                        {   
                        
                        smetername.map((meters)=>(
                                
                                <TableCell align ="center" key={meters.id}>{meters.smetername}</TableCell>
                            ))
                        }
                       
                    </TableRow>
                </TableHead>
                <TableBody>
                    <TableRow>
                      
                    {   
                        
                        smetername.map((meters)=>(
                            
                            <TableCell>
                            <TextField 
                            type="number"
                            sx={{width :200}}
                            value={rsvalue[meters.id]}
                            onChange={(e)=> handleInputChange(meters.id,e.target.value)}>
                            </TextField></TableCell>
                            
                        ))
                        
                    }
                    
                    <TableCell><Button onClick={handleSubmitrvalue}>Add</Button></TableCell>   
                    </TableRow>

                    <TableRow>
               
                    {   
                        
                        smetername.map((meters)=>(
                            
                            <TableCell ><TextField type="number" sx={{width :200}} ></TextField></TableCell>
                            
                        ))
                        
                    }
                    
                    </TableRow>

                    <TableRow>
                    
                    {   
                        
                        smetername.map((meters)=>(
                            
                            <TableCell ><TextField type="number" sx={{width :200}} ></TextField></TableCell>
                            
                        ))
                        
                    }
                    
                     
                    </TableRow>
                </TableBody>
            </TableContainer>
        </Card> <br></br>*/}
        <Card sx={{
            background :"transparent",
            display: 'flex',
            justifyContent: 'center',
            
            alignItems: 'center',      
        }}>
            <form >
                <h3>SubMeterReading</h3><br></br>
                <TextField select sx={{width : 500}} label ="MainMeterName" value={mmetername} onChange={meterNameChange}>
                    {
                        meter.map((meter)=>(
                            <MenuItem key={meter.id} value={meter.metername}>{meter.metername}</MenuItem>
                        ))
                    }
                </TextField><br></br><br></br>
                <TextField select sx={{width :500}} label ="SubMeterName" value={smetername} onChange={(e)=>{setSmeter(e.target.value)}}>
                    {
                        smeter.map((meter)=>(
                            <MenuItem key={meter.id} value={meter.smetername}>{meter.smetername}</MenuItem>
                        ))
                    }
                </TextField><br></br><br></br>
                <TextField type="number" sx={{width : 500}} label ="ReadingValue" value={rsvalue} onChange={(e)=>{setrValue(e.target.value)}}/><br></br><br></br>
                <Button onClick={handleSubmitrvalue} sx={{width :500}}>Enter</Button>
            </form><br></br>
           
        </Card>
        <TableContainer>
            <TableHead>
                <TableRow>
                    <TableCell>MainMetername</TableCell>
                    <TableCell>SubMeterName</TableCell>
                    <TableCell>TotalReading</TableCell>
                   <TableCell>TodayValue</TableCell>
                   <TableCell>YesterdayValue</TableCell>
           
                </TableRow>
            </TableHead>
            <TableBody>
                {
                  readingMeter.map((meter)=>(
                  <TableRow >
                        <TableCell>{meter.mmetername}</TableCell>
                        <TableCell>{meter.smetername}</TableCell>
                        <TableCell>{meter.rsvalue}</TableCell>
                        <TableCell>{meter.trsvalue}</TableCell>
                        <TableCell>{meter.yrsvalue}</TableCell>
                  </TableRow>
                  ) )
                }
                
              
            </TableBody>
        </TableContainer>
        </Box>
           /* const smeterChange = async (e) => {
        const selectedSmeter=e.target.value
        setSmeter(selectedSmeter);

        try {
            const responseRead=await getLastEntryResetSubMeterReading(selectedSmeter)

            if (responseRead.data && responseRead.data.rsvalue !== undefined) {
                console.log("RValue:", responseRead.data.rsvalue);
                setYreading(responseRead.data.rsvalue);
            } else {
                console.warn("RValue not found in response");
            }
            const a=responseRead.data.rsvalue;
            console.log(a)
            if(a === 0){
                setYrsvalue(a)
            }
            else{
                const responseSubmeter= await getLastEntrySubMeterReading(selectedSmeter)
                console.log(responseSubmeter.data.trsvalue)
                setYrsvalue(responseSubmeter.data.trsvalue)
            }

        } catch (error) {
            console.error(error);
        }
    };
   

   const handleSubmitrvalue=  (event) =>{
        event.preventDefault()
        const numericRValue=parseFloat(readingunits);
        if(numericRValue < yReading){
            setRserror('Reading value is not valid ')
            return
        }
        else{
            const newTodayReading = yReading === null ? numericRValue : numericRValue - yReading;
            setTrsvalue(newTodayReading )
            const sreading={time,date,mainmetername,subblockmetername,rsvalue:numericRValue,trsvalue:newTodayReading ,yrsvalue}
          
           try{
                AddSreadingvalue(sreading)
                restSubReading({date,mainmetername,subblockmetername,readingunits})
                setReadingmeter(prevState => [...prevState, sreading])
                setMmetername('')
                setSmeter('')
                setReadings('')
           }
           catch(error){
            console.error(error)
           }
        }
       // console.log(readingMeter)
      
    };*/
    {/*  <TableContainer component={Paper}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Main Meter name</TableCell>
                        <TableCell>Sub Meter Name</TableCell>
                        <TableCell>Total Reading</TableCell>
                        <TableCell>Today Value</TableCell>
                        <TableCell>Yesterday Value</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {
                    readingMeter.map((meter,index)=>(
                    <TableRow key={index}>
                            <TableCell>{meter.mmetername}</TableCell>
                            <TableCell>{meter.smetername}</TableCell>
                            <TableCell>{meter.rsvalue}</TableCell>
                            <TableCell>{meter.trsvalue}</TableCell>
                            <TableCell>{meter.yrsvalue}</TableCell>
                    </TableRow>
                    ) ) }
                    
                
                </TableBody>
            </Table>
        </TableContainer>
        */}
        {/* <TextField
                id="sub-meter-name"
                name="mainMeterName"
                label="Sub Meter Name"
                select 
                sx={{width :500}}
                value={smetername} 
                onChange={smeterChange} >
                    {
                        smeter.map((meter)=>(
                            <MenuItem key={meter.id} value={meter.smetername}>{meter.smetername}</MenuItem>
                        ))
                    }
                </TextField><br></br><br></br>
                <TextField 
                type="number"
                sx={{width : 500}}
                label ="ReadingValue" 
                value={rsvalue}
                onChange={(e)=>{
                    setrValue(e.target.value)
                    setRserror('')
                }} 
                error={!!rserror} 
                helperText={rserror}
                /><br /><br />
                <Button type="submit" sx={{width :500}}>Enter</Button>*/}
    )
}
export default ReadingValue