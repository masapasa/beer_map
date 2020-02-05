import React, { Component } from 'react';
import { Container, Row, Card, CardImg, CardBody, CardTitle, CardFooter, Col } from 'reactstrap';
import Loader from '../utilities/loader.component';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { additionalUrl } from '../../shared/sharedKeys';
import parse from 'html-react-parser';
import './most-recent.styles.scss';

class MostRecent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            breweries: [],
            sectionHeader: 'Additional Breweries'
        }
    }

    getAdditionalBreweries = async () => {
        await axios
            .get( additionalUrl + '&filter[cat]=-1,-171' )
            .then(res => {
                this.setState({ breweries: res.data });
            })
            .catch(function (error) {
                console.log(error);
            });
    };

    renderAdditional = apiData => {

        const renderList = Object.entries(apiData);

        if(!renderList.length > 0) {
            return <Loader />;
        }

        return(
            renderList.map((data, index) => (
                <Col key={data[1].id} md="4" className="mb-5">
                    <Card className="col mb-4 h-100">
                        <CardImg top width="100%" src={`/assets/slider-${index + 1}.jpg`} alt={parse(data[1].title.rendered)} />
                        <CardBody>
                            <CardTitle>
                                <Link to={`/detailed-listing/${data[1].id}`}>
                                    <h5>{parse(data[1].title.rendered)}</h5>
                                </Link>
                            </CardTitle>
                            {parse(data[1].content.rendered)}
                        </CardBody>
                        <CardFooter>
                            <Link to={`/detailed-listing/${data[1].id}`} className="btn btn-secondary d-block">
                                See Details
                            </Link>
                        </CardFooter>
                    </Card>
                </Col>
            )
        ))

    }

    componentDidMount () {
        this.setState({isLoading: false});
        this.getAdditionalBreweries();
    }

    render() {

        const { sectionHeader, breweries } = this.state;
        
        return(
            <section className="most-recent">
                <Container className="py-3 my-5">
                    <Row className="row mb-4 mobile-heading">
                        <h2 className="pb-2 px-0 border-bottom col">{sectionHeader}</h2>
                    </Row>
                    <Row>
                        {this.renderAdditional(breweries)}
                    </Row>
                </Container>
            </section>
        );
    }
}

export default MostRecent;