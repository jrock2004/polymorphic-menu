import { attr } from "@ember-data/model";
import MenuItem from "./menu-item";

export default class MenuItemServiceModel extends MenuItem {
  @attr("string") name;
  @attr("string") duration;
  @attr("string") price;
}
