import React from "react";
import Card from "react-bootstrap/Card";

const Frase = () => {
  return (
    <div>
      <Card>
        <div className="row">
          <div className="col-12 col-sm-12 col-md-3">
            <Card.Img variant="top" src="holder.js/100px180" />
          </div>
          <div className="col-12 col-sm-12 col-md-9">
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Frase;
