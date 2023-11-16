import React, { Component } from 'react'
import Story from "./story.js"
import './Input.css'

class Input extends Component {
    constructor(props) {
        super(props)
        this.state = {
            noun: "",
            noun2: "",
            adj: "",
            color: "",
        }
    }

    handleFormChange = (event) => {
        this.setState({ noun: event.target.value })
    }

    handleFormChange2 = (event) => {
        this.setState({ noun2: event.target.value })
    }

    handleFormChange3 = (event) => {
        this.setState({ adj: event.target.value })
    }

    handleFormChange4 = (event) => {
        this.setState({ color: event.target.value })
    }





    handleSubmit = (event) => {
        event.preventDefault()

        let storyRender = (<Story
            noun={this.state.noun}
            noun2={this.state.noun2}
            adj={this.state.adj}
            color={this.state.color}
        />)
        this.setState({ storyRender: storyRender })
    }


    render() {
        let { noun, noun2, adj, color } = this.state
        
        return (
            <div className="main-div">
                <h1>MadLibs!</h1>
                <p className="paragraph"> Noun: </p>
                <input
                    value={noun}
                    onChange={this.handleFormChange}
                />

                <p className="paragraph"> Noun2 </p>
                <input
                    value={noun2}
                    onChange={this.handleFormChange4}
                />

                <p className="paragraph"> Adjective </p>
                <input
                    value={adj}
                    onChange={this.handleFormChange2}
                />

                <p className="paragraph"> Color </p>
                <input
                    value={color}
                    onChange={this.handleFormChange3}
                />


                <form onSubmit={this.handleSubmit}>
                    <button type="submit">Submit Form</button>
                </form>

                <form >
                    <button type="submit">Clear Form</button>
                </form>

                {this.state.storyRender}
            </div>
        )
    }
}

export default Input;