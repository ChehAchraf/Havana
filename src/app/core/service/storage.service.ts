import { Injectable } from '@angular/core';
import { DBSchema, IDBPDatabase, openDB } from 'idb';
import { Track } from '../models/track.model';

interface MusicDB extends DBSchema {
  tracks: {
    key: number,
    value: Track,
    indexes: { 'by-title': string }
  }
}

@Injectable({
  providedIn: 'root',
})
export class StorageService {

  private dbPromise: Promise<IDBPDatabase<MusicDB>>;

  constructor() {
    this.dbPromise = openDB<MusicDB>('music-stream-db', 1, {
      upgrade(db) {
        if (!db.objectStoreNames.contains('tracks')) {
          const store = db.createObjectStore('tracks', {
            keyPath: 'id',
            autoIncrement: true
          });
          store.createIndex('by-title', 'title');
        }
      }
    })
  }

  async getAllTracks():Promise<Track[]>{
    return (await this.dbPromise).getAll('tracks');
  }

  async addTrack(track : Track) : Promise<number>{
    return (await this.dbPromise).add('tracks',track);
  }

  async deleteTrack (id : number) : Promise<void>{
    return (await this.dbPromise).delete('tracks',id);
  }


}
