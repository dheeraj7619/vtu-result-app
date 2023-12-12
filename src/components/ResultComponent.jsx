import { useContext, useState } from "react"
import { Button, Container, Form } from "react-bootstrap"
import { getStudentResultByRegisterno } from "../ApiService/StudentResultApiService";
import {useNavigate} from "react-router-dom"
import { Context } from "../App";
import ContextProvider, { Contextt } from "./ContextProvider";

const ResultComponent =()=>{
    const [register,setRegister] =useState("");
    const [validate,setValidated] =useState(false);
    const {studentData,setStudentData} = Contextt();
    console.log(studentData)
    console.log(studentData)
    const navigate = useNavigate();

    const registerHandler = (event)=>{
            setRegister(event.target.value);
            // console.log(typeof register )
            // console.log(typeof Number(register)  )
       

    }

    const handleSubmit = (event)=>{
        const form = event.currentTarget;
        console.log(form.checkValidity())
        if (form.checkValidity() === false) {
            event.preventDefault();
            // event.stopPropagation();
            setValidated(true);
            console.log(form.controlId)
          }
          console.log(validate);
          console.log(form)
          if (form.checkValidity() === true) {
            event.preventDefault();
            getStudentResultByRegisterno(register).then((res)=>setStudentData(res.data))
            .catch((err)=>setStudentData(err.response.data))
            navigate(`/resultpage?regno=${register}`)
        }
    }

    

    return(
        <Container >
             <Form noValidate className="mt-5" validated={validate} onSubmit={(event)=>handleSubmit(event)}>
                <h4 className="text-center">Check your result here...</h4>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Enter Register Number</Form.Label>
                    <Form.Control required minLength={3} type="text" name="regno" value={register } onChange={(e) => registerHandler(e)}/>
                    <Form.Control.Feedback type="invalid">please enter your register number</Form.Control.Feedback>
                
                </Form.Group>

                <Button variant="primary" type="submit">
                    Submit
                </Button>
                </Form>
        </Container>
    )
}


export default ResultComponent