import "../../styles/tarjetas.css"
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

import minizum from "../../assets/minizum.jpg";

function TarjetaMinizum() {
  return (
    
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={minizum} />
      <Card.Body>
        <Card.Title>CARAMELO MINIZUM</Card.Title>
        <Card.Text>
        Los minizum de Pictolin, son una variante de caramelos destinado a los amantes de lo tradicional. Con un surtido muy completo de sabores de frutas entre los que se encuentran: melón, naranja, piña, mora, fresa y limón. Presentados en una bolsa de un kilo y envueltos individualmente.En cada bolsa hay 430 unidades aproximadamente. Elaborados SIN GLUTEN y con colorantes naturales. Los caramelos Pictolin de Frutas son unos caramelos excelentes para pasar un buen rato y disfrutar de sabores intenso. La bolsa de caramelos  Pictolin de Frutas ofrece una amplia variedad de sabores que no dejan indiferente a nadie. 
        </Card.Text>
        <Button variant="primary">Más información</Button>
      </Card.Body>
    </Card>
    
  );
}

export default TarjetaMinizum;

