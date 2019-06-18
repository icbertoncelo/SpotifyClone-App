import { createReducer, createActions } from 'reduxsauce';
import immutable from 'seamless-immutable';

/**
 * Types  & Actions Creators
 */
const { Types, Creators } = createActions({
  setPodcastRequest: ['podcast', 'episodeId'],
  setPodcastSuccess: ['podcast'],
  setCurrent: ['id'],
});

export const PlayerTypes = Types;
export default Creators;

/**
 * Initial State
 */
export const INITIAL_STATE = immutable({
  podcast: null,
  current: null,
});

/**
 * Reducers
 */
export const reducer = createReducer(INITIAL_STATE, {
  [Types.SET_PODCAST_SUCCESS]: (state, { podcast }) => state.merge({ podcast, current: podcast.tracks[0].id }),
  [Types.SET_CURRENT]: (state, { id }) => state.merge({ current: id }),
});
