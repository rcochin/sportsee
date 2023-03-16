import React, { PureComponent } from 'react';
import { LineChart, Line, XAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import './TimeChart.css'

/**
 * A time chart component that displays the average session length by day.
 * @param {Object} props - The props object containing the time activity data.
 * @param {Array} props.timeActivity - An array of objects containing the time activity data.
 * @returns {JSX.Element} - A React component that displays the time chart.
 */
export default class TimeChart extends PureComponent {
  render() {
    /**
     * A custom tooltip component that displays the session length value.
     * @param {Object} props - The props object containing the tooltip payload.
     * @param {Boolean} props.active - A boolean value that indicates if the tooltip is active.
     * @param {Array} props.payload - An array of objects containing the tooltip payload.
     * @returns {JSX.Element|null} - A React component that displays the custom tooltip.
     */
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