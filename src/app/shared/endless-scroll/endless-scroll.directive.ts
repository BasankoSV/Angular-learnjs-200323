import {Directive, HostListener} from '@angular/core';

@Directive({
	selector: '[appEndlessScroll]',
})
export class EndlessScrollDirective {
	@HostListener('mousewheel', ['$event.target'])
	onScroll(target: HTMLElement) {
		console.log('scrollTop: ', target.scrollTop);
		// console.log('clientHeight: ', target.clientHeight)
		// console.log('scrollHeight: ', target.scrollHeight)
		console.log(target.scrollHeight - target.clientHeight);
	}
}
