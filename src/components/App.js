const Shape = require('./shape')
const Circle = require('./circle')

class App extends Component {
    render() {
        return (
<div className='App'>
    <Circle/>
    <Shape/>
</div>
        );
}
}

module.export = App