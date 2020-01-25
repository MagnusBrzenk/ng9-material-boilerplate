import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

// import { HttpErrorInterceptor } from './interceptors/http-error.interceptor';
import { PipelineInterceptor } from './interceptors/http-pipeline.interceptor';
import { apiDefaultTimeoutMs } from 'src/app/utils/constants';

@NgModule({
  declarations: [],
  imports: [CommonModule, HttpClientModule],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: PipelineInterceptor, multi: true }]
})
export class CoreModule {}
