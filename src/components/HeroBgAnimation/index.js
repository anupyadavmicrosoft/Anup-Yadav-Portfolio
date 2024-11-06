import React from 'react';
import { Div } from './HeroBgAnimationStyle';

const paths = [
  {
    id: "path_0",
    d: "M201.337 87.437C193.474 79.5738 180.725 79.5738 172.862 87.437L87.437 172.862C79.5739 180.725 79.5739 193.474 87.437 201.337L400.663 514.563C408.526 522.426 421.275 522.426 429.138 514.563L514.563 429.138C522.426 421.275 522.426 408.526 514.563 400.663L201.337 87.437Z",
    stroke: "url(#paint0_radial)"
  },
  {
    id: "path_1",
    d: "M514.563 201.337C522.426 193.474 522.426 180.725 514.563 172.862L429.138 87.437C421.275 79.5738 408.526 79.5739 400.663 87.437L358.098 130.002L301.148 73.0516L343.713 30.4869C383.028 -8.82896 446.772 -8.82896 486.088 30.4869L571.513 115.912C610.829 155.228 610.829 218.972 571.513 258.287L357.802 471.999L300.852 415.049L514.563 201.337Z",
    stroke: "url(#paint1_radial)"
  },
  {
    id: "path_2",
    d: "M243.901 471.999L201.337 514.563C193.474 522.426 180.725 522.426 172.862 514.563L87.437 429.138C79.5739 421.275 79.5739 408.526 87.437 400.663L301.148 186.952L244.198 130.002L30.4869 343.713C-8.82897 383.028 -8.82897 446.772 30.4869 486.088L115.912 571.513C155.228 610.829 218.972 610.829 258.287 571.513L300.852 528.949L243.901 471.999Z",
    stroke: "url(#paint2_radial)"
  }
];

const animatedEllipses = [
  { cx: "295.027", cy: "193.118", fill: "#945DD6", duration: "10s", path: "#path_2" },
  { cx: "476.525", cy: "363.313", fill: "#945DD6", duration: "10s", path: "#path_0" },
  { cx: "382.164", cy: "155.029", fill: "#F46737", duration: "10s", begin: "1", path: "#path_0" },
  { cx: "333.324", cy: "382.691", fill: "#F46737", duration: "5s", path: "#path_1" },
  { cx: "165.524", cy: "93.9596", fill: "#F46737", duration: "10s", begin: "3", path: "#path_0" },
  { cx: "476.525", cy: "363.313", fill: "#13ADC7", duration: "12s", begin: "4", path: "#path_0" }
];

const HeroBgAnimation = () => (
  <Div>
    <svg
      className="BgAnimation__svg"
      viewBox="0 0 602 602"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g opacity="0.15">
        {paths.map(({ id, d, stroke }) => (
          <path key={id} id={id} d={d} stroke={stroke} />
        ))}
      </g>

      {animatedEllipses.map(({ cx, cy, fill, duration, path, begin = "0" }, index) => (
        <ellipse
          key={index}
          cx={cx}
          cy={cy}
          rx="1.07306"
          ry="1.07433"
          fill={fill}
          transform={`translate(-${cx} -${cy})`}
        >
          <animateMotion dur={duration} begin={begin} repeatCount="indefinite" rotate="auto">
            <mpath xlinkHref={path} />
          </animateMotion>
        </ellipse>
      ))}
    </svg>
  </Div>
);

export default HeroBgAnimation;