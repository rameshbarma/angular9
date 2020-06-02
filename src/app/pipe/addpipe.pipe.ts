import { Pipe, PipeTransform } from '@angular/core';
/*
 * Raise the value exponentially
 * Takes an exponent argument that defaults to 1.
 * Usage:
 *   value | exponentialStrength:exponent
 * Example:
 *   {{ 2 | exponentialStrength:10 }}
 *   formats to: 1024
*/
@Pipe({name: 'apppipe'})
export class AddPipe implements PipeTransform {
  transform(value):any {
   console.log(value)
   return value + Math.floor((Math.random() * 10) + 1);
  }
}