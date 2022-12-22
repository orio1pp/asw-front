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
localStorage.setItem('username', 'oriol');
localStorage.setItem(
  'apiKey',
  '$2a$10$i2iYomR/DDqAO8lfxkDVZOvsi3pSVNX/NsGuqHQbJ46ZlHchQPBxi'
);
