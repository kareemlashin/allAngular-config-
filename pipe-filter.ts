transform(Restaurants: any[], search: string): any {
    if (!search) return Restaurants;

    return Restaurants.filter(function (x) {
      if (x.Name == undefined) {
        return x.Name.toLowerCase().includes(search.toLowerCase());
      }
      return x.Name.toLowerCase().includes(search.toLowerCase());
    });
  }