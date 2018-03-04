import { LocalStorageService } from './local-storage.service';
import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { AppSettingsAPI } from './app-settings.config';

const defaultSettingsConst: Object = {
    "name": "Angular Test Application (dafault settings)"
};

@Injectable()
export class AppSettingsService {

    constructor(private localStorageService: LocalStorageService, private http: HttpClient, 
        @Inject(AppSettingsAPI) private settingsUrl: string) {
        this.loadSettings();
    }

    settings: Object;

    loadSettings() {
        this.settings = this.localStorageService.getItem('settings');
        if (!this.settings) {
            this.http.get(this.settingsUrl)
                .subscribe(data => {
                    this.localStorageService.setItem('settings', data);
                },
                    error => {
                        console.log(error)
                        this.loadDefaultSettings();
                    });
        }
    }

    private loadDefaultSettings() {
        this.localStorageService.setItem('settings', defaultSettingsConst);
    }
}
