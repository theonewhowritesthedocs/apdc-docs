import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import Link from '@docusaurus/Link';

const mainFeatureList = [
  {
    title: 'APDC',
    url: '/docs/apps/apdc',
    Svg: require('@site/static/img/change-state.svg').default,
    description: (
      <>
        Update the status of operations.
      </>
    ),
  },
];

const subFeatureList = [
  {
    title: 'Inspection',
    url: '#',
    Svg: require('@site/static/img/inspection.svg').default,
    description: (
      <>
        TODO.
      </>
    ),
  },
  {
    title: 'Issue Material',
    url: '#',
    Svg: require('@site/static/img/issue-material.svg').default,
    description: (
      <>
        TODO.
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
  {
    title: 'Modify Route/BoM',
    url: '/docs/apps/modify-route-bom',
    Svg: require('@site/static/img/route.svg').default,
    description: (
      <>
        Add/Delete routes and BoMs to/from your work orders.
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
      <div className='features-label'><span>Main</span></div>
      <section className="features">
        {mainFeatureList.map((props, idx) => (
          <Feature key={idx} {...props} />
        ))}
      </section>
      <div className='features-label'><span>Internal</span></div>
      <section className="features">
        {subFeatureList.map((props, idx) => (
          <Feature key={idx} {...props} />
        ))}
      </section>
    </>
  );
}
