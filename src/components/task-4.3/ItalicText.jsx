import React from 'react'

class ItalicText extends React.Component {

    state = {
        italicText: false
    }

    onChangeItalic = () => {
        this.setState ( { italicText: !this.state.italicText } )
    }

    render() {
        return (
            <p  onClick = { () => this.onChangeItalic() } 
                className = {` styleItalicText ${this.state.italicText ? 'fontStyleItalic' : ''} `}>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores sunt nesciunt vitae fugit, enim recusandae perferendis reprehenderit a culpa officiis.
            </p>
        )
    } 
}

export default ItalicText