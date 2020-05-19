import React from "react"
import { Card, CardBody } from "reactstrap"
import img1 from "../../../assets/img/portrait/small/avatar-s-1.jpg"
import img2 from "../../../assets/img/portrait/small/avatar-s-2.jpg"
import img3 from "../../../assets/img/portrait/small/avatar-s-3.jpg"
import img4 from "../../../assets/img/portrait/small/avatar-s-4.jpg"
import img5 from "../../../assets/img/portrait/small/avatar-s-5.jpg"

class TableContent extends React.Component {
  render() {
    return (
      <Card>
        <CardBody>
          <h4>Table of Content</h4>
          <div className="faq-content mt-1">
            <div className="faq-table-content">
              <span className="bullet bullet-secondary" />
              General
            </div>
            <div className="faq-table-content">
              <span className="bullet bullet-primary" />
              Configuration
            </div>
            <div className="faq-table-content">
              <span className="bullet bullet-success" />
              Shopify
            </div>
            <div className="faq-table-content">
              <span className="bullet bullet-warning" />
              Facebook Ads
            </div>
            <div className="faq-table-content">
              <span className="bullet bullet-danger" />
              Payment Issues
            </div>
          </div>
          <h4 className="mt-3">Supporters</h4>
          <div className="supporter-details mt-2">
            <div className="supporter-img d-inline-block">
              <img className="rounded-circle" src={img1} alt="Avatar" />
            </div>
            <div className="supporter-info d-inline-block">
              <div className="font-weight-bold">Dingo</div>
              <small>Web Developer</small>
            </div>
          </div>
          <div className="supporter-details mt-2">
            <div className="supporter-img d-inline-block">
              <img className="rounded-circle" src={img2} alt="Avatar" />
            </div>
            <div className="supporter-info d-inline-block">
              <div className="font-weight-bold">Gretta</div>
              <small>Managing Director</small>
            </div>
          </div>
          <div className="supporter-details mt-2">
            <div className="supporter-img d-inline-block">
              <img className="rounded-circle" src={img3} alt="Avatar" />
            </div>
            <div className="supporter-info d-inline-block">
              <div className="font-weight-bold">Ella</div>
              <small>Chief Financial Officer</small>
            </div>
          </div>
          <div className="supporter-details mt-2">
            <div className="supporter-img d-inline-block">
              <img className="rounded-circle" src={img4} alt="Avatar" />
            </div>
            <div className="supporter-info d-inline-block">
              <div className="font-weight-bold">Ally</div>
              <small>Platform Manager</small>
            </div>
          </div>
        </CardBody>
      </Card>
    )
  }
}
export default TableContent
