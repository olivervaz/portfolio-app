<script>
    import Grid from '@components/Grid/Grid.svelte';
    import Page from '@components/Page/Page.svelte';
    import Placeholder from "@components/Placeholder/Placeholder.svelte";
</script>
<svelte:head>
    <title>Snippets</title>
    <meta name="description" content="Blog" />
</svelte:head>

<Page title="Snippets">
    <Grid axis="y">
        <Placeholder/>
    </Grid>
</Page>
