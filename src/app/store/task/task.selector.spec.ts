import { TaskStatus } from 'src/app/enums/task-status.enum';
import { IdeaTask } from 'src/app/interfaces/idea-task.interface';
import { selectTaskStatusCounts } from './task.selector';

describe('selectTaskStatusCounts', () => {
  it('counts legacy "Working On" status as completed', () => {
    const tasks: IdeaTask[] = [
      { status: 'Working On' },
      { status: TaskStatus.Completed },
      { status: TaskStatus.Initiated },
    ];

    const counts = selectTaskStatusCounts.projector(tasks);

    expect(counts[TaskStatus.Completed]).toBe(2);
    expect(counts[TaskStatus.Initiated]).toBe(1);
    expect(counts.total).toBe(3);
  });
});
