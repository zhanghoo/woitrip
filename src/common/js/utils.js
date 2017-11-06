/**
* 将小于10数左侧补0, 主要用于日期的格式
*/
export function compLeftZero(num) {
	return num > 10 ? num : ( '0' + num );
}