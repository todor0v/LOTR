import { THE_ONE_API } from '$lib/Env';

export async function get() {
    const requestOptions = {
        method: 'GET',
        headers: {
            Authorization: `Bearer ${process.env.NODE_ENV === 'production' ? process.env.THE_ONE_API : THE_ONE_API}`,
            'Content-Type': 'application/json',
        },
    }
    const characterResponse = await fetch('https://the-one-api.dev/v2/character', requestOptions);
    const quoteResponse = await fetch(`https://the-one-api.dev/v2/quote/`, requestOptions);
    const characters = await characterResponse.json();
    const quotes = await quoteResponse.json();
    const randomQuoteID = Math.floor(Math.random() * quotes.docs.length);
    const quoteAuthor = characters.docs.filter((item) => item._id === quotes.docs[randomQuoteID]?.character);
    const characterQuote = {
        text: quotes.docs[randomQuoteID]?.dialog,
        author: quoteAuthor[0].name
    };
    const filteredCharacters = characters.docs.filter((item) => item.wikiUrl !== undefined);
    const characterDetails = filteredCharacters[Math.floor(Math.random() * filteredCharacters.length)];
    const [characterImageResponse, characterInfoResponse] = await Promise.all([
        fetch(`https://lotr.fandom.com/api.php?action=imageserving&wisTitle=${characterDetails.name}&format=json&formatversion=2`),
        fetch(`https://lotr.fandom.com/api.php?format=json&action=query&prop=extracts&titles=${characterDetails.name}`),
    ]);
    const characterImage = await characterImageResponse.json();
    const characterInfo = await characterInfoResponse.json();
    return { body: { characterDetails, characterImage, characterInfo, characterQuote } };
}