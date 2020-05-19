import React from "react"
import { Card, CardBody, FormGroup, Input, Row, Col } from "reactstrap"
import { Search } from "react-feather"
import KnowledgeCards from "./KnowledgeCards"

class KnowledgeBaseMain extends React.Component {



  state = {
    value: ""
  }

  onChange = event => {
    let searchText = event.target.value.toLowerCase()
    this.setState({
      value: searchText
    })
  }
  render() {
    return (
      <Row>
        <Col sm="12">
          <Card className="knowledge-base-bg">
            <CardBody>
              <h1 className="white">Hey Influencers</h1>
              <p className="mb-2 white">
              Hey Influencers is a platform that matches brands with the top social media influencers around the world. You can create both ‘$ for post’ campaigns, and or ‘product for post’ campaigns.
              </p>
              <form>
                <FormGroup className="position-relative has-icon-left mb-0">
                  <Input
                    type="text"
                    placeholder="Search a topic or a keyword"
                    bsSize="lg"
                    value={this.state.value}
                    onChange={this.onChange}
                  />
                  <div className="form-control-position">
                    <Search size={14} />
                  </div>
                </FormGroup>
              </form>
            </CardBody>
          </Card>
        </Col>
        <Col sm="12">
          <KnowledgeCards value={this.state.value} />
        </Col>
      </Row>
    )
  }
}
export default KnowledgeBaseMain
