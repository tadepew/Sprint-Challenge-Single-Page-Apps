import React from "react";
import { Card, CardHeader, CardFooter } from "reactstrap";

export default function LocationCard(props) {
  return (
    <div>
      <Card body className="text-center" outline color="warning">
        <CardHeader className="card-header">{props.name}</CardHeader>
        <CardFooter className="card-footer">
          <p>Type: {props.type}</p> <p>Dimension: {props.dimension}</p>
        </CardFooter>
      </Card>
    </div>
  );
}
