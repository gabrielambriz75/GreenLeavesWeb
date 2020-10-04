import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { share } from 'rxjs/operators';

import { environment } from '../../../environments/environment';
// import { LoaderService } from '../components/loader';
import { HttpRequestMethod } from './request-methods';
import { RequestOptions } from './request-options';
// import { LoadingService } from '../services/loading.service';

@Injectable()
export class HttpApiService {
  private loaderCount = 0;
  private hasLoader = new BehaviorSubject<boolean>(false);

  constructor(private http: HttpClient) {
    // this.hasLoader.subscribe((isActive: boolean) => {
    // if (!isActive) {
    // this.loaderService.hide();
    // loadingService.loadingSource.next(false);
    // }
    // });
  }

  apiGreenLeaves<T>(
    method: HttpRequestMethod,
    endPoint: string,
    params: object = {},
    options: RequestOptions = {}
  ): Observable<T> {
    const url = `${environment.urlApiGreenLeaves}${endPoint}`;

    return this.send(method, url, params, options);
  }

  private send<T>(
    method: HttpRequestMethod,
    endPoint: string,
    params: object = {},
    options: RequestOptions = {}
  ): Observable<T> {
    // this.loaderService.show();
    // this.loadingService.loadingSource.next(true);

    const res = this.http
      .request<T>(
        method,
        endPoint,
        this.requestOptions(method, params, options)
      )
      .pipe(share());

    this.loaderCount++;
    res.subscribe(
      () => {
        this.loaderCount--;
        this.hasLoader.next(this.loaderCount !== 0);
      },
      () => {
        this.loaderCount--;
        this.hasLoader.next(this.loaderCount !== 0);
      }
    );

    return res;
  }

  private requestOptions(
    method: HttpRequestMethod,
    params: any,
    options: RequestOptions
  ): RequestOptions {
    if (method === HttpRequestMethod.POST || method === HttpRequestMethod.PUT) {
      options.body = params;
    } else {
      options.params = params;
    }

    return options;
  }
}
