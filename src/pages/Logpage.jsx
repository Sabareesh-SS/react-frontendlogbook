import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "./../styles/logpage.css"

export default function Logpage() {
    const [inputArr, setInputArr] = useState([]);
    const [inputText, setInputText] = useState({
      name: "",
      mark1: "",
      mark2: "",
      mark3: "",
      mark4: "",
      mark5:"",
    });
  
    const changeHandle = (e) => {
      setInputText({ ...inputText, [e.target.name]: e.target.value });
    };
  
    const addEntry = () => {
      if(
        !inputText.name ||
        !inputText.mark1 ||
        !inputText.mark2 ||
        !inputText.mark3 ||
        !inputText.mark4 ||
        !inputText.mark5
      ){
        alert("Please fill all the fields")
      }
      else{
        setInputArr([...inputArr, inputText]);
      setInputText({ name: "", mark1: "", mark2: "", mark3: "" ,mark4:"" , mark5:""});
        
    };
  }
  
    return (
      
      <div className="App">
        <h2>Student Marks Table</h2>
        <div>
          <input
            type="text"
            name="name"
            autoComplete="off"
            value={inputText.name}
            onChange={changeHandle}
            placeholder="Name"
          />
          <input
            type="number"
            name="mark1"
            autoComplete="off"
            value={inputText.mark1}
            onChange={changeHandle}
            placeholder="Mark 1"
          />
          <input
            type="number"
            name="mark2"
            autoComplete="off"
            value={inputText.mark2}
            onChange={changeHandle}
            placeholder="Mark 2"
          />
          <input
            type="number"
            name="mark3"
            autoComplete="off"
            value={inputText.mark3}
            onChange={changeHandle}
            placeholder="Mark 3"
          />
          <input
            type="number"
            name="mark4"
            autoComplete="off"
            value={inputText.mark4}
            onChange={changeHandle}
            placeholder="Mark 4"
          />
          <input
            type="number"
            name="mark5"
            autoComplete="off"
            value={inputText.mark5}
            onChange={changeHandle}
            placeholder="Mark 5"
          />
          <button onClick={addEntry}>Add</button>
        </div>
  
        {inputArr.length > 0 && (
          <table border="1" cellPadding="5" cellSpacing="0">
            <thead>
              <tr>
                <th>Name</th>
                <th>Tamil</th>
                <th>English</th>
                <th>Maths</th>
                <th>Physics</th>
                <th>Chemistry</th>
              </tr>
            </thead>
            <tbody>
              {inputArr.map((item, index) => (
                <tr key={index}>
                  <td>{item.name}</td>
                  <td>{item.mark1}</td>
                  <td>{item.mark2}</td>
                  <td>{item.mark3}</td>
                  <td>{item.mark4}</td>
                  <td>{item.mark5}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
)}
