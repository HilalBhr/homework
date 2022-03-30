// import React, { Component } from 'react';
// import { connect } from 'react-redux';
// import PropTypes from 'prop-types';
// import Candidates from './Candidates';
// import { fetchUsers } from '../actions/UserAction';

// export class Page extends Component {
//   static propTypes = {
//     firstReducer: PropTypes.object.isRequired,
//   };
//   componentDidMount() {
//     this.props.fetchUsers();
//   }
//   render() {
//     // console.log(this.props);
//     return (
//       <div>
//         <Candidates userInfo={this.props.firstReducer} />
//       </div>
//     );
//   }
// }

// const mapStateToProps = ({ firstReducer }) => ({
//   firstReducer,
// });

// const mapDispatchToProps = { fetchUsers };

// export default connect(mapStateToProps, mapDispatchToProps)(Page);
