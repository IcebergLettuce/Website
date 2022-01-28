import { Component, OnInit, SystemJsNgModuleLoader } from '@angular/core';
import { Router } from '@angular/router';
import { Container, Main, MoveDirection, OutMode } from 'tsparticles';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  constructor(private router:Router){}

  goToLink(){
    console.log('shit')
    window.open('/assets/cv.pdf', '_blank', 'location=yes,height=570,width=520,scrollbars=yes,status=yes');

  }

  ngOnInit(): void {

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
  }

  particlesInit(main: Main): void {
    // Starting from 1.19.0 you can add custom presets or shape here, using the current tsParticles instance (main)
  }

}
