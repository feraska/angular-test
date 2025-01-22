import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';

export const authGuard: CanActivateFn = (route, state) => {

  const login = false
  if(login) {
    const router = inject(Router)
    router.navigate(["/"])
    return false
  }
  return true
  
};
