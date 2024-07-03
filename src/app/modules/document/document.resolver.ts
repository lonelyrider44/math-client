import { inject } from '@angular/core';
import { Observable } from 'rxjs';
import { ResolveFn } from '@angular/router';
import { Document } from './document';
import { DocumentService } from './document.service';

export const documentResolver: ResolveFn<Observable<Document>> = (route, state) => {
  const documentService = inject(DocumentService);
  // return documentService.find(route.)
  return documentService.find(route.paramMap.get('id'));
  // return true;
};
