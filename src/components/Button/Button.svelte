<script>
    export let props = {};
    export let onClick
</script>

<button on:click={onClick} {...props}>
    <slot/>
</button>

<style>
    button {
        background: var(--color-primary);
        padding: 0.5em 1em;
        border: 0;
        color: #ffffff;
        border-radius: 4px;
        cursor: pointer;
        transition: all 0.2s ease-in-out;
    }

    button:hover {
       box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.2);;
    }
</style>
