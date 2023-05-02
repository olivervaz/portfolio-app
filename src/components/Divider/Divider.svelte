<script>
    export let axis;
</script>

<div class={axis}>
    <slot/>
</div>

<style>
    div {
        background: var(--color-secondary);
        margin-bottom: 0.25em;
    }

    .x {
        width: 100%;
        height: 2px;
    }

    .y {
        width: 2px;
        height: 100%;
    }
</style>
