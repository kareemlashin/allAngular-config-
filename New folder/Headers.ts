getCustomHeaders(): HttpHeaders {
    const headers = new HttpHeaders()
      .set('Content-Type', 'application/json')
      .set('Api-Key', 'xxx');
    const headerDict = {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Access-Control-Allow-Headers': 'Content-Type',
    }
    
    const requestOptions = {                                                                                                                                                                                 
      headers: new Headers(headerDict), 
    };
    return headers; 
  }
   httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    observe: 'response' as 'response'
  };
   headers3 = new HttpHeaders();
  h=  {'headers' : new HttpHeaders ({'Content-Type' : 'application/json'}), 'responseType': 'text', observe:'response'};
