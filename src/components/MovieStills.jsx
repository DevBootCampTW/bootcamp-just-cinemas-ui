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
        return (<div className="col-md-2" key={imageSource}>

                       <img className="movie-stills"  src={imageSource} alt="img-still" />

                      </div>
        )
    }
}

export default MovieStills;