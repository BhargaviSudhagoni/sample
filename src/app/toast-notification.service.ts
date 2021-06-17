import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
@Injectable({
  providedIn: 'root'
})
export class ToastNotificationService {

  constructor(private toastr: ToastrService) { }
  showSuccess(title:any){
    this.toastr.success(title)
}
showError(title:any){
  this.toastr.error(title)
}

showInfo(message: string | undefined, title: string | undefined){
  this.toastr.info(message, title)
}

showWarning(message: string | undefined, title: string | undefined){
  this.toastr.warning(message, title)
}
}
