import { DashHeader } from "./Header";
import { NavUtilities } from "../shared/NavUtilities";
import { FeatureCarousels } from "./CarouselBrd";
import {Footer} from '../footer/index'
export function TTDash() {
  return (
    <div>
      <DashHeader />
      <FeatureCarousels />
      <NavUtilities />
      <Footer/>
    </div>
  );
}
