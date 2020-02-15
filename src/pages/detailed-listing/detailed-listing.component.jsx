import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import Loader from '../../components/utilities/loader.component';
import axios from 'axios';
import Carousel from '../../components/carousel/carousel.component';
import Cta from '../../components/cta/cta.component';
import { detailedUrl } from '../../shared/sharedKeys';
import parse from 'html-react-parser';
import './detailed-listing.styles.scss';

class DetailedListing extends Component {

    _isMounted = false;

    constructor(props) {
        super(props);
        this.state = {
            breweries: [],
            breweryId: props.match.params.breweryId
        }
    }

    getSingleBrewery = async () => {
        await axios
            .get( detailedUrl + this.state.breweryId )
            .then(res => {
                this.setState({ breweries: res.data });
            })
            .catch(function (error) {
                console.log(error);
            });
    };

    renderSingleBrewery = apiData => {
        if(!Object.keys(apiData).length > 0) {
            return <Loader />;
        }
        else {
            return(
                <React.Fragment>
                    <Carousel />
                    <Container key={apiData.id}>
                        <Row className="my-5">
                            <Col md="8">
                                <h1 className="display-4">{parse(apiData.title.rendered)}</h1>
                            </Col>
                            <Col md="4">
                                <h4 className="border-bottom pb-2">Location</h4>
                                <p>{apiData.acf.location.address}</p>
                                <p>{apiData.acf.location.city}, Colorado {apiData.acf.location.zip_code}</p>
                                <p>{apiData.acf.location.phone_number}</p>
                            </Col>
                        </Row>

                        { apiData.content.rendered || apiData.acf.specials ? `
                            <Row className="my-5">
                                ${ apiData.content.rendered ? ` 
                                    <Col>
                                        <h5 className="border-bottom pb-2">Description</h5>
                                        ${ parse(apiData.content.rendered) }
                                    </Col>
                                ` : ''}
                                ${ apiData.acf.specials ? `
                                    <Col>
                                        <h5 className="border-bottom pb-2">Specials</h5>
                                        <p>${ apiData.acf.specials }</p>
                                    </Col>
                                ` : ''}
                            </Row>
                        ` : ''}
                        
                        <Row className="my-5">
                            <Cta headline={'Find Events'} content={'Events text'} buttonText={'See Events'} />
                        </Row>

                        { apiData.content.rendered || apiData.acf.specials ? `
                            <Row className="my-5">
                                ${ apiData.acf.beers ? `
                                    <Col md="6">
                                        <h6 className="border-bottom pb-2">On Tap</h6>
                                        <p>${ apiData.acf.beers }</p>
                                    </Col>
                                ` : ''}
                                ${ apiData.acf.beers ? `
                                    <Col md="6">
                                        <h6 className="border-bottom pb-2">Food Truck Schedule</h6>
                                        <p>${ apiData.acf.foodtrucks }</p>
                                    </Col>
                                ` : ''}
                            </Row>
                        ` : ''}

                        <Row className="my-5">
                            <Cta headline={'Book a Tour'} content={'Tour text'} buttonText={'Book Now!'} />
                        </Row>

                    </Container>
                </React.Fragment> 
            );
        }
    }

    componentDidMount () {
        this._isMounted = true;
        this.getSingleBrewery();
        this.setState({isLoading: false});
    }

    componentWillUnmount() {
        this._isMounted = false;
    }

    render() {

        const { breweries } = this.state;

        return(
            <section className='detailed-listing'>
                {this.renderSingleBrewery(breweries)}
            </section>
        );
    }
}

export default DetailedListing;