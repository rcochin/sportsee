import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';
import './RadarChart.css';

/**
 * A component that displays a Radar chart based on user performances.
 *
 * @component
 * @param {object} props - The component props.
 * @param {Array<object>} props.performances - An array of objects containing the performances data.
 * @returns {JSX.Element} - The rendered component.
 */
export default class Example extends PureComponent {
  render() {
    const performances = this.props.performances;
    return (
      <div className='radar-chart-container'>
        <ResponsiveContainer width="100%" height="100%">
          <RadarChart cx="50%" cy="50%" outerRadius="80%" data={performances}>
            <PolarGrid />
            <PolarAngleAxis dataKey="kind" tick={{ fill: 'white' }} />
            <PolarRadiusAxis display={"none"} />
            <Radar name="Mike" dataKey="value" stroke="none" fill="#FF0101B2" fillOpacity={0.6} tickMargin={20} />
          </RadarChart>
        </ResponsiveContainer>
      </div>
    );
  }
}

Example.propTypes = {
  performances: PropTypes.arrayOf(
    PropTypes.shape({
      kind: PropTypes.string.isRequired,
      value: PropTypes.number.isRequired,
    })
  ).isRequired,
};
