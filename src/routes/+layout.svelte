<script>
    import Header from '@components/Header/Header.svelte';
    import Footer from '@components/Footer/Footer.svelte';
    import '../app.css';
</script>

<div class="app">
    <Header/>
    <slot/>
    <Footer/>
</div>

<style>
    .app {
        display: flex;
        flex-direction: column;
        max-width: var(--column-width);
        margin: var(--column-margin-top) auto;
        max-height: 100vh;
    }
</style>
