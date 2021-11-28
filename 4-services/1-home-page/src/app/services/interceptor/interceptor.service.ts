import { Injectable } from '@angular/core';
import { HttpInterceptor } from '@angular/common/http';

export interface IRes<T> {
	data: T;
	error?: string;
}

@Injectable()
export class InterceptorService implements HttpInterceptor {}
