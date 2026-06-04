import { Component } from '@angular/core';

interface Skill {
  name: string;
  icon?: string;
}

interface SkillGroup {
  category: string;
  skills: Skill[];
}

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent {

  skillGroups: SkillGroup[] = [
    {
      category: 'Backend',
      skills: [
        { name: 'Java 8-21', icon: 'assets/java.svg' },
        { name: 'Spring Boot', icon: 'assets/spring.svg' },
        { name: 'Spring Framework', icon: 'assets/spring.svg' },
        { name: 'JPA / Hibernate', icon: 'assets/hibernate.svg' },
        { name: 'REST APIs', icon: 'assets/rest-api.svg' },
        { name: 'Microservices', icon: 'assets/microservices.svg' },
        { name: 'Arquitectura Hexagonal', icon: 'assets/hexagonal.svg' },
        { name: 'JUnit / Mockito', icon: 'assets/testing.svg' }
      ]
    },
    {
      category: 'Frontend',
      skills: [
        { name: 'Angular', icon: 'assets/angular.svg' },
        { name: 'AngularJS', icon: 'assets/angular.svg' },
        { name: 'TypeScript', icon: 'assets/typescript.svg' },
        { name: 'Angular Material', icon: 'assets/angular.svg' },
        { name: 'JavaScript', icon: 'assets/javascript.svg' },
        { name: 'HTML / CSS', icon: 'assets/html-css.svg' }
      ]
    },
    {
      category: 'Bases de datos',
      skills: [
        { name: 'PostgreSQL', icon: 'assets/postgresql.svg' },
        { name: 'Oracle', icon: 'assets/oracle.svg' },
        { name: 'SQL Server', icon: 'assets/sqlserver.svg' },
        { name: 'MongoDB', icon: 'assets/mongodb.svg' },
        { name: 'MySQL', icon: 'assets/mysql.svg' },
        { name: 'Redis', icon: 'assets/redis.svg' }
      ]
    },
    {
      category: 'DevOps y herramientas',
      skills: [
        { name: 'Docker', icon: 'assets/docker.svg' },
        { name: 'Git', icon: 'assets/git.svg' },
        { name: 'GitLab', icon: 'assets/gitlab.svg' },
        { name: 'Azure DevOps', icon: 'assets/azure-devops.svg' },
        { name: 'Jenkins', icon: 'assets/jenkins.svg' },
        { name: 'OpenShift', icon: 'assets/openshift.svg' },
        { name: 'Maven', icon: 'assets/maven.svg' },
        { name: 'Jira', icon: 'assets/jira.svg' },
        { name: 'SonarQube', icon: 'assets/sonarqube.svg' },
        { name: 'Confluence', icon: 'assets/confluence.svg' }
      ]
    }
  ];
}
