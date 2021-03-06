transform(Restaurants: any[], search: string): any {
    if (!search) return Restaurants;

    return Restaurants.filter(function (x) {
      if (x.Name == undefined) {
        return x.Name.toLowerCase().includes(search.toLowerCase());
      }
      return x.Name.toLowerCase().includes(search.toLowerCase());
    });
  }
https://stackoverflow.com/questions/34164413/how-to-apply-filters-to-ngfor
https://stackoverflow.com/questions/46780843/angular-4-filter-search-custom-pipe
https://stackoverflow.com/questions/50761509/how-to-filter-the-list-using-pipes-in-angular-2
https://stackoverflow.com/questions/40152034/angular-2-typescript-pipes-filter-not-working
https://stackoverflow.com/questions/54128768/angular-6-filter-observable-array-with-pipe
