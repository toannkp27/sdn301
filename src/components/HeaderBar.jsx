import React from 'react'
import { Col, Row} from 'react-bootstrap'
import {Search,PersonFill, Cart4} from 'react-bootstrap-icons'
const HeaderBar = () => {
  return (
    <div>
      <Row className='py-5'>
        <Col col={4} className='d-flex align-items-center justify-content-center  '>
          COLOSHOP
        </Col>
        <Col col={4}>
          <Row>
            <Col col={2}>
              HOME
            </Col>
            <Col col={2}>
              SHOP
            </Col>
            <Col col={2}>
              PROMOTION
            </Col>
            <Col col={2}>
              PAGES
            </Col>
            <Col col={2}>
              BLOG
            </Col>
            <Col col={2}>
              CONTACT
            </Col>
          </Row>
        </Col>
        <Col col={4} className='d-flex justify-content-between'>
          <Row>
            <Col col={4}>
              <Search/>
            </Col>
            <Col col={4}>
            <PersonFill/>
            </Col>
            <Col col={4}>
                <Cart4/>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  )
}

export default HeaderBar