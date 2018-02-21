import { Injectable } from '@angular/core';
import { fakeData } from '../data/mock-data';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { Observable } from 'rxjs/Observable';
import {Proof} from '../shared';

@Injectable()
export default class ProofService {
  constructor(private http: Http) {

  }

  getData(): Promise<Object> {
    // this.messageService.add('ProofService: fetched data');
    return Promise.resolve(fakeData);
  }

  getFakeDataApi() {
    // this.messageService.add('ProofService: fetched data');
    return this.http.get('https://jsonplaceholder.typicode.com/posts/')
      .toPromise()
      .then(res => res.json())
      .catch(error => Promise.reject(error.message));
  }

  checkHash(hash: string) {
    // call getProofDetails to get response 
    return true;
  }

  getProofDetails(hash: string): Promise<Object> {
    // return hash, array of party names, array of signed hashes, date and time Proof was posted
    return Promise.resolve(fakeData);
  }

  matchingInput(inputJson: JSON) {
    //uses node-crypt to create a hash of input JSON
    //return success if created and supplied hashes match
    return true;
  }
}

/*
@Injectable()
export default class ProofService {
  taskStore: Proof[] = [];
  taskFeed: Observable<Proof>;
  private taskObserver: any;
  private dataUrl = '/app/shared/data/mock-data.json';

  constructor(private http: Http) {
    this.taskFeed = new Observable(observer => {
      this.taskObserver = observer;
    });
    this.fetchTasks();
  }

  private fetchTasks(): void {
    this.http.get(this.dataUrl)
      .map(response => response.json())
      .map(stream => stream.map(res => {
        return {
          hash: res.hash,
          date: res.date,
          time: res.time,
          party: res.proof
        }
      }))
      .subscribe(
        tasks => {
          this.taskStore = tasks;
          tasks.forEach(task => this.taskObserver.next(task))
        },
        error => console.log(error)
      );
  }

  addTask(proof: Proof): void {
    this.taskObserver.next(proof);
  }
}
*/
