export interface Artist {
    id:              string;
    name:            string;
    "life-span":     ArtistLifeSpan;
}

export interface ArtistLifeSpan {
    ended:  boolean | null;
    begin?: Date;
    end?:   Date;
}