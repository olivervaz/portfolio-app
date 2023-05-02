<script>
    import Grid from '@components/Grid/Grid.svelte';
    import Page from '@components/Page/Page.svelte';
    import Section from "@components/Section/Section.svelte";
    import Link from "@components/Link/Link.svelte";
    import Divider from "@components/Divider/Divider.svelte";
    import photo from '@lib/assets/photo.png';
</script>
<svelte:head>
    <title>About</title>
    <meta name="description" content="About this app"/>
</svelte:head>

<Page title="About Me">
    <Grid axis="y">
        <img src={photo} alt="photo of developer"/>
        <Section title="Bio">
            <p>
                Hi everyone 👋, my name is Olya. It's been 3 years as I&apos;m a developer in
                <Link
                        href="https://djangostars.com/main/"
                        target="_blank"
                        rel="noopener"
                >
                    Djangostars
                </Link>
                .
                Our company is technical partner for many clients, we help people to pass the path from idea to huge working projects.
                And I write on beautiful and mysterious Javascript and his brother Typescript.
                <br/>
                I mainly work with
                <abbr title="React is an open-source JavaScript library for building user interfaces, maintained by Meta.">React</abbr>
                and its ecosystem, but also I had broad experience in
                <abbr title="Vue.js is an open-source MVVM JavaScript framework for building user interfaces">Vue</abbr>
                and <abbr title="Angular is a TypeScript-based, open-source framework led by Google">Angular</abbr>.
                <br/>
                As someone said React Native contains word "React" and you know React - so you know React Native 💁.
                So I followed this logic and helped to build a couple of apps with <abbr
                    title="React Native is an open-source UI software framework created by Meta Platforms">React
                Native</abbr> 🧱. First app was for PADI Travel and mvp app now.
                <br/>
                I also trying to keep up with
                <Link
                        href="https://2022.stateofjs.com/en-US/"
                        target="_blank"
                        rel="noopener"
                >
                    state of JS
                </Link>
                so built this website with <abbr title="Svelte is an open-source component framework.">Svelte</abbr>. 💡
            </p>
        </Section>
        <Section title="Experience">
            <div class="block">
                <div class="period">
                    <time dateTime="2020-08">August 2020</time>
                    &ensp;–&ensp;present.
                </div>
                <h4>
                    Frontend Developer at
                    <Link
                            href="https://djangostars.com/main/"
                            target="_blank"
                            rel="noopener"
                    >
                        Djangostars
                    </Link>
                </h4>
                <p class="description">
                    <Link href="https://travel.padi.com/" target="_blank" rel="noopener">PADI Travel</Link>
                    is the first project I worked with.
                    It's a booking platform for divers 🤿 and travelers 🗺.
                    <br/>
                    I was responsible for implementing new features for web and mobile app.
                    <br/>
                    🧩Tech stack: <em>React/Redux, React Native, Angular JS, ES6, Django
                    Templates</em>.
                    <br/>
                    Challenges that were passed:
                    rewrited legacy pages from Angular JS to React
                    and significantly improved performance by combining ssr ui (django templates) and react elements,
                    <br/>
                </p>
                <p class="description">
                    Next project is a mortgage provider 🏠 -
                    <Link href="https://molofinance.com/" target="_blank" rel="noopener">MoloFinance</Link>.
                    As project follows microfrontend architecture there were a lot work to do:
                    supporting internal libs, creating new components, refactoring old ones, supporting FE
                    infrastructure, etc.
                    <br/>
                    Also I was involved in mentoring interns.
                    <br/>
                    🧩Tech stack: <em>Typescript, NextJs, VueJS, React/Redux, React Queries,
                    Jest/Enzyme/Testing Library, MUI</em>.
                    <br/>
                    Challenges that were passed:
                    gradually moving from monorepo to microfrontend architecture,
                    implementing dynamic forms and flows,
                    getting rid of Redux and replacing it with React Queries,
                    increasing test coverage from 0% to 80%.
                    <br/>
                </p>
                <p class="description">
                    And currently I'm building an app for managing logistic from scratch 🚀.
                    <br/>
                    In a half year we've built a MVP that includes mobile app (for performer)
                    and admin app (for manager) with maps, full user management features, organisation setup and many
                    more.
                    <br/>
                    🧩Tech stack that has been used: <em>React/React Queries, React Native, Google Maps, React Final
                    Form</em>
                </p>
                <Divider axis="x"/>
            </div>
            <div class="block">
                <div class="period">
                    <time dateTime="2020-08">August 2020</time>
                    &ensp;–&ensp;
                    <time dateTime="2020-01">January 2020</time>
                </div>
                <h4>
                    Engineering Intern at
                    <Link
                            href="https://www.epam.com/"
                            target="_blank"
                            rel="noopener"
                    >
                        EPAM
                    </Link>
                </h4>
                <p class="description">
                    I've entered to internship after passing an exam on basics of programming.
                    As a team, we were responsible for building internal tools for company.
                    <br/>
                    Tech stack: <em>React, Javascript</em>.
                </p>
                <Divider axis="x"/>
            </div>
            <div class="block">
                <div class="period">
                    <time dateTime="2017-12">December 2017</time>
                    &ensp;–&ensp;
                    <time dateTime="2019-12">December 2019</time>
                </div>
                <h4>
                    QA Engineer at
                    <Link
                            href="https://djangostars.com/main/"
                            target="_blank"
                            rel="noopener"
                    >
                        Djangostars
                    </Link>
                </h4>
                <p class="description">
                    I was responsible for testing web and mobile apps and cover UI with autotests.
                    <br/>
                    Tech stack: <em>Python/pytest, Selenium.</em>
                </p>
                <Divider axis="x"/>
            </div>
        </Section>
        <Section title="With what I actually worked with?">

        </Section>
    </Grid>
</Page>

<style>
    em {
        border-bottom: 1px solid var(--color-secondary);
    }

    .block {
        margin: 1em 0;
    }

    .period {
        color: var(--color-primary);
        margin-bottom: 1em;
    }

    .description {
        margin-bottom: 1em;
    }


</style>
