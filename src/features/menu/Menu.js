import React, { useState } from 'react';
import {
  NavItem,
  NavLink,
  TabContent,
  TabPane,
  Row,
  Col,
  Card,
  CardTitle,
  CardText,
  Button,
  Nav,
  Container,
  CardImg,
  CardBody,
  CardSubtitle
} from 'reactstrap';
import { MENU } from '../../app/shared/MENU'
import { addItemToCart } from '../cart/cartSlice';


const Menu = () => {
  const menuItems = MENU

  const [activeTab, setActiveTab] = useState('All');

  const toggleTab = (tab) => {
    if (activeTab !== tab) {
      setActiveTab(tab);
    }
  };

  return (
    <Container className="">
      <Nav className='justify-content-center' tabs>
        <NavItem>
          <NavLink
            className={activeTab === 'All' ? 'active' : ''}
            onClick={() => toggleTab('All')}
          >
            All
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={activeTab === 'Hot Drinks' ? 'active' : ''}
            onClick={() => toggleTab('Hot Drinks')}
          >
            Hot Drinks
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={activeTab === 'Cold Drinks' ? 'active' : ''}
            onClick={() => toggleTab('Cold Drinks')}
          >
            Cold Drinks
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={activeTab === 'Deserts' ? 'active' : ''}
            onClick={() => toggleTab('Deserts')}
          >
            Deserts
          </NavLink>
        </NavItem>
      </Nav>
      <TabContent activeTab={activeTab}>
        {['All', 'Hot Drinks', 'Cold Drinks', 'Deserts'].map((category) => (
          <TabPane key={category} tabId={category}>
            <Row justify-content-center>
              {menuItems
                .filter((item) => item.category === category || category === 'All')
                .map((menuItem) => (
                  <Col key={menuItem.id} lg="3" md="6">
                    <Card className="featured-item">
                      <CardImg top src={menuItem.imgSrc} alt="Images" />
                      <CardBody>
                        <CardTitle><a href="#">{menuItem.name}</a></CardTitle>
                        <hr />
                        <CardSubtitle>${menuItem.price.toFixed(2)}</CardSubtitle>
                        <span>({menuItem.rating})<i className="fa fa-star"></i></span>
                        <hr />
                        <div className="featured-content-list">
                          <Button
                            type="button"
                            data-name={menuItem.name}
                            data-price={menuItem.price.toFixed(2)}
                            className="default-btn border-radius-5"
                            onClick={() => addItemToCart(menuItem)} // Dispatch addItemToCart action
                          >
                            Add to cart
                          </Button>
                        </div>
                      </CardBody>
                    </Card>
                  </Col>
                ))}
            </Row>
          </TabPane>
        ))}
      </TabContent>
    </Container>
  );
};

export default Menu;
