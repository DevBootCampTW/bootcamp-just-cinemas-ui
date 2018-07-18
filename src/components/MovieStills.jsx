import React from 'react'

class MovieStills extends React.Component {
    render() {
        return (
            <div className="row stills">
                {this.props.stills.map((imgSrc) => this.renderImageTag(imgSrc))}
            </div>
        )
    }

    renderImageTag(imageSource) {
        return (<img key={imageSource} src={imageSource} alt="img-still" />
        )
    }
}

export default MovieStills;