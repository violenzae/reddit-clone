import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import PropTypes from 'prop-types';

function Post(props){
  let url = "http://source.unsplash.com/200x150/?" + props.image;

  const divStyle= {
    width: "80%",
    textAlign: "center"
  }

  return (
    <React.Fragment>
      <div style={divStyle}>
        <Row>
          <Col md={3}>
            <h3>upvote thingy</h3>
              <h4>{props.brownies}</h4>
            
          </Col>
          <Col md={9} onClick={() => props.whenPostClicked(props.id)}>
            <h3>{props.subject}</h3>
            <p>by {props.username}</p>
            <img src={url} alt="randomImage"/>
          </Col>
        </Row>
      </div>
    </React.Fragment>
  )
}

Post.propTypes = {
  subject: PropTypes.string,
  username: PropTypes.string,
  brownies: PropTypes.number,
  image: PropTypes.string,
  id: PropTypes.string,
  whenPostClicked: PropTypes.func
}

export default Post;