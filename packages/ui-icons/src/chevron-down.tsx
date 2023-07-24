import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * ChevronDown icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const ChevronDown = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faChevronDown} {...props} />;
};

export default ChevronDown;
