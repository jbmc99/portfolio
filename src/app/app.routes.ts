import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Projects } from './pages/projects/projects';
import { Contact } from './pages/contact/contact';
import { Tecnologias } from './pages/tecnologias/tecnologias';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'proyectos', component: Projects },
  { path: 'contacto', component: Contact },
  { path: 'tecnologias', component: Tecnologias },
];
