<script>
    import {page} from '$app/stores';
    import github from '@lib/assets/github-mark.svg';
    import Button from "@components/Button/Button.svelte";
    import Grid from "@components/Grid/Grid.svelte";
    import downloadFile from "@utils/downloadFile";

    const downLoadResume = () => {
        downloadFile('@lib/assets/resume.pdf', 'Olha_Shambir_CV.pdf')
    }
</script>

<header>
    <nav>
        <ul>
            <li class={$page.url.pathname === '/' ? 'current' : undefined}>
                <a href="/">Home</a>
            </li>
            <li class={$page.url.pathname === '/about' ? 'current' : undefined}>
                <a href="/about">About</a>
            </li>
            <li class={$page.url.pathname === '/blog' ? 'current' : undefined}>
                <a href="/blog">Blog</a>
            </li>
            <li class={$page.url.pathname === '/projects' ? 'current' : undefined}>
                <a href="/projects">Projects</a>
            </li>
            <li class={$page.url.pathname === '/snippets' ? 'current' : undefined}>
                <a href="/snippets">Snippets</a>
            </li>
        </ul>
        <Grid axis="x">
            <a href="http://github.com/olivervaz" target="_blank" class="github">
                <img src={github} alt="github"/>
            </a>
            <Button onClick={downLoadResume}>Resume</Button>
        </Grid>
    </nav>
</header>

<style>
    header {
        margin-bottom: 16px;
    }

    nav {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    ul {
        display: flex;
        justify-content: space-around;
        align-items: center;
        gap: 12px;
    }

    li.current a {
        font-weight: 600;
    }

    ul a {
        border-radius: 5px;
        font-weight: 400;
        height: 100%;
        padding: 8px;
        font-size: 14px;
        text-transform: uppercase;
        letter-spacing: 0.1em;
        transition: all 0.2s linear;
    }

    .github {
        display: block;
        max-width: 24px;
        height: 24px;
        margin-right: 8px;
    }

    img {
        max-width: 100%;
        height: 100%;
    }

</style>
