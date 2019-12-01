import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ApiService } from './services/api.service';
import { TodoService } from './services/todo.service';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { TodoItemComponent } from './components/todo-item/todo-item.component';
import { ApplicationInsightsModule, AppInsightsService } from '@markpieszak/ng-application-insights';
import { environment } from '../environments/environment';
import { MonitoringErrorHandler } from './error.handler';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    TodoListComponent,
    TodoItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ApplicationInsightsModule.forRoot({
      instrumentationKey: environment.appInsightsConfig.instrumentationKey
    })
  ],
  providers: [
    TodoService,
    ApiService,
    AppInsightsService,
    {
      provide: ErrorHandler,
      useClass: MonitoringErrorHandler
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
