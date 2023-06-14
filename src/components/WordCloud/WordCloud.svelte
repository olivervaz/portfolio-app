<script>
    import { getCloudConfig } from "./utils/getCloudConfig";
    export let words = [];

    const cloudData = getCloudConfig(words);
</script>

<div class="word-cloud">
    {#if cloudData.length > 0}
        <svg width="100%" height="100%" class="content">
            <g transform="translate(0%, 0%)">
                {#each cloudData as word (word.text)}
                    <text
                            class="word"
                            transform="translate({word.x}, {word.y}) rotate({word.rotate})"
                            font-size={word.size + "px"}
                            fill={word.color}
                            text-anchor="middle"
                    >
                        {word.text}
                    </text>
                {/each}
            </g>
        </svg>
    {:else}
        <p>No words to display.</p>
    {/if}
</div>

<style>
    .word-cloud {
        width: 100%;
        height: 500px;
    }
    .content {
        width: 100%;
        height: 100%;
    }
    .word {
        position: absolute;
        cursor: pointer;
    }
    .word:hover {
        transition: all .3s ease-in-out;
        font-weight: 600;
        opacity: 1;
    }
    .word:not(:hover) {
        opacity: 0.6;
    }
</style>
