import { Component, OnInit } from '@angular/core';

type MenuItem = {
  title: string;
  section: string
}

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  menuItems: MenuItem[] = [
    { title: 'Home', section: 'home-container' },
    { title: 'Projects', section: 'projects-container' },
    { title: 'Services', section: 'services-container' },
    { title: 'About', section: 'about-container' },
    { title: 'Blog', section: '/' },
    { title: 'Contact', section: 'contact-container' },
    ]

  constructor() { }

  ngOnInit(): void {
  }

  scrollToSection(section: string): void {
    console.log( document.getElementsByClassName( section ) )
    document.getElementsByClassName( section )[0].scrollIntoView()
  }

}
