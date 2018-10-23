import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';
import FormControl from '@material-ui/core/FormControl';
import SearchIcon from '@material-ui/icons/Search';
import styles from './styles';
import Actions from './counter.actions';
import { Selectors, store } from './index';

type State = {
step: number,
  number: number,
}
type Props = {
  history: Array<any>,
  classes: any,
  stepChanged: Function,
  dec: Function,
  inc: Function,
  incAsync: Function,
  counter: State
}

function Counter({
  classes, counter, stepChanged, dec, inc, incAsync, history,
}: Props) {
  return (
    <div className={classes.counter}>
      <h1>{counter.number}</h1>
      <FormControl>
        <Input type="number" onChange={stepChanged} value={counter.step} />
      </FormControl>
      <Button variant="contained" color="primary" onClick={dec}>Dec</Button>
      <Button variant="outlined" color="primary" onClick={inc}>Inc</Button>
      <Button variant="outlined" color="primary" onClick={incAsync}>Inc Async</Button>
      <div>
        <Button onClick={() => history.push('/modulo1/form')} variant="outlined" color="secondary">
          Form
        </Button>
        <Button size="small">
          <SearchIcon />
        </Button>
      </div>
    </div>
  );
}

export default [Counter]
  .map(comp => withStyles(styles)(comp))
  .map(styledComp => withRouter(styledComp))
  .map(routerComp => connect(
    state => ({ [store]: Selectors(state) }),
    { ...Actions },
  )(routerComp))
  .shift();
