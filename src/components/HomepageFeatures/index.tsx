import clsx from "clsx";
import Heading from "@theme/Heading";
import styles from "./styles.module.css";
import MountainSvg from "@site/static/img/undraw_docusaurus_mountain.svg";
import TreeSvg from "@site/static/img/undraw_docusaurus_tree.svg";
import ReactSvg from "@site/static/img/undraw_docusaurus_react.svg";

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<"svg">>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: "Easy to Use AI",
    Svg: MountainSvg,
    description: (
      <>
        Using generative AI for fun and profit, from creating original artwork
        to deciding what to make for lunch, offers exciting possibilities
      </>
    ),
  },
  {
    title: "Focus on What Matters",
    Svg: TreeSvg,
    description: (
      <>
        Generative AI can enhance focus by automating repetitive tasks, freeing
        up mental bandwidth for more creative and critical thinking
      </>
    ),
  },
  {
    title: "Powered by AI",
    Svg: ReactSvg,
    description: (
      <>
        Generative AI tools possess remarkable power and flexibility. Their
        ability to learn and evolve makes them indispensable for innovation and
        problem-solving
      </>
    ),
  },
];

function Feature({ title, Svg, description }: FeatureItem) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
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
