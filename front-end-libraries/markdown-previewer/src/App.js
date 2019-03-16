import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import marked from 'marked';

const placeholdes =
    `
        # here is my h1 text!

        ## this is a sub-heading

        ###### this is some other stuff

        \`inline code\`
    `

const placeholder = "# here \n## here \n###### h3\n[link](link)\n`code`\n```\nmultiline\ncode\n```\n**bold** \n_italic_\n**_both!_**\n~~cross~~\n- lists\n  - lists!\n> block quote\n![image](https://goo.gl/)"

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
                <div className="input-area">
                    <textarea placeholder={placeholder} id="editor" className="input-box" onChange={this.handleNewInput} value={this.state.currentInput} />
                </div>
                <div className="preview-area" id="preview" dangerouslySetInnerHTML={this.getMarkdownText()} />

            </div>
        );
    }
}

export default App;
