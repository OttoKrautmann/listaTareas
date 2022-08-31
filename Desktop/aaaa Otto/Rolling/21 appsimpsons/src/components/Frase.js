import React from "react";
import Card from "react-bootstrap/Card";

const Frase = () => {
  return (
    <div className="py-5">
      <Card className="row">
        <Card.Img variant="top" src="holder.js/100px180" className="col-12 col-md-3" />
        <Card.Body className="col-12 col-md-9">
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Frase;
