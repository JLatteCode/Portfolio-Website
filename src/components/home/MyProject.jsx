import React from "react";
import "./MyProject.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import { dataportfolio } from "../../content_option";
import  {Image} from 'react'

export const MyProject = () => {



  return (

  
    <HelmetProvider>
   
      <Container className="About-header">
        <Helmet>
         
        </Helmet>
        <Row className="mb-5 mt-3">
          <Col lg="8">
            <h1 className="display-4 mb-4"> Portfolio </h1>{" "}
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>
        <div className="mb-5 po_items_ho">
          {dataportfolio.map((data, i) => {
            return (
              <div key={i} className="po_item">
                <img style= {{width:400, height:600}} src= {data.img} />
                <div className="content">
                  <p>{data.desctiption}</p>
                  <a href={data.link}>view project</a>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </HelmetProvider>
  );
  
};

export default MyProject;