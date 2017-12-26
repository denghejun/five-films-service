import { ICommand, ExecuteResult } from '../../../core'
import { Movie } from '@colorfulwindmill/five-films-interface'
import Cache from 'react-native-cache-store'

export class MovieRecommendServiceStoreCacheCommand implements ICommand<Movie.MovieRecommendRequest, Movie.MovieRecommendResponse> {
    public canExecute(request: Movie.MovieRecommendRequest): boolean {
        return !!request && request.cache && !!request.cacheKey && !!request.cacheExpireMinutes
    }

    public async execute(request: Movie.MovieRecommendRequest, previousExecuteResult?: ExecuteResult<Movie.MovieRecommendResponse>) {
        if (!!previousExecuteResult && previousExecuteResult.response.error_code === 0) {
            Cache.remove(request.cacheKey);
            Cache.set(request.cacheKey, previousExecuteResult.response, request.cacheExpireMinutes);
        }

        return {
            handled: true,
            response: previousExecuteResult.response
        }
    }
}
