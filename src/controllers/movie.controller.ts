import { APILogger } from '../logger/api.logger';
import { MovieService } from '../service/movie.service';

export class MovieController {

    private movieService: MovieService;
    private logger: APILogger;

    constructor() {
        this.movieService = new MovieService();
        this.logger = new APILogger()
    }

    async getMovies() {
        this.logger.info('Controller: getMovies', null)
        return await this.movieService.getMovies();
    }

    async createMovie(movie) {
        this.logger.info('Controller: createMovie', movie);
        return await this.movieService.createMovie(movie);
    }

    async updateMovie(movie) {
        this.logger.info('Controller: updateMovie', movie);
        return await this.movieService.updateMovie(movie);
    }

    async deleteMovie(movieId) {
        this.logger.info('Controller: deleteMovie', movieId);
        return await this.movieService.deleteMovie(movieId);
    }


}