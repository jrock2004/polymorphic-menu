import { attr } from "@ember-data/model";
import MenuItem from "./menu-item";

export default class MenuItemServiceModel extends MenuItem {
  @attr("number") serviceId;

  get itemType() {
    return "service";
  }
}
