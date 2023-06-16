import 'dotenv/config';

export type FilmData = {
    adult: boolean,
    backdrop_path: string,
    genre_ids: number[],
    id: number,
    original_language: string,
    original_title: string,
    overview: string
    popularity: number,
    poster_path: string,
    release_date: string,
    title: string,
    video: boolean,
    vote_average: number,
    vote_count: number
}

type FilmResponse = {
    page: number,
    results: FilmData[]

}

export default async function getData(url: string): Promise<FilmData[]> {
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization:
                `Bearer ${process.env.API_KEY}`,
        },
    };

    const response = await fetch(url, options)
    const data: FilmResponse = await response.json()


    return data.results;
}