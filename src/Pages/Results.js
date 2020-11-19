import React, {useState} from 'react'
import SideBar from '../Components/SideBar';
import StatusBar from '../Components/StatusBar';
import resultStyle from '../Themes/ResultStyle.module.css';


import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

const pageName = "Examination Result"




export default function Results() {

    const [semester, setSemester] = useState('')

    const semesterHandler = (e) => {
        console.log(e)
    }

    return (
        <div className={resultStyle.resultPage}>
            <SideBar />
            <div className={resultStyle.mainContent}>
                <StatusBar pageName={pageName} />

                <div className={resultStyle.content}>
                    <div className={resultStyle.firstRow}>
                        <div className={resultStyle.selectSemester}>
                            <h2>Select Semester</h2>
                            <FormControl>
                                <InputLabel
                                
                                >
                                Semester
                                </InputLabel>
                                <Select
                                value={semester}
                                onChange={() => semesterHandler}
                                >
                                    <MenuItem value={"Second Semester"}>Second Semester</MenuItem>
                                    <MenuItem value={"Third Semester"}>Third Semester</MenuItem>
                                    <MenuItem value={"Fourth Semester"}>Fourth Semester</MenuItem>
                                    <MenuItem value={"Fifth Semester"}>Fifth Semester</MenuItem>
                                </Select>
                            </FormControl>
                        </div>

                        <div>

                        </div>
                    </div>
                </div>    
            </div>
        </div>
    )
}
