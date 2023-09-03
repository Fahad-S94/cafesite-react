
import { useState } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
  Button,
  Col,
  Row,
  Container
  
} from 'reactstrap';
import { CAROUSEL } from '../../app/shared/CAROUSEL';



const HomeCarousel = () => {
  const items = CAROUSEL;

  const styleImg = { height: '800px', width: '100%' };

  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  const slides = items.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.image}
      >
        <img
          src={item.image}
          alt={item.altText}
          className="img-fluid"
          style={styleImg}
        />
        <CarouselCaption
          captionHeader={item.caption}
          captionText={item.description}
        />
      </CarouselItem>
    );
  });

  return (
    <Container fluid>
      <Row>
        <Col md="8" className="mx-auto">
          <Carousel activeIndex={activeIndex} next={next} previous={previous}>
            <CarouselIndicators
              items={items}
              activeIndex={activeIndex}
              onClickHandler={goToIndex}
            />
            {slides}
            <CarouselControl
              direction="prev"
              directionText="Previous"
              onClickHandler={previous}
            />
            <CarouselControl
              direction="next"
              directionText="Next"
              onClickHandler={next}
            />
            <Button color="danger" size="sm" id="carouselButton">
              <i className="fa fa-pause"></i>
            </Button>
          </Carousel>
        </Col>
      </Row>
      
    </Container>
  );
};

export default HomeCarousel;
