'use strict';

type IEventListener = (event, ...args: any[]) => void;
type BoolOrErr = boolean | Error;

export interface INgEventEmitterService {
	On(eventName: string, fn: IEventListener, isOnetime?: boolean): Function;
	Off(eventName: string, fn: IEventListener, isOnetime?: boolean): BoolOrErr;
	Once(eventName: string, fn: IEventListener): void;
	Emit(eventName: string, data: any | any[]): void;
}

interface IOnetimeEvent {
	eventName: string;
	deregFn: Function;
}

interface IEvent extends IOnetimeEvent {
	fn: IEventListener;
}

class NgEventEmitterService implements INgEventEmitterService {

	constructor(private $rootScope) {}

	private onetimeEvents: IOnetimeEvent[] = [];
	private events: IEvent[] = [];
	
	public On(eventName: string, fn: IEventListener, isOnetime?: boolean): Function {
		let deregFn = this.$rootScope.$on(eventName, fn);

		if (isOnetime) {
			this.onetimeEvents.push({ eventName, deregFn });
			console.info(`Subscribed once on event "${eventName}"`);
		} else {
			this.events.push({ eventName, fn, deregFn });
			console.info(`Subscribed on event "${eventName}"`);
		}

		return deregFn;
	}

	public Off(eventName: string, fn: IEventListener, isOnetime?: boolean): BoolOrErr {
		let event = this.events.filter(e => e.eventName === eventName && e.fn === fn);

		return event.length ? this.off(event[0], isOnetime ? this.onetimeEvents : this.events) : false;
	}

	private off(event: IEvent | IOnetimeEvent, store: IEvent[] | IOnetimeEvent[]): BoolOrErr {
		try {
			event.deregFn();
			store.splice(store.indexOf(<any>event), 1);

			console.info(`Unsubscribed on event "${event.eventName}"`);
			return true;
		} catch (err) {
			throw new Error(`Unsubscribe on event "${event.eventName}" is failed`);
		}
	}

	public Once(eventName: string, fn: IEventListener) {
		this.On(eventName, fn, true);
	}

	public Emit(eventName: string, data: any | any[]) {
		this.$rootScope.$emit(eventName, data);

		let onetimeEvent = this.onetimeEvents.filter(e => e.eventName === eventName);
		onetimeEvent.length && this.off(onetimeEvent[0], this.onetimeEvents);
	}
}
