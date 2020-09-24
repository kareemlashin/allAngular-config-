[style.background-image]="'url(' + image + ')'"


<div class="profile-image" [ngStyle]="{'background-image': 'url(' + image + ')'}"></div>

<div class="profile-image"
     [ngStyle]="{ 'background-image': 'url(' + image + ')'}">