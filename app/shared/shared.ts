import Queueable from './interfaces/queueable';
import Task from './interfaces/task';
import Proof from './interfaces/proof';

import FormattedTimePipe from './pipes/formatted-time.pipe';
import QueuedOnlyPipe from './pipes/queued-only.pipe';

import SettingsService from './services/settings.service';
import TaskService from './services/task.service';
import ProofService from './services/proof.service';
import MessageService from './services/message.service';


const SHARED_PIPES: any[] = [
  FormattedTimePipe,
  QueuedOnlyPipe
];

const SHARED_PROVIDERS: any[] = [
  SettingsService,
  TaskService,
  ProofService,
  MessageService
];

export {
  Queueable,
  Task,
  Proof,

  FormattedTimePipe,
  QueuedOnlyPipe,
  SHARED_PIPES,

  SettingsService,
  TaskService,
  ProofService,
  MessageService,
  SHARED_PROVIDERS
};
