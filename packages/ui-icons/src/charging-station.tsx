/**
* Copyright (c) 2023 by Impulse Innovations Ltd. Part of the causaLens product.
*
* Use of this software is governed by the Business Source License 1.1 included in the file LICENSES/BSL.txt.
*
* As of the Change Date specified in that file, in accordance with the Business Source License 1.1,
* use of this software will be governed by the Apache License, Version 2.0, included in the file LICENSES/APL.txt.
*/
import { faChargingStation } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * ChargingStation icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const ChargingStation = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faChargingStation} {...props} />;
};

export default ChargingStation;
