import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { BodyComponent } from './body/body.component';
import { LSideContentComponent } from './l-side-content/l-side-content.component';
import { RSideContentComponent } from './r-side-content/r-side-content.component';

@NgModule({
  declarations: [
    HomeComponent,
    BodyComponent,
    LSideContentComponent,
    RSideContentComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MatToolbarModule,
    MatCardModule,
    MatDividerModule,
    MatButtonModule,
  ]
})
export class HomeModule { }
