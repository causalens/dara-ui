import { faArrowDownUpAcrossLine } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * ArrowDownUpAcrossLine icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const ArrowDownUpAcrossLine = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faArrowDownUpAcrossLine} {...props} />;
};

export default ArrowDownUpAcrossLine;
