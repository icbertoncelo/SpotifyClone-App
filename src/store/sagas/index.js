import { all, takeLatest } from 'redux-saga/effects';

import { PodcastsTypes } from '../ducks/podcasts';
import { PlayerTypes } from '../ducks/player';

import { load } from './podcasts';
import { init, setPodcast } from './player';

export default function* rootSaga() {
  return yield all([
    init(),
    takeLatest(PodcastsTypes.LOAD_REQUEST, load),
    takeLatest(PlayerTypes.SET_PODCAST_REQUEST, setPodcast),
  ]);
}
