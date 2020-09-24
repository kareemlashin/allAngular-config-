{{ dateVal | date:"MM/dd/yy":'+2':'ar-EG' }}<br> {{ dateVal | date:'fullDate':'+2':'ar-EG' }}<br> {{ dateVal | date:"long":'+2':'ar-EG' }}<br> {{ dateVal | date:'full':'+2':'ar-EG' }}

import  localeAr  from "@angular/common/locales/ar-EG";

import { registerLocaleData } from '@angular/common';
registerLocaleData(localeAr);
