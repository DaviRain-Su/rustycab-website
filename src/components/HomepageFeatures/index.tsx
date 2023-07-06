import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Easy Learn Rust',
    Svg: require('@site/static/img/folder-svgrepo-com.svg').default,
    description: (
      <>
        目前RustyCab维护了一个Rust入门的教程，也欢迎大家一起参与进来维护，让更多的人入门学习Rust。
      </>
    ),
  },
  {
    title: 'Solana共学教程',
    Svg: require('@site/static/img/telescope-svgrepo-com.svg').default,
    description: (
      <>
        主要由RustyCab维护Solana共学教程
      </>
    ),
  },
  {
    title: '其他',
    Svg: require('@site/static/img/the-planet-svgrepo-com.svg').default,
    description: (
      <>
        欢迎其他想要进来RustyCab组织的小伙伴，贡献一份力量。
      </>
    ),
  },
];

function Feature({ title, Svg, description }: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
