import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class BreakpointObserverService {
  destroyed = new Subject<void>();
  currentScreenSize: BehaviorSubject<number> = new BehaviorSubject<number>(0);

  // Create a map to display breakpoint names for demonstration purposes.
  displayNameMap = new Map<string, number>([
    [Breakpoints.XSmall, 1],
    [Breakpoints.Small, 2],
    [Breakpoints.Medium, 3],
    [Breakpoints.Large, 4],
    [Breakpoints.XLarge, 5],
  ]);

  constructor(breakpointObserver: BreakpointObserver) {
    breakpointObserver
      .observe([
        Breakpoints.XSmall,
        Breakpoints.Small,
        Breakpoints.Medium,
        Breakpoints.Large,
        Breakpoints.XLarge,
      ])
      .pipe(takeUntil(this.destroyed))
      .subscribe((result) => {
        for (const query of Object.keys(result.breakpoints)) {
          if (result.breakpoints[query]) {
            this.currentScreenSize.next(this.displayNameMap.get(query) ?? 0);
          }
        }
      });
  }

  ngOnDestroy() {
    this.destroyed.next();
    this.destroyed.complete();
  }
}
