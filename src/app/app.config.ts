import { AuthModule } from '@auth0/auth0-angular';
import { ApplicationConfig, importProvidersFrom } from '@angular/core'
import { provideRouter } from '@angular/router'

import { routes } from './app.routes'
import { provideClientHydration } from '@angular/platform-browser'
import {
  FacebookLoginProvider,
  GoogleLoginProvider,
  SocialAuthServiceConfig,
} from '@abacritt/angularx-social-login'
import { provideHttpClient } from '@angular/common/http'

export const appConfig: ApplicationConfig = {
  providers: [
    importProvidersFrom(AuthModule.forRoot({
      domain: 'dev-gdap35jfe1hyva4q.us.auth0.com',
      clientId: '8Zy7XnLKct1mIGzKFzqKWDeimQXvNyev',
      authorizationParams: {
        redirect_uri: `https://social-login-ashen.vercel.app`,
      },
    })),
    provideRouter(routes),
    provideClientHydration(),
    provideHttpClient(),
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: false,
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider(
              '745628972767-3mlbmn5lcps4d1joe97ftckonu6gtio8.apps.googleusercontent.com',
            ),
          },
          {
            id: FacebookLoginProvider.PROVIDER_ID,
            provider: new FacebookLoginProvider('1084092632785028'),
          },
          
        ],
        onError: (err) => {
          console.error(err)
        },
      } as SocialAuthServiceConfig,
    },
  ],
}
