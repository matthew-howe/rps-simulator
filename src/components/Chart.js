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
            // {"name":"Games Won", "data": this.props.chartData},
            {"name":"Balance", "data": this.props.chartData}
          ]}
          pointStyle={"line"}
          height={200}
          width={700}
          min={-500}
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
  balance: state.game.balance
})

export default connect(mapStateToProps)(Chart)


