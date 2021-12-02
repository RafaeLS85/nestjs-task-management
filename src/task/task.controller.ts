import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { Task, TaskStatus } from './task.model';
import { TaskService } from './task.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { GetTaskFilterDto } from './dto/get-task-filter.dto';

@Controller('tasks')
export class TaskController {
  constructor(private service: TaskService) {}

  @Get()
  getTasks(@Query() filterDto: GetTaskFilterDto): Task[] {
    //if we have any filter defined, call tasksService.getTaskWithFilter
    // otherwise call tasksService.getAllTasks

    if (Object.keys(filterDto).length) {
      return this.service.getTasksWithFilter(filterDto);
    } else {
      return this.service.getAllTasks();
    }
  }

  @Get('/:id')
  getTaskById(@Param('id') id: string): Task {
    return this.service.getTaskById(id);
  }

  @Post()
  createTask(@Body() createTaskDto: CreateTaskDto): Task {
    return this.service.createTask(createTaskDto);
  }

  @Patch('/:id/status')
  updateTaskStatus(
    @Param('id') id: string,
    @Body('status') status: TaskStatus,
  ): Task {
    return this.service.updateTaskStatus(id, status);
  }

  @Delete('/:id')
  deleteTask(@Param('id') id: string): void {
    this.service.deleteTask(id);
  }
}
