<script>
    import logo from '@lib/assets/logo.png';
    import Section from '@components/Section/Section.svelte';
    import Grid from '@components/Grid/Grid.svelte';
    import Link from '@components/Link/Link.svelte';
    import BlogWidget from "@components/BlogWidget/BlogWidget.svelte";
    import SnippetWidget from "@components/SnippetWidget/SnippetWidget.svelte";
</script>
<svelte:head>
    <title>Home</title>
    <meta name="description" content="Home"/>
</svelte:head>
<main>
    <Grid axis="x">
        <Grid axis="y">
            <h1 class="mb0">Olha Shambir</h1>
            <h3>Frontend Developer</h3>
            <p>
                Hi, I'm Olha Shambir, an experienced frontend developer with a passion for crafting exceptional web
                experiences.
                <br/>
                Proficient in JavaScript and TypeScript, with expertise in React Native.
                Skilled in creating responsive and user-friendly interfaces.
                (
                <Link href="/about">More details</Link>
                )
            </p>
        </Grid>
        <img src={logo} alt="logo"/>
    </Grid>
    <Section title={"Latest posts"}>
        <BlogWidget/>
    </Section>
    <Section title="Popular Snippets">
        <SnippetWidget/>
    </Section>
</main>
<style>
    h3 {
        margin-top: 4px;
    }

    main {
        padding: 32px 0;
    }

    img {
        max-width: 225px;
        align-self: flex-start;
    }
</style>
