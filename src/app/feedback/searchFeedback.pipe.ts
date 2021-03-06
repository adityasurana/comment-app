import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'searchFeedback' })
export class SearchFeedbackPipe implements PipeTransform {
	/**
	 * Transform
	 *
	 * @param {any[]} list
	 * @param {string} searchText
	 * @returns {any[]}
	 */
	transform(list: any[], searchText: string): any {
		if (!list) {
		return [];
		}
		if (!searchText) {
			return list;
		}
		searchText = searchText.toLowerCase();
		var ans = list.filter(it => {
		return it.email.toLowerCase().includes(searchText);
		});
		if(ans.length===0){
			return [{email : "Match Not Found"}] ;
		}
		else{
			return ans;
		}
	}
}
