// Empty placeholder to reserve reducer namespace.
// Otherwise redux may complain when we asyncrhonously
// inject reducers.
import global from './globalReducer'

export default {
  global: global
};
