
 handleError(error) {

    let errorMessage = '';
  
    if (error.error instanceof ErrorEvent) {
  
  
      errorMessage = `Error: ${error.error.message}`;
  
    } else {
  
  
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
  
    }
  
  
    return throwError(errorMessage);
  
  }
  handleError2(error: HttpErrorResponse) {
    let msg = '';
    if (error.error instanceof ErrorEvent) {
      // client-side error
      msg = error.error.message;
    } else {
      // server-side error
      msg = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(msg);
  }
  