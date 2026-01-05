export interface Track {
    id? : number , 
    title : string,
    signer : string,
    description? : string,
    song_duration : number,
    music_category : string
    created_at : Date,
    file : Blob,
    cover? : string |Blob,
}
