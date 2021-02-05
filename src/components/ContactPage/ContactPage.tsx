import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Card, Container } from 'react-bootstrap';

export default class ContactPage extends React.Component {
    render() {
        return (
            <Container>
                <Card>
                    <Card.Body>
                        <Card.Title>
                        <FontAwesomeIcon icon={ faPhone } /> Contact details
                        </Card.Title>
                        <Card.Text>
                            Online Prodavnica Racunara i Telefona <br />
                            Telefon: +381641546872 <br />
                            Adresa: Majakovskog 24 <br />
                            Mesto: Nis
                            
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Container>
          );
    }
}
