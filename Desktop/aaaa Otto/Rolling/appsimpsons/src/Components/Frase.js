import React from "react";
import Card from "react-bootstrap/Card";

const Frase = (props) => {
  return (
    <div className="text-center">
      <Card>
        <div className="row">
          <div className="col-12 col-sm-12 col-md-3">
            <Card.Img variant="top" src={props.personaje.image} />
          </div>
          <div className="col-12 col-sm-12 col-md-9">
            <Card.Body>
              <Card.Title>{props.personaje.character}</Card.Title>
              <Card.Text>
                {props.personaje.quote}
              </Card.Text>
            </Card.Body>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Frase;
