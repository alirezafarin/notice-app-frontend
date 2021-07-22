import Modal from 'Components/MuiComponents/Modal';
import React, { Component } from 'react'
import { connect } from 'react-redux'

import { setModal } from 'redux/actions'

class GlobalModal extends Component {

  render() {
    let open = this.props.modal.openModal;
    let title = this.props.modal.title;
    let content = this.props.modal.content;
    let closeModal = () => {
      if( title === 'ورود' ) {
        localStorage.removeItem('redirectAfterLogin');
      }
      this.props.setModal(false, title, content);
    }

    return (
      <Modal
        open= {open}
        onClose= {() => closeModal()}
        content= {content}  
        title={title}
      />  
    )
  }
}

const mapStateToProps = (state) => ({
  modal: state.modal
})

export default connect(mapStateToProps, {
  setModal
})(GlobalModal)
