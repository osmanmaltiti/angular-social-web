import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AlertComponent } from './authentication/alert/alert.component';
import { AuthenticationComponent } from './authentication/authentication.component';
import { LoginComponent } from './authentication/login/login.component';
import { RegisterComponent } from './authentication/register/register.component';
import { AdvancedHighlightDirective } from './directives/advanced-highlight.directive';
import { PopupDirective } from './directives/pop-up.directive';
import { ChatComponent } from './home/chat/chat.component';
import { OnlineComponent } from './home/chat/online/online.component';
import { HomeComponent } from './home/home.component';
import { MiniprofilecardComponent } from './home/miniprofilecard/miniprofilecard.component';
import { PostCardComponent } from './home/post-card/post-card.component';
import { PostboxComponent } from './home/postbox/postbox.component';
import { TrendingCardComponent } from './home/trending/trending-card/trending-card.component';
import { TrendingComponent } from './home/trending/trending.component';
import { NavbarComponent } from './navbar/navbar.component';
import { OtherProfilesComponent } from './profile/other-profiles/other-profiles.component';
import { UserProfileComponent } from './profile/user-profile/user-profile.component';
import { FakeAuth } from './services/fake-auth.service';

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
    PopupDirective,
    LoginComponent,
    AlertComponent,
    UserProfileComponent,
    OtherProfilesComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [FakeAuth],
  bootstrap: [AppComponent],
})
export class AppModule {}
