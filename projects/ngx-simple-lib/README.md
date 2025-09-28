# NgxSimpleLib

Collection of usefule pipes, directives and simple components. This library will be useful in many projects.
And there is no dependency for this library.

## Install

Using npm, install the package
```
npm install --save ngx-simple-lib
```

Import the library
```
import { AgoTimePipe, FilterByPipe, SafePipe, StorageUnitsPipe } from 'ngx-simple-lib';
```

Add the needed Pipe, Directive in the import command
```
@Component({
  imports: [StorageUnitsPipe, AgoTimePipe, MicroTimeDisplayPipe, SafePipe, FilterByPipe],
  ...
)}
```

## Usage

### StorageUnitsPipe
StorageUnitsPipe
convert bytes value automatically into corresponding bucket of b, kb, mb, gb, tb, pb, eb, zb, yb
eg: value | storageUnits
this will convert the bytes data into the closest bucket of storage units.

```
  storage = {
    valGB: 2613487599,
    valMB: 159645696,
    valKB: 10542
  }
```

Template example
```
    <p>{{ storage.valGB | storageUnits}}</p>
    <p>{{ storage.valMB | storageUnits}}</p>
    <p>{{ storage.valKB | storageUnits}}</p>
```

### AgoTimePipe
convert time in seconds into [some time] ago text
eg: like 5 years ago, 3 months ago, 10 days ago
```
{{ timevalue | agoTime }}
```

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 20.3.0.

