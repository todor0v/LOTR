<script>
    import { page } from '$app/stores';
    import Button from '../../components/Button.svelte';
</script>

<header class="main-header">
    <div class="wrapper">
        {#if $page.url.pathname !== '/'}
            <div class="main-header__content">
                <nav>
                    <ul>
                        <li class:active={$page.url.pathname === '/'}>
                            <a sveltekit:prefetch href="/">Home</a>
                        </li>
                    </ul>
                </nav>
            </div>
        {/if}
        <Button />
    </div>
</header>

<style type="scss">
    .wrapper {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin: 20px auto 40px;
    }
    nav {
        ul {
            padding: 0;
            list-style: none;
            li {
                a {
                    color: var(--color-primary);
                    text-decoration-color: transparent;
                    @media (hover: hover) and (pointer: fine) {
                        &:hover {
                            text-decoration-color: var(--color-primary);
                        }
                    }
                }
            }
        }
    }
</style>
