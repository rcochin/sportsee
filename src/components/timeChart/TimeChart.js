import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { LineChart, Line, XAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import './TimeChart.css';

export default class TimeChart extends PureComponent {
  render() {
    const CustomTooltip = ({ active, payload }) => {
      if (active) {
        return (
          <div className="custom-tooltip">
            <p className="value">{payload[0].value} min</p>
          </div>
        );
      }

      return null;
    };

    const activities = this.props.timeActivity;

    return (
      <div className="time-chart-container">
        <h4>Durée moyenne des sessions</h4>
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={activities} margin={0} padding={0}>
            <CartesianGrid strokeDasharray="3 3" display={"none"} />
            <XAxis
              dataKey="day"
              axisLine={false}
              tickLine={false}
              padding={{ left: 20, right: 20 }}
              tick={{ fill: "white" }}
              tickMargin={10}
            />
            <Tooltip
              contentStyle={{ border: "none" }}
              itemStyle={{ color: "black" }}
              formatter={(value) => `${value} min`}
              wrapperStyle={{
                backgroundColor: "white",
                padding: "5px 20px",
                border: "none",
              }}
              content={<CustomTooltip />}
            />
            <Legend wrapperStyle={{ display: "none" }} />
            <Line
              type="monotone"
              dataKey="sessionLength"
              stroke="white"
              activeDot={{ r: 8 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    );
  }
}

TimeChart.propTypes = {
  timeActivity: PropTypes.arrayOf(
    PropTypes.shape({
      day: PropTypes.string.isRequired,
      sessionLength: PropTypes.number.isRequired,
    })
  ).isRequired,
};
