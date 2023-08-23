import { Controller, Get, Query, BadRequestException } from '@nestjs/common';
import { DataService } from './data.service';

@Controller('api/data')
export class DataController {
  constructor(private readonly dataService: DataService) {}

  @Get()
  getData(@Query('Name') Name?: string) {
    if (Name) {
      const student = this.dataService.getStudent();
      const filteredStudent = student.filter((student) =>
        student.Name.toLowerCase().includes(Name.toLowerCase()),
      );

      if (filteredStudent.length === 0) {
        throw new BadRequestException(
          `No student found with name containing '${Name}'`,
        );
      }

      return filteredStudent;
    }

    return this.dataService.getStudent();
  }
}
