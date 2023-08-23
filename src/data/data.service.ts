import { Injectable } from '@nestjs/common';

@Injectable()
export class DataService {
  private readonly student = [
    { ID: 1, Name: 'Student 1' },
    { ID: 2, Name: 'Student 2' },
    { ID: 3, Name: 'Student 3' },
  ];

  getStudent() {
    return this.student;
  }
}
