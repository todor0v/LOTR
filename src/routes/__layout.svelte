<script context="module">
    export const load = async ({ url }) => ({
        props: {
            key: url,
        },
    });
</script>

<script>
    import { onMount } from 'svelte';
    import Footer from '$lib/footer/Footer.svelte';
    import Header from '$lib/header/Header.svelte';
    import '../app.pcss';
    import PageTransition from '../components/PageTransition.svelte';
    export let key;
    let loadConnectionCheck;

    onMount(async () => {
        loadConnectionCheck = (await import('../components/CheckConnection.svelte')).default;
    });
</script>

<Header />

<svelte:component this={loadConnectionCheck} />
<PageTransition refresh={key}>
    <slot />
</PageTransition>

<Footer />
