import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Container, Card, Row, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import "./Subscription.css";

// https://dev.to/davidemaye/how-to-set-up-font-awesome-in-react-5a8d
// npm install --save font-awesome
// npm i --save @fortawesome/fontawesome-svg-core
// npm i --save @fortawesome/free-solid-svg-icons
// npm i --save @fortawesome/free-regular-svg-icons
// npm i --save @fortawesome/free-brands-svg-icons

function Subscription() {
  return (
    <div className="App">
      <div className="">
        <Container className="p-2">
          <Row>
            {["Free", "Plus", "Pro"].map((variant, idx) => (
              <Card
                border={variant.toLowerCase()}
                key={idx}
                text={"dark"}
                style={{ width: "30%", borderRadius: 15, opacity: 1 }}
                className="m-2 card2"
              >
                <Card.Title
                  style={{
                    textAlign: "center",
                    color: "grey",
                    fontWeight: "bold",
                    paddingTop: 20,
                  }}
                >
                  {variant.toUpperCase()}
                </Card.Title>
                <Card.Body>
                  <Card.Subtitle
                    style={{
                      fontSize: "40px",
                      textAlign: "center",
                    }}
                  >
                    {variant.toLowerCase() === "free"
                      ? "$0"
                      : variant.toLowerCase() === "plus"
                      ? "$9"
                      : "$49"}
                    <sub style={{ fontSize: "10px" }}>/month</sub>
                  </Card.Subtitle>
                  <hr></hr>
                  <Card.Text>
                    {variant.toLowerCase() === "free" ? (
                      <>
                        <FontAwesomeIcon
                          className="font-awesome"
                          icon={faCheck}
                        />
                        &nbsp;Single User
                      </>
                    ) : variant.toLowerCase() === "plus" ? (
                      <b>
                        <FontAwesomeIcon
                          className="font-awesome"
                          icon={faCheck}
                        />
                        &nbsp;5 Users
                      </b>
                    ) : (
                      <b>
                        <FontAwesomeIcon
                          className="font-awesome"
                          icon={faCheck}
                        />
                        &nbsp;Unlimited Users
                      </b>
                    )}
                  </Card.Text>
                  <Card.Text>
                    {variant.toLowerCase() === "free" ? (
                      <>
                        <FontAwesomeIcon
                          className="font-awesome"
                          icon={faCheck}
                        />
                        &nbsp;5GB Storage
                      </>
                    ) : variant.toLowerCase() === "plus" ? (
                      <>
                        <FontAwesomeIcon
                          className="font-awesome"
                          icon={faCheck}
                        />
                        &nbsp;50GB Storage
                      </>
                    ) : (
                      <>
                        <FontAwesomeIcon
                          className="font-awesome"
                          icon={faCheck}
                        />
                        &nbsp;150GB Storage
                      </>
                    )}
                  </Card.Text>
                  <Card.Text>
                    <>
                      <FontAwesomeIcon
                        className="font-awesome"
                        icon={faCheck}
                      />
                      &nbsp;Unlimited Public Projects
                    </>
                  </Card.Text>
                  <Card.Text>
                    <>
                      <FontAwesomeIcon
                        className="font-awesome"
                        icon={faCheck}
                      />
                      &nbsp;Community Access
                    </>
                  </Card.Text>
                  <Card.Text>
                    {variant.toLowerCase() === "free" ? (
                      <x
                        style={{
                          color: "grey",
                        }}
                      >
                        <FontAwesomeIcon
                          className="font-awesome"
                          icon={faXmark}
                        />
                        &nbsp;Unlimited Private Projects
                      </x>
                    ) : variant.toLowerCase() === "plus" ? (
                      <>
                        <FontAwesomeIcon
                          className="font-awesome"
                          icon={faCheck}
                        />
                        &nbsp;Unlimited Private Projects
                      </>
                    ) : (
                      <>
                        <FontAwesomeIcon
                          className="font-awesome"
                          icon={faCheck}
                        />
                        &nbsp;Unlimited Private Projects
                      </>
                    )}
                  </Card.Text>
                  <Card.Text>
                    {variant.toLowerCase() === "free" ? (
                      <x
                        style={{
                          color: "grey",
                        }}
                      >
                        <FontAwesomeIcon
                          className="font-awesome"
                          icon={faXmark}
                        />
                        &nbsp;Dedicated Phone Support
                      </x>
                    ) : variant.toLowerCase() === "plus" ? (
                      <>
                        <FontAwesomeIcon
                          className="font-awesome"
                          icon={faCheck}
                        />
                        &nbsp;Dedicated Phone Support
                      </>
                    ) : (
                      <>
                        <FontAwesomeIcon
                          className="font-awesome"
                          icon={faCheck}
                        />
                        &nbsp;Dedicated Phone Support
                      </>
                    )}
                  </Card.Text>
                  <Card.Text>
                    {variant.toLowerCase() === "free" ? (
                      <x
                        style={{
                          color: "grey",
                        }}
                      >
                        <FontAwesomeIcon
                          className="font-awesome"
                          icon={faXmark}
                        />
                        &nbsp;Free Subdomain
                      </x>
                    ) : variant.toLowerCase() === "plus" ? (
                      <>
                        <FontAwesomeIcon
                          className="font-awesome"
                          icon={faCheck}
                        />
                        &nbsp;Free Subdomain
                      </>
                    ) : (
                      <>
                        <FontAwesomeIcon
                          className="font-awesome"
                          icon={faCheck}
                        />
                        &nbsp;<b>Unlimited</b> Free Subdomains
                      </>
                    )}
                  </Card.Text>
                  <Card.Text>
                    {variant.toLowerCase() === "free" ? (
                      <x
                        style={{
                          color: "grey",
                        }}
                      >
                        <FontAwesomeIcon
                          className="font-awesome"
                          icon={faXmark}
                        />
                        &nbsp;Monthly Status Reports
                      </x>
                    ) : variant.toLowerCase() === "plus" ? (
                      <x
                        style={{
                          color: "grey",
                        }}
                      >
                        <FontAwesomeIcon
                          className="font-awesome"
                          icon={faXmark}
                        />
                        &nbsp;Monthly Status Reports
                      </x>
                    ) : (
                      <>
                        <FontAwesomeIcon
                          className="font-awesome"
                          icon={faCheck}
                        />
                        &nbsp;Monthly Status Reports
                      </>
                    )}
                  </Card.Text>
                  <Button
                    variant="primary"
                    style={{
                      textAlign: "center",
                      width: "100%",
                      borderRadius: 40,
                      wordSpacing: 10,
                    }}
                  >
                    BUTTON
                  </Button>
                </Card.Body>
              </Card>
            ))}
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default Subscription;
