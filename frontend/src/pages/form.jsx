//form.js
import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import { InputGroup, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import {Col} from 'react-bootstrap';
import 'react-phone-number-input/style.css';
import Alert from 'react-bootstrap/Alert';

function FeedbackForm() {
    const [displayform, setDisplay] = useState(true)
    const [nm_value, setNmValue] = useState('')

    const [checked_val, setCheckBoxChecked] = useState([]);
    const [error_msg, setErrorMsg] = useState('Please enter the value for the above field');

    const handleOnChange = (isChecked, value) => {
        let temp = [...checked_val];
        var pre = value.split('_')[0]
        if (isChecked) {
            temp = temp.filter(item => item.split('_')[0] !== pre)
            temp.push(value);
            setCheckBoxChecked(temp);
            return;
        }

        setCheckBoxChecked(temp.filter(item => item !== value));
    };

    const validateForm = ()=>{
        setErrorMsg('Please enter the value for the above field');

        [...document.getElementsByClassName('alert-danger')].forEach(element => {
            element.style.display = "none";
        });
        if(nm_value===''){
            document.getElementById('name_er').style.display = "block";
        }
        else if(checked_val.length < Object.keys(feedback_type).length){
            let keys = Object.keys(feedback_type)
            checked_val.map((val)=>{
                keys = keys.filter(item => item !== val.split('_')[0])
            })
            keys.map(val =>{
                document.getElementById('er_'+val).style.display = "block";
            })
        }
        else return true;
    };
    
    const formSubmit = (e) =>{
        e.preventDefault();

        if (validateForm())
        {
            var existingEntries = JSON.parse(localStorage.getItem("allEntries"));
            var new_id = 0;
            if(existingEntries == null) existingEntries = [];
            else{
                let lastentry = existingEntries.slice(-1)[0]
                new_id = parseInt(lastentry["id"]) + 1;
            }
            var entry = {
                "id": new_id, 
                "name": nm_value,
                "checkbox_values": checked_val,
            };
            existingEntries.push(entry);
            localStorage.setItem("allEntries", JSON.stringify(existingEntries));
            setDisplay(false)
        }
        
    };

    const feedback_type = {
        'qos': 'Please rate the quality of the service you received from your host.', 
        'qob': 'Please rate the quality of your foods.',
        'roc': 'Was our hotel clean?',
        'exp': 'Please rate your overall hotel stay experience.'
    }};