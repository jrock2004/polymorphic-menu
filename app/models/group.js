import Model, { attr, hasMany } from "@ember-data/model";

export default class GroupModel extends Model {
  @attr("string") name;
  @attr("number") position;

  @hasMany("menu-item", { polymorphic: true }) menuItems;
}
