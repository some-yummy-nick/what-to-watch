import React, {PureComponent} from "react";
import PropTypes from "prop-types";

export class SmallPlayer extends PureComponent {
  constructor(props) {
    super(props);
    this.videoRef = React.createRef();
    this.state = {
      isPlaying: false
    };
    this.toggleHover = this.toggleHover.bind(this);
  }

  componentDidMount() {
    const poster = this.props.film.image;
    const src = this.props.film.video;
    const video = this.videoRef.current;
    video.src = src;
    video.poster = poster;
  }

  componentWillUnmount() {
    const video = this.videoRef.current;
    video.src = ``;
    video.poster = ``;
  }

  playVideo() {
    const video = this.videoRef.current;
    video.play()
  }

  componentDidUpdate() {
    const video = this.videoRef.current;
    const src = this.props.film.video;

    if (this.state.isPlaying) {
      video.src = src;
      setTimeout(this.playVideo.bind(this), 1000);
    } else {
      video.pause();
      video.currentTime = 0;
      video.src = ``;
    }
  }

  toggleHover() {
    this.setState({
      isPlaying: !this.state.isPlaying
    })
  };

  render() {
    return <div className="small-movie-card__image" onMouseEnter={this.toggleHover} onMouseLeave={this.toggleHover}>
      <video ref={this.videoRef} width="100%" height="100%"/>
    </div>
  }
}

SmallPlayer.propTypes = {
  film: PropTypes.shape({
    image: PropTypes.string,
    video: PropTypes.string
  }),
};
