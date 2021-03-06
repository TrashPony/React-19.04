import React from 'react';

export default class Post extends React.Component {
    render() {
        return (
            <div>
                <h3>{this.props.title}</h3>
                <h4>{this.props.subtitle}</h4>
                <p>{this.props.body}</p>
                <footer>
                    <span>{this.props.date}</span>
                    <a>{this.props.author}</a>
                </footer>
            </div>
        )
    }
}

