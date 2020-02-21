import { DoctorController } from "./controller/DoctorController";

export const Routes = [
  {
    method: "get",
    route: "/doctors",
    controller: DoctorController,
    action: "all"
  },
  {
    method: "get",
    route: "/doctors/:id",
    controller: DoctorController,
    action: "one"
  },
  {
    method: "post",
    route: "/doctors",
    controller: DoctorController,
    action: "save"
  },
  {
    method: "delete",
    route: "/doctors/:id",
    controller: DoctorController,
    action: "remove"
  }
];
