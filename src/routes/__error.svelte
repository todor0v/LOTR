<script context="module">
    /** @type {import('@sveltejs/kit').ErrorLoad} */
    export function load({ error, status }) {
        return {
            props: {
                error,
                status,
            },
        };
    }
</script>

<script>
    export let error, status;
</script>

<svelte:head>
    {#if status == 404}
        <title>{status} Page Not Found</title>
    {:else}
        <title>{error.message}</title>
    {/if}
</svelte:head>

<div class="error">
    {#if status == 404}
        <h1>{status}</h1>
        <p>Ooops! We couldn't find: "{error.message.replace('Not found: ', '')}"</p>
        <p>
            You could go
            <button on:click={() => {window.history.back()}}>
                back
            </button>
            if you want.
        </p>
    {:else}
        <p>{error.message}</p>
    {/if}
</div>

<style type="scss">
    .error {
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
        flex-direction: column;
        h1 {
            font-size: 150px;
            @media (max-width: 480px) {
                font-size: 120px;
            }
        }
        p {
            font-size: 32px;
            @media (max-width: 480px) {
                font-size: 24px;
            }
        }
        button {
            transition: text-decoration var(--transition);
            text-decoration: underline;
            cursor: pointer;
            text-decoration-thickness: 2px;
            color: var(--color-white);
            @media (hover: hover) and (pointer: fine) {
                &:hover {
                    text-decoration-color: transparent;
                }
            }
        }
    }
</style>
