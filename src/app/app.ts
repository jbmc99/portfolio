import { Component, signal } from '@angular/core';
import { Navbar } from './components/navbar/navbar';
import { Footer } from './components/footer/footer';
import { Home } from './pages/home/home';
import { Projects } from './pages/projects/projects';
import { Contact } from './pages/contact/contact';
import { Tecnologias } from './pages/tecnologias/tecnologias';

@Component({
  selector: 'app-root',
  imports: [Navbar, Footer, Home, Projects, Contact, Tecnologias],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('portfolio-juani');
}
