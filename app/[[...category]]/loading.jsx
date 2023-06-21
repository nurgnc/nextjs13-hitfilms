import React from 'react'

import CategoriesLoading from '@/components/categories/loading'
import FeatureMovieLoading from '@/components/featured-movie/loaing'
import MovieSectionLoading from '@/components/movies-section/loading'

const Loading = () => {
    return (
        <div>
            <FeatureMovieLoading />
            <CategoriesLoading />
            <MovieSectionLoading />
            <MovieSectionLoading />
            <MovieSectionLoading />
        </div>
    )
}

export default Loading