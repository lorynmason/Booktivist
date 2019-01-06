import React from 'react';
import { connect } from 'react-redux';
import { addMessage } from '../../actions';

export const Message = (props) => {
  setTimeout(() => {
    props.addMessage('')
  }, 5000);

  if(props.message) {
    return (
      <div className="message-container">
        <p>
          {props.message}
        </p>
      </div>
    )
  }
  return (
    <div className="blah">

    </div>
  )
}

export const mapStateToProps = (state) => ({
  message: state.message,
});

export const mapDispatchToProps = (dispatch) => ({
  addMessage: message => dispatch(addMessage(message))
});

export default connect(
  mapStateToProps, mapDispatchToProps
)(Message);