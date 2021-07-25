import NoticeDetails from 'Components/CustomComponents/NoticeDetails';
import Spinner from 'Components/CustomComponents/Spinner';
import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { getNoticeById } from 'redux/actions';

function Notice(props) {

  let noticeId = props.match.params.id;

  useEffect(() => {
    props.getNoticeById(noticeId);
  }, [noticeId])
  
  return (
    <Spinner
      Component={<NoticeDetails notice={props.notice} />}
      isLoading={props.loading}
      firstLoading={true}
      data={props.notice}
      noContentMsg='آگهی وجود ندارد'
    />
  )
}

const mapStateToProps = (state, ownProps) => ({
  loading: state.loading.getDetails,
  notice: state.notices.noticeDetails[ownProps.match.params.id]
})

export default connect(mapStateToProps, {
  getNoticeById
})(Notice);