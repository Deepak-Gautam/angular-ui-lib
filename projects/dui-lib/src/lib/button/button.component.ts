import { CommonModule } from "@angular/common";
import { Component, Input } from "@angular/core";

export type ButtonType = "primary" | "secondary" | "outlined" | "basic";

@Component({
  standalone: true,
  imports: [CommonModule],
  selector: "lib-button",
  templateUrl: "./button.component.html",
  styleUrls: ["./button.component.scss"],
})
export class ButtonComponent {
  @Input() variant: ButtonType = "basic";
}
