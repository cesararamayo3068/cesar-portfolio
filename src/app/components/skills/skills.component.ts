import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent {

  skills = [
    { name: 'Java', icon: 'assets/java.svg' },
    { name: 'Spring Boot', icon: 'assets/spring.svg' },
    { name: 'Angular', icon: 'assets/angular.svg' },
    { name: 'PostgreSQL', icon: 'assets/postgresql.svg' },
    { name: 'Oracle', icon: 'assets/oracle.svg' },
    { name: 'Redis', icon: 'assets/redis.svg' },
    { name: 'Docker', icon: 'assets/docker.svg' },
    { name: 'Git', icon: 'assets/git.svg' },
    { name: 'Hibernate', icon: 'assets/hibernate.svg' }
  ];
}