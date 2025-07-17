import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import Link from '@docusaurus/Link';

const FeatureList = [
  {
    title: 'Change Operation State',
    url: '/docs/apps/change_state',
    Svg: require('@site/static/img/change-state.svg').default,
    description: (
      <>
        Update the status of operations.
      </>
    ),
  },
  {
    title: 'Reservations',
    url: '/docs/apps/reservations',
    Svg: require('@site/static/img/reservations.svg').default,
    description: (
      <>
        Make reservations of the materials you need for your work orders.
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
