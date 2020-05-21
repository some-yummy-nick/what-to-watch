import React, {PureComponent} from "react";
import {connect} from "react-redux";
import {ActionCreator} from "../../actions";
import PropTypes from "prop-types";

class BigPlayer extends PureComponent {
  constructor(props) {
    super(props);
    this.videoRef = React.createRef();
    this.minutes = null;
    this.seconds = null;
    this.state = {
      progress: 0,
      width: '500px',
      height: '500px',
      isPlaying: props.isPlaying,
    };
    this.toggleFullScreen = this.toggleFullScreen.bind(this);
    this.togglePlaying = this.togglePlaying.bind(this);
  }

  componentDidMount() {
    const src = this.props.currentFilm.video;
    const poster = this.props.currentFilm.image;
    const video = this.videoRef.current;
    video.src = src;
    video.poster = poster;
    video.play();
    video.onplay = () => {
      this.setState({
        isPlaying: true,
      });
    };

    video.onpause = () => {
      this.setState({
        isPlaying: false,
      });
    };

    video.ontimeupdate = () => this.setState({
      progress: video.currentTime
    });
    video.addEventListener('loadedmetadata', () => {
      this.minutes = parseInt(video.duration / 60, 10);
      this.seconds = Math.floor(video.duration % 60);
      this.seconds = this.seconds % 10 < 10 ? `0${this.seconds}` : this.seconds;
    });
  }

  componentWillUnmount() {
    const video = this.videoRef.current;
    video.src = ``;
    video.poster = ``;
    video.onplay = null;
    video.onpause = null;
    video.ontimeupdate = null;
  }

  toggleFullScreen() {
    if (this.state.width === "100%") {
      this.setState({
        width: '500px',
        height: '500px',
      })
    } else {
      this.setState({
        width: '100%',
        height: '100%',
      })
    }

  };

  togglePlaying() {
    this.setState({
      isPlaying: !this.state.isPlaying
    })
  }

  componentDidUpdate() {
    const video = this.videoRef.current;
    if (this.state.isPlaying) {
      video.play();
    } else {
      video.pause();
    }
  }

  render() {
    const {handlePlay, currentFilm} = this.props;
    const {progress, width, height, isPlaying} = this.state;
    const {minutes, seconds} = this;

    return <div className="player" style={{width, height, margin: 'auto', zIndex:999}}>
      <video ref={this.videoRef} className="player__video"></video>

      <button onClick={handlePlay} type="button" className="player__exit">Exit</button>

      <div className="player__controls">
        <div className="player__controls-row">
          <div className="player__time">
            <progress className="player__progress" value={progress} max="100"></progress>
            <div className="player__toggler" style={{left: `${progress}%`}}>Toggler</div>
          </div>
          <div className="player__time-value">{minutes}:{seconds}</div>
        </div>

        <div className="player__controls-row">
          {isPlaying ?
            <button onClick={this.togglePlaying} type="button" className="player__play">
              <svg viewBox="0 0 14 21" width="14" height="21">
                <use xlinkHref="#pause"></use>
              </svg>
              <span>Pause</span>
            </button> :
            <button onClick={this.togglePlaying} type="button" className="player__play">
              <svg viewBox="0 0 19 19" width="19" height="19">
                <use xlinkHref="#play"></use>
              </svg>
              <span>Play</span>
            </button>
          }
          <div className="player__name">{currentFilm.name}</div>

          <button type="button" onClick={this.toggleFullScreen} className="player__full-screen">
            <svg viewBox="0 0 27 27" width="27" height="27">
              <use xlinkHref="#full-screen"></use>
            </svg>
            <span>Full screen</span>
          </button>
        </div>
      </div>
    </div>
  }
}

BigPlayer.propTypes = {
  currentFilm: PropTypes.shape({
    image: PropTypes.string,
    video: PropTypes.string
  }),
  isPlaying: PropTypes.bool
};

const mapStateToProps = state => ({
  currentFilm: state.currentFilm,
  isPlaying: state.isPlaying
});

const mapDispatchToProps = (dispatch) => ({
  handlePlay: () => dispatch(ActionCreator.setIsPlaying()),
});

export {BigPlayer};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BigPlayer);
