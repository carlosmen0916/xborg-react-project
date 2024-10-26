import { debounce } from "lodash";
import tailwind from "./tailwind.config";
export class AppViewmodel {
  constructor() {
    this.supportsPassive = false;
    this.wheelOpt = this.supportsPassive ? { passive: false } : false;
    this.wheelEvent =
      "onwheel" in document.createElement("div") ? "wheel" : "mousewheel";
    // Scrolling states
    this.wrapper = null;
    this.scrollingHeight = 0;
    this.allowScrolling = true;
    this.currentSection = 0;
    this.duration = 1.5;
    this.addCustomScrolling = () => {
      if (!this.wrapper) return;
      this.wrapper.addEventListener(
        "DOMMouseScroll",
        this.handleScrolling,
        false
      ); // older FF
      this.wrapper.addEventListener(
        this.wheelEvent,
        this.handleScrolling,
        this.wheelOpt
      ); // modern desktop
      this.wrapper.addEventListener(
        "touchmove",
        this.handleScrolling,
        this.wheelOpt
      ); // mobile
      this.wrapper.addEventListener(
        "keydown",
        this.preventDefaultForScrollKeys,
        false
      );
    };
    this.removeCustomScrolling = () => {
      if (!this.wrapper) return;
      this.wrapper.removeEventListener(
        "DOMMouseScroll",
        this.handleScrolling,
        false
      ); // older FF
      this.wrapper.removeEventListener(this.wheelEvent, this.handleScrolling); // modern desktop
      this.wrapper.removeEventListener("touchmove", this.handleScrolling); // mobile
      this.wrapper.removeEventListener(
        "keydown",
        this.preventDefaultForScrollKeys,
        false
      );
    };
    // this.handleScrolling = (e) => {
    //     e.preventDefault();
    //     if (this.allowScrolling) {
    //         this.allowScrolling = false;
    //         // Scroll up
    //         if (e.wheelDelta >= 0) {
    //             if (this.currentSection !== 0) {
    //                 const nextSection = this.currentSection - 1;
    //                 this.scrollTo(this.currentSection * this.scrollingHeight, nextSection * this.scrollingHeight, 0);
    //                 this.currentSection = nextSection;
    //             }
    //             else {
    //                 this.allowScrolling = true;
    //             }
    //         }
    //         // Scroll down
    //         else {
    //             const nextSection = this.currentSection + 1;
    //             this.scrollTo(this.currentSection * this.scrollingHeight, nextSection * this.scrollingHeight, 0);
    //             this.currentSection = nextSection;
    //         }
    //         // Reset scroll blocking
    //         setTimeout(() => {
    //             this.allowScrolling = true;
    //         }, this.duration * 1000);
    //     }
    // };
    this.scrollTo = (old, des, actual) => {
      if (!this.wrapper) return;
      let delta = des - old;
      actual += this.duration;
      delta *= actual / 100;
      delta += old;
      this.wrapper.scrollTo(0, delta);
      if (actual < 100) {
        window.requestAnimationFrame(() => {
          this.scrollTo(old, des, actual);
        });
      }
    };
    this.scrollToSpecifiedScreen = (index) => {
      this.scrollTo(
        this.currentSection * this.scrollingHeight,
        index * this.scrollingHeight,
        0
      );
      this.currentSection = index;
    };
  }
  rewriteDefaultScrolling(wrapper, parent) {
    var _a, _b;
    // Init vars
    this.wrapper = wrapper;
    this.scrollingHeight = parent.clientHeight;
    const screens =
      (_a = tailwind.theme) === null || _a === void 0 ? void 0 : _a.screens;
    const lgString =
      ((_b = screens.lg) === null || _b === void 0
        ? void 0
        : _b.replace("px", "")) || 0;
    const lg = parseInt(lgString);
    // Set custom scrolling on desktop
    if (window.innerWidth > lg && window.innerHeight > 580) {
      this.addCustomScrolling();
    }
    // Handle scrolling on resize
    window.addEventListener(
      "resize",
      debounce(() => {
        this.scrollingHeight = parent.clientHeight;
        // console.log("WINDOW INNER ", window.innerHeight);
        if (window.innerWidth > lg && window.innerHeight > 580) {
          this.currentSection = Math.round(
            wrapper.scrollTop / this.scrollingHeight
          );
          wrapper.scrollTo(0, this.scrollingHeight * this.currentSection);
          this.addCustomScrolling();
        } else {
          this.removeCustomScrolling();
        }
      }, 300),
      false
    );
  }
  // preventDefaultForScrollKeys(e) {
  //     // @ts-ignore
  //     if (keys[e.keyCode]) {
  //         e.preventDefault();
  //         return false;
  //     }
  // }
}
