import { xiaomiphone } from "./Phone/xioami"
import { samsungphone } from "./Phone/samsung"
import { vivophone } from "./Phone/vivo"
import { applephone } from "./Phone/apple"
import { oppophone } from "./Phone/oppo"

export const Allphone = [
  ...xiaomiphone,
  ...vivophone,
  ...oppophone,
  ...samsungphone,
  ...applephone,

];
