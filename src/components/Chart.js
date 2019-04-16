import React from 'react';
import { connect } from 'react-redux';
import ReactChartkick, { LineChart } from 'react-chartkick'
import {Chart as ChartJS} from 'chart.js'

ReactChartkick.addAdapter(ChartJS)


class Chart extends React.Component {


  render() {
    console.log('chart props', this.props)
    
    return (
      <div className="chart">
        <LineChart 
          data={[
  {"name":"Games Won", "data": this.props.chartData},
]}
          height={200}
          width={700}
        />
      </div>
    )
  }
}



const mapStateToProps = state => ({
  chartData: state.game.chartData,
  gamesPlayed: state.game.gamesPlayed
})

export default connect(mapStateToProps)(Chart)


