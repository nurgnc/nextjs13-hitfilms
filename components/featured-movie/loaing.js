import React from 'react'
import Loading from '../loading'
import styles from './styles.module.css'

const FeatureMovieLoading = () => {
  return (
    <div style={{height: 278}} className={styles.movieWrapper}>
        <Loading />
    </div>
  )
}

export default FeatureMovieLoading