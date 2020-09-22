@HostListener('document:keyup', ['$event'])
KeyUpEvent(event: KeyboardEvent) {
  if (event.keyCode == KeyCodes.LEFT)
    this.minus();
  if (event.keyCode == KeyCodes.RIGHT)
    this.add();
    if (event.keyCode == KeyCodes.close)
    this.close();
}
      this.imagePopup=this.image[this.currentImage].ImgURl;
