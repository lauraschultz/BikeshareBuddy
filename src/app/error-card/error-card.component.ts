import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-error-card',
  templateUrl: './error-card.component.html',
  styleUrls: ['./error-card.component.css']
})
export class ErrorCardComponent implements OnInit, OnDestroy {
  numSeconds = 10;
  s = 's';
  runCountdown;

  constructor(private route: ActivatedRoute,
    private router: Router) { }

  ngOnDestroy(): void {
    clearInterval(this.runCountdown);
  }

    updateSeconds(): void {
      if(this.numSeconds==0){
        clearInterval(this.runCountdown);
        this.router.navigate(['search']);
      } else {
        this.numSeconds--;
        this.s = (this.numSeconds === 1 ? '' : 's');
      }
    }

  ngOnInit(): void {
    const _this = this;
    this.runCountdown = setInterval(function(){_this.updateSeconds()}, 1000);
  }

}
