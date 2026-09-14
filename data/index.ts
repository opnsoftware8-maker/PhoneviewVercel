import { xiaomiphone } from "./Phone/xioami"
import { samsungphone } from "./Phone/samsung"
import { vivophone } from "./Phone/vivo"
import { applephone } from "./Phone/apple"
import { oppophone } from "./Phone/oppo"
import { huaweiphone } from "./Phone/huawei"
import { infinixphone } from "./Phone/infinix"
import { realmephone } from "./Phone/realme"
import { honorphone } from "./Phone/honor"
import { tecnophone } from "./Phone/tecno"

export { xiaomiphone, samsungphone, vivophone, applephone, oppophone, huaweiphone, infinixphone, realmephone, honorphone, tecnophone };

export const Allphone = [
  ...xiaomiphone,
  ...vivophone,
  ...oppophone,
  ...realmephone,
  ...honorphone,
  ...tecnophone,
  ...infinixphone,
  ...samsungphone,
  ...applephone,
  ...huaweiphone,
];
