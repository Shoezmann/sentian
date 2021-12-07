export interface Artist {
    id: string;
    name: string;
    "life-span": ArtistLifeSpan;
    genres: Genre[];
}

export interface ArtistLifeSpan {
    ended:  boolean | null;
    begin?: Date;
    end?:   Date;
}

export interface Genre{
    id: string;
    count: number;
    name: string;
}