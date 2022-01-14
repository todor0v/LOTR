<script>
    import ImageLoader from './Image/ImageLoader.svelte';
    export let title, picture, link;
</script>

<a sveltekit:prefetch href={link} class="card">
    <ImageLoader {picture} />
    <h2>{title}</h2>
</a>

<style type="scss">
    .card {
        color: var(--color-primary);
        width: 100%;
        max-width: 50%;
        text-align: center;
        @media (max-width: 640px) {
            max-width: 100%;
            margin-bottom: 2rem;
            &:last-child {
                margin-bottom: 0;
            }
        }
        h2 {
            font-size: 24px;
            margin-top: 10px;
            @media (max-width: 640px) {
                font-size: 16px;
            }
        }
    }
</style>
