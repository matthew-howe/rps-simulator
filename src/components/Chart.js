import React from 'react';
import { connect } from 'react-redux';
import ReactChartkick, { LineChart } from 'react-chartkick'
import {Chart as ChartJS} from 'chart.js'

ReactChartkick.addAdapter(ChartJS)


class Chart extends React.Component {

  render() {
    
    return (
      <div className="chart">
        <LineChart 
          data={[
            // {"name":"Games Won", "data": this.props.chartData},
            {
              "name":"Total Winnings", "data": this.props.chartData,
              "color": 'green', "points": false, "library": {"lineTension": 0}
            },
            {
              "name":"Rock Winnings", "data": this.props.chart.rockChart,
              "color": 'red', "points": false, "library": {"lineTension": 0}
            },
            {
              "name":"Paper Winnings", "data": this.props.chart.paperChart,
              "color": 'yellow', "points": false, "library": {"lineTension": 0}
            },
            {
              "name":"Scissor Winnings", "data": this.props.chart.scissorsChart,
              "color": 'blue', "points": false, "library": {"lineTension": 0}
            },
          ]}
          pointStyle={"line"}
          height={400}
          width={700}
          // max={1000}
          // min={-500}
          xtitle={"Games Played"}
          ytitle={"PROFIT"}
          prefix="$"
          thousands=","
        />
      </div>
    )
  }
}



const mapStateToProps = state => ({
  chartData: state.game.chartData,
  gamesPlayed: state.game.gamesPlayed,
  balance: state.game.balance,
  chart: state.game.chart
})

export default connect(mapStateToProps)(Chart)


