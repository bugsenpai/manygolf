import {
  RoundState,
} from '../universal/constants';

interface Player {
  id: number;
  color: string;
  name: string;
}

interface Level {
  points: Array<Array<number>>;
  hole: Array<number>;
  spawn: Array<number>;
  color: string;
}

interface Position {
  id: number;
  x: number;
  y: number;
}

interface LeaderboardPlayer extends Player {
  strokes: number;
  scoreTime: number;
}

export const TYPE_INITIAL = 'initial';

export interface MessageInitial {
  self: Player;
  players: Array<Player>;
  level: Level;
  expiresIn: number;
  roundState: RoundState;
  isObserver: boolean;
}

export function messageInitial(params: MessageInitial) {
  return {
    type: TYPE_INITIAL,
    data: params,
  };
}


export const TYPE_PLAYER_CONNECTED = 'connected';

export interface MessagePlayerConnected {
  id: number;
  color: string;
  name: string;
}

export function messagePlayerConnected(params: MessagePlayerConnected) {
  return {
    type: TYPE_PLAYER_CONNECTED,
    data: params,
  };
}


export const TYPE_PLAYER_DISCONNECTED = 'disconnected';

export interface MessagePlayerDisconnected {
  id: number;
}

export function messagePlayerDisconnected(params: MessagePlayerDisconnected) {
  return {
    type: TYPE_PLAYER_DISCONNECTED,
    data: params,
  };
}


export const TYPE_DISPLAY_MESSAGE = 'displayMessage';

export interface MessageDisplayMessage {
  messageText: string;
  color?: string;
}

export function messageDisplayMessage(params: MessageDisplayMessage) {
  return {
    type: TYPE_DISPLAY_MESSAGE,
    data: params,
  };
}


export const TYPE_LEVEL_OVER = 'levelOver';

export interface MessageLevelOver {
  roundRankedPlayers: Array<LeaderboardPlayer>;
}

export function messageLevelOver(params: MessageLevelOver) {
  return {
    type: TYPE_LEVEL_OVER,
    data: params,
  };
}


export const TYPE_LEVEL = 'level';

export interface MessageLevel {
  level: Level;
  expiresIn: number;
}

export function messageLevel(params: MessageLevel) {
  return {
    type: TYPE_LEVEL,
    data: params,
  };
}


export const TYPE_POSITION = 'position';

export interface MessagePositions {
  positions: Array<Position>;
}

export function messagePositions(params: MessagePositions) {
  return {
    type: TYPE_POSITION,
    data: params,
  };
}


export const TYPE_SWING = 'swing';

export interface MessageSwing {
  vec: {
    x: number;
    y: number;
  };
}

export function messageSwing(params: MessageSwing) {
  return {
    type: TYPE_SWING,
    data: params,
  };
}


export const TYPE_HURRY_UP = 'hurry-up';

export interface MessageHurryUp {
  expiresIn: number;
}

export function messageHurryUp(params: MessageHurryUp) {
  return {
    type: TYPE_HURRY_UP,
    data: params,
  };
}


export const TYPE_ENTER_GAME = 'enterGame';

export function messageEnterGame() {
  return {
    type: TYPE_ENTER_GAME,
  };
}


export const TYPE_IDLE_KICKED = 'idleKicked';

export function messageIdleKicked() {
  return {
    type: TYPE_IDLE_KICKED,
  };
}