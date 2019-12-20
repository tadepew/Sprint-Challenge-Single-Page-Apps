import React from "react";
import { Card, CardHeader, CardFooter, CardImg } from "reactstrap";

export default function CharacterCard(props) {
  return (
    <div>
      <Card body className="text-center" outline color="warning">
        <CardHeader className="card-header">{props.name}</CardHeader>
        <CardImg src={props.img} top width="100%" alt={props.name}></CardImg>
        <CardFooter className="card-footer">
          {props.species} <span> | </span> {props.status}
        </CardFooter>
      </Card>
    </div>
  );
}
