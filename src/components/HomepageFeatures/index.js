import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import Link from '@docusaurus/Link';

const FeatureList = [
  {
    title: 'Change Operation State',
    url: '/docs/apps/change_state',
    Svg: require('@site/static/img/designation.svg').default,
    description: (
      <>
        Change the state of the operations.
      </>
    ),
  },
];

function Feature({ Svg, title, description, url }) {
  return (
    <Link className="feature" to={url}>
        <Svg className="feature-svg" />
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
    </Link>
  );
}

export default function HomepageFeatures() {
  return (
    <>
      <div className='features-label'><span>Shortcuts</span></div>
      <section className="features">
        {FeatureList.map((props, idx) => (
          <Feature key={idx} {...props} />
        ))}
      </section>
    </>
  );
}
