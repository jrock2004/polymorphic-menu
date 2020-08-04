import Model, { attr, belongsTo } from "@ember-data/model";

export default class MenuItemModel extends Model {
  @attr("string") duration;
  @attr("number") itemId;
  @attr("string") name;
  @attr("string") price;

  @belongsTo("group", { inverse: "menuItems" }) group;
}
