<script>
    import { getCloudConfig } from "./utils/getCloudConfig";
    export let words = [];

    const cloudData = getCloudConfig(words);
</script>

<style>
    .word-cloud {
        width: 100%;
        height: 500px;
    }
</style>

<div class="word-cloud">
    {#if cloudData.length > 0}
        <svg width="100%" height="100%">
            <g transform="translate(0%, 5%)">
                {#each cloudData as word (word.text)}
                    <text
                            transform="translate({word.x}, {word.y}) rotate({word.rotate})"
                            font-size={word.size + "px"}
                            fill={word.color}
                            text-anchor="middle"
                            style="cursor: pointer;"
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
