import React from 'react';
import { navigate } from 'gatsby';

import * as styles from './Brand.module.css';

const Brand = (props) => {
  return (
    <div
      className={styles.root}
      role={'presentation'}
      onClick={() => navigate('/')}
    >
      {/* <h4>SYDNEY</h4> */}
      <svg
        width="132.55798"
        viewBox="400 200 200 150" // Adjusted viewBox, focusing into where the path seems to be centered
        version="1.0"
        id="svg2"
      >
        <defs id="defs4">
          <marker
            id="ArrowEnd"
            viewBox="0 0 10 10"
            refX="0"
            refY="5"
            markerUnits="strokeWidth"
            markerWidth="4"
            markerHeight="3"
            orient="auto"
          >
            <path d="M 0,0 L 10,5 L 0,10 L 0,0 z" id="path7" />
          </marker>
          <marker
            id="ArrowStart"
            viewBox="0 0 10 10"
            refX="10"
            refY="5"
            markerUnits="strokeWidth"
            markerWidth="4"
            markerHeight="3"
            orient="auto"
          >
            <path d="M 10,0 L 0,5 L 10,10 L 10,0 z" id="path10" />
          </marker>
        </defs>
        <path
          id="path16"
          d="M 428.40625 203.28125 L 424.5625 204.96875 L 423.125 211.1875 L 425.28125 220.3125 L 431.53125 228 L 431.03125 231.59375 L 430.8125 233.28125 L 424.8125 238.5625 L 421.9375 246.25 L 416.875 247.1875 L 410.40625 253.4375 L 408.25 259.9375 L 411.59375 265.1875 L 411.34375 267.59375 L 415.1875 269.03125 L 417.125 272.65625 L 419.53125 284.875 L 422.625 285.84375 L 421.6875 287.53125 L 426 299.28125 L 423.34375 321.125 L 424.3125 326.65625 L 427.4375 331.6875 L 436.5625 335.28125 L 443.53125 339.125 L 447.84375 344.15625 L 453.125 338.15625 L 455.03125 337.9375 L 459.59375 330 L 459.34375 326.65625 L 464.15625 320.65625 L 469.6875 319.1875 L 484.8125 306.96875 L 487.9375 306.25 L 494.875 307.6875 L 513.84375 299.03125 L 516 297.84375 L 530.625 284.65625 L 532.5625 279.59375 L 522.46875 274.5625 L 518.625 271.1875 L 518.40625 269.03125 L 515.03125 267.59375 L 515.03125 262.3125 L 512.875 258.25 L 512.40625 257.28125 L 504.25 258.25 L 504.46875 245.53125 L 491.75 233.28125 L 487.1875 230.65625 L 469.6875 221.28125 L 457.9375 217.4375 L 453.59375 218.15625 L 440.625 210 L 437.75 206.15625 L 428.40625 203.28125 z"
          style={{ fill: '#9b9b9b', fillRule: 'evenodd', stroke: 'none' }}
        />
      </svg>
      <h5>
        Hawaii Real Steel Barndominiums
        <div style={{ color: 'grey' }}>by Paul Lee</div>
      </h5>
    </div>
  );
};

export default Brand;
