import { faArrowsUpToLine } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * ArrowsUpToLine icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const ArrowsUpToLine = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faArrowsUpToLine} {...props} />;
};

export default ArrowsUpToLine;
