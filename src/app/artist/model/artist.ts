// To parse this data:
//
//   import { Convert, PaginatedArtists } from "./file";
//
//   const paginatedArtists = Convert.toPaginatedArtists(json);

export interface PaginatedArtists {
    created: Date;
    count:   number;
    offset:  number;
    artists: Artist[];
}

export interface Artist {
    id:              string;
    type?:           Type;
    "type-id"?:      string;
    score:           number;
    name:            string;
    "sort-name":     string;
    area?:           Area;
    disambiguation?: string;
    "life-span":     ArtistLifeSpan;
    country?:        string;
    "gender-id"?:    string;
    gender?:         string;
    aliases?:        Alias[];
    "begin-area"?:   BeginAreaClass;
    ipis?:           string[];
    isnis?:          string[];
    tags?:           Tag[];
    "end-area"?:     BeginAreaClass;
}

export interface Alias {
    "sort-name":  string;
    name:         string;
    locale:       null | string;
    type:         null | string;
    primary:      boolean | null;
    "begin-date": null;
    "end-date":   null;
    "type-id"?:   string;
}

export interface Area {
    id:          string;
    type:        string;
    "type-id":   string;
    name:        string;
    "sort-name": string;
    "life-span": AreaLifeSpan;
}

export interface AreaLifeSpan {
    ended:  null;
    begin?: Date;
}

export interface BeginAreaClass {
    id:          string;
    type:        string;
    "type-id":   string;
    name:        string;
    "sort-name": string;
    "life-span": BeginAreaLifeSpan;
}

export interface BeginAreaLifeSpan {
    ended: null;
}

export interface ArtistLifeSpan {
    ended:  boolean | null;
    begin?: Date;
    end?:   Date;
}

export interface Tag {
    count: number;
    name:  string;
}

export enum Type {
    Group = "Group",
    Person = "Person",
}

// Converts JSON strings to/from your types
export class Convert {
    public static toPaginatedArtists(json: string): PaginatedArtists {
        return JSON.parse(json);
    }

    public static paginatedArtistsToJson(value: PaginatedArtists): string {
        return JSON.stringify(value);
    }
}
