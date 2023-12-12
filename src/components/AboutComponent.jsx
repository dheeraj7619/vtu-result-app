import { Col, Container, Image, Row } from "react-bootstrap"

const AboutComponent = ()=>{

    return(
        <>
        <Container >
            <Row className="mt-5">
                <Col>
                <Image src="images/vision-img.jpg" alt="vision image" height={250} width={450}/>
                </Col>
                <Col>
                <h3 className="mt-3">VISION</h3>
                <p className="mt-3">To become an outstanding Technological University at the cutting edge of Science and
                     Technology that produces world class Knowledge-delivery, Research, Extension and 
                     Leadership in Technology innovation for Industry and Society.</p>
                </Col>
            </Row>

            <Row className="mt-4">
               
                <Col>
                    <h3>MISSION</h3>
                    <p>To plan the development of technical education, to establish value-based and 
                        need-based education and training in engineering and technology, with a view to 
                        generate qualified and competent manpower, responsive to technological and 
                        societal needs.</p>
                </Col>
                <Col>
                    <Image src="images/mission-img.jpg" alt="mission image" height={250} width={450}/>
                </Col>
            </Row>

            <Row className="mt-5 mb-5">
                <Col>
                <Image src="images/mandate-img.jpg" alt="vision image" height={300} width={450}/>
                </Col>
                <Col>
                <h3 className="mt-1">MANDATE</h3>
                <p className="mt-3">The Visvesvaraya Technological University has been established by the Government of the Karnataka in order to Promote planned and sustainable development of technical education consistent with state and national policies.</p>
                <ul>
                    <li>Design need based programs that ensure adequate human resource of the right kind.</li>
                    <li>Establish objective evaluation and certification systems for students,programs and institutions.</li>
                    
                </ul>
                </Col>
            </Row>
        </Container>
        </>
    )
}


export default AboutComponent;