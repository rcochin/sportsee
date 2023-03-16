import React, { PureComponent } from 'react';
import { RadialBarChart, RadialBar, ResponsiveContainer, Text } from 'recharts';
import './ObjectifChart.css'

/**
 * @typedef {Object} DataItem
 * @property {string} name - The name of the item.
 * @property {number} percentage - The percentage of the item.
 * @property {string} fill - The color of the item.
 * @property {string} key - The key of the item.
 */

/**
 * A chart component displaying an objective's score using a radial bar chart.
 * @class
 * @prop {number} score - The current score of the objective.
 */
export default class ObjectifChart extends React.Component {
  constructor(props) {
    super(props);

    /**
     * The component state.
     * @typedef {Object} State
     * @property {number} progressionPercentage - The progression percentage of the score.
     */
    this.state = {
      progressionPercentage: this.props.score
    };
  }

  componentDidUpdate(prevProps) {
    if (prevProps.score !== this.props.score) {
      this.setState({ progressionPercentage: this.props.score });
    }
  }

  /**
   * Renders the component.
   * @returns {JSX.Element} The component UI.
   */
  render() {
    const { progressionPercentage } = this.state;

    /** @type {DataItem[]} */
    const data = [
      {
        name: 'Remaining',
        percentage: 100,
        fill: 'white',
        key: 'remaining'
      },
      {
        name: 'Progression',
        percentage: 0,
        fill: 'red',
        key: 'progression'
      }
    ];

    data[1].percentage = progressionPercentage;

    return (
      <div className='objectif-chart-container'>
        <h4>Score</h4>
        <p className='progression-text'>{progressionPercentage}% <br /> <span>de votre objectif</span></p>
        <ResponsiveContainer width="100%" height="100%">
          <RadialBarChart cx="50%" cy="50%" innerRadius="90%" outerRadius="90%" barSize={10} data={data}>
            <RadialBar
              className='radial-bar'
              minAngle={0}
              dataKey="percentage"
            />
            <Text x={'50%'} y={'50%'} textAnchor={'middle'} dominantBaseline={'middle'} style={{ fontSize: '20px', fill: 'red'}}>{`${progressionPercentage}% de votre objectif`}</Text>
          </RadialBarChart>
        </ResponsiveContainer>
      </div>
    );
  }
}