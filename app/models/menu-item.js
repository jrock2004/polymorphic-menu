import Model, { attr, belongsTo } from "@ember-data/model";

export default class MenuItemModel extends Model {
  @attr("string") duration;
  @attr("string") price;

  @belongsTo("group", { inverse: "menuItems" }) group;
}
