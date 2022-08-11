export interface Board {
  id?: string;
  title?: string;
  priority?: number | string;
  tasks?: Task[];
}

export interface Task {
  description?: string;
  label?: 'purple' | 'blue' | 'green' | 'yellow' | 'red' | 'gray';
}
