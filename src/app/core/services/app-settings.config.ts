import { InjectionToken } from '@angular/core';

const appSettingsBaseUrl = 'http://localhost:4200/assets/app-settings.json';
export const AppSettingsAPI = new InjectionToken<string>('AppSettingsAPI');

export const AppSettingsAPIProvider = {
    provide: AppSettingsAPI,
    useValue: appSettingsBaseUrl
};