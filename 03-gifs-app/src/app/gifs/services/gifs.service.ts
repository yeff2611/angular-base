import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Gif, SearchResponse } from '../interfaces/gifs.interfaces';

@Injectable({ providedIn: 'root' })
export class GifService {

  public gifList: Gif[] = [];

  private _tagsHistory: string[] = [];
  private apikey: string = 'OFG2vJ06IALmp2xja2J3nI4ezJMskw1b';
  private serviceUrl: string = 'https://api.giphy.com/v1/gifs';
  constructor(private http: HttpClient) {
    this.loadLocalStorage();

    console.log('Gifs Service Ready!..');

  }

  get tagsHistory() {
    return [...this._tagsHistory];
  }
  private organizeHistory(tag: string) {
    tag = tag.toLowerCase();
    if (this._tagsHistory.includes(tag)) {
      this._tagsHistory = this._tagsHistory.filter((oldTag) => oldTag !== tag)
    }
    this._tagsHistory.unshift(tag);
    // limita la cantidad de datos del array a 10
    this._tagsHistory = this._tagsHistory.splice(0, 10);
    this.saveLocalStorage();
  }

  private saveLocalStorage(): void {
    localStorage.setItem('history', JSON.stringify(this._tagsHistory))
  }

  private loadLocalStorage(): void {
    if (!localStorage.getItem('history')) return;
    this._tagsHistory = JSON.parse(localStorage.getItem('history')!);
    if (this._tagsHistory.length === 0) return;
    this.searchTag(this._tagsHistory[0]);
  }

  // async searchTag(tag: string): Promise<void> {
  searchTag(tag: string): void {
    if (tag.length === 0) return;
    this.organizeHistory(tag)
    const params = new HttpParams()
      .set('api_key', this.apikey)
      .set('limit', '10')
      .set('q', tag)

    this.http.get<SearchResponse>(`${this.serviceUrl}/search`, { params })
      .subscribe(resp => {
        this.gifList = resp.data;
        console.log({ gif: this.gifList });

      })


    // fetch('https://api.giphy.com/v1/gifs/search?api_key=OFG2vJ06IALmp2xja2J3nI4ezJMskw1b&q=valorant&limit=5')
    //   .then(resp => resp.json())
    //   .then(data => console.log(data));

  }
  // searchTag(tag: string): void {
  //   if (tag.length === 0) return;
  //   this.organizeHistory(tag)
  //   // this._tagsHistory.unshift(tag);
  // }

}
