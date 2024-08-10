export class HtmlEventManager {
  private static _instance: HtmlEventManager;
  private attachedEvents: Map<HTMLElement, Map<keyof HTMLElementEventMap, EventListener>> = new Map();
  private constructor() { }

  public static get instance(): HtmlEventManager {
    if (!HtmlEventManager._instance) {
      HtmlEventManager._instance = new HtmlEventManager();
    }
    return HtmlEventManager._instance;
  }

  attachEvent(element: HTMLElement, event: keyof HTMLElementEventMap, callback: EventListener) {
    element.addEventListener(event, callback);

    if (!this.attachedEvents.has(element)) {
      this.attachedEvents.set(element, new Map());
    } else {
      this.attachedEvents.get(element)?.set(event, callback);
    }

    console.log(this.attachedEvents);
  }

  detachEvent(element: HTMLElement, event: keyof HTMLElementEventMap) {
    if (this.attachedEvents.has(element)) {
      const callback = this.attachedEvents.get(element)?.get(event);
      if (callback) {
        element.removeEventListener(event, callback);
        this.attachedEvents.get(element)?.delete(event);
      }
    }

    console.log(this.attachedEvents);
  }

  getAttachedEvents(element: HTMLElement): Map<keyof HTMLElementEventMap, EventListener> | undefined {
    return this.attachedEvents.get(element);
  }
}
