import { Col, Container, ListGroup, Row } from "react-bootstrap";
import SingleListGroup from "./SingleListGroup";
import CardLocationSelected from "./CardLocationSelected";
import { useSelector } from "react-redux";

const PreferHome = ({ meteoPreferiti }) => {
  let oggettoSelezionato = useSelector(
    (state) => state.oggettoSelezionato.content
  );
  return (
    <>
      <Container className="pb-5">
        {meteoPreferiti.length !== 0 && (
          <h2 className="text-center my-5">I tuoi luoghi preferiti! </h2>
        )}
        <Row className="justify-content-center ">
          <Col
            xs={10}
            xl={5}
            className=" d-flex justify-content-center align-items-center "
          >
            <ListGroup
              className={`w-75 ${meteoPreferiti.length !== 0 && "shadow-xl"}`}
            >
              {meteoPreferiti.map((singlePref) => {
                return <SingleListGroup singlePref={singlePref} />;
              })}
            </ListGroup>
          </Col>
          {oggettoSelezionato && (
            <Col xs={12} sm={10} xl={5}>
              <CardLocationSelected oggettoSelezionato={oggettoSelezionato} />
            </Col>
          )}
        </Row>
      </Container>
    </>
  );
};

export default PreferHome;
