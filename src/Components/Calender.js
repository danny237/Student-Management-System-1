import React, { useContext } from "react";
import homeStyle from '../Themes/Home.module.css';
import { DarkContext } from '../App';

export default function Calender() {

    let [darkMode] = useContext(DarkContext);

    let options = {day: 'numeric', month: 'long', year: 'numeric'}
    let today = new Date();
    let formatedDate = today.toLocaleDateString("en-US", options);
    let weeks = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
    let weekList = weeks.map((day, index) => (
        <th key={index}>
            <p>{day}</p>
        </th>
    ));

    let myArray = Array.from(Array(7).keys())
    let days = myArray.map((day, index) => {
        if(index === 1){
            return(
                <td key={index} className={homeStyle.currentDayStyle}>
                    {day+1}
                </td>
            )
        }else{
            return(
                <td key={index}>
                    {day+1}
                </td>
            )
        }
    });
   

  return (
    <div
      className={`${homeStyle.calender}
            ${darkMode ? homeStyle.lightHorizontalBorder : homeStyle.darkTheme}
            `}
    >
        <h2>{formatedDate}</h2>
        <table className={homeStyle.calenderStyle}>
            <thead>
                <tr>
                    {weekList}
                </tr>
            </thead>
            <tbody>
                <tr>
                    {days}
                </tr>
                <tr>
                    {days}
                </tr>
                <tr>
                    {days}
                </tr>
                <tr>
                    {days}
                </tr>
            </tbody>
        </table>



    </div>
  );
}
