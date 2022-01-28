import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Container, Main, MoveDirection, OutMode, OutModeDirection } from 'tsparticles';
import { Modes } from 'tsparticles/Options/Classes/Interactivity/Modes/Modes';
import { Bounce } from 'tsparticles/Options/Classes/Particles/Bounce/Bounce';
import { BounceFactor } from 'tsparticles/Options/Classes/Particles/Bounce/BounceFactor';
import { OutModes } from 'tsparticles/Options/Classes/Particles/Move/OutModes';
import { slideInAnimation } from './animation';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    slideInAnimation
  ]
})
export class AppComponent implements OnInit {
  title = 'Hirzel Technology';
  mobile = false;
  outlet: any
  prepareRoute(outlet: RouterOutlet) {
    return outlet?.activatedRouteData?.['animation'];
  }

  ngOnInit() {
    if (window.screen.width < 400) { // 768px portrait
      this.mobile = true;
    };
    console.log(this.mobile)
  }


  id = "tsparticles";

  /* Starting from 1.19.0 you can use a remote url (AJAX request) to a JSON with the configuration */
  // /particlesUrl = "http://foo.bar/particles.json";

  /* or the classic JavaScript object */
  particlesOptions = {
    background: {
      color: {
        value: "#100000000"
      }
    },
    fpsLimit: 60,
    interactivity: {
      events: {
        onClick: {
          enable: false,
          mode: "push"
        },
        onHover: {
          enable: false,
          mode: "repulse"
        },
        resize: true
      },
      modes: {
        bubble: {
          distance: 400,
          duration: 2,
          opacity: 0.8,
          size: 40
        },
        push: {
          quantity: 4
        },
        repulse: {
          distance: 200,
          duration: 10.0
        }
      }
    },
    particles: {
      color: {
        value:  ["#5bc0eb", "#fde74c", "#9bc53d", "#e55934", "#fa7921"]
      },
      links: {
        color: "#5bc0eb",
        distance: 5,
        enable: false,
        opacity: 1.0,
        width: 1
      },
      collisions: {
        enable: true
      },
      move: {
        direction: MoveDirection.bottom,
        enable: true,
        outModes: OutMode.destroy,
        random: true,
        speed: 1.0,
        straight: false
      },
      number: {
        density: {
          enable: false,
          area: 100
        },
        value: 20
      },
      opacity: {
        value: 0.8
      },
      shape: {
        type: "circle"
      },
      size: {
        random: true,
        value: 120
      }
    },
    detectRetina: true,
    style: {
      filter: "blur(70px)"
    },
  };

  particlesLoaded(container: Container): void {
    console.log(container);
  }

  particlesInit(main: Main): void {
    console.log(main);

    // Starting from 1.19.0 you can add custom presets or shape here, using the current tsParticles instance (main)
  }
}
