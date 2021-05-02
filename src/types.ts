export enum ChromeEvents {
    RECEIVE_USER_NAME = 'RECEIVE_USER_NAME',
    ON_POP_UP_STATE_UPDATE = 'ON_POP_UP_STATE_UPDATE'
}

export interface ChromeMessage {
    type: ChromeEvents;
    payload: any
}

export interface BackgroundState {
    userName?: string
}