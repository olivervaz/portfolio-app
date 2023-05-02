<script>
    export let props = {};
    export let href = '#';
</script>

<a href={href} {...props}>
    <slot/>
</a>

<style>
    a, a:visited, a:active, a:hover {
        font-weight: 600;
        color: var(--color-primary);
    }
</style>
