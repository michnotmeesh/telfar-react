import React from 'react';
import ReactDOM from 'react-dom';
import 'semantic-ui-css/semantic.min.css';
import './style.css';
import { Header, Container, Menu, Message, Grid, Icon, Input, Image, Flag } from 'semantic-ui-react';

class HeaderMessage extends React.Component {
  render() {
    return (
      <Message>
          PLEASE ALLOW 5-14 BUSINESS DAYS FOR ORDER PROCESSING (PRE-SHIPMENT) — THANKS FOR YOUR PATIENCE
      </Message>
    );
  }
}

class TopMenu extends React.Component {
  render() {
    const topStyle = { fontWeight: "bold" };
    return (
        <Container>
          <Menu borderless>
            <Menu.Item>
              <Icon name='search'/>
              <Input placeholder='Search'/>
            </Menu.Item>

            <Menu.Item style={topStyle} position='right'>
              TELFAR.TV
            </Menu.Item>

            <Menu.Item>
              Log in
            </Menu.Item>

            <Menu.Item>
              Cart (0)
            </Menu.Item>
          </Menu>
        </Container>
    );
  }
}

class MiddleMenu extends React.Component {
  render() {
    return (
        <Grid container columns='equal'>
          <Grid.Row>
            <Grid.Column width={4}>
              <Menu text vertical>
                <Menu.Item>
                  <Image size='small' src="https://cdn.shopify.com/s/files/1/0880/7204/t/103/assets/telfar-logo_300x.png?v=10262940681068904026" alt="TELFAR Logo"/>
                </Menu.Item>
                <Menu.Item>Wednesday, Feb. 23 - 12PM EST</Menu.Item>
                <Menu.Item>Collaborations</Menu.Item>
                <Menu.Item>Team Liberia</Menu.Item>
                <Menu.Item>Apparel</Menu.Item>
                <Menu.Item>Shopping Bags</Menu.Item>
                <Menu.Item>Bags</Menu.Item>
                <Menu.Item>Belts</Menu.Item>
                <Menu.Item>Hats</Menu.Item>
                <Menu.Item>Bucket Hats</Menu.Item>
                <Menu.Item>Durags</Menu.Item>
                <Menu.Item>Beanies</Menu.Item>
                <Menu.Item>Shoes</Menu.Item>
                <Menu.Item>T-Shirts</Menu.Item>
                <Menu.Item>Jewelry</Menu.Item>
              </Menu>
            </Grid.Column>

            <Grid.Column>
              <Image fluid src="https://cdn.shopify.com/s/files/1/0880/7204/files/TELFAR_Embossed_Apparel_Hero_1200x.jpg?v=1641842621"/>
              <p className='text'>Wednesday, Feb. 23rd - Embossed Apparel</p>

              <Image fluid src="https://cdn.shopify.com/s/files/1/0880/7204/files/OLYMPICS_home_1200x.jpg?v=1645480980"/>
              <p className='text'>Team Liberia</p>

              <Image fluid src="https://cdn.shopify.com/s/files/1/0880/7204/files/MOOSE-KNUCKLES-TELFAR-QUILTED-LARGE-SHOPPER-BLACK-DETAIL_1200x.jpg?v=1636662051"/>
              <p className='text'>Moose Knuckles x TELFAR</p>

              <Image fluid src="https://cdn.shopify.com/s/files/1/0880/7204/files/UGG_TELFAR_Nov8drop_1200x.jpg?v=1636151610"/>
              <p className='text'>UGG x TELFAR</p>
            </Grid.Column>
          </Grid.Row>
        </Grid>
    );
  }
}

class FooterMenu extends React.Component {
  render() {
    return (
        <Grid container>
          <Grid.Row columns='three'>
            <Grid.Column>
              <Menu text vertical>
                <Menu.Item>
                  <Header>© TELFAR "NOT FOR YOU — FOR EVERYONE"</Header>
                </Menu.Item>
                <Menu.Item>
                  <Icon name='instagram'/>
                  <Icon name='twitter'/>
                </Menu.Item>
                <Menu.Item>
                  <Flag name='us flag'/>
                  <Flag name='eu flag'/>
                </Menu.Item>
              </Menu>
            </Grid.Column>

            <Grid.Column>
              <Menu text vertical>
                <Menu.Item>
                  <Header>LINKS</Header>
                </Menu.Item>
                <Menu.Item>Subscribe</Menu.Item>
                <Menu.Item>Contact Us</Menu.Item>
                <Menu.Item>Account</Menu.Item>
                <Menu.Item>Accessibility</Menu.Item>
                <Menu.Item>CCPA</Menu.Item>
              </Menu>
            </Grid.Column>

            <Grid.Column>
              <Menu text vertical>
                <Menu.Item>
                  <Header>INFO</Header>
                </Menu.Item>
                <Menu.Item>Stockists</Menu.Item>
                <Menu.Item>International Shipping</Menu.Item>
                <Menu.Item>Shipping and Return</Menu.Item>
                <Menu.Item>Klarna Info for Drops & Drips Only</Menu.Item>
                <Menu.Item>Bag Security Program T&</Menu.Item>
                <Menu.Item>Care Information</Menu.Item>
              </Menu>
            </Grid.Column>
          </Grid.Row>
        </Grid>
    );
  }
}

class FooterPaymentIcons extends React.Component {
  render() {
    return (
        <Container>
          <Menu borderless>
            <Menu.Item>
              Copyright © 2022, shop.telfar. Powered by Shopify
            </Menu.Item>
            <Menu.Item position='right' fitted>
              <Icon name='large blue cc amex'/>
            </Menu.Item>
            <Menu.Item fitted>
              <Icon name='large blue cc diners club'/>
            </Menu.Item>
            <Menu.Item fitted>
              <Icon name='large orange cc discover'/>
            </Menu.Item>
            <Menu.Item fitted>
              <Icon name='large red cc mastercard'/>
            </Menu.Item>
            <Menu.Item fitted>
              <Icon name='large black cc visa'/>
            </Menu.Item>
          </Menu>
        </Container>
    );
  }
}

class Telfar extends React.Component {
  render() {
    return (
        <div>
          <HeaderMessage/>
          <TopMenu/>
          <MiddleMenu/>
          <hr/>
          <FooterMenu/>
          <FooterPaymentIcons/>
        </div>
    );
  }
}

ReactDOM.render(<Telfar/>, document.getElementById('root'));