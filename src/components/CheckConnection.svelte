<script>
    import { fly } from 'svelte/transition';
    import InternetConnection from 'svelte-internet-connection';
</script>

<InternetConnection let:status>
    {#if status !== 'online'}
        <div class="online-status" in:fly={{ y: -50, duration: 250, delay: 300 }} out:fly={{ y: -50, duration: 250 }}>Please check your internet connection!</div>
    {/if}
</InternetConnection>

<style type="scss">
    .online-status {
        position: fixed;
        bottom: 0;
        left: 0;
        right: 0;
        width: 100%;
        padding: 20px;
        text-align: center;
        background: #d85c5c;
        z-index: 10;
        color: var(--clr-foreground);
        @media (max-width: 480px) {
            padding: 16px;
            font-size: 14px;
        }
    }
</style>
