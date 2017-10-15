import ok from './ok';

function notok(cond) {
  console.assert(!cond);
}

export {ok, notok};
