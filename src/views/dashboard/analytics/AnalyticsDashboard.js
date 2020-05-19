import React from "react"
import { Row, Col,  } from "reactstrap"
import SalesCard from "./SalesCard"

import ProductOrders from "../../ui-elements/cards/analytics/ProductOrders"
import SalesStat from "../../ui-elements/cards/analytics/Sales"
import ActivityTimeline from "./ActivityTimeline"

import TwitterFeed from "../../pages/profile/TwitterFeeds"
import Posts from "../../pages/profile/Posts"
import LatestPhotos from "../../pages/profile/LatestPhotos"
import Suggestions from "../../pages/profile/Suggestions"




import "../../../assets/scss/pages/dashboard-analytics.scss"
import  UsersList from "../../apps/user/list/List"

let $primary = "#FBB773",
  $danger = "#FAE59F",
  $warning = "#FBB773",
  $info = "#34B594",
  $primary_light = "#6BC6DA",
  $warning_light = "#FAA1A3",
  $danger_light = "#F66073",
  $info_light = "#E6E6E6",
  $stroke_color = "#1B1B1B",
  $label_color = "#e6e6e6",
  $white = "#fff"

class AnalyticsDashboard extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Row className="match-height">
          <Col lg="12" md="12">
            <SalesCard />
          </Col>
        </Row>
        <Row>
          <Col sm="12" md="12" lg="12">
            <UsersList />
          </Col>
        </Row>
          
        <Row>
              <Col lg="3" md="12">
                <ActivityTimeline />
                <TwitterFeed />
                <SalesStat
              strokeColor={$stroke_color}
              infoLight={$info_light}
              primary={$primary}
              info={$info}
            />
              </Col>
              <Col lg="6" md="12">
                <Posts />
              </Col>
              <Col lg="3" md="12">
                <LatestPhotos />
                <Suggestions />
                <ProductOrders
              primary={$primary}
              warning={$warning}
              danger={$danger}
              primaryLight={$primary_light}
              warningLight={$warning_light}
              dangerLight={$danger_light}
            />
              </Col>
          </Row>
            
        
       
        
      </React.Fragment>
    )
  }
}

export default AnalyticsDashboard
