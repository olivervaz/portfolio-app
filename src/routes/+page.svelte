<script>
    import logo from '@lib/images/logo.svg';
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
    <Grid axis="x" class="title">
        <div class="title">
            <h1 class="mb0">Olha Shambir</h1>
            <h3>Frontend Developer</h3>
        </div>
<!--        <div class="image">-->
<!--            <img src={logo} alt="logo"/>-->
<!--        </div>-->
    </Grid>
    <Grid axis="y">
        <p>
            Hi, I'm Olha Shambir, an experienced frontend developer with a passion for crafting exceptional web experiences.
            <br/>
            Proficient in JavaScript and TypeScript, with expertise in React Native.
            Skilled in creating responsive and user-friendly interfaces.
            (<Link href="/about">More details</Link>)
        </p>
    </Grid>
    <Section title={"Latest posts"}>
        <BlogWidget/>
    </Section>
    <Section title="Popular Snippets">
        <SnippetWidget/>
    </Section>
</main>
<style>
    .title {
        margin-bottom: 1.5em;
    }
</style>
