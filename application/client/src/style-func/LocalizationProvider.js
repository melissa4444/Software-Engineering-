import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { DatePicker } from '@progress/kendo-react-dateinputs';
import { DropDownList } from '@progress/kendo-react-dropdowns';
import { IntlProvider, load, loadMessages, LocalizationProvider } from '@progress/kendo-react-intl';

import likelySubtags from 'cldr-core/supplemental/likelySubtags.json';
import currencyData from 'cldr-core/supplemental/currencyData.json';
import weekData from 'cldr-core/supplemental/weekData.json';

import numbers from 'cldr-numbers-full/main/es/numbers.json';
import caGregorian from 'cldr-dates-full/main/es/ca-gregorian.json';
import dateFields from 'cldr-dates-full/main/es/dateFields.json';
import timeZoneNames from 'cldr-dates-full/main/es/timeZoneNames.json';

load(
    likelySubtags,
    currencyData,
    weekData, numbers,
    caGregorian,
    dateFields,
    timeZoneNames
);

import esMessages from './es.json';
loadMessages(esMessages, 'es-ES');
class LocalizationProvider extends React.Component {
    locales = [
        {
            language: 'en-US',
            locale: 'en'
        },
        {
            language: 'es-ES',
            locale: 'es'
        }
    ]
    state = { selectedLocale: this.locales[0], value: new Date() };