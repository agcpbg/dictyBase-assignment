import React from 'react'
import { connect } from 'react-redux';
import ListWrapper from './ListWrapper'
import ListHeader from './ListHeader'
import ListItemWrapper from './ListItemWrapper'
import ListItemText from './ListItemText'
import RemoveButton from './RemoveButton'
import { deleteListItem } from './reducer/listItems'

const ListContainer = ({ listItems, sendOnClick }) => {
  return (
    <ListWrapper>
      <ListHeader>My items ({listItems.length})</ListHeader>
      {
        listItems.length ?
        listItems.map(item => (
            <ListItemWrapper key={item}>
              <ListItemText>{item}</ListItemText>
              <RemoveButton onClick={() => sendOnClick(item)}>x</RemoveButton>
            </ListItemWrapper>
        )) : null
      }
    </ListWrapper>
  )
}

// container

const mapState = ({ listItems }) => ({
  listItems
});

const mapDispatch = dispatch => ({
  sendOnClick: (item) => {
    dispatch(deleteListItem(item))
  }
});

export default connect(mapState, mapDispatch)(ListContainer);
