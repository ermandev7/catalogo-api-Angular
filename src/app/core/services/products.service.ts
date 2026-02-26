import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, startWith } from 'rxjs/operators';
import { Product } from '../../features/products/models/product.model';

export type LoadState<T> =
  | { status: 'loading' }
  | { status: 'success'; data: T }
  | { status: 'error'; message: string };

@Injectable({ providedIn: 'root' })
export class ProductsService {
  private http = inject(HttpClient);
  private apiUrl = 'https://fakestoreapi.com/products';

  getProductsState(): Observable<LoadState<Product[]>> {
    return this.http.get<Product[]>(this.apiUrl).pipe(
      map((data) => ({ status: 'success', data } as const)),
      startWith({ status: 'loading' } as const),
      catchError((err) => {
        const msg =
          err?.status
            ? `Error ${err.status}: ${err.statusText || 'Solicitud fallida'}`
            : 'Error de red o CORS (no se pudo conectar a la API).';
        return of({ status: 'error', message: msg } as const);
      })
    );
  }
  getProductState(id: number): Observable<LoadState<Product>> {
    return this.http.get<Product>(`https://fakestoreapi.com/products/${id}`).pipe(
      map((data) => ({ status: 'success', data } as const)),
      startWith({ status: 'loading' } as const),
      catchError((err) => {
        const msg =
          err?.status
            ? `Error ${err.status}: ${err.statusText || 'Solicitud fallida'}`
            : 'Error de red o CORS (no se pudo conectar a la API).';
        return of({ status: 'error', message: msg } as const);
      })
    );
  }
}