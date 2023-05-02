<script>
    import Grid from "@components/Grid/Grid.svelte";
    import empty from "@lib/assets/empty.svg";
</script>

<Grid axis="y">
    <img src={empty} alt="empty"/>
    <p>
        Literally nothing to see here.
        <br/>
        Shame on me for not having any content.
    </p>
</Grid>

<style>
    img {
        width: 100%;
        max-width: 100px;
        margin: 0 auto;
    }
    p {
        font-size: 1.5rem;
        text-align: center;
        color: var(--color-text-disabled);
        margin: 0 auto;
    }
</style>
