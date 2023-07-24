import { faArrowsSplitUpAndLeft } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * ArrowsSplitUpAndLeft icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const ArrowsSplitUpAndLeft = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faArrowsSplitUpAndLeft} {...props} />;
};

export default ArrowsSplitUpAndLeft;
