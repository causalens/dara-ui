import { faArrowsLeftRightToLine } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * ArrowsLeftRightToLine icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const ArrowsLeftRightToLine = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faArrowsLeftRightToLine} {...props} />;
};

export default ArrowsLeftRightToLine;
