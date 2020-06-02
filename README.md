# emptyColumnsCheck() - Creating dynamic tables
## Implementation
### HTML Implementation
Custom class `js-emptyColumnsCheck-table` needs to be added to the wrapping `<table>`element.  
Conditional logic and class needs to be added to each `<td>` element as well.  
#### Example
```
{{#spreadsheet.custom-table}}
<tr>
  <td class="{{^column-1}}empty-col-1{{/column-1}}">{{column-1}}</td>
  <td class="{{^column-2}}empty-col-2{{/column-2}}">{{column-2}}</td>
  <td class="{{^column-3}}empty-col-3{{/column-3}}">{{column-3}}</td>
  <td class="{{^column-4}}empty-col-4{{/column-4}}">{{column-4}}</td>
</tr>
{{/spreadsheet.custom-table}}
```
---
### CSS Implementation

No CSS implementation is needed.

---
### JS Implementation
Function should be initialized on page load and no need to add it to `mutationObserver` or `serInterval` (because template 
will automatically reload when spreadsheet input is updated).
