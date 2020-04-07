import React from 'react';
import PropTypes from 'prop-types';
import styles from './statistics.module.css';

const randomColor = require('randomcolor');

const Statistics = ({ title, stats }) => (
  <section className={styles.statistics}>
    <h2 className={styles.title}>{title}</h2>
    <ul className={styles.statList}>
      {stats.map(stat => (
        <li
          key={stat.id}
          className={styles.item}
          style={{
            backgroundColor: randomColor({
              luminosity: 'light',
              format: 'rgb',
            }),
          }}
        >
          <span className={styles.label}>{stat.label}</span>
          <span className={styles.percentage}>{stat.percentage}%</span>
        </li>
      ))}
    </ul>
  </section>
);

Statistics.propTypes = {
  title: PropTypes.string.isRequired,
  stat: PropTypes.shape({
    id: PropTypes.string,
    label: PropTypes.string,
    percentage: PropTypes.number,
  }),
};

export default Statistics;
