import isMobile from './isMobile';
import * as R from 'ramda';
const {not}=R;

const isPc=not(isMobile);

export default isPc;
