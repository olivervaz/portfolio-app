<script>
    export let axis;
</script>

<div class={axis}>
    <slot/>
</div>

<style>
    div {
        display: flex;
        gap: 8px;
    }

    .y {
        flex-direction: column;
    }

    .x {
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
    }
</style>
