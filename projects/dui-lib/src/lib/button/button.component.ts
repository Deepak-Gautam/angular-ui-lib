import { Component, Input } from "@angular/core";

export type ButtonType =
  | "default"
  | "primary"
  | "secondary"
  | "outlined"
  | "small";

@Component({
  selector: "ng-dul-button",
  template: `<ng-content></ng-content>`,
  styleUrls: ["./button.component.scss"],
  host: {
    "[class.primary]": "variant === primary",
    "[class.secondary]": "variant === secondary",
    "[class.outlined]": "variant === outlined",
    "[class.small]": "variant === small",
  },
})
export class ButtonComponent {
  @Input("ngDulButton") variant: ButtonType = "default";
}
