import React from "react"
import { Card, CardBody } from "reactstrap"
import { Award } from "react-feather"
import { Link } from "react-router-dom"
import decorLeft from "../../../assets/img/elements/decore-left.png"
import decorRight from "../../../assets/img/elements/decore-right.png"

class SalesCard extends React.Component {
  render() {
    return (
      <Link to="/pages/knowledge-base">
        <Card className="bg-analytics text-white sales-card">
          <CardBody className="text-center">
            <img src={decorLeft} alt="card-img-left" className="img-left" />
            <img src={decorRight} alt="card-img-right" className="img-right" />
            <div className="avatar avatar-xl bg-primary shadow avatar-dashboard mt-0">
              <div className="avatar-content">
                <Award className="text-white" size={28} />
              </div>
            </div>
            <div className="award-info text-center">
              <h1 className="mb-2 text-white">Welcome to Hey, Dingo</h1>
              <p className="m-auto mb-0 w-75">
                Checkout our Knowledge Base to level up your Influencer Marketing with Hey.
              </p>
            </div>
          </CardBody>
        </Card>
      </Link>
    )
  }
}
export default SalesCard
