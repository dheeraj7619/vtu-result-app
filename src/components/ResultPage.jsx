import { useContext, useEffect } from "react";
import { Container, Row,Col, Table, Button } from "react-bootstrap"
import {Link} from "react-router-dom"

import ContextProvider, { Contextt } from "./ContextProvider";
import "../App.css"
import { getStudentResultByRegisterno } from "../ApiService/StudentResultApiService";

const ResultPage = ()=>{
    const {studentData,setStudentData} = Contextt();
const params = new URLSearchParams(window.location.search);
const regno = params.get("regno");
console.log(regno);

useEffect(()=>{
    getStudentResultByRegisterno(regno).then((res)=>setStudentData(res.data))
    .catch((err)=>setStudentData(err.response.data))
},[regno])

    console.log(studentData)
    return (
        <Container>
            
            {studentData.message!=null &&
             <div className="mt-5 alert-danger alert">
                <h5> {studentData.message}</h5>
            </div>

            }

{studentData.registerNumber!=null &&
<>
            <h4 className="text-center bg-success mt-3 p-2 text-white fw-bold">Result Details</h4>
            <Row className="mt-5">
                <Col md={6}>
                    <h6 className="mt-1 ml-3">Name : <span className="fw-bold">{studentData.studentName}</span></h6>
                    <h6 className="mt-1 ">Stream Of study : <span className="fw-bold">{studentData.streamOfStudy}</span></h6>
                    <h6 className="mt-1 ">College Name : <span className="fw-bold">{studentData.collegeName}</span></h6>

                </Col>

                <Col md={6}>
                <h6 className="mt-1 text-center">Register Number : <span className="fw-bold">{studentData.registerNumber}</span></h6>
                     </Col>
            </Row>

            <Row className="mt-5">
                <Table className="mt-3" bordered striped>
                    <thead>
                        <tr>
                            <th>Subject</th>
                            <th>Subject Code</th>
                            <th>Min Mark</th>
                            <th>Max Mark</th>
                            <th>Marks Secured</th>

                            <th>Result</th>

                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Web Technology</td>
                            <td>73657</td>
                            <td>28</td>
                            <td>80</td>
                            <td>{studentData.subWebTechnology}</td>
                            <td>{studentData.result}</td>
                        </tr>

                        <tr>
                            <td>Software Engineering</td>
                            <td>73660</td>
                            <td>28</td>
                            <td>80</td>
                            <td>{studentData.subSoftwareEngineering}</td>
                            <td>{studentData.result}</td>
                        </tr>

                        <tr>
                            <td>Python</td>
                            <td>73657</td>
                            <td>28</td>
                            <td>80</td>
                            <td>{studentData.subPython}</td>
                            <td>{studentData.result}</td>
                        </tr>

                        <tr>
                            <td>Android</td>
                            <td>73657</td>
                            <td>28</td>
                            <td>80</td>
                            <td>{studentData.subAndroid}</td>
                            <td>{studentData.result}</td>
                        </tr>  
                        
                        <tr>
                            <td>Major Project</td>
                            <td>76797</td>
                            <td>28</td>
                            <td>80</td>
                            <td>{studentData.subMajorProject}</td>
                            <td>{studentData.result}</td>
                        </tr>
                        <tr>
                            <td className="fw-bold" colSpan={6}>CGPA : {studentData.cgpa}</td>
                        </tr>
                    </tbody>
                </Table>

                <Link to="/result"><Button className="mb-5">Back</Button></Link>
            </Row>
</>
}
        </Container>
    )
}


export default ResultPage;