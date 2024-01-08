import React, { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import { InputGroup, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import {Col} from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
import StickyHeader from '../pages/feedbackheader';

function Submissions() {
    const allEntries = JSON.parse(localStorage.getItem("allEntries"));
    const [displayDetail, setDisplay] = useState(false);
    const [singleEntry, setSingleEntry] = useState({'name': '', 'checkbox_values':[]})
    

    useEffect(() => {
        var id,entry;
        if (!window.location.pathname.includes('submissions')){
            setDisplay(true)
            id = window.location.pathname.split('/').pop()
            entry = allEntries.filter(item => parseInt(item['id']) === parseInt(id))[0]
            setSingleEntry(entry)
        }
    },[]);

    const handleCheckVal = (ty,entry) =>{
        var val =''
        if (entry['checkbox_values'].length >0 ){
            val = entry['checkbox_values'].filter(item => item.split('_')[0] === ty)[0]
            val = val.split('_')[1]
        }
        return val
    }
    const singleEntryForm = ()=>{
        return(
            <><div>
                <StickyHeader/>
            </div><Container>
                    <Card>
                        <Card.Header>
                            <cite title="Source Title">Feedback Details
                            </cite>
                        </Card.Header>
                        <Card.Body>
                            <Row>
                                <Col>Guest feedback thoughts</Col>
                                <Col>{singleEntry['name']}</Col>
                            </Row>
                            {Object.keys(feedback_type).map((ty) => (
                                <Row>
                                    <Col>{feedback_type[ty]}</Col>
                                    <Col>{handleCheckVal(ty, singleEntry)}</Col>
                                </Row>
                            ))}
                        </Card.Body>
                    </Card>
                </Container></>
        )
    }
    
    const feedback_type = {
        'qos': 'Please rate the quality of the service you received from your host.', 
        'qob': 'Please rate the quality of your foods.',
        'roc': 'Was our hotel clean?',
        'exp': 'Please rate your overall hotel stay experience.'
    }
    
    return (
        <>
        {displayDetail?
            (singleEntryForm())
            :
            (<div className='padding30px'>
                <Table striped hover responsive>
                    <thead>
                        <tr>
                            <th>Form Details</th>
                            <th>Guest feedback thoughts</th>
                            {Object.keys(feedback_type).map((ty)=>(<th>{feedback_type[ty]}</th>))}
                        </tr>
                    </thead>
                    <tbody>
                        {allEntries.map(entry=>(
                            <tr>
                                <td><a href={`/submission/${entry['id']}`} target="_blank" rel="noopener noreferrer">View Details</a></td>
                                <td>{entry['name']}</td>

                                {Object.keys(feedback_type).map((ty)=>(
                                    <td>{handleCheckVal(ty,entry)}</td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </div>)
        }
        </>
    );
}

export default Submissions;