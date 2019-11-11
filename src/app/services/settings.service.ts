import { Injectable, Renderer2, RendererFactory2 } from '@angular/core';
import { Settings, AppTheme } from '../models/settings';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {
  renderer: Renderer2;
  config: Partial<Settings> = {};
  constructor(rendererFactory: RendererFactory2) {
    this.renderer = rendererFactory.createRenderer(null, null);
    this.config = this.readConfig();
    this.setTheme(this.config.theme)
  }

  initalizeSettings() {
    if (this.config.theme) {
      this.setTheme(this.config.theme);
    }
  }

  saveConfig() {
    localStorage.setItem('settings', JSON.stringify(this.config));
  }

  readConfig() {
    const config = window.localStorage.getItem('settings');
    if (config !== null) {
      try {
        return JSON.parse(config);
      } catch {
        console.error('Could not parse config');
        this.clearConfig();
      }
    }
    return {};
  }

  changeTheme(theme: AppTheme) {
    this.setTheme(theme);
    this.config.theme = theme;
    this.saveConfig();
  }

  setTheme(theme: AppTheme="blue") {
    this.renderer.removeClass(window.document.body, this.config.theme);
    this.config.theme = theme;
    this.renderer.addClass(window.document.body, theme);
    const manifestEl = window.document.querySelector('link[rel=manifest]');
    this.renderer.setAttribute(manifestEl, 'href', `manifest-${theme}.webmanifest`);
  }

  clearConfig() {
    window.localStorage.removeItem('settings');
  }
}
