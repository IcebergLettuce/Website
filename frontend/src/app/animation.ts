import { animate, animateChild, group, query, style, transition, trigger } from "@angular/animations";

export const slideInAnimation =
  trigger('routeAnimations', [

    // transition('HomePage <=> ContentPage', [
    //  // style({ position: 'relative' }),
    //   query(':enter', [
    //     style({ opacity: '-100%' })
    //   ]),
    //   query(':leave', animateChild()),
      
    //   group([
    //     query(':leave', [
    //       animate('500ms ease-out', style({ opacity: 1 }))
    //     ]),
    //     query(':enter', [
    //       animate('500ms ease-out', style({ opacity: 0 }))
    //     ])
    //   ]),
    //   query(':enter', animateChild()),
    // ]),
    transition('HomePage <=> ContentPage', [

      // css styles at start of transition
      style({ opacity: 0 }),

      // animation and styles at end of transition
      animate('.8s', style({ opacity: 1 }))

    ])

    // transition('HomePage => ContentPage', [
    //   style({ position: 'relative' }),
    //   query(':enter, :leave', [
    //     style({
    //       position: 'absolute',
    //       top: 0,
    //       left: 0,
    //       width: '100%'
    //     })
    //   ]),
    //   query(':enter', [
    //     style({ left: '-100%' })
    //   ]),
    //   query(':leave', animateChild()),
    //   group([
    //     query(':leave', [
    //       animate('500ms ease-out', style({ left: '100%' }))
    //     ]),
    //     query(':enter', [
    //       animate('500ms ease-out', style({ left: '0%' }))
    //     ])
    //   ]),
    //   query(':enter', animateChild()),
    // ]),
    // // transition('* <=> *', [
    //   style({ position: 'relative' }),
    //   query(':enter, :leave', [
    //     style({
    //       position: 'absolute',
    //       top: 0,
    //       left: 0,
    //       width: '100%'
    //     })
    //   ]),
    //   query(':enter', [
    //     style({ left: '-100%' })
    //   ]),
    //   query(':leave', animateChild()),
    //   group([
    //     query(':leave', [
    //       animate('500ms ease-out', style({ left: '100%' }))
    //     ]),
    //     query(':enter', [
    //       animate('5000ms ease-out', style({ left: '0%' }))
    //     ])
    //   ]),
    //   query(':enter', animateChild()),
    // ])
  ]);