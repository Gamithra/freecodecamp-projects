import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import marked from 'marked';

const placeholder = "# Heading 1 \n --- \n## Heading 2 \n###### Heading 3\n[this is a link!](https://gamithra.com/)\n`a line of code`\n```\nmultiple\nlines\nof code\n```\n**bold**, _italic_ and **_both bold and italic!_**\n~~i'm crossed out~~\n> block quote\n\n- lists\n  - nested lists! \n wow!\n \n \n![image](https://cdn.iconscout.com/icon/free/png-256/markdown-2-458334.png)"

class App extends Component {

    constructor() {
        super();

        this.state = {
            currentInput: placeholder
        }
        this.handleNewInput = this.handleNewInput.bind(this)
    }

    handleNewInput(event) {
        this.setState({
            currentInput: event.target.value
        });
    }

    getMarkdownText() {
        var rawMarkup = marked(this.state.currentInput, {
            gfm: true,
            breaks: true,
            sanitize:true
        });
        return { __html: rawMarkup }
    }

    render() {

        return (
            <div className="App">
                <div className="main-title"><h2>Markdown Previewer</h2></div>
                <div className="headers">
                    <div className="main-header" id="input-header"><h5>Write markdown in this box!</h5></div>
                    <div className="main-header" id="preview-header"><h5>... and see the formatted version here!</h5></div>
                </div>
                <div className="container">
                    <div className="area" id="input-area">
                        <textarea placeholder={placeholder} id="editor" className="input-box" onChange={this.handleNewInput} value={this.state.currentInput} />
                    </div>
                    <div className="area" id="preview-area" dangerouslySetInnerHTML={this.getMarkdownText()} />
                </div>
                <div className="footer"><h4>coded by gamithra</h4></div>
            </div>
        );
    }
}

export default App;
