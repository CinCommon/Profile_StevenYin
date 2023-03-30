import styles from "../../styles/abstracts/styles.module.css";
import "./homecontainer.sass";

import useMeasure from "react-use-measure";
import { useTrail, animated } from "@react-spring/web";
import { useTranslation } from "react-i18next";

const fast = { tension: 1200, friction: 40 };
const slow = { mass: 10, tension: 200, friction: 50 };
const trans = (x: number, y: number) =>
  `translate3d(${x}px,${y}px,0) translate3d(-50%,-50%,0)`;

const HomeContainer = () => {
    const { t, i18n } = useTranslation();
  const [trail, api] = useTrail(3, (i) => ({
    xy: [0, 0],
    config: i === 0 ? fast : slow,
  }));
  const [ref, { left, top }] = useMeasure();

  const handleMouseMove = (e: any) => {
    api.start({ xy: [e.clientX - left, e.clientY - top] });
  };

  return (
    <div className="mainDiv">
      <h1>Steven Yin</h1>
      <span>{t('landing.job-title')}</span>
      <svg style={{ position: "absolute", width: 0, height: 0 }}>
        <filter id="goo">
          <feGaussianBlur in="SourceGraphic" result="blur" stdDeviation="30" />
          <feColorMatrix
            in="blur"
            values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 30 -7"
          />
        </filter>
      </svg>
      <div ref={ref} className={styles.hooksMain} onMouseMove={handleMouseMove}>
        {trail.map((props, index) => (
          <animated.div key={index} style={{ transform: props.xy.to(trans) }} />
        ))}
      </div>
    </div>
  );
};

export default HomeContainer;
