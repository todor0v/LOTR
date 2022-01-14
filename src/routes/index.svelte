<script>
    import Card from '../components/Card.svelte';
    let cards = [
        {
            title: 'Random Characters',
            picture: {
                src: 'https://res.cloudinary.com/dunzfvymb/image/upload/v1642191327/chars_hsuplo.jpg',
                alt: 'Drawing of all Lord of the Rings characters',
                aspect_ratio: '530/685',
                width: '',
                custom_class: '',
            },
            link: 'character',
        },
        {
            title: 'Random Quotes',
            picture: {
                src: 'https://res.cloudinary.com/dunzfvymb/image/upload/v1642191347/quotes_ouytzh.jpg',
                alt: 'Drawing of Lord of the Rings character walking over a bridge',
                aspect_ratio: '530/685',
                width: '',
                custom_class: '',
            },
            link: 'quotes',
        },
    ];
</script>

<svelte:head>
    <title>Lord of the Rings Characters and Quotes</title>
</svelte:head>

<section class="cards">
    <div class="wrapper">
        <div class="cards__box">
            {#each cards as card}
                <Card {...card} />
            {/each}
        </div>
    </div>
</section>

<style type="scss">
    .cards {
        display: flex;
        align-items: center;
        justify-content: center;

        &__box {
            display: flex;
            justify-content: center;
            gap: 0 2rem;
            width: 100%;
            max-width: 1096px;

            @media (max-width: 1920px) {
                max-width: 800px;
            }
            @media (max-width: 640px) {
                flex-direction: column;
                align-items: center;
                max-width: 380px;
            }
        }
        .wrapper {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
        }
    }
</style>
