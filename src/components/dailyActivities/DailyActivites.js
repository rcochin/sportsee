import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import './DailyActivites.css';

export default class DailyActivites extends PureComponent {
  render() {
    const { data } = this.props;
    return (
      <div className='chart-container'>
        <h4>Activité quotidienne</h4>
        <ResponsiveContainer width="100%">
          <BarChart
            width={500}
            height={300}
            data={data}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" vertical={false} />
            <XAxis dataKey="day" />
            <YAxis orientation="right" axisLine={false} tickLine={false} tickMargin='40' domain={[68, 72]} allowDecimals={false} />
            <Tooltip contentStyle={{ backgroundColor: "#E60000", color: "white", border: "none" }} itemStyle={{ color: "white" }} />
            <Legend verticalAlign='top' align='right' />
            <Bar dataKey="kilogram" fill="#282D30" barSize={10} radius={[10, 10, 0, 0]} />
            <Bar dataKey="calories" fill="#E60000" barSize={10} radius={[10, 10, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    );
  }
}

DailyActivites.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      day: PropTypes.string.isRequired,
      kilogram: PropTypes.number.isRequired,
      calories: PropTypes.number.isRequired,
    })
  ).isRequired,
};
