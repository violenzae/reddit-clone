import React from 'react';
import PropTypes from 'prop-types';

function PostForm(props) {
  return (
    <React.Fragment>
      <form onSubmit={props.formSubmissionHandler}>
        <input type='text' name='subject' placeholder='Subject' /><br />
        <textarea type='text' name='content' placeholder='Post content' /><br />
        <input type='text' name='username' placeholder='Your name' /><br />
        <input type='text' name='image' placeholder='Post summed up in one word' /><br />
        <button type='submit'>Submit for Brownies</button>
      </form>
    </React.Fragment>
  )
}

PostForm.propTypes = {
  formSubmissionHandler: PropTypes.func
}

export default PostForm;