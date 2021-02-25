import {connect, disconnect} from "../config/db.config";
import {MovieModel} from '../models/movie.model';
import {APILogger} from '../logger/api.logger';

export class MovieRepository {

    private logger: APILogger;

    constructor() {
        connect();
        this.logger = new APILogger()
    }

    async getMovies() {
        const movies = await MovieModel.find({});
        console.log('Movies:::', movies);
        return movies;
    }

    async createMovie(movie) {
        let data = {};
        try {
            data = await MovieModel.create(movie);
        } catch(err) {
            this.logger.error('Error::' + err);
        }

        return data;
    }

    async updateMovie(movie) {
        let data = {};
        try {
            data = await MovieModel.updateOne(movie);
        } catch(err) {
            this.logger.error('Error::' + err);
        }
        return data;
    }

    async deleteMovie(movieId) {
        let data: any = {};
        try {
            data = await MovieModel.deleteOne({_id : movieId});
        } catch(err) {
            this.logger.error('Error::' + err);
        }
        return {status: `${data.deletedCount > 0 ? true : false}`};
    }
}