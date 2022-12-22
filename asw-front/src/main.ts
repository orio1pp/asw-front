import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch((err) => console.error(err));

console.log('coca');
localStorage.setItem('username', 'a');
localStorage.setItem(
  'apiKey',
  '$2a$10$P21K/b5DMqSAPDdGyRgsN.r4a1clOIHumD0IUvoiJPHa68C8XV1K2'
);
