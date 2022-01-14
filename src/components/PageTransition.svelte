<script>
    import { fly } from 'svelte/transition';
    export let refresh = '';
</script>

{#key refresh}
    <main class="main-content" in:fly={{ y: -50, duration: 250, delay: 300 }} out:fly={{ y: -50, duration: 250 }}>
        <slot />
    </main>
{/key}
