
  arr: Array<string> = [];
 
  onCheckboxChange(e) {
    if (e.target.checked) {
      this.arr.push(e.target.value);
      this.dataConfert = this.arr.toString();
      this.add = this.dataConfert.replace(/,/g, '');
      this.sendFeatures.emit(this.add);
    } else {
      let i: number = 0;
      this.arr.forEach((item) => {
        if (item == e.target.value) {
          this.arr.splice(i, 1);
          this.dataConfert = this.arr.toString();
          this.add = this.dataConfert.replace(/,/g, '');

          this.sendFeatures.emit(this.add);
          return;
        }
        i++;
      });
    }
  }