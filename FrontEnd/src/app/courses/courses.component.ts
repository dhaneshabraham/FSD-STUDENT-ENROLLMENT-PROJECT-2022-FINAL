import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  course= [
    {'id':1,'name':'Full Stack Web Development','description':'The MEAN stack is an excellent choice for web developers who wish to develop high-quality web applications using JavaScript. The core technologies define the MEAN stack – MongoDB, Express.js, Angular, and Node.js – all are based on one language, Javascript.','image':'../../assets/img/FSD.jpg'},
    {'id':2,'name':'Artificial Intelligence','description':'Machine Learning (ML) and Artificial Intelligence (AI) are transforming our world, and the adaptation rate of ML/AI technologies is high. The products of the new AI revolution, like self-driven vehicles, robot assistance, and digital disease diagnostics, will affect how we live and function.','image':'../../assets/img/AI.jpg'},
    {'id':3,'name':'Blockchain Technology','description':'The blockchain certification program cover all the technical and functional aspects needed to build any blockchain solution using the best tools and techniques in the industry.This program build smart contracts, bitcoin wallets, create transactions, fabricode etc.','image':'../../assets/img/BC.jpg'},
    {'id':4,'name':'Data Science and Analytics using Python','description':'In the world of unstructured data, Data Analytics has become ever more challenging and interesting. Every statistics of the IT world suggest that Data Science and Analytics are amongst the Top 5 IT Jobs in high demand this year.','image':'../../assets/img/datascience.jpg'},
    
  ]
}
