import { Injectable } from '@angular/core';

export interface IRes<T> {
  data: T;
  error?: string;
}

@Injectable()
export class InterceptorService {}
