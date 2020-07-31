import { attr } from "@ember-data/model";
import MenuItem from "./menu-item";

export default class MenuItemPackageModel extends MenuItem {
  @attr("string") name;
}
