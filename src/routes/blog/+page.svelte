<script>
    import Grid from '@components/Grid/Grid.svelte';
    import Page from '@components/Page/Page.svelte';
    import Placeholder from "@components/Placeholder/Placeholder.svelte";
</script>
<svelte:head>
    <title>Blog</title>
    <meta name="description" content="Blog" />
</svelte:head>

<Page title="Blog">
    <Grid axis="y">
        <Placeholder/>
    </Grid>
</Page>
