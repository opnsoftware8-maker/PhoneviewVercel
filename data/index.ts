import { xiaomiphone } from "./Phone/xioami"
import { samsungphone } from "./Phone/samsung"
import { vivophone } from "./Phone/vivo"
import { applephone } from "./Phone/apple"
import { oppophone } from "./Phone/oppo"
import { huaweiphone } from "./Phone/huawei"
import { infinixphone } from "./Phone/infinix"
import { realmephone } from "./Phone/realme"

export { xiaomiphone, samsungphone, vivophone, applephone, oppophone, huaweiphone, infinixphone, realmephone };

export const Allphone = [
  ...xiaomiphone,
  ...vivophone,
  ...oppophone,
  ...realmephone,
  ...infinixphone,
  ...samsungphone,
  ...applephone,
  ...huaweiphone,
];
