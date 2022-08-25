import { Injectable } from '@angular/core';
import { Leader } from '../shared/leader';
import { LEADERS } from '../shared/leaders';

@Injectable({
  providedIn: 'root'
})
export class LeaderService {

  constructor() { }

  getFeaturedLeader():Leader{
    return LEADERS.filter((leader) =>leader.featured)[0];
  }

  getLeader():Leader[]{
    return LEADERS;
  }
}