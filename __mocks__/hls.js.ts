// Mock for hls.js
const Events = {
  MANIFEST_PARSED: 'hlsManifestParsed',
  ERROR: 'hlsError',
  DESTROYING: 'hlsDestroying',
};

const ErrorTypes = {
  NETWORK_ERROR: 'networkError',
  MEDIA_ERROR: 'mediaError',
};

class Hls {
  private listeners: Map<string, Array<Function>> = new Map();
  public src: string = '';
  public attached: boolean = false;

  constructor(config: any = {}) {
    // Mock constructor
  }

  static isSupported(): boolean {
    return true;
  }

  static Events = Events;
  static ErrorTypes = ErrorTypes;

  loadSource(src: string): void {
    this.src = src;
  }

  attachMedia(video: HTMLVideoElement): void {
    this.attached = true;
    video.src = this.src;
  }

  on(event: string, callback: Function): void {
    if (!this.listeners.has(event)) {
      this.listeners.set(event, []);
    }
    this.listeners.get(event)!.push(callback);
    
    // Auto-trigger MANIFEST_PARSED for testing
    if (event === Events.MANIFEST_PARSED) {
      setTimeout(() => callback(), 0);
    }
  }

  off(event: string, callback: Function): void {
    const callbacks = this.listeners.get(event);
    if (callbacks) {
      const index = callbacks.indexOf(callback);
      if (index > -1) {
        callbacks.splice(index, 1);
      }
    }
  }

  destroy(): void {
    this.listeners.clear();
    this.attached = false;
    this.src = '';
  }
}

export default Hls;
export { Events, ErrorTypes };
