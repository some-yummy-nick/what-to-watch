import React, {PureComponent} from "react";

export class VideoPlayer extends PureComponent {
  constructor(props) {
    super(props);
    this.videoRef = React.createRef();
    this.state = {
      hover: false
    };
    this.toggleHover = this.toggleHover.bind(this);
  }

  componentDidMount() {
    const {src, poster} = this.props;
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
    const {src} = this.props;

    if (this.state.hover) {
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
      hover: !this.state.hover
    })
  };

  render() {
    return <div className="small-movie-card__image" onMouseEnter={this.toggleHover} onMouseLeave={this.toggleHover}>
      <video ref={this.videoRef} width="100%" height="175px"/>
    </div>
  }
}
