import React, { Component } from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { dark } from 'react-syntax-highlighter/dist/esm/styles/hljs';

class CodeHighlighter extends Component {
    render() {
        return (
            <SyntaxHighlighter
                language='javascript|html'
                style={dark}
                showLineNumbers={true}
            >
                { this.props.code || this.props.children }
            </SyntaxHighlighter>
        );
    }
}

export default CodeHighlighter;
