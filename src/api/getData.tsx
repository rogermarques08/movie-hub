import 'dotenv/config';

// async function getSearch() {
//     getData<FilmResponse>(`https://api.themoviedb.org/3/search/multi?query=${search}&include_adult=false&language=pt-BR&page=1`)
//         .then((data) => {
//             console.log(data.results)
//             const filteredResults = data.results?.filter((item) => item.media_type !== 'person') 
//             console.log(filteredResults);
            

//             setMovie(data.results)
//         })
// }

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