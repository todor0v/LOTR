<script>
    import { fly } from 'svelte/transition';
    import Loader from '../components/Loader.svelte';

    const getcharacterQuote = async () => {
        const response = await fetch(`/api/character.json`);
        const data = await response.json();
        if (response.ok) {
            return {
                text: data.characterQuote.text,
                author: data.characterQuote.author,
            };
        } else {
            throw new Error(data);
        }
    };

    let characterQuote = getcharacterQuote();

    const handleClick = () => {
        characterQuote = getcharacterQuote();
    };
</script>

<svelte:head>
    <title>Lord of the Rings Quotes</title>
</svelte:head>

<section>
    <div class="wrapper">
        <div class="quote">
            <button class="button" on:click={handleClick}>Show quotes</button>
            {#await characterQuote}
                <Loader />
            {:then characterQuote}
                <div class="blockquote" in:fly={{ y: -50, duration: 250, delay: 300 }} out:fly={{ y: -50, duration: 250 }}>
                    <div class="blockquote__wrapper">
                        <h1>{characterQuote.text}</h1>
                        <h4>{characterQuote.author}</h4>
                    </div>
                </div>
            {:catch error}
                {console.error(error) || ''}
                <p class="error">We apologise. We could not get any data. Try refreshing or check your internet connection.</p>
            {/await}
        </div>
    </div>
</section>

<style type="scss">
    .button {
        display: inline-block;
        border: 1px solid var(--color-primary);
        border-radius: 24px;
        font-size: 16px;
        max-width: 170px;
        margin: 0 auto;
        margin-bottom: 80px;
        padding: 10px 26px 10px;
        cursor: pointer;
        transition: background-color var(--transition), border-color var(--transition);
        @media (max-width: 376px) {
            margin-bottom: 60px;
        }
        @media (hover: hover) and (pointer: fine) {
            &:hover {
                border: 1px solid var(--border-btn);
                background-color: var(--background-btn);
            }
        }
    }
    .quote {
        display: flex;
        flex-direction: column;
    }
    .error {
        text-align: center;
        font-size: 18px;
        color: #d85c5c;
        max-width: 300px;
        margin: 0 auto;
    }
    .blockquote {
        display: flex;
        padding: 0 20px;
        margin-bottom: 80px;
        &__wrapper {
            position: relative;
            max-width: 620px;
            margin: 0 auto;
            align-self: center;
            @media (max-width: 376px) {
                max-width: 100%;
            }
            h1 {
                position: relative;
                color: #d85c5c;
                font-size: 2.8rem;
                font-weight: normal;
                line-height: 1;
                margin: 0;
                border: 2px solid #fff;
                border: solid 2px;
                border-radius: 20px;
                padding: 20px 25px 25px;
                @media (max-width: 767px) {
                    font-size: 1.5rem;
                    line-height: 1.3;
                }
                @media (max-width: 376px) {
                    font-size: 1.4rem;
                    padding: 18px 20px 18px;
                }
                &:after {
                    content: '';
                    position: absolute;
                    border: 2px solid #d85c5c;
                    border-radius: 0 50px 0 0;
                    width: 60px;
                    height: 60px;
                    bottom: -60px;
                    left: 50px;
                    border-bottom: none;
                    border-left: none;
                    z-index: 3;
                }
                &:before {
                    content: '';
                    position: absolute;
                    width: 80px;
                    border: 2px solid var(--bg);
                    bottom: -2px;
                    left: 50px;
                    z-index: 2;
                    transition: border-color var(--transition);
                }
            }
            h4 {
                position: relative;
                color: var(--color-primary);
                font-size: 1.3rem;
                font-weight: 400;
                line-height: 1.2;
                margin: 0;
                padding-top: 15px;
                z-index: 1;
                margin-left: 150px;
                padding-left: 12px;
                max-width: 160px;
                &::first-letter {
                    margin-left: -12px;
                }
            }
        }
    }
</style>
