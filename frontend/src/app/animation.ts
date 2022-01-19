import { animate, animateChild, group, query, style, transition, trigger } from "@angular/animations";

export const slideInAnimation =
  trigger('routeAnimations', [

    transition('HomePage <=> ContentPage', [

      style({ opacity: 0 }),
      animate('.8s', style({ opacity: 1 }))

    ])

  ]);