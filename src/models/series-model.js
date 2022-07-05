let id = 0;
export class Series {
    constructor(title, description, genre, seasons, img ){
        this.id = id++;
        this.title = title;
        this.description = description;
        this.genre = genre;
        this.seasons = seasons;
        this.img = img;
    }
}