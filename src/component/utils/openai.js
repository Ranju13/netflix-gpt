import OpenAI from 'openai';
import { OPENAI_KEY } from './constants';

const openi = new OpenAI({
  apiKey: OPENAI_KEY,
  dangerouslyAllowBrowser: true
});

export default openi;