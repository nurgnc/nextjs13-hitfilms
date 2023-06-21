import MovieContainer from '@/containers/movie'
import React from 'react'
import { notFound } from 'next/navigation'
import { fetchSingleMovie } from "@/services/movie";

const MoviePage = async ({ params, searchParams }) => {
    const movieDetail = await fetchSingleMovie(params.id)

    if (!movieDetail) {
        notFound()
    }
    if (searchParams.error === "true") {
        throw new Error('Error happened')
    }

    return (
        <MovieContainer movie={movieDetail} />
    )
}

export default MoviePage