import {
  trigger,
  transition,
  style,
  query,
  animate,
} from '@angular/animations';

export const fader = trigger('routeAnimations', [
  transition('* <=> *', [
    query(':enter, :leave', [
      style({
        
       // position: 'absolute',
        left: -3.5,
        width: '100%',
        opacity: 0,
        transform: 'scale(0) translateY(0)',
      }),
    ]),
    query(':enter', [
      animate(
        '700ms ease',
        style({ opacity: 1, transform: 'scale(1) translateY(0)' })
      ),
    ]),
  ]),
]);
