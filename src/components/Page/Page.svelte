<script>
    export let title
</script>

<main>
    <h1>{title}</h1>
    <slot/>
</main>

<style>
    h1 {
        margin-bottom: 0.5em;
    }
    main {
        margin: 16px 0;
    }
</style>
