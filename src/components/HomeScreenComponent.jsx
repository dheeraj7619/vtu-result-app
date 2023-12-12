import { Carousel, Col, Container, Row } from "react-bootstrap"
import { Link } from "react-router-dom";

const HomeScreenComponent = () =>{


    return(
        <Container>
            <div className="marquee-homescreen mt-3">
                <marquee><h4>VTU Results out - 2023 check exam result now      !!!! 
                    <Link to="/result">click here...</Link></h4></marquee>
            </div>
         <Carousel data-bs-theme="dark">
      <Carousel.Item>
        <img
          className="d-block w-100 carosoul-img"
          src="images/vtu-img1.png"
          alt="First slide"
        />
        
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 carosoul-img"
          src="images/vtu-img-2.png"
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 carosoul-img"
          src="images/vtu-img3.jpg"
          alt="Third slide"
        />
       
      </Carousel.Item>
    </Carousel>

    <Row className="mt-4 mb-4">
        <Col >
            <h4>VISION</h4>
            <p className="home-section-info"> To become an outstanding Technological University at the cutting edge of Science and 
                Technology that produces world class Knowledge-delivery, Research, Extension and 
                Leadership in Technology innovation for Industry and Society.</p>
                <Link to="/about" className="btn btn-info">Read More</Link>
        </Col>

        <Col >
            <h4>MISSION</h4>
            <p className="home-section-info">To plan the development of technical education, to establish value-based and need-based
                 education and training in engineering and technology, with a view to generate qualified
                  and competent manpower, responsive to technological and societal needs.</p>
                <Link to="/about" className="btn btn-info">Read More</Link>


        </Col>

        <Col >
            <h4>MANDATE</h4>
            <p className="home-section-info">The Visvesvaraya Technological University has been established by the Government of the
                 Karnataka in order to Promote planned and sustainable development of technical education
                  consistent with state and national policies.</p>
                <Link to="/about" className="btn btn-info">Read More</Link>


        </Col>
    </Row>
        </Container>
    )
}

export default HomeScreenComponent