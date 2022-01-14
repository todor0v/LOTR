<script>
    import { Body } from 'svelte-body';
    let dark = true;
    $: theme = dark === true ? 'dark-theme' : 'light-theme';
    $: label = dark === true ? 'Switch to light theme' : 'Switch to dark theme';
</script>

<Body class={theme} />

<button on:click={() => {dark = !dark}} class="theme-toggle" aria-label={label}>
    <svg xmlns="http://www.w3.org/2000/svg" width="472.39" height="472.39" viewBox="0 0 472.39 472.39">
        <g class="theme-toggle__sun">
            <path d="M403.21,167V69.18H305.38L236.2,0,167,69.18H69.18V167L0,236.2l69.18,69.18v97.83H167l69.18,69.18,69.18-69.18h97.83V305.38l69.18-69.18Zm-167,198.17a129,129,0,1,1,129-129A129,129,0,0,1,236.2,365.19Z" />
        </g>
        <g class="theme-toggle__circle">
            <circle class="cls-1" cx="236.2" cy="236.2" r="103.78" />
        </g>
    </svg>
</button>

<style type="scss">
    .theme-toggle {
        margin-left: auto;
        cursor: pointer;
        background: 0;
        border: 0;
        opacity: 0.8;
        max-width: 30px;
        max-height: 30px;
        border-radius: 50%;
        position: relative;
        z-index: 10;
        isolation: isolate;
        svg {
            width: 30px;
            height: 30px;
            fill: var(--clr-foreground);
        }
        &:before {
            content: '';
            position: absolute;
            inset: 0;
            border-radius: inherit;
            transform: scale(0);
            opacity: 0;
            z-index: -1;
        }
        &:after {
            content: attr(aria-label);
            position: absolute;
            color: var(--clr-background);
            background: var(--clr-foreground);
            width: max-content;
            font-size: 0.8rem;
            top: 120%;
            left: -400%;
            padding: 0.5em 1em;
            border-radius: 0.3em;
            opacity: 0;
            transform: scale(0);
            transform-origin: top;
            transition: transform 0ms linear 100ms, opacity 100ms linear;
        }
        &:hover,
        &:focus {
            outline: 0;
            opacity: 1;
            &::after {
                opacity: 0.9;
                transform: scale(1);
                transition: transform 70ms linear, opacity 70ms linear;
            }
        }
        &:focus-visible:after {
            opacity: 0.9;
            transform: scale(1);
            transition: transform 70ms linear, opacity 70ms linear;
        }
        &__circle {
            transition: transform 500ms ease-out;
        }
        &__sun {
            transform-origin: center center;
            transition: transform 750ms cubic-bezier(0.11, 0.14, 0.29, 1.32);
        }
    }

    @keyframes pulseToLight {
        0% {
            transform: scale(0);
            opacity: 0.5;
        }
        10% {
            transform: scale(1);
        }
        75% {
            opacity: 1;
        }
        100% {
            opacity: 0;
            transform: scale(1);
        }
    }

    @keyframes pulseToDark {
        0% {
            transform: scale(0);
            opacity: 0.5;
        }
        10% {
            transform: scale(1);
        }
        75% {
            opacity: 1;
        }
        100% {
            opacity: 0;
            transform: scale(1);
        }
    }
</style>
