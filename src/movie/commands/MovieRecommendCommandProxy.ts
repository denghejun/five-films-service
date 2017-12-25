import { CommandProxy } from '../../core/command'
import { Movie } from '@colorfulwindmill/five-films-interface'
import { MovieRecommandServiceAPICommand } from './MovieRecommandServiceAPICommand'
import { MovieRecommendServiceMockCommand } from './MovieRecommendServiceMockCommand'
import { MovieRecommendServiceGetCacheCommand } from './MovieRecommendServiceGetCacheCommand'
import { MovieRecommendServiceStoreCacheCommand } from './MovieRecommendServiceStoreCacheCommand'

export class MovieRecommendCommandProxy extends CommandProxy<Movie.MovieRecommendRequest, Movie.MovieRecommendResponse> {
  protected registerCommands() {
    return [
      new MovieRecommendServiceMockCommand(),
      new MovieRecommendServiceGetCacheCommand(),
      new MovieRecommandServiceAPICommand(),
      new MovieRecommendServiceStoreCacheCommand()
    ];
  }
}
