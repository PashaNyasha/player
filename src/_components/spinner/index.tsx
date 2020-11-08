import React, {memo} from "react";
import classnames from "classnames/bind";
import styles from "./index.module.scss";

const CLASS_NAME = "Spinner";
const cn = classnames.bind(styles);

export const Spinner = memo(() => (
  <div className={cn(CLASS_NAME)}>
    <div className={cn(`${CLASS_NAME}__wrapper`)}>
      <div className={cn(`${CLASS_NAME}__items`)}>
        <div className={cn(`${CLASS_NAME}__beans`)}>
          <div
            className={cn(
              `${CLASS_NAME}__beans-bean`,
              `${CLASS_NAME}__beans-bean--fisrt`
            )}
          ></div>
          <div
            className={cn(
              `${CLASS_NAME}__beans-bean`,
              `${CLASS_NAME}__beans-bean--second`
            )}
          ></div>
          <div
            className={cn(
              `${CLASS_NAME}__beans-bean`,
              `${CLASS_NAME}__beans-bean--third`
            )}
          ></div>
        </div>

        <div className={cn(`${CLASS_NAME}__packman`)}>
          <div
            className={cn(
              `${CLASS_NAME}__packman-item`,
              `${CLASS_NAME}__packman-item--first`
            )}
          ></div>
          <div
            className={cn(
              `${CLASS_NAME}__packman-item`,
              `${CLASS_NAME}__packman-item--second`
            )}
          ></div>
          <div
            className={cn(
              `${CLASS_NAME}__packman-item`,
              `${CLASS_NAME}__packman-item--third`
            )}
          ></div>
        </div>
      </div>
    </div>
  </div>
));
