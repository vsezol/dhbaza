import { config, library } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";

import { faChevronDown, faChevronRight, faChevronUp } from "@fortawesome/free-solid-svg-icons";

config.autoAddCss = false;
library.add(faChevronDown, faChevronRight);
