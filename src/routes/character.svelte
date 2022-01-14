<script>
    import { fly } from 'svelte/transition';
    import ImageLoader from '../components/Image/ImageLoader.svelte';
    import Loader from '../components/Loader.svelte';
    const getCharacter = async () => {
        const response = await fetch(`/api/character.json`);
        const data = await response.json();
        if (response.ok) {
            const { characterDetails, characterImage, characterInfo } = data;

            return {
                ...characterDetails,
                info: characterInfo.query?.pages[Object.keys(characterInfo.query?.pages)[0]].extract,
                img: {
                    custom_class: 'aspect-ratio--contain',
                    alt: 'Lord of The Rings Character Picture',
                    aspect_ratio: '300/500',
                    width: '300px',
                    src: `${characterImage.image?.imageserving ? characterImage.image?.imageserving.substring(0, characterImage.image?.imageserving.indexOf('/revision')) || '' : 'placeholder.jpg'}`,
                },
            };
        } else {
            throw new Error(data);
        }
    };

    let character = getCharacter();

    const handleClick = () => {
        character = getCharacter();
    };
</script>

<svelte:head>
    <title>Lord of the Rings Characters</title>
</svelte:head>

<section>
    <div class="wrapper">
        <div class="character">
            <button class="button" on:click={handleClick}>Get Character</button>
            {#await character}
                <Loader />
            {:then character}
                <div class="character__block" in:fly={{ y: -50, duration: 250, delay: 300 }}>
                    <h2>{character.name}</h2>
                    <div class="character__info">
                        <ImageLoader picture={character.img} />
                        <table>
                            <tbody>
                                {#each Object.entries(character) as [key, value]}
                                    {#if key.toLocaleLowerCase() === 'wikiurl'}
                                        <tr>
                                            <td>{key}:</td>
                                            <td>
                                                <a href={value} target="_blank" rel="noopener noreferrer nofollow">{value}</a>
                                            </td>
                                        </tr>
                                    {:else if key.toLocaleLowerCase() !== '_id' && key.toLocaleLowerCase() !== 'info' && key.toLocaleLowerCase() !== 'img'}
                                        <tr>
                                            <td>{key.toLocaleLowerCase().charAt(0).toUpperCase() + key.slice(1)}:</td>
                                            <td>{value || 'Unknown'}</td>
                                        </tr>
                                    {/if}
                                {/each}
                            </tbody>
                        </table>
                    </div>
                    {#if character.info}
                        <div class="text">
                            {@html character.info}
                        </div>
                    {/if}
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
        padding: 10px 26px 10px;
        cursor: pointer;
        transition: background-color var(--transition), border-color var(--transition);
        @media (hover: hover) and (pointer: fine) {
            &:hover {
                border: 1px solid var(--border-btn);
                background-color: var(--background-btn);
            }
        }
    }
    .error {
        text-align: center;
        font-size: 18px;
        color: #d85c5c;
        max-width: 300px;
        margin: 0 auto;
    }
    :global {
        .text {
            max-width: 900px;
            margin: 0 auto;
            h1,
            h2,
            h3,
            h4,
            h5,
            h6 {
                margin: 0.5em 0 0.25em;
            }
            center {
                margin-top: 1em;
            }
            dl {
                text-align: center;
                margin-bottom: 1.5em;
            }
            b {
                font-weight: bold;
            }
            blockquote {
                border-left: none !important;
            }
            p {
                margin: 0.8em 0;
                margin-top: 0;
                br:only-of-type {
                    display: none;
                }
            }
            figure,
            svg {
                display: none;
            }
        }
    }
    .character {
        display: flex;
        flex-direction: column;
        gap: 0px 30px;
        margin-bottom: 50px;
        &__block {
            width: 100%;
            h2 {
                text-align: center;
                margin-bottom: 16px;
                font-size: 32px;
            }
        }
        button {
            margin-bottom: 40px;
        }
        &__info {
            display: flex;
            gap: 0 2rem;
            justify-content: center;
            margin-bottom: 2rem;
            @media (max-width: 640px) {
                flex-direction: column;
                align-items: center;
            }
            table {
                margin-top: 2rem;
                max-width: 290px;
                td {
                    vertical-align: baseline;
                    &:first-of-type {
                        padding-right: 10px;
                    }
                }
            }
        }
        a {
            color: var(--color-primary);
            text-decoration-color: var(--color-primary);
            word-break: break-all;
            @media (hover: hover) and (pointer: fine) {
                &:hover {
                    text-decoration-color: transparent;
                }
            }
        }
    }
</style>
