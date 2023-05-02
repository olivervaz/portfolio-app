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
            I am a frontend developer with 3 years of experience in web development.
            <br/>
            I write as you might guess on Javascript and Typescript.
            (<Link href="/about">More details</Link>)
            <br/>
            Also I have an experience in developing mobile applications using React Native.
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
