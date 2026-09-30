import type { Metadata } from 'next';
import RunningHead from '../components/RunningHead';
import styles from './about.module.css';

export const metadata: Metadata = {
    title: 'About',
};

const marginalia = [
    {
        term: 'Currently',
        items: [
            ['M.S. Computer Science', 'Georgia Tech'],
            ['Quantitative Analyst', 'Bank of America'],
            ['AI Safety Policy Fellow', 'Georgia Tech AISI'],
        ],
    },
    {
        term: 'Published',
        items: [['PATHWiSE', "ACM/IEEE HRI ’24"]],
    },
    {
        term: 'Based in',
        items: [['New York, NY']],
    },
];

export default function About() {
    return (
        <main className={styles.main}>
            <article className={styles.article}>
                <RunningHead folio="01" label="About" className={styles.head} />

                <h1 className={styles.lead}>
                    I research how AI systems earn trust&mdash;and what happens when they don&rsquo;t.
                </h1>

                <div className={styles.body}>
                    <p>
                        As an M.S. Computer Science candidate at Georgia Tech, my work sits at the intersection of AI safety, public policy, and human-centered systems. I&rsquo;ve defined security guardrails and privacy standards for AI adoption across 1,500+ NYC public schools through Paragon, co-authored research on AI-assisted educational robotics presented at ACM/IEEE HRI, and am currently working with the City of Charleston to model sensor network viability for predicting train crossing delays.
                    </p>
                    <p>
                        I also work as a Quantitative Analyst at Bank of America, applying machine learning to financial risk&mdash;but my deeper interest lives in the research lab, asking harder questions about alignment, safety, and the systems we build for people who never asked for them.
                    </p>
                </div>

                <aside className={styles.margin} aria-label="At a glance">
                    <dl>
                        {marginalia.map(({ term, items }) => (
                            <div key={term} className={styles.note}>
                                <dt className="eyebrow">{term}</dt>
                                {items.map(([primary, secondary]) => (
                                    <dd key={primary}>
                                        <span className={styles.primary}>{primary}</span>
                                        {secondary && <span className={styles.secondary}>{secondary}</span>}
                                    </dd>
                                ))}
                            </div>
                        ))}
                    </dl>
                </aside>
            </article>
        </main>
    );
}
