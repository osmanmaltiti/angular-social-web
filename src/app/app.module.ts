import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthenticationComponent } from './authentication/authentication.component';
import { RegisterComponent } from './authentication/register/register.component';
import { AdvancedHighlightDirective } from './directives/advanced-highlight.directive';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PostCardComponent } from './home/post-card/post-card.component';
import { MiniprofilecardComponent } from './home/miniprofilecard/miniprofilecard.component';
import { TrendingComponent } from './home/trending/trending.component';
import { ChatComponent } from './home/chat/chat.component';
import { PostboxComponent } from './home/postbox/postbox.component';
import { TrendingCardComponent } from './home/trending/trending-card/trending-card.component';
import { OnlineComponent } from './home/chat/online/online.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthenticationComponent,
    RegisterComponent,
    HomeComponent,
    AdvancedHighlightDirective,
    NavbarComponent,
    PostCardComponent,
    MiniprofilecardComponent,
    TrendingComponent,
    ChatComponent,
    PostboxComponent,
    TrendingCardComponent,
    OnlineComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
