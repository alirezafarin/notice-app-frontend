import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { getNoticeById } from 'redux/actions';

function Notice(props) {

  let noticeId = props.match.params.id;

  useEffect(() => {
    props.getNoticeById(noticeId);
  }, [noticeId])
  
  return (
    <div>
      Notice
    </div>
  )
}

const mapStateToProps = (state, ownProps) => ({
  loading: state.loading.getDetails,
  notice: state.notices.noticeDetails[ownProps.match.params.id]
})

export default connect(mapStateToProps, {
  getNoticeById
})(Notice);