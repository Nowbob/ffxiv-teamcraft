import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AlarmsState } from './alarms.reducer';

// Lookup the 'Alarms' feature state managed by NgRx
const getAlarmsState = createFeatureSelector<AlarmsState>('alarms');

const getLoaded = createSelector(getAlarmsState, (state: AlarmsState) => state.loaded);

const getAllAlarms = createSelector(getAlarmsState, getLoaded, (state: AlarmsState, isLoaded) => {
  return isLoaded ? state.alarms : [];
});

const getAllGroups = createSelector(getAlarmsState, getLoaded, (state: AlarmsState, isLoaded) => {
  return isLoaded ? state.groups : [];
});


export const alarmsQuery = {
  getLoaded,
  getAllAlarms,
  getAllGroups
};
