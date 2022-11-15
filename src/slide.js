import Slideshow from 'react-native-image-slider-show';
 
// ...
 

export default class SlideshowTest extends Component {
    constructor(props) {
      super(props);
   
      this.state = {
        position: 1,
        interval: null,
        dataSource: [
          {
            title: 'Title 1',
            caption: 'Caption 1',
            url: require('../assets/nyama1.jpg')
          }, {
            title: 'Title 2',
            caption: 'Caption 2',
            url: require('../assets/mabele.jpg')
          }, {
            title: 'Title 3',
            caption: 'Caption 3',
            url: require('../assets/rice.jpg')
          },
        ],
      };
    }
   
    componentWillMount() {
      this.setState({
        interval: setInterval(() => {
          this.setState({
            position: this.state.position === this.state.dataSource.length ? 0 : this.state.position + 1
          });
        }, 2000)
      });
    }
   
    componentWillUnmount() {
      clearInterval(this.state.interval);
    }
    render() {
        return (
          <Slideshow 
            dataSource={[
              { url:require('../assets/nyama1.jpg')},
              { url:require('../assets/mabele.jpg') },
              { url:require('../assets/rice.jpg')}
          ]}/>
        );
      }
   
    render() {
      return (
      <Slideshow 
          dataSource={this.state.dataSource}
          position={this.state.position}
          onPositionChanged={position => this.setState({ position })} />
      );
    }
  }