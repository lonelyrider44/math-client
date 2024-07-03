import { Injectable } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BreadcrumbService {
  private breadcrumbSubject = new BehaviorSubject<Array<{label: string, url: string}>>([]);
  breadcrumbs$ = this.breadcrumbSubject.asObservable();

  constructor(private router: Router) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        const root = this.router.routerState.snapshot.root;
        const breadcrumbs = this.createBreadcrumbs(root);
        this.breadcrumbSubject.next(breadcrumbs);
      }
    });
  }

  private createBreadcrumbs(route: any, url: string = '', breadcrumbs: Array<any> = []): Array<any> {
    const children: any[] = route.children;

    if (children.length === 0) {
      return breadcrumbs;
    }

    for (const child of children) {
      const routeURL: string = child.url.map((segment: any) => segment.path).join('/');
      if (routeURL !== '') {
        url += `/${routeURL}`;
      }

      // const label = child.data.breadcrumb;
      const label = typeof child.data.breadcrumb === 'function' ? child.data.breadcrumb(child.data) : child.data.breadcrumb;
      if (label) {
        if(breadcrumbs.filter(b => b.url==url).length ==0){
          breadcrumbs.push({ label, url });
        }
      }

      return this.createBreadcrumbs(child, url, breadcrumbs);
    }
    return breadcrumbs;
  }
}
