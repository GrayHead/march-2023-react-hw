import React, {Component} from 'react';

class Comment extends Component {
    render() {
        const {id, name, email} = this.props.comment;
        return (
            <div>
                <div>id: {id}</div>
                <div>name: {name}</div>
                <div>email: {email}</div>
            </div>
        );
    }
}

export {Comment};
