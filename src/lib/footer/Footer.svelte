<footer class="main-footer">
    <div class="wrapper">
        <div class="main-footer__left">
            <p>© 2021-present Todor Todorov. All Rights Reserved.</p>
        </div>
        <div class="main-footer__right">
            <p>
                Built using <a href="https://the-one-api.dev/" target="_blank" rel="nofollow noopener noreferrer external">"The one API"</a>
                &
                <a href="https://kit.svelte.dev/" target="_blank" rel="nofollow noopener noreferrer external">SvelteKit</a>
            </p>
        </div>
    </div>
</footer>

<style type="scss">
    .wrapper {
        display: flex;
        justify-content: space-between;
        gap: 1rem;
        @media (max-width: 480px) {
            gap: 0.2rem 0;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            text-align: center;
        }
    }
    .main-footer {
        font-size: 12px;
        padding: 0.5rem 0;
        &__right {
            align-self: flex-end;
            @media (max-width: 480px) {
                align-self: center;
            }
        }
    }
    a {
        color: var(--color-primary);
    }
</style>
