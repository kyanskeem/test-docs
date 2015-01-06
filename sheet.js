/***
* @apiDefine SheetSummaryObject
* @apiName GetSheet
* @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "id": 123434343,
 *       "name": "Sample Sheet Name",
 *       "accessLevel" : "OWNER"
 *     }
* 
*/

/***
* @api {get} /sheets/:id
* @apiName GetSheet
* @apiGroup Sheet
* 
* @apiParam {Number} id The Sheet Id.
*
* @apiUse SheetSummaryObject
*/
