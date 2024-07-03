import { Component } from '@angular/core';
import { BreadcrumbService } from '../breadcrumb.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'breadcrumbs',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './breadcrumb.component.html',
  styleUrl: './breadcrumb.component.scss'
})
export class BreadcrumbComponent {
  breadcrumbs$ = this.breadcrumbService.breadcrumbs$;

  constructor(private breadcrumbService: BreadcrumbService) { }

  ngOnInit(): void { }
}
