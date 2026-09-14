export enum TaskStatus {
  Initiated = 'Initiated',
  Completed = 'Completed',
}

export type LegacyTaskStatus = 'Working On';
export type TaskStatusLike = TaskStatus | LegacyTaskStatus | undefined | null;

export function isCompletedTaskStatus(status: TaskStatusLike): boolean {
  return status === TaskStatus.Completed || status === 'Working On';
}

export function normalizeTaskStatus(status: TaskStatusLike): TaskStatus {
  return isCompletedTaskStatus(status) ? TaskStatus.Completed : TaskStatus.Initiated;
}
