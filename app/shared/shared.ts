import Proof from './interfaces/proof';

import ProofService from './services/proof.service';
import MessageService from './services/message.service';




const SHARED_PROVIDERS: any[] = [
  ProofService,
  MessageService
];

export {
  Proof,

  ProofService,
  MessageService,
  SHARED_PROVIDERS
};
