import './style.scss';
import Card from 'react-bootstrap/Card';

function Content() {
  return (
    <div className="Content">
        <h1 className="Content-title">Title</h1>
        <h2 className="Content-description">Decription</h2>
        <div className="Content-experience">
        <Card style={{ width: '18rem' }}>
            <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                </Card.Text>
            <Card.Link href="#">Card rdgfsfdLink</Card.Link>
            <Card.Link href="#">Another Link</Card.Link>
            </Card.Body>
        </Card>
                <Card style={{ width: '18rem' }}>
            <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                </Card.Text>
            <Card.Link href="#">Card Link</Card.Link>
            <Card.Link href="#">Another Link</Card.Link>
            </Card.Body>
        </Card>
        </div>
    </div>
  );
}

export default Content;
