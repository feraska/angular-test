node.js must be installed before
vs code extension angular:
Angular Snippets:
Angular Language Service:

npm i -g @angular/cli // must be installed
ng new projectname // create project angular
cd projectname //to pass in project folder
ng serve // run angular project /*shortcut/*ng s
ng generate component component-name // create component /*shortcut*/ng g c component-name
ng generate service service-name// share data /*shortcut*/ng g s service-name

import { provideHttpClient } from '@angular/common/http';//must be included in app.config.ts
//must be included in providers
export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes), provideClientHydration(withEventReplay()),provideHttpClient()]
};
//in api.service
private apiUrl = 'https://jsonplaceholder.typicode.com/posts'; 
  constructor(private http:HttpClient) {
    
   }
    // GET Request
  getPosts(apiUrl:string): Observable<Info[]> {
    return this.http.get<Info[]>(apiUrl);
  }
//in posts page
posts: Info[] = []
  ngOnInit(): void {
      this.api.getPosts("https://jsonplaceholder.typicode.com/posts").subscribe((data)=>{
        this.posts = data
      })
  }
  constructor(private api:ApiService){

  }

service used to interact with data(share data)  or http request
service is a typescript class in angular the injectable decorator tells angular that we can use class
in the dependency injection system, meaninig that other parts of the application can request
an instance of this service
the providein property of the injectable decorator metadata tells angular where in the application
this service can be injected
now,root means that it can be used throughout the application

ng generate interface name // create interface
ng generate guard auth // authentication
//authentication
import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
//auth.guard.ts
export const authGuard: CanActivateFn = (route, state) => {

  const login = false
  if(login) {
    const router = inject(Router)
    router.navigate(["/"])
    return false
  }
  return true
  
};

 { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
app.route.ts //routes pages
private router: Router, // routing
    private activatedRoute: ActivatedRoute, //active route activatedRoute.params.id /
import { Router } from '@angular/router';

constructor(private router: Router) {}

navigateWithQueryParams() {
  this.router.navigate(['/your-route'], { 
    queryParams: { key1: 'value1', key2: 'value2' } 
  });
}
<nav>
  <a routerLink="/product/101" [queryParams]="{ ref: 'homepage' }">Product 101</a>
</nav>

import { ActivatedRoute } from '@angular/router';

constructor(private route: ActivatedRoute) {}

ngOnInit() {
  this.route.queryParams.subscribe(params => {
    console.log(params['key1']); // Access value of 'key1'
    console.log(params['key2']); // Access value of 'key2'
  });
}
this.route.params
this.router.navigate(['/user', 123], {
  queryParams: { sort: 'asc', page: 2 },
}); // '/user/123?sort=asc&page=2'
//in child component pass a props
 @Input() data!: string ;
// in child component html
<p>{{data}}</p>
//parent component 
<app-about [data]="'sanad'"></app-about>


import { CommonModule } from '@angular/common'; // must be imported in typescript file to use ngFor,ngIf

<p *ngIf="data==='sanad'; else soso">sas</p>
    <ng-template #soso>
        <p #soso>feras</p>
    </ng-template>
<li *ngFor="let l of list">{{ l }}</li>

Angular Lifecycle Hooks
Angular's lifecycle hooks achieve similar functionality. Here's how:

ngOnInit: Runs once after the component is initialized, similar to useEffect with an empty dependency array ([]).
ngOnChanges: Runs when an input property changes, similar to useEffect with dependencies.
ngOnDestroy: Runs during cleanup, similar to the cleanup function in useEffect.

export class MyComponent implements OnInit {
  message: string = '';
//init component
  ngOnInit() {
    console.log('Component initialized');
    this.message = 'Hello, Angular!';
  }
//count change in component
export class MyComponent implements OnChanges {
  @Input() count!: number;

  ngOnChanges(changes: SimpleChanges) {
    if (changes['count']) {
      console.log('Count changed:', changes['count'].currentValue);
    }
  }

export class MyComponent implements OnInit, OnDestroy {
  intervalId!: number;

  ngOnInit() {
    this.intervalId = window.setInterval(() => {
      console.log('Interval running');
    }, 1000);
  }
//component is destroy(not in dom exit)
  ngOnDestroy() {
    clearInterval(this.intervalId);
    console.log('Component destroyed, cleanup done');
  }
}