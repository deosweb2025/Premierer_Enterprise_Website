// =======================================================================
// PREMIERE ENTERPRISE — Cinematic Hero Ambient Soundscape Engine
// Resilient Auto-Playback & Viewport Sync
// =======================================================================

class CinematicAudioEngine {
  constructor() {
    this.audio = null;
    this.isInHero = true;
    this.targetVolume = 0.35; // Studio ambient volume
    this.isUnlocked = false;
    this.isPlaying = false;
    this.listenersAttached = false;

    if (typeof window !== 'undefined') {
      window.__cinematicAudio = this;

      if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', () => this.init());
      } else {
        this.init();
      }

      this.attachUnlockListeners();
    }
  }

  init() {
    if (typeof document === 'undefined') return;

    if (this.audio && document.body && document.body.contains(this.audio)) {
      return;
    }

    try {
      let el = document.getElementById('premiere-ambient-audio');
      if (!el) {
        el = document.createElement('audio');
        el.id = 'premiere-ambient-audio';
        el.src = '/audio/hero-ambience.mp3';
        el.loop = true;
        el.preload = 'auto';
        el.playsInline = true;
        el.autoplay = true;
        // Keep in DOM without display:none so browser audio thread doesn't throttle it
        el.style.position = 'fixed';
        el.style.bottom = '0';
        el.style.left = '0';
        el.style.width = '1px';
        el.style.height = '1px';
        el.style.opacity = '0.01';
        el.style.pointerEvents = 'none';
        el.style.zIndex = '-9999';

        if (document.body) {
          document.body.appendChild(el);
        }
      }

      this.audio = el;
      this.audio.volume = this.targetVolume;

      // Event listeners for state tracking
      this.audio.onplay = () => {
        this.isPlaying = true;
        if (!this.audio.muted) {
          this.isUnlocked = true;
        }
      };

      this.audio.onpause = () => {
        this.isPlaying = false;
      };

      // Try autoplaying immediately
      this.tryPlay();
    } catch (e) {
      console.warn('Cinematic audio init:', e);
    }
  }

  tryPlay() {
    if (!this.audio || !this.isInHero) return;

    // If already playing unmuted at target volume, do nothing
    if (!this.audio.paused && !this.audio.muted) {
      return;
    }

    this.audio.muted = false;
    this.audio.volume = this.targetVolume;

    const promise = this.audio.play();
    if (promise !== undefined) {
      promise
        .then(() => {
          this.isUnlocked = true;
          this.isPlaying = true;
        })
        .catch(() => {
          // Browser held unmuted playback until user activation.
        });
    }
  }

  play() {
    this.isInHero = true;
    this.tryPlay();
  }

  pause() {
    if (!this.audio) return;
    try {
      this.audio.pause();
      this.isPlaying = false;
    } catch (e) {}
  }

  onEnterHero() {
    this.isInHero = true;
    this.play();
  }

  onLeaveHero() {
    this.isInHero = false;
    this.pause();
  }

  attachUnlockListeners() {
    if (this.listenersAttached || typeof window === 'undefined') return;
    this.listenersAttached = true;

    const handleUnlock = () => {
      if (this.audio) {
        this.audio.muted = false;
        this.audio.volume = this.targetVolume;
        if (this.isInHero && this.audio.paused) {
          this.audio.play().then(() => {
            this.isUnlocked = true;
            this.isPlaying = true;
          }).catch(() => {});
        }
      }
    };

    // Attach to real user activations: click, scroll, touch, key
    const activationEvents = [
      'pointerdown',
      'mousedown',
      'touchstart',
      'click',
      'keydown',
      'scroll'
    ];

    activationEvents.forEach((evt) => {
      window.addEventListener(evt, handleUnlock, { capture: true, passive: true });
    });
  }

  destroy() {
    if (this.audio) {
      try {
        this.audio.pause();
        this.audio.currentTime = 0;
      } catch (e) {}
    }
  }
}

export const cinematicAudio = new CinematicAudioEngine();
