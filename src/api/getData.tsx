import 'dotenv/config';

export interface FilmData {
    adult: boolean,
    backdrop_path: string,
    genre_ids: number[],
    id: number,
    media_type: string
    original_language: string,
    original_title: string,
    overview: string
    popularity: number,
    poster_path: string,
    release_date: string,
    runtime: number
    title: string,
    video: boolean,
    vote_average: number,
    vote_count: number
}

export interface FilmDataDetails extends FilmData {
    tagline: string
    genres: [{
        id: number,
        name: string
    }],
    credits: string
}

export interface FilmResponse {
    page: number,
    results: FilmData[]

}

export interface CastData {
    id: number,
    original_name: string,
    character: string
    profile_path: string,
}

export interface CastResponse {
    id: number,
    cast: CastData[]
}

interface TrailerData {
    key: string,
}

export interface TrailerResponse {
    id: number,
    results: TrailerData[]
}

export default async function getData<T>(url: string): Promise<T> {
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization:
                `Bearer ${process.env.API_TOKEN}`,
        },
    };

    const response = await fetch(url, options)
    const data: T = await response.json()


    return data;
}