import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { changeValue } from './fieldActions';

class Field extends Component{
    render() {
        return (
            <div>
                <label>{this.props.value}</label><br/>
                <input type="text" onChange={this.props.changeValue} value={this.props.value}/>
            </div>
        )
    }
}
const mapStateToProps = (state, ownProps) => ({
    value: state.field.value
});
const mapDispatchToProps = (dispatch, ownProps) => ({
    changeValue: () => dispatch(changeValue(ownProps.value))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Field)