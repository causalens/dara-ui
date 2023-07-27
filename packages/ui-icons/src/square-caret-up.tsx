/**
* Copyright (c) 2023 by Impulse Innovations Ltd. Part of the causaLens product.
*
* Use of this software is governed by the Business Source License 1.1 included in the file LICENSES/BSL.txt.
*
* As of the Change Date specified in that file, in accordance with the Business Source License 1.1,
* use of this software will be governed by the Apache License, Version 2.0, included in the file LICENSES/APL.txt.
*/
import { faSquareCaretUp } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * SquareCaretUp icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const SquareCaretUp = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faSquareCaretUp} {...props} />;
};

export default SquareCaretUp;
