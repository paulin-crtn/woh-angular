import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http'; 

import { MatTabsModule } from '@angular/material/tabs';
import { MatProgressBarModule } from '@angular/material/progress-bar'; 
import { MatDialogModule } from '@angular/material/dialog'; 
import { MatDatepickerModule } from '@angular/material/datepicker'; 

import { SatDatepickerModule, SatNativeDateModule } from 'saturn-datepicker';

import { ClickOutsideDirective } from './directives/click-outside.directive';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { ExperiencesComponent } from './components/experiences/experiences.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { HowItWorksComponent } from './components/how-it-works/how-it-works.component';
import { BecomeHostComponent } from './components/become-host/become-host.component';
import { BecomeHelperComponent } from './components/become-helper/become-helper.component';
import { SitemapComponent } from './components/sitemap/sitemap.component';
import { LegalNoticeComponent } from './components/legal/legal-notice/legal-notice.component';
import { PrivacyPolicyComponent } from './components/legal/privacy-policy/privacy-policy.component';
import { ConditionsOfSaleComponent } from './components/legal/conditions-of-sale/conditions-of-sale.component';
import { ConditionsOfUseComponent } from './components/legal/conditions-of-use/conditions-of-use.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { ExperienceCardComponent } from './shared/experience-card/experience-card.component';
import { CallToActionCardComponent } from './shared/call-to-action-card/call-to-action-card.component';
import { LoginDialogComponent } from './shared/dialogs/login-dialog/login-dialog.component';
import { ExperienceReportDialogComponent } from './shared/dialogs/experience-report-dialog/experience-report-dialog.component';
import { PasswordForgotDialogComponent } from './shared/dialogs/password-forgot-dialog/password-forgot-dialog.component';
import { SignupHelperDialogComponent } from './shared/dialogs/signup-helper-dialog/signup-helper-dialog.component';
import { RegisterFormComponent } from './shared/register-form/register-form.component';
import { SearchBarComponent } from './shared/search-bar/search-bar.component';
import { LanguageDialogComponent } from './shared/dialogs/language-dialog/language-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    ClickOutsideDirective,
    HeaderComponent,
    FooterComponent,
    HomepageComponent,
    ExperiencesComponent,
    ExperienceComponent,
    HowItWorksComponent,
    BecomeHostComponent,
    BecomeHelperComponent,
    SitemapComponent,
    LegalNoticeComponent,
    PrivacyPolicyComponent,
    ConditionsOfSaleComponent,
    ConditionsOfUseComponent,
    PageNotFoundComponent,
    ExperienceCardComponent,
    CallToActionCardComponent,
    LoginDialogComponent,
    ExperienceReportDialogComponent,
    PasswordForgotDialogComponent,
    SignupHelperDialogComponent,
    RegisterFormComponent,
    SearchBarComponent,
    LanguageDialogComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatTabsModule,
    MatProgressBarModule,
    MatDialogModule,
    MatDatepickerModule,
    SatDatepickerModule,
    SatNativeDateModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
