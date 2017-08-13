import {AnimationEntryMetadata, trigger, style, state, transition, animate} from "@angular/core";
export class Util {

  private static fadeAndIn: AnimationEntryMetadata =
    trigger("fadeAndIn", [
      state("inactive", style({
        opacity: 0,
        transform: "translateY(30px)"
      })),
      state("active", style({
        opacity: 1,
        transform: "translateY(0)"
      })),
      transition("inactive => active", animate("300ms 0.3s ease-in")),
      transition("active => inactive", animate("200ms ease-out"))
    ]);

  private static fade: AnimationEntryMetadata =
    trigger("fade", [
        state("inactive", style({
          opacity: 0
        })),
        state("active", style({
          opacity: 1
        })),
        transition("inactive => active", animate("400ms ease-in")),
        transition("active => inactive", animate("300ms ease-out"))
      ]
    );

  public static isMobile() {
    return window.screen.width <= 1000;
  }

  public static scrollTop() {
    window.scrollTo(0, 0);
  }

  public static getFadeAnimation(): AnimationEntryMetadata {
    return Util.fade;
  }

  public static getFadeAndInAnimation(): AnimationEntryMetadata {
    return Util.fadeAndIn;
  }

  public static createScorllimateOptions(percentage: number): any {
    return {
      myScrollimation: {
        currentState: "inactive",
        states: [
          {
            method: "percentElement",
            value: percentage,
            state: "active",
          },
          {
            method: "default",
            state: "inactive"
          }
        ]
      },
    };
  }
}
