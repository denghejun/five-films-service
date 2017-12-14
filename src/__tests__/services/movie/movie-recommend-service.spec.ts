import { Movie, Common } from '@colorfulwindmill/five-films-interface'
import { MovieServiceSpecHelper } from './movie-service'
import { MovieRecommendService } from '../../../index'

it('[movie-recommend-service : 01] should get recommend movie response successfully when giving valid city name',
  async () => {
    // given
    const q: Movie.MovieRecommendRequest = { city: '成都' };

    // when
    const service = new MovieRecommendService();

    // then
    await service.getRecommendMovies(q).then(response => {
      expect(response).not.toBeUndefined();
      expect(response.reason).toBe('查询成功');
      expect(response.error_code).toBe(0);
      expect(response.result).not.toBeUndefined();
    }, error => {
      MovieServiceSpecHelper.AssertMovieServiceError(error);
    });
  })

it('[movie-recommend-service : 02] shouldn\'t get any recommend movie response when giving invalid city name',
  async () => {
    // given
    const q: Movie.MovieRecommendRequest = { city: 'InvalidCityName' };

    // when
    const service = new MovieRecommendService();

    // then
    const response = await service.getRecommendMovies(q).
      catch((error: Common.Error<Movie.MovieRecommendResponse>) => {
        MovieServiceSpecHelper.AssertMovieServiceError(error);
      });
  })
