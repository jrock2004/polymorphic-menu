import Model, { belongsTo } from "@ember-data/model";

export default class MenuItemModel extends Model {
  @belongsTo("group", { inverse: "menuItems" }) group;
}
