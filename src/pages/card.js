import Card from "react-bootstrap/Card";
import styled from "styled-components";

function FoodCard() {
  return (
    <CardContainers>
      <CardContainer key="" style={{ width: "18rem" }}>
        <Card.Img variant="top" src="" />
        <Card.Body>
          <Card.Title>
            <Title> hgfghf</Title>
          </Card.Title>
        </Card.Body>
      </CardContainer>
    </CardContainers>
  );
}

const CardContainers = styled.div``;
const CardContainer = styled.div``;
const Title = styled.div``;

export default FoodCard;
