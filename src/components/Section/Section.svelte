<script>
    export let title
</script>

<section>
    {#if !!title }
        <h2>{title}</h2>
    {/if}
    <slot/>
</section>

<style>
    section {
        margin: 16px 0;
    }
</style>
